import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import info from '@/components/info'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ],
  mode: 'history'
}
)
// 路由、导航/守卫
// 在路由配置生效之前 会先来到下面方法的cb
// to 将要生效的路由配置对象
// from 当前的路由配置对象
// next 方法 next() 会继续执行路由配置和组件渲染
// router.beforeEach((to, from, next) => {
//   // console.log(to, from)
//   // 如果要去的是login next()
//   if (to.path === '/login') {
//       next()
//   } else {

//       // 如果去的不是login
//       // 判断token token存在next()
//       const token = localStorage.getItem('token')
//       if (!token) {
//           // 回到登录
//           Message.warning('请先登录')
//           router.push({
//               name: 'login'
//           })
//           return
//       }
//       next()
//   }
// })
export default router
