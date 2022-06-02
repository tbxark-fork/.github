#!/bin/bash

git config --global user.name "tbxark-bot"
git config --global user.email "github-stats-bot@tbxark.com"
git add .
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit"
else
    git commit -m 'Update generated files' || echo
    git push
fi
