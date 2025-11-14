import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ filename: 'dist/stats.html', open: false, gzipSize: true })
  ],
  build: {
    sourcemap: true,        
    minify: 'esbuild', 
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          tooltip: ["react-tooltip", "@floating-ui/dom", "@floating-ui/react"],
          syntax: ["react-syntax-highlighter"],
        }
      }
    }
  }
})
