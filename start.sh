#!/usr/bin/env bash
# Lance le site en local. Usage: ./start.sh [port]
# Le site doit etre servi en HTTP. Un double clic sur index.html ouvre une
# adresse file:// ou le canvas du hero et l'envoi du formulaire ne marchent pas.
set -euo pipefail

PORT="${1:-8000}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

if [ ! -f index.html ]; then
  echo "index.html introuvable dans $DIR" >&2
  exit 1
fi

if [ ! -f assets/hero-still.webp ] || [ ! -f src/app.js ]; then
  echo "Attention: assets/hero-still.webp ou src/app.js manquant. Le site sera incomplet." >&2
fi

URL="http://localhost:$PORT/index.html"
echo
echo "  Collective Horizon"
echo "  $URL"
echo
echo "  Accueil EN   $URL"
echo "  Accueil FR   $URL?lang=fr"
echo "  Accueil ES   $URL?lang=es"
echo "  Guide        http://localhost:$PORT/guide.html"
echo "  Programme    http://localhost:$PORT/programme.html"
echo
echo "  Ctrl+C pour arreter."
echo

# Ouvre le navigateur une fois le serveur pret, sans bloquer.
( sleep 1
  if command -v open >/dev/null 2>&1; then open "$URL"
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL"
  fi ) >/dev/null 2>&1 &

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
elif command -v python >/dev/null 2>&1; then
  exec python -m SimpleHTTPServer "$PORT"
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l "$PORT" .
else
  echo "Ni python3 ni npx trouves. Installez Python depuis python.org." >&2
  exit 1
fi
