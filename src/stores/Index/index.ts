/*
 * @Author: wangrui
 * @Description: index pinia
 * @Date: 2022-08-19 19:07:21
 * @LastEditors: wangrui
 * @LastEditTime: 2022-08-19 19:10:09
 */
import { defineStore } from 'pinia'

export const useIndex = defineStore('index', {
  state: () => {
    return {
      welcomeMsg: 'welcome'
    }
  },
  actions: {
    setWelcomeMsg (welcomeMsg:string) {
      this.welcomeMsg = welcomeMsg
    }
  }
})