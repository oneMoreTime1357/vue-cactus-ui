# vue-cactus-ui

一个ui组件库

技术栈
- vue2
- @vue/composition-api 
- webpack 
- typescript

基于vue2开发的一个组件库，使用vue2和vue3最新的特性组合API，

**为什么使用组合API而不是用vue3开发？**

原因是项目中有很多vue2的项目，为了达到兼容所以使用了vue2和组合API的形式。

**Typescript**

使用Typescript也是为了避免一些类型错误

## use

**调试启动**

```shell
yarn run dev
```

**组件build打包**
执行此命令会把组件以及样式库作为输出

```shell
yarn run build:ui
```

**文档build**

```shell
yarn run build:doc
```

## 现有组件

* button
* input
* modal
* icon
* empty

## 文档发布

编辑好组件的文档，执行如下命令

```shell
yarn run deploy:doc
```

文档静态资源托管到GitHub pages上，可以访问如下地址查看
[vue-cactus-ui doc](https://onemoretime1357.github.io/vue-cactus-ui/#/)