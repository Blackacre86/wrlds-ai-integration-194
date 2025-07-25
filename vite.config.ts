// vite.config.ts
import { defineConfig } from 'vite';
// 👉 Install this package if you don’t have it yet:
//    npm i -D @vitejs/plugin-react
import react from '@vitejs/plugin-react';

// ─────────────────────────────────────────────
// Plugin: allow Lovable preview iframe
// ─────────────────────────────────────────────
const lovableFrameHeaders = {
  name: 'lovable-frame-headers',
  configureServer(server: any) {
    server.middlewares.use((_req: any, res: any, next: any) => {
      res.removeHeader?.('X-Frame-Options'); // remove old lock
      res.setHeader(
        'Content-Security-Policy',
        "frame-ancestors 'self' https://lovable.dev https://*.lovable.app"
      );
      next();
    });
  },
  configurePreviewServer(server: any) {
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
// Your original Vite settings (keep as-is)
// ─────────────────────────────────────────────
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    lovableFrameHeaders           // ← new plugin
  ],

  server: {
    host: '*',
    port: 8080
    // …whatever other server settings you had
  },

  preview: {
    host: '*',
    port: 8080
  }
}));
