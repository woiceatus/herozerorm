import org.objectweb.asm.*;
import org.objectweb.asm.commons.*;
import java.io.*;
import java.util.*;
import java.util.jar.*;
import java.util.zip.*;

/** Rename obfuscated same-name fields/methods (different descriptors) to unique Java-legal names. */
public class RemapJar {
    static class Info {
        Map<String, String> fields = new HashMap<>();
        Map<String, String> methods = new HashMap<>();
    }
    static Map<String, Info> plan = new HashMap<>();

    public static void main(String[] args) throws Exception {
        String inPath = args[0], outPath = args[1];
        // Pass 1: collect collisions
        try (JarFile jar = new JarFile(inPath)) {
            Enumeration<JarEntry> en = jar.entries();
            while (en.hasMoreElements()) {
                JarEntry e = en.nextElement();
                if (!e.getName().endsWith(".class")) continue;
                ClassReader cr = new ClassReader(jar.getInputStream(e));
                cr.accept(new ClassVisitor(Opcodes.ASM9) {
                    String owner;
                    Map<String, List<String[]>> f = new HashMap<>();
                    Map<String, List<String[]>> m = new HashMap<>();
                    @Override public void visit(int v, int acc, String name, String sig, String superName, String[] ifs) {
                        owner = name;
                    }
                    @Override public FieldVisitor visitField(int acc, String name, String desc, String sig, Object val) {
                        f.computeIfAbsent(name, k -> new ArrayList<>()).add(new String[]{desc, name});
                        return null;
                    }
                    @Override public MethodVisitor visitMethod(int acc, String name, String desc, String sig, String[] ex) {
                        if (!name.equals("<init>") && !name.equals("<clinit>"))
                            m.computeIfAbsent(name, k -> new ArrayList<>()).add(new String[]{desc, name});
                        return null;
                    }
                    @Override public void visitEnd() {
                        Info info = new Info();
                        for (Map.Entry<String, List<String[]>> ent : f.entrySet()) {
                            if (ent.getValue().size() > 1) {
                                int i = 0;
                                for (String[] fd : ent.getValue()) {
                                    String nn = ent.getKey() + "_f" + (i++) + "_" + sanitize(fd[0]);
                                    info.fields.put(fd[0] + "|" + ent.getKey(), nn);
                                }
                            }
                        }
                        for (Map.Entry<String, List<String[]>> ent : m.entrySet()) {
                            if (ent.getValue().size() > 1) {
                                int i = 0;
                                for (String[] md : ent.getValue()) {
                                    String nn = ent.getKey() + "_m" + (i++) + "_" + sanitize(md[0]);
                                    info.methods.put(md[0] + "|" + ent.getKey(), nn);
                                }
                            }
                        }
                        if (!info.fields.isEmpty() || !info.methods.isEmpty()) plan.put(owner, info);
                    }
                }, ClassReader.SKIP_CODE | ClassReader.SKIP_DEBUG | ClassReader.SKIP_FRAMES);
            }
        }
        System.out.println("Classes with collisions: " + plan.size());

        Remapper remapper = new Remapper() {
            @Override public String mapFieldName(String owner, String name, String desc) {
                Info i = plan.get(owner);
                if (i == null) return name;
                String n = i.fields.get(desc + "|" + name);
                return n != null ? n : name;
            }
            @Override public String mapMethodName(String owner, String name, String desc) {
                if (name.equals("<init>") || name.equals("<clinit>")) return name;
                // Walk hierarchy? For obfuscated game, mostly same-class calls via invokespecial/virtual on known owner
                Info i = plan.get(owner);
                if (i == null) return name;
                String n = i.methods.get(desc + "|" + name);
                return n != null ? n : name;
            }
        };

        try (JarFile jar = new JarFile(inPath);
             JarOutputStream jos = new JarOutputStream(new FileOutputStream(outPath))) {
            Enumeration<JarEntry> en = jar.entries();
            byte[] buf = new byte[65536];
            while (en.hasMoreElements()) {
                JarEntry e = en.nextElement();
                if (e.isDirectory()) continue;
                jos.putNextEntry(new JarEntry(e.getName()));
                if (e.getName().endsWith(".class")) {
                    ClassReader cr = new ClassReader(jar.getInputStream(e));
                    ClassWriter cw = new ClassWriter(0);
                    cr.accept(new ClassRemapper(cw, remapper), 0);
                    jos.write(cw.toByteArray());
                } else {
                    try (InputStream in = jar.getInputStream(e)) {
                        int n;
                        while ((n = in.read(buf)) > 0) jos.write(buf, 0, n);
                    }
                }
                jos.closeEntry();
            }
        }
        System.out.println("Wrote " + outPath);
    }
    static String sanitize(String d) {
        return d.replace(';', '_').replace('[', 'A').replace('/', '_').replace('(', 'P').replace(')', 'R').replace('<', 'L').replace('>', 'G');
    }
}
