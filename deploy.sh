#!/usr/bin/env bash
# Rebuild the site and publish it to GitHub Pages (the gh-pages branch).
# Usage:  npm run deploy
set -euo pipefail
cd "$(dirname "$0")"

echo "▸ Building static export…"
rm -rf out .next
npm run build

echo "▸ Publishing out/ to gh-pages…"
REMOTE="$(git remote get-url origin)"
cd out
git init -q -b gh-pages
git add -A
git -c user.email="noreply@anthropic.com" -c user.name="Deploy" \
    commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE" gh-pages
rm -rf .git

echo "✓ Deployed → https://mort5506-beep.github.io/indigo-counseling-wellness/"
echo "  (Pages rebuilds in ~30–60s; hard-refresh if you see the old version.)"
