#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Building ValGo static site..."
npm run build

if [[ -z "${HOSTINGER_FTP_HOST:-}" || -z "${HOSTINGER_FTP_USER:-}" || -z "${HOSTINGER_FTP_PASSWORD:-}" ]]; then
  echo ""
  echo "Build complete. Upload the contents of ./out/ to Hostinger public_html."
  echo ""
  echo "Set these environment variables to deploy automatically with lftp:"
  echo "  HOSTINGER_FTP_HOST"
  echo "  HOSTINGER_FTP_USER"
  echo "  HOSTINGER_FTP_PASSWORD"
  echo "  HOSTINGER_FTP_PATH (optional, default: /public_html/)"
  exit 0
fi

FTP_PATH="${HOSTINGER_FTP_PATH:-/public_html/}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp is required for automatic upload. Install it, or upload ./out/ manually in hPanel File Manager."
  exit 1
fi

echo "Uploading to Hostinger (${HOSTINGER_FTP_HOST}${FTP_PATH})..."
lftp -c "
set ssl:verify-certificate no;
open -u ${HOSTINGER_FTP_USER},${HOSTINGER_FTP_PASSWORD} ${HOSTINGER_FTP_HOST};
mirror -R --delete --verbose ${ROOT_DIR}/out/ ${FTP_PATH};
bye
"

echo "Deployed to https://usevalgo.com"
