import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { resolvePath } from './vite.config.base'
export default defineConfig({
  mode: 'mock',
  plugins: [
    viteMockServe({
      mockPath: 'mock'
    })
  ],
  server: {
    port: '9000',
    proxy: {
      '/api': {
        rewrite: (_path) => _path.replace(/^\/api/, '/mock')
      }
    }
  }
})
