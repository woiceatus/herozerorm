import org.objectweb.asm.*;
import java.nio.file.*;
import java.util.stream.Stream;

public class PatchSleep {
  public static void main(String[] args) throws Exception {
    Path root = Paths.get(args[0]);
    int[] n = {0};
    try (Stream<Path> w = Files.walk(root)) {
      w.filter(p -> p.toString().endsWith(".class")).forEach(p -> {
        try {
          byte[] data = Files.readAllBytes(p);
          ClassReader cr = new ClassReader(data);
          ClassWriter cw = new ClassWriter(cr, 0);
          boolean[] ch = {false};
          cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
            @Override public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
              MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
              return new MethodVisitor(Opcodes.ASM9, mv) {
                @Override public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
                  if ("java/lang/Thread".equals(owner) && "sleep".equals(name)) {
                    visitInsn(Opcodes.POP2); ch[0]=true; return;
                  }
                  if ("java/lang/Thread".equals(owner) && "yield".equals(name)) {
                    ch[0]=true; return;
                  }
                  // Also replace Thread.start with immediate run for Runnable? too dangerous
                  super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
                }
              };
            }
          }, 0);
          if (ch[0]) { Files.write(p, cw.toByteArray()); n[0]++; }
        } catch (Exception e) { throw new RuntimeException(p.toString(), e); }
      });
    }
    System.out.println("sleep-nop classes: " + n[0]);
  }
}
