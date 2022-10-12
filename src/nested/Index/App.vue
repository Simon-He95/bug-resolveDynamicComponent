<!--
 * @Author: wangrui
 * @Description: 入口页面
 * @Date: 2022-08-11 18:04:24
 * @LastEditors: wangrui
 * @LastEditTime: 2022-08-25 15:27:37
-->
<template>
<el-config-provider :locale="zhCn">
  <router-view v-slot="{Component }">
    <keep-alive>
      <component :is="Component" :key="getlevel1Name($route)"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
     <component :is="Component"  :key="getlevel1Name($route)"  v-if="!$route.meta.keepAlive" />
  </router-view>
</el-config-provider>
</template>
<script setup lang="ts">
import { RouteLocationNormalized } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 返回一级路由的名称 不会重新刷新缓存
const getlevel1Name = (route:RouteLocationNormalized) => {
  if (!Array.isArray(route.matched) || route.matched.length === 0) return route.name
  return route.matched[0].name
}
</script>

<style scoped>

</style>
