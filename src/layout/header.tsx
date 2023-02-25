/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-25 16:37:16
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-25 17:31:43
 * @Description: layout头部
 */
import { Button, Layout, Modal, Radio } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import Shaders from '@/components/Shaders'
import { changeLanguage, setColorPrimary } from '@/store/action'
import { StyleConfig } from '@/types'
const { Header } = Layout
function LayoutHeader() {
  // antd语言
  const [locale, setLocale] = useState(enUS)
  // 着色器图弹窗
  const [colorPrimaryVisible, setColorPrimaryVisible] = useState<boolean>(false)
  const dispatch = useDispatch()
  /**
   * @description 设置全局状态
   * @param {*} lang
   * @return {Function} dispatch
   */
  const setLanguage = useCallback(
    (lang: keyof StyleConfig['lang']) => dispatch(changeLanguage(lang)),
    [dispatch]
  )
  const setColorPrimaryDispatch = useCallback(
    (color: keyof StyleConfig['colorPrimary']) =>
      dispatch(setColorPrimary(color)),
    [dispatch]
  )
  /**
   * @description 修改主题语言与颜色
   * @param {*}
   */
  const changeLocale = (e) => {
    const localeValue = e.target.value
    setLocale(localeValue)
    // antd语言
    setLanguage(localeValue)
    // 全局自定义语言环境
    if (localeValue.locale === 'en') {
      dayjs.locale('en')
    } else {
      dayjs.locale('zh-cn')
    }
  }
  // const
  return (
    <Header className="header">
      <Radio.Group value={locale} onChange={changeLocale}>
        <Radio.Button key="en" value={enUS}>
          English
        </Radio.Button>
        <Radio.Button key="cn" value={zhCN}>
          中文
        </Radio.Button>
      </Radio.Group>
      <Button onClick={() => setColorPrimaryVisible(!colorPrimaryVisible)}>
        调整主题颜色
      </Button>
      {/* 作色器 */}
      <Shaders
        visible={colorPrimaryVisible}
        onOk={(color) => {
          setColorPrimaryDispatch(color as keyof StyleConfig['colorPrimary'])
          setColorPrimaryVisible(false)
        }}
        onCancel={() => setColorPrimaryVisible(!colorPrimaryVisible)}
      />
    </Header>
  )
}

export default LayoutHeader
