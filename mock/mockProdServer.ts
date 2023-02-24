import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import mockModule from './index'
export function setupProdMockServer() {
  createProdMockServer([...mockModule])
}
