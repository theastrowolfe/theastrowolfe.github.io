#!/bin/bash
# Usage: hugo new blog hacking-the-universe
# Usage: hugo new gist shred.py
if [ "$#" -ne 2 ]; then
    echo "Usage: new.sh [blog/gist] [TITLE]"
    exit 1
fi

hugo new $1/$2/index.md
