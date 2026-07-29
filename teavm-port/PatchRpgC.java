import org.objectweb.asm.*;

import java.nio.file.*;
import java.util.*;

/** Patch remapped rpg.c for non-blocking browser frames. */
public class PatchRpgC {
    public static void main(String[] args) throws Exception {
        Path in = Paths.get(args[0]);
        Path out = Paths.get(args[1]);
        byte[] data = Files.readAllBytes(in);
        ClassReader cr = new ClassReader(data);
        ClassWriter cw = new ClassWriter(cr, 0);
        cr.accept(new ClassVisitor(Opcodes.ASM9, cw) {
            @Override
            public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
                MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);
                if ("run".equals(name) && "()V".equals(desc)) return new RunPatch(mv);
                if ("c".equals(name) && "()V".equals(desc)) return new StartPatch(mv);
                return new SleepNop(mv);
            }
        }, 0);
        Files.createDirectories(out.getParent());
        Files.write(out, cw.toByteArray());
        System.out.println("Patched " + in + " -> " + out);
    }

    static class SleepNop extends MethodVisitor {
        SleepNop(MethodVisitor mv) { super(Opcodes.ASM9, mv); }
        @Override
        public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
            if ("java/lang/Thread".equals(owner) && "sleep".equals(name)) {
                super.visitInsn(Opcodes.POP2);
                return;
            }
            if ("java/lang/Thread".equals(owner) && "yield".equals(name)) return;
            super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
        }
    }

    static class RunPatch extends SleepNop {
        final Set<Label> seen = Collections.newSetFromMap(new IdentityHashMap<>());
        Label exit;
        int fGets;
        boolean skipIfNe;

        RunPatch(MethodVisitor mv) { super(mv); }

        @Override
        public void visitLabel(Label label) {
            seen.add(label);
            super.visitLabel(label);
        }

        @Override
        public void visitFieldInsn(int opcode, String owner, String name, String descriptor) {
            if (opcode == Opcodes.GETSTATIC && "rpg/c".equals(owner) && "f".equals(name)) {
                fGets++;
                if (fGets == 1) {
                    skipIfNe = true;
                    return; // drop entry guard getstatic
                }
            }
            super.visitFieldInsn(opcode, owner, name, descriptor);
        }

        @Override
        public void visitJumpInsn(int opcode, Label label) {
            if (skipIfNe && opcode == Opcodes.IFNE) {
                skipIfNe = false;
                exit = label;
                return; // drop entry guard jump
            }
            // Backward GOTO == loop back -> exit after one frame
            if (opcode == Opcodes.GOTO && exit != null && seen.contains(label)) {
                super.visitJumpInsn(Opcodes.GOTO, exit);
                return;
            }
            super.visitJumpInsn(opcode, label);
        }
    }

    static class StartPatch extends SleepNop {
        boolean skipDup, waitingInit, waitingStart;
        StartPatch(MethodVisitor mv) { super(mv); }

        @Override
        public void visitTypeInsn(int opcode, String type) {
            if (opcode == Opcodes.NEW && "java/lang/Thread".equals(type)) {
                skipDup = true;
                waitingInit = true;
                return;
            }
            super.visitTypeInsn(opcode, type);
        }

        @Override
        public void visitInsn(int opcode) {
            if (skipDup && opcode == Opcodes.DUP) {
                skipDup = false;
                return;
            }
            super.visitInsn(opcode);
        }

        @Override
        public void visitMethodInsn(int opcode, String owner, String name, String descriptor, boolean isInterface) {
            if (waitingInit && "java/lang/Thread".equals(owner) && "<init>".equals(name)) {
                waitingInit = false;
                waitingStart = true;
                return;
            }
            if (waitingStart && "java/lang/Thread".equals(owner) && "start".equals(name)) {
                waitingStart = false;
                super.visitMethodInsn(Opcodes.INVOKESTATIC, "bootstrap/WebScheduler", "startLoop",
                        "(Ljava/lang/Runnable;)V", false);
                return;
            }
            super.visitMethodInsn(opcode, owner, name, descriptor, isInterface);
        }
    }
}
