#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="${PATH}:/tmp/apache-maven-3.9.9/bin"
cd "$ROOT/teavm-port"

echo "== Remap fields =="
javac -cp "$ROOT/vendor/asm-9.7.jar:$ROOT/vendor/asm-commons-9.7.jar" RemapFieldsOnly.java
java -cp ".:$ROOT/vendor/asm-9.7.jar:$ROOT/vendor/asm-commons-9.7.jar" RemapFieldsOnly \
  "$ROOT/original/heroes-lore-zero.jar" "$ROOT/original/heroes-lore-zero-fields.jar"

echo "== Extract classes =="
rm -rf game-classes && mkdir game-classes
( cd game-classes && jar xf "$ROOT/original/heroes-lore-zero-fields.jar"
  find . -type f ! -name '*.class' -delete
  rm -rf META-INF )

echo "== Patch for browser =="
javac -cp "$ROOT/vendor/asm-9.7.jar" PatchRpgC.java PatchResources.java PatchSleep.java \
  PatchThreads.java PatchDs.java PatchAr.java PatchCm.java PatchBv.java PatchCmAlphaReset.java
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchRpgC game-classes/rpg/c.class game-classes/rpg/c.class
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchResources game-classes
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchSleep game-classes
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchThreads game-classes
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchDs game-classes/ds.class
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchAr game-classes/ar.class
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchCm game-classes/cm.class
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchCmAlphaReset game-classes/cm.class
java -cp ".:$ROOT/vendor/asm-9.7.jar" PatchBv game-classes/bv.class

echo "== TeaVM compile =="
rm -rf target
mvn -q package
echo "Output: $ROOT/public/js/teavm/game.js"
wc -c "$ROOT/public/js/teavm/game.js"
