#!/bin/bash
set -e

# fresh staging dir for Amplify
rm -rf ./.amplify-hosting
mkdir -p ./.amplify-hosting/compute/default

# ensure compute entrypoint at compute/default/index.js
cp ./dist/index.js ./.amplify-hosting/compute/default/index.js

# include rest of compiled code (if other files are imported)
cp -r ./dist ./.amplify-hosting/compute/default/dist

# include runtime deps (express, etc.)
if [ -d "node_modules" ]; then
  cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules
fi

# optional static assets
if [ -d "public" ]; then
  mkdir -p ./.amplify-hosting/static
  cp -r public/* ./.amplify-hosting/static/
fi

# add the manifest
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
