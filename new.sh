#!/bin/bash

# Usage: hugo new blog hacking-the-universe
# Usage: hugo new gist shred.py
if [ "$#" -ne 2 ]; then
    echo "Usage: new.sh [blog|gist] [TITLE]"
    exit 1
fi

hugo new $(echo "$1/$2" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')/index.md

