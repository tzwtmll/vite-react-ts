/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-25 17:38:55
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-25 17:38:55
 * @Description: 配置文件
 */
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
import progress from 'vite-plugin-progress'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import tsconfigPaths from 'vite-tsconfig-paths'
export const resolvePath = (_path) => resolve(__dirname, _path)
function AntdLibImport() {
  return {
    libraryName: 'antd',
    esModule: true,
    resolveStyle: (name) => {
      return `antd/es/${name}/style/index`
    }
  }
}
export default defineConfig({
  plugins: [
    react(),
    progress(),
    checker({ typescript: true }),
    tsconfigPaths(),
    createStyleImportPlugin({ libs: [AntdLibImport()] }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolvePath('../src'),
      '~': resolvePath('../node_modules')
    },
    // 接收模块后缀
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.svg']
  },
  define: {
    MENU_PATH: `"path"`
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
        math: 'always',
        devSourcemap: true, //定位到源文件中
        // 全局导入
        additionalData: `@import "${resolvePath('../src/theme/var.less')}";`
      }
    }
  }
})
