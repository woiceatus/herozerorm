import org.objectweb.asm.*;
import java.nio.file.*;

/**
 * After alpha-tinted image blits (cm.b sets a_f3_I), reset a_f3_I to -1 so
 * subsequent drawLine/drawString/fillRect calls are not skipped.
 */
public class PatchCmAlphaReset {
  public static void main(String[] args) throws Exception {
    Path path = Paths.get(args[0]);
    ClassReader cr = new ClassReader(Files.readAllBytes(path));
    ClassWriter cw = new ClassWriter(cr, 0);
    cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
      @Override
      public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
        // Image blit with optional alpha tint
        if ("a".equals(name) && "(Lcg;III)V".equals(desc)) {
          return new MethodVisitor(Opcodes.ASM9, mv) {
            @Override
            public void visitInsn(int opcode) {
              if (opcode == Opcodes.RETURN) {
                visitVarInsn(Opcodes.ALOAD, 0);
                visitInsn(Opcodes.ICONST_M1);
                visitFieldInsn(Opcodes.PUTFIELD, "cm", "a_f3_I", "I");
              }
              super.visitInsn(opcode);
            }
          };
        }
        // fillRect / tinted fill
        if ("a".equals(name) && "(IIII)V".equals(desc)) {
          return new MethodVisitor(Opcodes.ASM9, mv) {
            @Override
            public void visitInsn(int opcode) {
              if (opcode == Opcodes.RETURN) {
                visitVarInsn(Opcodes.ALOAD, 0);
                visitInsn(Opcodes.ICONST_M1);
                visitFieldInsn(Opcodes.PUTFIELD, "cm", "a_f3_I", "I");
              }
              super.visitInsn(opcode);
            }
          };
        }
        return mv;
      }
    }, 0);
    Files.write(path, cw.toByteArray());
    System.out.println("Patched cm alpha reset after blit/fill");
  }
}
