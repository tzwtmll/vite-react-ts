import { StyleConfig } from '@/types'

import * as ActionType from './actionType'
// 切换antd 语言
export const changeLanguage = (lang: keyof StyleConfig['lang']) => ({
  type: ActionType.CHANGE_LANGUAGE,
  data: lang
})
// 设置 colorPrimary
export const setColorPrimary = (color: keyof StyleConfig['colorPrimary']) => ({
  type: ActionType.SET_ANTD_COLOR_PRIMARY,
  data: color
})
