#!/usr/bin/env bash
# Slice the hero clip into scroll-scrub webp frames.
# usage: scripts/extract-frames.sh <hero_clip.mp4> <out_dir> [count]
set -euo pipefail

CLIP="$1"
OUT="$2"
COUNT="${3:-150}"

DUR=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$CLIP")
FPS=$(python3 -c "print($COUNT/$DUR)")

TMP=$(mktemp -d)
mkdir -p "$OUT"
rm -f "$OUT"/frame_*.webp

ffmpeg -y -loglevel error -i "$CLIP" -vf "fps=$FPS,scale=1600:-2" "$TMP/frame_%04d.png"

i=0
for f in "$TMP"/frame_*.png; do
  i=$((i+1))
  cwebp -quiet -q 72 "$f" -o "$OUT/frame_$(printf '%04d' "$i").webp"
done
rm -rf "$TMP"

printf '{"count": %d}\n' "$i" > "$OUT/count.json"
echo "extracted $i frames into $OUT"
