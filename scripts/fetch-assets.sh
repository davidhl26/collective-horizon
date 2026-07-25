#!/usr/bin/env bash
# Download generated media listed in assets-manifest.json and process them
# into the assets/ folder: webp posters, hero still, og image, compressed
# 720p loops, and the hero scrub frame sequence.
# Requires: curl, jq, ffmpeg, cwebp, python3.
set -euo pipefail
cd "$(dirname "$0")/.."

MANIFEST="assets-manifest.json"
SRC=$(mktemp -d)
mkdir -p assets/posters assets/clips assets/frames

still_url(){ jq -r ".stills.$1 // empty" "$MANIFEST"; }
clip_url(){ jq -r ".clips.$1 // empty" "$MANIFEST"; }

# Hero still: large webp for the pre-frames hero, plus the OG image.
HERO_URL=$(still_url hero)
if [ -n "$HERO_URL" ]; then
  curl -sSL -o "$SRC/hero.png" "$HERO_URL"
  cwebp -quiet -q 80 -resize 1920 0 "$SRC/hero.png" -o assets/hero-still.webp
  ffmpeg -y -loglevel error -i "$SRC/hero.png" \
    -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" \
    -q:v 3 assets/og.jpg
  echo "hero still + og done"
fi

# Section posters from the grade-matched start frames.
for key in street craft multifamily exit; do
  url=$(still_url "$key")
  [ -z "$url" ] && continue
  curl -sSL -o "$SRC/$key.png" "$url"
  cwebp -quiet -q 72 -resize 1600 0 "$SRC/$key.png" -o "assets/posters/$key.webp"
  echo "poster $key done"
done

# Clips: compress to 720p crf28 silent loops.
for key in street craft multifamily exit; do
  url=$(clip_url "$key")
  [ -z "$url" ] && continue
  curl -sSL -o "$SRC/$key.mp4" "$url"
  ffmpeg -y -loglevel error -i "$SRC/$key.mp4" -an \
    -vf "scale=1280:-2" -c:v libx264 -preset slow -crf 28 \
    -pix_fmt yuv420p -movflags +faststart "assets/clips/$key.mp4"
  # Poster refresh from the actual first frame of the clip.
  ffmpeg -y -loglevel error -i "$SRC/$key.mp4" -frames:v 1 "$SRC/${key}_f1.png"
  cwebp -quiet -q 72 -resize 1600 0 "$SRC/${key}_f1.png" -o "assets/posters/$key.webp"
  echo "clip $key done"
done

# Hero orbit clip: scrub frames plus a compressed loop kept for reference.
HERO_CLIP=$(clip_url hero_orbit)
if [ -n "$HERO_CLIP" ]; then
  curl -sSL -o "$SRC/hero_orbit.mp4" "$HERO_CLIP"
  ffmpeg -y -loglevel error -i "$SRC/hero_orbit.mp4" -an \
    -vf "scale=1280:-2" -c:v libx264 -preset slow -crf 28 \
    -pix_fmt yuv420p -movflags +faststart "assets/clips/hero_orbit.mp4"
  bash scripts/extract-frames.sh "$SRC/hero_orbit.mp4" assets/frames 150
  echo "hero scrub frames done"
fi

# Optional second hero take: contact strips of both takes for review.
HERO_ALT=$(clip_url hero_orbit_alt)
if [ -n "$HERO_ALT" ] && [ -n "$HERO_CLIP" ]; then
  curl -sSL -o "$SRC/hero_alt.mp4" "$HERO_ALT"
  mkdir -p assets/preview
  ffmpeg -y -loglevel error -i "$SRC/hero_orbit.mp4" \
    -vf "select='eq(n,0)+eq(n,96)+eq(n,180)',scale=640:-2,tile=3x1" \
    -frames:v 1 assets/preview/hero_take1_strip.jpg
  ffmpeg -y -loglevel error -i "$SRC/hero_alt.mp4" \
    -vf "select='eq(n,0)+eq(n,96)+eq(n,180)',scale=640:-2,tile=3x1" \
    -frames:v 1 assets/preview/hero_take2_strip.jpg
  echo "hero take strips done"
fi

rm -rf "$SRC"
echo "all assets processed"
