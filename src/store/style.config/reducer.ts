/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-25 16:57:53
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-25 16:57:53
 * @Description:
 */
import en_US from 'antd/locale/en_US'

import { StyleAction, StyleConfig } from '@/types'

import * as ActionType from './actionType'
const initGlobalState: StyleConfig = {
  // 默认英文
  lang: en_US,
  colorPrimary: 'rgb(162, 110, 244)'
}
const reducer = (state = initGlobalState, action: StyleAction) => {
  const { type, data } = action
  switch (type) {
    case ActionType.CHANGE_LANGUAGE: {
      return { ...state, lang: data }
    }
    case ActionType.SET_ANTD_COLOR_PRIMARY: {
      return { ...state, colorPrimary: data }
    }
    default: {
      return state
    }
  }
}
export default reducer
