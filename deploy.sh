#!/bin/sh

# If a command fails then the deploy stops
set -e
#
printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"
# Build the project.
hugo
# Checkout public branch
git checkout master
# Remove old directories
find ./public -mindepth 1 -maxdepth 1 -type d -exec basename {} + | while read line; do rm -rf $line; done
# Move new files to public branch
mv ./public/* .
# Clean up
rm -rf ./public
# Add changes to git.
git add -A
# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
    msg="$*"
fi
git commit -m "$msg"
# Push source and build repos.
git push origin master
# Return to working branch
git checkout dev

