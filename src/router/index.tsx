import { cloneDeep } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { saveMenuData } from '@/store/menu/action'

import Intercept from './intercept'
import routerList, { RouterInfo } from './list'
import menuRoutes from './menuRoutes'
function Router() {
  const dispatch = useDispatch()
  const setStateMenuList = useCallback(
    (menu) => dispatch(saveMenuData(menu)),
    [dispatch]
  )
  const [showRouter, SetShowRouter] = useState<RouterInfo[]>([])
  useEffect(() => {
    // 用作后续权限
    let copyMenuRoute = cloneDeep(menuRoutes)
    let copyRouterList = cloneDeep(routerList)
    copyMenuRoute.forEach((router) => {
      let find = copyRouterList.filter((t) => {
        return t.parentkey === router.key
      })
      if (find) {
        if (find.length > 0) {
          router.children = find
        }
      }
    })
    SetShowRouter(copyRouterList)
    setStateMenuList(copyMenuRoute)
  }, [])
  return (
    <div>
      <Routes>
        {showRouter.map((route) => {
          let { key, path } = route
          return (
            <Route
              key={key}
              path={path}
              element={<Intercept {...route} pageKey={key} />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default Router
