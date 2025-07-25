// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ─────────────────────────────────────────────
// Plugin: allow Lovable preview iframe
// ─────────────────────────────────────────────
const lovableFrameHeaders = {
  name: 'lovable-frame-headers',
  configureServer(server: any) {
    server.middlewares.use((_req: any, res: any, next: any) => {
      // 1. remove the old lock
      res.removeHeader?.('X-Frame-Options');
      // 2. add the guest-list
      res.setHeader(
        'Content-Security-Policy',
        "frame-ancestors 'self' https://lovable.dev https://*.lovable.app"
      );
      next();
    });
  },
  configurePreviewServer(server: any) {
    // same headers for `npm run preview`
    server.middlewares.use((_req: any, res: any, next: any) => {
      res.removeHeader?.('X-Frame-Options');
      res.setHeader(
        'Content-Security-Policy',
        "frame-ancestors 'self' https://lovable.dev https://*.lovable.app"
      );
      next();
    });
  }
};

// ─────────────────────────────────────────────
// Main config
// ─────────────────────────────────────────────
export default defineConfig({
  plugins: [
    react(),
    lovableFrameHeaders           // ← new plugin here
  ],
  server: {
    port: 5173
  }
});
