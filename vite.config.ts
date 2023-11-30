import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import pxtorem from 'postcss-pxtorem';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  base: './', // 打包路径
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5, // 这里写设计稿的宽度/10即可
          // vant默认是37.5，如果是使用了vant的话可以像下面这样写
          // rootValue(res) {
          //   return res.file.indexOf("vant") !== -1 ? 37.5 : 75;
          // },
          propList: ['*'], // 需要转换的属性，默认转换所有属性
          selectorBlackList: [], // CSS选择器黑名单，防止部分选择器被转换
          exclude: /\/node_modules\//i, // 忽略包文件转换rem
        })
      ]
    }
  },
  server: {
    // port: 3333, // 启动端口
    // open: true,
    // host: "192.168.124.34",
    // proxy: {
    //   // 选项写法
    //   "/api": "http://:80", //代理网址
    // },
    // cors: true,
  },
})
