# input 输入框

## 基础用法

:::demo

```html
<template>
  <c-input v-model="input" placeholder="请输入内容"></c-input>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
      }
    },
  }
</script>
```

:::

## 禁用状态

:::demo

```html
<template>
  <c-input v-model="input" placeholder="请输入内容" disabled></c-input>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
      }
    },
  }
</script>
```

:::

## 尺寸

默认大小，medium，small 两种尺寸

:::demo

```html
<template>
  <c-input v-model="input" placeholder="请输入内容"></c-input>
  <c-input v-model="input" placeholder="请输入内容" size="small"></c-input>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
      }
    },
  }
</script>
```

:::

## 展示字数限制

:::demo

```html
<template>
  <c-input
    v-model="input"
    placeholder="请输入内容"
    maxlength="10"
    showWordLimit
  ></c-input>
  <br />
  <br />
  <c-textarea
    v-model="textarea"
    placeholder="请输入内容"
    maxlength="10"
    showWordLimit
  ></c-textarea>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        textarea: '',
      }
    },
  }
</script>
```

:::

## textarea

可通过 rows 设置行数，默认两行

:::demo

```html
<template>
  <c-textarea v-model="input" placeholder="请输入内容"></c-textarea>
  <br />
  <br />
  <c-textarea v-model="input1" placeholder="请输入内容" :rows="3"></c-textarea>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        input1: '',
      }
    },
  }
</script>
```

:::

## Props

### Input

| 参数          | 说明                              | 类型    | 默认值  |
| :------------ | :-------------------------------- | :------ | :------ |
| type          | text，和其他原生 input 的 type 值 | String  | text    |
| size          | 可选择值`medium`,`small`          | String  | default |
| disabled      | 是否禁用                          | Boolean | false   |
| placeholder   | 输入框占位文本                    | String  | -       |
| showWordLimit | 是否显示输入字数统计              | String  | -       |
| clearable     | 是否可清空                        | String  | -       |
| maxlength     | 是否可清空                        | String  | -       |
| prefixIcon    | 前置 icon                         | String  | -       |
| suffixIcon    | 后置 icon                         | String  | -       |
| readonly      | 只读                              | String  | -       |
| showPassword  | 显示密码隐藏打开的图标            | String  | -       |

### Textarea

| 参数          | 说明                 | 类型   | 默认值 |
| :------------ | :------------------- | :----- | :----- |
| rows          | 展示几行高度         | Number | 2      |
| maxRows       | 最大行数             | Number | -      |
| showWordLimit | 是否显示输入字数统计 | String | -      |

### 事件

| 参数       | 说明                                        | 参数           |
| :--------- | :------------------------------------------ | :------------- | ------- |
| focus      | 在 Input 获得焦点时触发                     | (event: Event) |
| blur       | 在 Input 失去焦点时触发                     | (event: Event) |
| change     | 输入框内容变化时的回调                      | (value: string | number) |
| input      | 输入框内容变化时的回调                      | (value: string | number) |
| clearable  | 在点击由 clearable 属性生成的清空按钮时触发 | -              |
| pressEnter | 用户按下回车键调用                          | (event: Event) |
