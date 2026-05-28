#!/bin/bash
# deploy.sh - Deployment automation script for cPanel
# This script is triggered by .cpanel.yml after a Git pull.

# Exit immediately if a command exits with a non-zero status
set -e

echo "=== Starting Next.js Deployment ==="

# 1. Move to the deployment directory (passed via argument or default)
DEPLOYPATH=${1:-$HOME/dangts_website}
cd "$DEPLOYPATH"
echo "Working directory: $DEPLOYPATH"

# 2. Install all dependencies
# We need devDependencies (like TypeScript, Tailwind) to successfully run the build
echo "Installing dependencies..."
npm install

# 3. Build the Next.js application
# next.config.ts has output: 'standalone' configured
echo "Building standalone application..."
npm run build

# 4. Assemble the standalone directory for cPanel/Passenger
# The Next.js standalone build doesn't bundle 'public' or '.next/static' folders by default,
# so we must manually copy them into the standalone directory for the custom server.js to serve them.
echo "Copying static assets to standalone directory..."
mkdir -p .next/standalone/.next
cp -a public .next/standalone/ 2>/dev/null || true
cp -a .next/static .next/standalone/.next/ 2>/dev/null || true

# 5. Restart the Node.js application
# cPanel (Phusion Passenger) monitors the tmp/restart.txt file.
# Touching it triggers a graceful restart of the application on the next incoming request.
echo "Triggering Passenger application restart..."
mkdir -p tmp
touch tmp/restart.txt

echo "=== Deployment completed successfully! ==="
