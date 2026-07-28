#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
javac -cp "vendor/asm-9.7.jar:vendor/asm-commons-9.7.jar" -d vendor tools/RemapJar.java
java -cp "vendor:vendor/asm-9.7.jar:vendor/asm-commons-9.7.jar" RemapJar \
  original/heroes-lore-zero.jar original/heroes-lore-zero-remapped.jar
rm -rf game-src
java -jar vendor/cfr.jar original/heroes-lore-zero-remapped.jar --outputdir game-src --silent true
python3 tools/transpile_java.py
# fix midp import depths
python3 - <<'PY'
from pathlib import Path
import re
root = Path('public/js/game')
for p in root.rglob('*.js'):
    # skip hand-ported
    if p.name in ('ct.js','f.js','ds.js') or p.as_posix().endswith('rpg/c.js') or p.as_posix().endswith('rpg/RPGHeroEx.js'):
        continue
    rel = p.relative_to(root)
    depth = len(rel.parts) - 1
    prefix = '../' * (depth + 1) + 'midp/'
    t = p.read_text()
    t2 = re.sub(r"from ['\"](?:\.\./)+midp/", f"from '{prefix}", t)
    if t2 != t: p.write_text(t2)
PY
echo "Rebuild complete. Hand-ported boot files preserved if not overwritten — re-copy if needed."
