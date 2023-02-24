import { Layout, Menu } from 'antd'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
const { SubMenu } = Menu
const { Sider } = Layout
import type { MenuProps } from 'antd'
import { useSelector } from 'react-redux'

function SideMenu() {
  const nav = useNavigate()
  const menuInfo = useSelector((store: any) => store.menu.menuInfo)
  const items = useMemo(
    () => menuInfo.map((t) => !!t.children && t),
    [menuInfo]
  )
  return (
    <Sider theme="light" width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        onClick={(node) => {
          nav(node.key)
        }}
      />
    </Sider>
  )
}

export default SideMenu
