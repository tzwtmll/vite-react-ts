// 本文件为脚本自动生成，请勿修改



      
const routes = [{
  path: '/list/home',
  label: '主页',
  parentkey: '/list',
  components: () => import("../pages/Home/index.tsx")
}, {
  path: '/details/power',
  label: '权限控制',
  parentkey: '/details',
  components: () => import("../pages/power/index.tsx")
}, {
  path: '/details/user',
  label: '用户',
  parentkey: '/details',
  components: () => import("../pages/User/index.tsx")
}];
      

      
export default routes