
import org.objectweb.asm.*;
import java.nio.file.*;

public class PatchBv {
  public static void main(String[] args) throws Exception {
    Path path = Paths.get(args[0]);
    ClassReader cr = new ClassReader(Files.readAllBytes(path));
    ClassWriter cw = new ClassWriter(cr, 0);
    cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
      @Override public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
        if ("a".equals(name) && "(B)V".equals(desc)) {
          return new MethodVisitor(Opcodes.ASM9, mv) {
            @Override public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
              if ("bootstrap/WebScheduler".equals(owner) && "startOnce".equals(name)) {
                visitMethodInsn(Opcodes.INVOKEVIRTUAL, "bv", "run", "()V", false);
                return;
              }
              super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
            }
          };
        }
        return mv;
      }
    }, 0);
    Files.write(path, cw.toByteArray());
    System.out.println("bv.a(B) now calls run() directly");
  }
}
