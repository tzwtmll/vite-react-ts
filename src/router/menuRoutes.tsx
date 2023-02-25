import { MailOutlined } from '@ant-design/icons'
import React from 'react'

import { Routers } from '@/types'
// interface Routers {
//   label: string
//   path: string
//   key?: string
//   parentkey?: string
//   children?: any
//   icon?: React.ReactNode
// }
// 一级展示展示页面
const menuRoutes: Routers[] = [
  {
    label: '列表页',
    path: '/list',
    icon: <MailOutlined />
  },
  {
    label: '详情页',
    path: '/details'
  },
  {
    label: '表单页',
    path: '/form'
  },
  {
    label: '结果页',
    path: '/result'
  },
  {
    label: '统计',
    path: '/statistics'
  }
]
menuRoutes.forEach((t) => {
  t.key = t.path
})
export default menuRoutes
