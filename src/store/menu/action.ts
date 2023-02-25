import { Routers } from '@/types'

import * as ActionType from './actionType'
export const saveMenuData = (route: Routers[]) => ({
  type: ActionType.SAVA_MENU_DATA,
  data: route
})
