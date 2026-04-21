#!/usr/bin/env bash
set -euo pipefail

echo "✅ Devcontainer ready."

# Optional: install global JS tooling (safe even before frontend exists)
if command -v npm >/dev/null 2>&1; then
  npm -v
fi

# Optional: set up python tooling baseline
python --version
python -m pip install --upgrade pip >/dev/null

echo "ℹ️ Next: we’ll scaffold frontend/ and backend/ in a controlled way."
