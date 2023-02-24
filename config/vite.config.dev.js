import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import ReactRouterGenerator from 'vite-plugin-react-router-generator'

import { resolvePath } from './vite.config.base'
export default defineConfig({
  mode: 'development',
  plugins: [
    ReactRouterGenerator({
      outputFile: resolvePath('../src/router/auto.js'),
      isLazy: true,
      comKey: 'components'
    }),
    createHtmlPlugin({
      inject: {
        // 导入到 html 中的变量
        data: {}
      }
    })
  ],
  server: {
    port: 8080
  }
})
