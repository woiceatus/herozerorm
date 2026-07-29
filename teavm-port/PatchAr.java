import org.objectweb.asm.*;
import java.nio.file.*;

/** Replace ar.run() with no-op so Object.wait cannot freeze the browser. */
public class PatchAr {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get(args[0]);
        ClassReader cr = new ClassReader(Files.readAllBytes(path));
        ClassWriter cw = new ClassWriter(cr, 0);
        cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
            @Override
            public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
                if ("run".equals(name) && "()V".equals(desc)) {
                    MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
                    mv.visitCode();
                    mv.visitInsn(Opcodes.RETURN);
                    mv.visitMaxs(0, 1);
                    mv.visitEnd();
                    return null;
                }
                return super.visitMethod(access, name, desc, signature, exceptions);
            }
        }, 0);
        Files.write(path, cw.toByteArray());
        System.out.println("Patched ar.run -> no-op");
    }
}
