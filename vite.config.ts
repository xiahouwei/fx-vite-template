import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src"),
      'im': resolve(__dirname, "./src"),
      '$assets': resolve(__dirname, "./src/assets"),
      '$images': resolve(__dirname, "./src/assets/images")
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, 
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: false,
    port: 8096,
    open: true,
    proxy: {
      // 选项写法
      '/v2': {
        target: 'https://api.douban.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v2/, '/v2')
      }
    }
  }
})