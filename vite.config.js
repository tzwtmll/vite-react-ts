import { defineConfig } from 'vite'

import viteBase from './config/vite.config.base'
import viteDev from './config/vite.config.dev'
import viteMock from './config/vite.config.mock'
import viteProd from './config/vite.config.prod'
const configEnv = {
  development: () => Object.assign(viteBase, viteDev),
  production: () => Object.assign(viteBase, viteProd),
  mock: () => Object.assign(viteBase, viteMock)
}

export default defineConfig(({ mode }) => {
  return configEnv[mode]()
})
