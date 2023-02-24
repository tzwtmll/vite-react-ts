import createHash from 'hash.js'
import { defineConfig, version } from 'vite'

import { resolvePath } from './vite.config.base'
export default defineConfig({
  mode: 'production',
  build: {
    rollupOptions: {
      input: {
        index: resolvePath('../index.html'),
        app: resolvePath('../src/main.tsx')
      },
      output: {
        // 静态资源
        assetFileNames: (assetInfo) => {
          let extType = assetInfo?.name.split('.')[1] ?? ''
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `static/${extType}/[name]-[hash][extname]`
        },
        // 入口文件
        entryFileNames: (chunk) => {
          if (chunk.name === 'app') {
            return `static/js/[name].${version}.js`
          }
          return `static/js/[name].js`
        },
        // chunk
        chunkFileNames: (chunkInfo) => {
          const hash = createHash('md5')
            .update(Object.values(chunkInfo.moduleIds).join())
            .digest('hex')
            .substring(0, 8)
          return `static/js/${hash}.chunk.js`
        }
      }
    }
  }
})
