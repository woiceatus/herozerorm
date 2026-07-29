import org.objectweb.asm.*;
import java.nio.file.*;

/** Force cm offscreen buffer to 240x320 (avoid 0-size canvas). */
public class PatchCm {
  public static void main(String[] args) throws Exception {
    Path path = Paths.get(args[0]);
    ClassReader cr = new ClassReader(Files.readAllBytes(path));
    ClassWriter cw = new ClassWriter(ClassWriter.COMPUTE_MAXS);
    cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
      @Override public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
        if (!"<clinit>".equals(name)) return mv;
        return new MethodVisitor(Opcodes.ASM9, mv) {
          @Override public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
            // Image.createImage(II) - before this call, stack has width,height from canvas getters
            if ("javax/microedition/lcdui/Image".equals(owner) && "createImage".equals(name) && "(II)Ljavax/microedition/lcdui/Image;".equals(descriptor)) {
              // pop canvas-derived w/h, push 240,320
              visitInsn(Opcodes.POP2);
              visitIntInsn(Opcodes.SIPUSH, 240);
              visitIntInsn(Opcodes.SIPUSH, 320);
            }
            super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
          }
        };
      }
    }, 0);
    Files.write(path, cw.toByteArray());
    System.out.println("Patched cm buffer size");
  }
}
