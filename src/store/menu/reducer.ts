import * as ActionType from './actionType'
import { MenuData, MenuAction } from '@/types'

const menuData: MenuData = {
  menuInfo: []
}
const reducer = (state = menuData, action: MenuAction) => {
  const { type, data } = action
  switch (type) {
    case ActionType.SAVA_MENU_DATA: {
      return { ...state, menuInfo: data }
    }
    //需要添加默认值，没有报错
    default: {
      return state
    }
  }
}
export default reducer
