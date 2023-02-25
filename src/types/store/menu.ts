export interface Routers {
  label: string
  path: string
  key?: string
  parentkey?: string
  children?: any
  icon?: React.ReactNode
}
export interface MenuData {
  menuInfo: Routers[]
}
export interface MenuAction {
  type: string
  data: Routers[]
}
