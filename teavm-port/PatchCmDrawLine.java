import org.objectweb.asm.*;
import java.nio.file.*;

/**
 * cm.e/d/a(String) skip drawing when a_f3_I != -1 (alpha-tint mode).
 * Bitmap font glyphs use cm.e as 1px dots and were being skipped after tinted blits.
 * Force the tint check to always take the draw path.
 */
public class PatchCmDrawLine {
  public static void main(String[] args) throws Exception {
    Path path = Paths.get(args[0]);
    ClassReader cr = new ClassReader(Files.readAllBytes(path));
    ClassWriter cw = new ClassWriter(0);
    cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
      @Override
      public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
        boolean target = ("e".equals(name) && "(IIII)V".equals(desc))
            || ("d".equals(name) && "(IIII)V".equals(desc))
            || ("a".equals(name) && "(Ljava/lang/String;III)V".equals(desc));
        if (!target) return mv;
        return new MethodVisitor(Opcodes.ASM9, mv) {
          boolean dropNextGetTint;

          @Override
          public void visitVarInsn(int opcode, int var) {
            // Pattern: aload_0; getfield a_f3_I
            if (opcode == Opcodes.ALOAD && var == 0) {
              dropNextGetTint = true;
              // defer; may be the tint check
              super.visitVarInsn(opcode, var);
              return;
            }
            dropNextGetTint = false;
            super.visitVarInsn(opcode, var);
          }

          @Override
          public void visitFieldInsn(int opcode, String owner, String name, String descriptor) {
            if (dropNextGetTint && opcode == Opcodes.GETFIELD && "cm".equals(owner) && "a_f3_I".equals(name)) {
              dropNextGetTint = false;
              // replace aload_0; getfield with iconst_m1 (aload_0 already emitted — pop it)
              visitInsn(Opcodes.POP);
              visitInsn(Opcodes.ICONST_M1);
              return;
            }
            dropNextGetTint = false;
            super.visitFieldInsn(opcode, owner, name, descriptor);
          }

          @Override
          public void visitInsn(int opcode) {
            dropNextGetTint = false;
            super.visitInsn(opcode);
          }

          @Override
          public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
            dropNextGetTint = false;
            super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
          }
        };
      }
    }, 0);
    Files.write(path, cw.toByteArray());
    System.out.println("Patched cm text primitives to ignore tint gate");
  }
}
