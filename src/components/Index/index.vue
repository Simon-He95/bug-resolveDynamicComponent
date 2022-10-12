<!--
 * @Author: wangrui
 * @Description: Index 首页
 * @Date: 2022-08-25 15:02:20
 * @LastEditors: wangrui
 * @LastEditTime: 2022-09-28 17:40:40
-->
<template>
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"/>
  </keep-alive>
  <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name"/>
</router-view>
</template>
<script lang="ts" setup>
</script>
