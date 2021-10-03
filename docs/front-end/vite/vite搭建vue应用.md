# vite搭建vue应用

## vite简介

Vite (法语意为 "快速的"，发音 /vit/) 是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

- 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
- 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。



## 搭建项目

**兼容性注意**

Vite 需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。



查看npm版本

```shell
npm -v
```

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1625885549496-e824e5c7-1a36-483d-a481-a9dc2bb16444.png)



```shell
# npm 6.x
npm init @vitejs/app vite-vue-demo --template vue

# npm 7+, 需要额外的双横线：
npm init @vitejs/app vite-vue-demo -- --template vue

# yarn
yarn create @vitejs/app vite-vue-demo --template vue
```

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1625885673536-b3e84441-3289-48a6-a876-5c5fc0ffd03f.png)



package.json里多出两个包

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1625885819899-ad1ed6d5-46f9-45bf-bbcd-cd07930a6a88.png)



### 运行项目

```shell
cd vite-vue-demo
npm i
npm run dev
```



### 整合UI库（ElementPlus）



安装element-plus

```shell
npm install element-plus --save
```

全部引入

```shell
import { createApp } from 'vue'
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
```





按需引入

```shell
npm install vite-plugin-style-import -D
```



## 坑

1. 不能使用require引入图片
2. 