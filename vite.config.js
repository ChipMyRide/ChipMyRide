import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // wichtig für Vercel SPA fallback
  resolve: {
    conditions: ['development', 'browser'],
  },
});
