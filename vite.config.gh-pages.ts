import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// GitHub Pages specific configuration
export default defineConfig({
  base: '/portfolio/', // Replace with your repository name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});