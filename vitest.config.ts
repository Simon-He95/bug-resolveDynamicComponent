/*
 * @Author: LiQingYuan
 * @Date: 2022-07-19 16:19:03
 * @LastModifiedBy: LiQingYuan
 * @LastEditors: LiQingYuan
 * @LastEditTime: 2022-07-19 16:23:46
 * @Description:
 */
/// <reference types='vitest'/></reference>
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
