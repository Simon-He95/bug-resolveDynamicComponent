/*
 * @Author: wangrui
 * @Description: 主
 * @Date: 2022-08-11 18:04:24
 * @LastEditors: wangrui
 * @LastEditTime: 2022-08-22 19:54:34
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/routers/index'
import { createPinia } from 'pinia'
createApp(App).use(createPinia()).use(Router).mount('#app')
