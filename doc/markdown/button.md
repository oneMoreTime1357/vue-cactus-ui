# Button 按钮

常用的操作按钮。

## 基础用法

按钮有五种类型：默认按钮、主要按钮、危险按钮。

:::demo

```html
<template>
  <c-button type="default"> 默认按钮 </c-button>
  <c-button type="primary"> 主要按钮 </c-button>
  <c-button type="danger" @click="onButtonClick"> 危险按钮 </c-button>
  <br />
  <br />
  <c-button type="primary" plain> 主要按钮 </c-button>
  <c-button type="danger" @click="onButtonClick" plain> 危险按钮 </c-button>
  <br />
  <br />
  <c-button type="default" disabled> 默认按钮 </c-button>
  <c-button type="primary" disabled> 主要按钮 </c-button>
  <c-button type="danger" @click="onButtonClick" disabled> 危险按钮 </c-button>
</template>
<script>
  export default {
    methods: {
      onButtonClick() {
        alert('Hello Button')
      },
    },
  }
</script>
```

:::

## 不同尺寸

Button 组件提供四种尺寸：默认、中等、小型

:::demo

```html
<template>
  <c-button> 默认按钮 </c-button>
  <c-button size="medium"> 中等按钮 </c-button>
  <c-button type="small"> 小型按钮 </c-button>
</template>
```

:::

## Props

| 参数     | 说明                                            | 类型    | 默认值  |
| :------- | :---------------------------------------------- | :------ | :------ |
| type     | 按钮类型，可选择值`default`,`primary`,`warning` | String  | default |
| size     | 按钮尺寸，可选择值`medium`,`small`              | String  | default |
| disabled | 是否禁用                                        | Boolean | false   |
