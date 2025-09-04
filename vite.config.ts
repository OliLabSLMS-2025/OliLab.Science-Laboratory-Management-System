import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        allowedHosts: ['34afb171-9030-4c12-80d1-b83c85001165-00-1b8nettwal80r.sisko.replit.dev'],
        hmr: {
          clientPort: 443,
          port: 5000
        }
      }
    };
});
