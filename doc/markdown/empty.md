# Empty 空状态

空数据时占位提醒

## 基础用法

直接引用，使用默认 icon，以及默认文字

:::demo

```html
<template>
  <c-empty></c-empty>
</template>
```

:::

## 自定义图片

可使用 imgWidth 自定义图片的宽度

:::demo

```html
<template>
  <c-empty
    imageWidth="100px"
    image="https://ms-public.oss-cn-zhangjiakou.aliyuncs.com/cactus-h5-app/images/empty-img.png"
  ></c-empty>
</template>
```

:::

## 自定义文字

:::demo

```html
<template>
  <c-empty description="没有找到匹配的内容"></c-empty>
</template>
```

:::

## 自定义底部

使用默认插槽可在底部插入内容

:::demo

```html
<template>
  <c-empty>
    <c-button type="primary">首页</c-button>
  </c-empty>
</template>
```

:::

## Props

| 参数        | 说明                   | 类型            | 默认值   |
| :---------- | :--------------------- | :-------------- | :------- |
| image       | 图片地址，可自定义图片 | string/ v-slot  | 默认图片 |
| description | 自定义文字描述         | string/ v-slot  | 暂无数据 |
| imageWidth  | 自定义图片宽度         | string / number | 160px    |
