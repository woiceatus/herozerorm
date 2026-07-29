import org.objectweb.asm.*;
import java.nio.file.*;
import java.util.stream.Stream;

/**
 * Replace new Thread(runnable).start() with bootstrap.WebScheduler.startOnce(runnable)
 * so CLDC-style worker threads don't block the browser.
 */
public class PatchThreads {
  public static void main(String[] args) throws Exception {
    Path root = Paths.get(args[0]);
    int[] n = {0};
    try (Stream<Path> w = Files.walk(root)) {
      w.filter(p -> p.toString().endsWith(".class")).forEach(p -> {
        try {
          if (patch(p)) n[0]++;
        } catch (Exception e) {
          throw new RuntimeException(String.valueOf(p), e);
        }
      });
    }
    System.out.println("thread-start patched classes: " + n[0]);
  }

  static boolean patch(Path path) throws Exception {
    // Don't double-patch rpg/c — already uses startLoop
    if (path.toString().replace('\\','/').endsWith("/rpg/c.class")) return false;
    byte[] data = Files.readAllBytes(path);
    ClassReader cr = new ClassReader(data);
    ClassWriter cw = new ClassWriter(cr, 0);
    boolean[] changed = {false};
    cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
      @Override
      public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
        return new MethodVisitor(Opcodes.ASM9, mv) {
          boolean skipDup, waitingInit, waitingStart;
          @Override public void visitTypeInsn(int opcode, String type) {
            if (opcode == Opcodes.NEW && "java/lang/Thread".equals(type)) {
              skipDup = true; waitingInit = true; return;
            }
            super.visitTypeInsn(opcode, type);
          }
          @Override public void visitInsn(int opcode) {
            if (skipDup && opcode == Opcodes.DUP) { skipDup = false; return; }
            super.visitInsn(opcode);
          }
          @Override public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
            if (waitingInit && "java/lang/Thread".equals(owner) && "<init>".equals(name) && "(Ljava/lang/Runnable;)V".equals(descriptor)) {
              waitingInit = false; waitingStart = true; return;
            }
            if (waitingStart && "java/lang/Thread".equals(owner) && "start".equals(name)) {
              waitingStart = false;
              changed[0] = true;
              super.visitMethodInsn(Opcodes.INVOKESTATIC, "bootstrap/WebScheduler", "startOnce",
                  "(Ljava/lang/Runnable;)V", false);
              return;
            }
            // also catch bare Thread.start on existing Thread objects — leave alone
            if ("java/lang/Thread".equals(owner) && "sleep".equals(name)) {
              visitInsn(Opcodes.POP2); changed[0]=true; return;
            }
            if ("java/lang/Thread".equals(owner) && "yield".equals(name)) { changed[0]=true; return; }
            super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
          }
        };
      }
    }, 0);
    if (changed[0]) Files.write(path, cw.toByteArray());
    return changed[0];
  }
}
