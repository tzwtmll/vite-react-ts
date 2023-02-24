import loadable from '@loadable/component'
import { Spin } from 'antd'
import { Navigate } from 'react-router-dom'

import Error from '@/pages/error'

import auto from './auto'
// 加载组件
type LoadingComponent = () => Promise<React.ReactNode>
export interface RouterInfo {
  components: LoadingComponent | React.ReactNode
  path: string
  key?: string
  label?: string
  keepalive?: string
  [keyName: string]: any
}
const defaultRouter: RouterInfo[] = [
  {
    path: '/',
    components: <Navigate to="/list/home" replace />
  },
  {
    path: '/result/404',
    components: <Error />
  },
  {
    path: '*',
    label: '页面不存在',
    components: <Error />
  }
]
const autoList: RouterInfo[] = []
// 加载样式
const fallbackStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 500,
  fontSize: 24
}
auto.forEach((item) => {
  const { components, ...anyProps } = item
  // 通过路径生成dom
  const Com = loadable(components, {
    fallback: <Spin style={fallbackStyle} tip="页面加载中..." />
  })
  const info = { ...anyProps, components: <Com /> }
  autoList.push(info)
})
const list: RouterInfo[] = [...autoList, ...defaultRouter]
list.forEach((t) => {
  t.key = t.path
})
export default list
