/*
 * @Author: wangrui
 * @Description: index路由
 * @Date: 2022-08-18 19:51:47
 * @LastEditors: wangrui
 * @LastEditTime: 2022-08-25 15:07:38
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/Index/index.vue'),
    meta: {
      keepalive: true
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/Index/test.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
