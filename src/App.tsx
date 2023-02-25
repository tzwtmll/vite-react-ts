/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-25 16:56:58
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-25 17:05:49
 * @Description: App
 */
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'

import { getLanguageEnv } from '@/store/getter/styleConfig'
import { getColorPrimary } from '@/store/getter/styleConfig'
import Layout from './layout'
export default function App() {
  const locale = useSelector(getLanguageEnv)
  const colorPrimary = useSelector(getColorPrimary)
  console.log(locale)
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPrimary
        }
        // algorithm: theme.darkAlgorithm
      }}
      locale={locale}
    >
      <Layout />
    </ConfigProvider>
  )
}
