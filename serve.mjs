// ExpertEV dev server
// Usage: node serve.mjs
// • Auto-installs qrcode-terminal on first run if missing
// • Binds to 0.0.0.0 so phones on the same Wi-Fi can connect
// • Auto-retries next port if preferred port is busy (up to MAX_PORT)
// • Prints desktop URL, mobile URL, and a scannable QR code

import http        from 'http';
import fs          from 'fs';
import os          from 'os';
import path        from 'path';
import { execSync }      from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require   = createRequire(import.meta.url);

const PREFERRED_PORT = 3000;
const MAX_PORT       = 3010;

/* ── Auto-install qrcode-terminal if missing ── */
let qrcode = null;
try {
  qrcode = require('qrcode-terminal');
} catch {
  console.log('\n  Installing qrcode-terminal (first run only)…');
  try {
    execSync('npm install qrcode-terminal --save', {
      cwd: __dirname,
      stdio: 'inherit',
    });
    qrcode = require('qrcode-terminal');
    console.log('  Done.\n');
  } catch (err) {
    console.warn('  Could not install qrcode-terminal:', err.message);
    console.warn('  Server will start without QR code.\n');
  }
}

/* ── MIME types ── */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.mjs':  'application/javascript',
};

/* ── Static file handler ── */
const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath    = path.join(__dirname, urlPath);
  const ext         = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 Not Found: ${urlPath}`);
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});

/* ── Helpers ── */
function getLanIP() {
  const ifaces = os.networkInterfaces();
  for (const iface of Object.values(ifaces)) {
    for (const addr of iface) {
      if (addr.family === 'IPv4' && !addr.internal) return addr.address;
    }
  }
  return null;
}

function printBanner(port) {
  const lan    = getLanIP();
  const lanUrl = lan ? `http://${lan}:${port}` : null;

  console.log('');
  console.log('  ══════════════════════════════════════');
  console.log('   SERVER RUNNING');
  console.log('  ══════════════════════════════════════');
  console.log('');
  console.log('   Desktop:');
  console.log(`   http://localhost:${port}`);
  console.log('');
  if (lanUrl) {
    console.log('   Mobile (open this on your phone):');
    console.log(`   ${lanUrl}`);
    console.log('');
    if (qrcode) {
      console.log('   Scan QR code below on your phone:');
      console.log('');
      qrcode.generate(lanUrl, { small: true }, (code) => {
        code.split('\n').forEach(line => console.log('   ' + line));
        console.log('');
      });
    }
  } else {
    console.log('   (No LAN IP found — is Wi-Fi connected?)');
    console.log('');
  }
}

/* ── Port-retry startup ── */
let currentPort = PREFERRED_PORT;

function startServer(port) {
  if (port > MAX_PORT) {
    console.error(`\n  No available port found between ${PREFERRED_PORT} and ${MAX_PORT}. Exiting.\n`);
    process.exit(1);
  }
  currentPort = port;
  server.listen(port, '0.0.0.0');
}

server.on('listening', () => {
  printBanner(currentPort);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const next = currentPort + 1;
    console.log(`  Port ${currentPort} is busy, trying ${next}…`);
    server.close(() => startServer(next));
  } else {
    console.error('\n  Server error:', err.message);
    process.exit(1);
  }
});

startServer(PREFERRED_PORT);
