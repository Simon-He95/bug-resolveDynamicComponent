/*
 * @Author: wangrui
 * @Description: vite配置文件
 * @Date: 2022-08-11 18:04:25
 * @LastEditors: wangrui
 * @LastEditTime: 2022-09-28 17:15:38
 */
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import eslintPlugin from 'vite-plugin-eslint'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    // eslintPlugin({
    //   cache: false // 防止eslint校验缓存
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    vueJsx()
  ],
  server: {
    port: 6688, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name].js',
        entryFileNames: 'static/js/[name].js',
        assetFileNames: 'static/[ext]/[name].[ext]',
      }
    }
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
