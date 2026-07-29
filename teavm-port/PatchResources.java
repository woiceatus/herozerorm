import org.objectweb.asm.*;

import java.nio.file.*;
import java.util.stream.Stream;

/**
 * Rewrite Class.getResourceAsStream(String) calls to bootstrap.Resources.open(String)
 * so the game can load original JAR assets over HTTP from /res/.
 */
public class PatchResources {
    public static void main(String[] args) throws Exception {
        Path root = Paths.get(args[0]);
        int[] count = {0};
        try (Stream<Path> walk = Files.walk(root)) {
            walk.filter(p -> p.toString().endsWith(".class")).forEach(p -> {
                try {
                    if (patch(p)) count[0]++;
                } catch (Exception e) {
                    throw new RuntimeException(p.toString(), e);
                }
            });
        }
        System.out.println("Patched getResourceAsStream in " + count[0] + " classes");
    }

    static boolean patch(Path path) throws Exception {
        byte[] data = Files.readAllBytes(path);
        ClassReader cr = new ClassReader(data);
        ClassWriter cw = new ClassWriter(cr, 0);
        boolean[] changed = {false};
        cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
            @Override
            public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
                MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
                return new MethodVisitor(Opcodes.ASM9, mv) {
                    @Override
                    public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
                        if (("java/lang/Class".equals(owner) || owner.endsWith("/Class"))
                                && "getResourceAsStream".equals(name)
                                && "(Ljava/lang/String;)Ljava/io/InputStream;".equals(descriptor)) {
                            // stack: Class, String -> drop Class, call Resources.open(String)
                            super.visitInsn(Opcodes.SWAP);
                            super.visitInsn(Opcodes.POP);
                            super.visitMethodInsn(Opcodes.INVOKESTATIC, "bootstrap/Resources", "open",
                                    "(Ljava/lang/String;)Ljava/io/InputStream;", false);
                            changed[0] = true;
                            return;
                        }
                        super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
                    }
                };
            }
        }, 0);
        if (changed[0]) {
            Files.write(path, cw.toByteArray());
        }
        return changed[0];
    }
}
