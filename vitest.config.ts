import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    coverage: {
      provider: 'v8', // ✅ Provider natif Vitest
      reporter: ['text', 'lcov', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'coverage/**',
        '**/*.d.ts',
        '**/*.config.ts',
        'src/database/migrations/**',
        'src/tests/**',
        // ✅ Exclude des fichiers sans logique
        'src/entities/**', // Pas de logique
        'src/constants/**', // Pas de logique
        'src/interfaces/**', // Pas de logique
        'src/app.ts', // Juste Express setup
        'src/server.ts' // Juste server start
      ],
      include: ['src/**/*.ts'],
      //   all: true,
      thresholds: {
        global: {
          branches: 60,
          functions: 60,
          lines: 60,
          statements: 60
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
