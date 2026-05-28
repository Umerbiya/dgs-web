// server.js — Custom entry point required by cPanel Phusion Passenger
// This script bridges cPanel's Passenger App Manager with Next.js's standalone build.

const path = require('path');
const fs = require('fs');

// Passenger sets the port via process.env.PORT. Default to 3000 if not set.
process.env.PORT = process.env.PORT || '3000';
// Enforce production mode
process.env.NODE_ENV = 'production';

// The path to the Next.js standalone server
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');

if (!fs.existsSync(standaloneServerPath)) {
  console.error('ERROR: Standalone server not found!');
  console.error('Make sure you have run `npm run build` and have `output: "standalone"` in your next.config.ts');
  process.exit(1);
}

// Next.js standalone server handles the HTTP server creation and routing. 
// Note: It internally calls `process.chdir(__dirname)` which changes the working directory
// to `.next/standalone`. This requires that static assets are copied inside the standalone folder.
require(standaloneServerPath);
