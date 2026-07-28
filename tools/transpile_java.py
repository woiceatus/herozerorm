#!/usr/bin/env python3
"""Improved Java→JS transpiler for remapped Heroes Lore Zero sources."""
from __future__ import annotations
import re, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "game-src"
OUT = ROOT / "public" / "js" / "game"

TYPE = r'(?:byte|short|int|long|float|double|boolean|char|void|String|Object|Image|Graphics|Canvas|MIDlet|Display|Displayable|Font|RecordStore|InputStream|DataInputStream|ByteArrayInputStream|Thread|Runnable|Exception|Throwable|InterruptedException|Vector|Hashtable|Enumeration|Integer|Boolean|Byte|Short|Long|Float|Double|Character|StringBuffer|StringBuilder|System|Math|Class|[\w.]+(?:\[\])?)'

def strip_comments(s: str) -> str:
    s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
    s = re.sub(r'//.*?$', '', s, flags=re.M)
    return s

def clean_params(params: str) -> str:
    if not params.strip():
        return ''
    out = []
    for p in params.split(','):
        p = p.strip().replace('final ', '')
        if not p:
            continue
        out.append(p.split()[-1])
    return ', '.join(out)

def convert_expr(code: str) -> str:
    code = code.replace('System.currentTimeMillis()', 'Date.now()')
    code = re.sub(r'System\.out\.println\s*\(', 'console.log(', code)
    code = re.sub(r'System\.err\.println\s*\(', 'console.error(', code)
    code = re.sub(r'\.printStackTrace\s*\(\s*\)\s*;?', '', code)
    code = re.sub(r'Thread\.sleep\s*\(([^)]*)\)', r'await sleep(\1)', code)
    code = re.sub(
        r'new\s+Thread\s*\(([^)]+)\)\s*\.start\s*\(\s*\)',
        r'queueMicrotask(() => { try { const __r=\1; (__r.run?__r.run():__r()); } catch(e){console.error(e);} })',
        code,
    )
    code = re.sub(r'\(\s*[A-Za-z_][\w.]*\s*(?:\[\s*\])?\s*\)\s*', '', code)
    code = re.sub(r'\.length\s*\(\s*\)', '.length', code)
    code = re.sub(r'new\s+byte\s*\[([^\]]+)\]', r'new Int8Array(\1)', code)
    code = re.sub(r'new\s+short\s*\[([^\]]+)\]', r'new Int16Array(\1)', code)
    code = re.sub(r'new\s+int\s*\[([^\]]+)\]', r'new Int32Array(\1)', code)
    code = re.sub(r'new\s+boolean\s*\[([^\]]+)\]', r'new Array(\1).fill(false)', code)
    code = re.sub(r'new\s+byte\s*\[\s*\]\s*\{([^}]*)\}', r'new Int8Array([\1])', code)
    code = re.sub(r'new\s+int\s*\[\s*\]\s*\{([^}]*)\}', r'new Int32Array([\1])', code)
    code = re.sub(r'new\s+StringBuffer\s*\(\s*\)', "''", code)
    code = re.sub(r'([A-Za-z0-9_\)\]]+)\.equals\s*\(', r'jEquals(\1, ', code)
    code = re.sub(r'synchronized\s*\([^)]*\)\s*\{', '{', code)
    code = re.sub(r'catch\s*\(\s*[\w.]+\s+(\w+)\s*\)', r'catch (\1)', code)
    code = re.sub(rf'\b(?:final\s+)?{TYPE}\s+(\[\]\s*)?([A-Za-z_][\w]*)\s*=', r'let \2 =', code)
    code = re.sub(rf'\b(?:final\s+)?{TYPE}\s+(\[\]\s*)?([A-Za-z_][\w]*)\s*;', r'let \2 = null;', code)
    code = re.sub(r'for\s*\(\s*(?:final\s+)?(?:byte|short|int|long|float|double)\s+', 'for (let ', code)
    code = re.sub(r'\b(public|private|protected|static|final|native|volatile|transient|abstract|synchronized)\b', '', code)
    code = re.sub(r'(\d+)L\b', r'\1', code)
    code = re.sub(r'\bsuper\s*\(', '/*super*/(', code)
    return code

def find_matching(s: str, open_idx: int) -> int:
    depth = 0
    i = open_idx
    in_s = None
    while i < len(s):
        ch = s[i]
        if in_s:
            if ch == '\\':
                i += 2
                continue
            if ch == in_s:
                in_s = None
            i += 1
            continue
        if ch in '"\'':
            in_s = ch
            i += 1
            continue
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1

def extract_class(java: str):
    m = re.search(
        r'(?:public\s+)?(?:final\s+)?(?:abstract\s+)?(class|interface)\s+(\w+)(?:\s+extends\s+([\w.]+))?(?:\s+implements\s+([\w.,\s]+))?\s*\{',
        java,
    )
    if not m:
        return None
    end = find_matching(java, m.end() - 1)
    if end < 0:
        return None
    return m.group(1), m.group(2), m.group(3), m.group(4), java[m.end():end]

def iter_top_level_chunks(body: str):
    i = 0
    n = len(body)
    while i < n:
        while i < n and body[i].isspace():
            i += 1
        if i >= n:
            break
        # scan until ; or { at depth 0, respecting strings and nested braces in array init
        j = i
        depth = 0
        in_s = None
        saw_paren = False
        while j < n:
            ch = body[j]
            if in_s:
                if ch == '\\':
                    j += 2
                    continue
                if ch == in_s:
                    in_s = None
                j += 1
                continue
            if ch in '"\'':
                in_s = ch
                j += 1
                continue
            if ch == '(':
                saw_paren = True
                depth += 0  # track via paren_depth separately
            # Use brace depth only
            if ch == '{':
                # If this looks like method body (we already saw ')' for signature) OR static {
                # vs array initializer after =
                before = body[i:j]
                if saw_paren and ')' in before.split('{')[0] and depth == 0:
                    # method — consume full body
                    end = find_matching(body, j)
                    yield body[i:end+1]
                    i = end + 1
                    break
                if re.search(r'\bstatic\s*$', before.rstrip()) or re.search(r'\bstatic\s*\{', before[-20:]+'{'):
                    end = find_matching(body, j)
                    yield body[i:end+1]
                    i = end + 1
                    break
                # array initializer — include braces in field
                depth += 1
            elif ch == '}':
                depth -= 1
            elif ch == ';' and depth == 0:
                yield body[i:j+1]
                i = j + 1
                break
            if ch == '(':
                saw_paren = True
            j += 1
        else:
            break

def transpile_chunk(chunk: str, cname: str) -> str:
    chunk = chunk.strip()
    if not chunk:
        return ''
    # static {}
    if re.match(r'(?:public|private|protected|static|\s)*static\s*\{', chunk):
        inner = chunk[chunk.find('{')+1:chunk.rfind('}')]
        return f'static __clinit() {{\n{convert_expr(inner)}\n  }}'

    header = chunk[:chunk.find('{')] if '{' in chunk else chunk
    # constructor
    if re.search(rf'\b{cname}\s*\(', header) and not re.search(rf'{TYPE}\s+{cname}\s*\(', header):
        m = re.search(rf'{cname}\s*\(([^)]*)\)', header)
        args = clean_params(m.group(1) if m else '')
        inner = chunk[chunk.find('{')+1:chunk.rfind('}')]
        return f'constructor({args}) {{\n    super();\n{convert_expr(inner)}\n  }}'

    # method
    if '{' in chunk and '(' in header:
        m = re.search(rf'({TYPE})\s+(\[\]\s*)?([A-Za-z_][\w]*)\s*\(([^)]*)\)', header)
        if m:
            name = m.group(3)
            args = clean_params(m.group(4))
            static = 'static ' if re.search(r'\bstatic\b', header) else ''
            inner = chunk[chunk.find('{')+1:chunk.rfind('}')]
            async_kw = 'async ' if 'Thread.sleep' in chunk else ''
            return f'{static}{async_kw}{name}({args}) {{\n{convert_expr(inner)}\n  }}'

    # field
    if chunk.endswith(';'):
        static = 'static ' if re.search(r'\bstatic\b', chunk) else ''
        m = re.search(rf'({TYPE})\s+(\[\]\s*)?([A-Za-z_][\w]*)\s*(=|;)(.*)$', chunk, re.S)
        if not m:
            return f'/* skip field: {chunk[:80]} */'
        name = m.group(3)
        if m.group(4) == '=':
            val = m.group(5).rstrip(';').strip()
            # byte[] x = {1,2} without new
            if val.startswith('{') and val.endswith('}'):
                val = f'[{val[1:-1]}]'
            val = convert_expr(val)
            # defer `new SameClass` static self init
            if static and re.search(rf'\bnew\s+{cname}\s*\(', val):
                return f'/* deferred: {name} */ static get {name}(){{ if(!this.___{name}) this.___{name}={val}; return this.___{name}; }}'
            return f'{static}{name} = {val};'
        return f'{static}{name} = null;'
    return f'/* unparsed: {chunk[:60]} */'

def transpile_file(path: Path, fqn: str) -> str | None:
    raw = strip_comments(path.read_text(errors='ignore'))
    raw = re.sub(r'^\s*package\s+[\w.]+\s*;', '', raw, flags=re.M)
    raw = re.sub(r'^\s*import\s+[\w.]+\s*;', '', raw, flags=re.M)
    extracted = extract_class(raw)
    if not extracted:
        return None
    kind, cname, parent, ifaces, body = extracted
    parent = (parent or 'Object').split('.')[-1]
    midp_parents = {'MIDlet', 'Canvas', 'Displayable'}
    members = []
    for chunk in iter_top_level_chunks(body):
        members.append(transpile_chunk(chunk, cname))
    body_js = '\n  '.join(m for m in members if m)
    if parent in midp_parents:
        midp_import = f"import {{ {parent} }} from '../../midp/{parent}.js';\n"
        extends = parent
    else:
        midp_import = ''
        extends = f'(JavaRegistry.get({json.dumps(parent)}) || class {{}})'

    return f'''/** Transpiled from {fqn} */
import {{ sleep, JavaRegistry, jEquals }} from '../../midp/runtime.js';
{midp_import}import {{ Image }} from '../../midp/Image.js';
import {{ Graphics }} from '../../midp/Graphics.js';
import {{ Display }} from '../../midp/Display.js';
import {{ Font }} from '../../midp/Font.js';
import {{ RecordStore }} from '../../midp/RecordStore.js';
import {{ DataInputStream, ByteArrayInputStream }} from '../../midp/resources.js';

export class {cname} extends {extends} {{
  {body_js}
}}

JavaRegistry.set({json.dumps(fqn)}, {cname});
JavaRegistry.set({json.dumps(cname)}, {cname});
try {{ if (typeof {cname}.__clinit === 'function') {cname}.__clinit(); }} catch (e) {{ console.warn('clinit {fqn}', e); }}
'''

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    ok = err = 0
    errors = []
    for path in sorted(SRC.rglob('*.java')):
        rel = path.relative_to(SRC).with_suffix('')
        fqn = str(rel).replace('/', '.').replace('\\', '.')
        try:
            js = transpile_file(path, fqn)
            if not js:
                err += 1
                errors.append((fqn, 'no class'))
                continue
            out = OUT.joinpath(*rel.parts[:-1]) / (rel.name + '.js')
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(js)
            ok += 1
        except Exception as e:
            err += 1
            errors.append((fqn, str(e)))
    print(f'Transpiled {ok}, errors {err}')
    for f, e in errors[:15]:
        print(' ', f, e)
    (ROOT/'tools'/'transpile-report.json').write_text(json.dumps({'ok':ok,'errors':errors}, indent=2))

if __name__ == '__main__':
    main()
