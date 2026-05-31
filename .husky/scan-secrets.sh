#!/usr/bin/env sh
set -e

if [ "${SKIP_SECRET_SCAN}" = "1" ]; then
  exit 0
fi

STAGED=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED" ]; then
  exit 0
fi

FOUND=0
STAGED_ADDS=$(git diff --cached -U0 --diff-filter=ACM | grep -E '^\+' || true)

check() {
  pattern="$1"
  label="$2"
  if [ -z "$STAGED_ADDS" ]; then
    return
  fi
  matches=$(printf '%s\n' "$STAGED_ADDS" | grep -E -- "$pattern" || true)
  if [ -n "$matches" ]; then
    echo "Secret-like content detected: $label"
    printf '%s\n' "$matches" | head -3
    FOUND=1
  fi
}

check 'AKIA[0-9A-Z]{16}' "AWS access key id"
check '"private_key":[[:space:]]*"-----BEGIN' "GCP service account private key"
check 'hooks\.slack\.com/services/T[A-Z0-9]+/B[A-Z0-9]+/[A-Za-z0-9]+' "Slack webhook URL"
check 'https://[a-f0-9]{32}@[a-z0-9.-]+\.ingest\.sentry\.io/[0-9]+' "Sentry DSN"
check '(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36,}' "GitHub token"
check '-----BEGIN ((RSA|EC|OPENSSH|DSA) )?PRIVATE KEY-----' "private key block"

ENV_STAGED=$(echo "$STAGED" | grep -E '(^|/)\.env($|\..+)' | grep -vE '\.(example|template|sample)$' || true)
if [ -n "$ENV_STAGED" ]; then
  echo ".env file staged:"
  echo "$ENV_STAGED"
  FOUND=1
fi

if [ "$FOUND" -eq 1 ]; then
  echo "Commit blocked: remove secrets or use repository secrets."
  exit 1
fi

exit 0
