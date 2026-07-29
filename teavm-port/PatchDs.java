import org.objectweb.asm.*;
import java.nio.file.*;

/** Ensure ds.a (gate flag) is true so Canvas paint isn't stuck; break SMS wait loops. */
public class PatchDs {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get(args[0]);
        ClassReader cr = new ClassReader(Files.readAllBytes(path));
        ClassWriter cw = new ClassWriter(cr, 0);
        cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
            @Override
            public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
                MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
                if ("<clinit>".equals(name)) {
                    return new MethodVisitor(Opcodes.ASM9, mv) {
                        @Override
                        public void visitInsn(int opcode) {
                            if (opcode == Opcodes.RETURN) {
                                visitInsn(Opcodes.ICONST_1);
                                visitFieldInsn(Opcodes.PUTSTATIC, "ds", "a_f7_Z", "Z");
                            }
                            super.visitInsn(opcode);
                        }
                    };
                }
                return new MethodVisitor(Opcodes.ASM9, mv) {
                    @Override
                    public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
                        if ("java/lang/Thread".equals(owner) && "sleep".equals(name)) {
                            visitInsn(Opcodes.POP2);
                            // Break waiters that loop on ds.a
                            visitInsn(Opcodes.ICONST_1);
                            visitFieldInsn(Opcodes.PUTSTATIC, "ds", "a_f7_Z", "Z");
                            return;
                        }
                        if ("java/lang/Thread".equals(owner) && "yield".equals(name)) {
                            return;
                        }
                        super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
                    }
                };
            }
        }, 0);
        Files.write(path, cw.toByteArray());
        System.out.println("Patched ds gate flag");
    }
}
