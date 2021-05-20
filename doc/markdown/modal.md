# Modal 对话框

## 基础用法

Modal 弹出一个对话框

:::demo

```html
<template>
  <c-button type="primary" @click="onClick">点击打开弹窗</c-button>
  <c-modal
    title="弹窗组件"
    v-model="showModal"
    top="100px"
    closeable
    @cancel="showModal = false"
    @confirm="confirmAction"
  >
    <span>我是一个弹窗</span>
  </c-modal>
</template>
<script>
  export default {
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      onClick() {
        this.showModal = true
      },
      confirmAction() {
        this.showModal = false
        console.log('弹窗确认')
      },
    },
  }
</script>
```

:::

## 自定义 footer

默认有确认取消按钮，可以通过属性修改上面的文字。可以自定义 footer，不需要`footer`时可以把`footer`设置为`null`。

:::demo

```html
<template>
  <c-button type="primary" @click="onClick">自定义footer</c-button>
  <c-modal
    title="弹窗组件"
    v-model="showModal"
    closeable
    :maskClosable="false"
    @cancel="showModal = false"
    @confirm="confirmAction"
  >
    <span>我是一个弹窗</span>
    <template #footer>
      <c-button type="danger" @click="showModal = false">知道了</c-button>
    </template>
  </c-modal>
</template>
<script>
  export default {
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      onClick() {
        this.showModal = true
      },
      confirmAction() {
        this.showModal = false
        console.log('弹窗确认')
      },
    },
  }
</script>
```

:::

## 尺寸

默认大小 medium, large w1000px, medium w618px, small w410px

:::demo

```html
<template>
  <c-button type="primary" @click="onClick('large')">large弹窗</c-button>
  <c-button type="primary" @click="onClick('medium')">medium弹窗</c-button>
  <c-button type="primary" @click="onClick('small')">small弹窗</c-button>
  <c-modal
    title="弹窗组件"
    v-model="showModal"
    closeable
    :size="size"
    @cancel="showModal = false"
    @confirm="confirmAction"
  >
    <span>我是一个{{ size }}弹窗</span>
  </c-modal>
</template>
<script>
  export default {
    data() {
      return {
        showModal: false,
        size: 'medium',
      }
    },
    methods: {
      onClick(size) {
        this.size = size
        this.showModal = true
      },
      confirmAction() {
        this.showModal = false
        console.log('弹窗确认')
      },
    },
  }
</script>
```

:::

## Confirm Modal

作为 confirm 确认弹窗使用，有三种类型 confirm，success，error，将 modal 组件引入，添加到 vue 的 prototype 属性上，就可以全局使用。

:::demo

```html
<template>
  <c-button @click="onClickConfirm">confirm</c-button>
  <c-button type="primary" @click="onClickSuccess">success</c-button>
  <c-button type="danger" @click="onClickError">error</c-button>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onClickConfirm() {
        this.$modal.confirm({
          title: '确认弹窗',
          content: '确认吗？',
          titleAlign: 'left',
          maskClosable: false,
        })
      },
      onClickSuccess() {
        this.$modal.success({
          title: '支付成功',
          content: '支付成功弹窗',
          showCancel: false,
          confirmText: '好 的',
          confirmType: 'danger',
        })
      },
      onClickError() {
        this.$modal.error({
          title: '操作失败',
          closeable: true,
          content: '请重新尝试',
          confirmText: '点击重试',
          onConfirm: () => {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
            }).catch(() => console.log('Oops errors!'))
          },
        })
      },
    },
  }
</script>
```

:::

## Props

| 参数               | 说明                                                      | 类型    | 默认值  |
| :----------------- | :-------------------------------------------------------- | :------ | :------ | ------------ |
| v-model            | 对话框是否可见                                            | boolean | -       |
| size               | 可选择值`large`,`medium`,`small`                          | String  | default |
| closable           | 是否显示右上角的关闭按钮                                  | Boolean | false   |
| footer             | 底部内容，当不需要默认底部按钮时，可以设为 :footer="null" | String  | slot    | 确定取消按钮 |
| title              | 标题                                                      | String  | -       |
| cancelText         | 取消按钮文字                                              | String  | 取消    |
| confirmText        | 确定按钮文字                                              | String  | 确定    |
| confirmLoading     | 确定按钮 loading                                          | Boolean | -       |
| maskClosable       | 点击蒙层是否允许关闭                                      | Boolean | true    |
| closeOnPressEscape | 是否支持键盘 esc 关闭                                     | Boolean | true    |
| zIndex             | 设置 Modal 的 z-index                                     | Number  | -       |
| customClass        | 自定义 class 名称                                         | String  | -       |
| titleAlign         | 标题 align，默认居左                                      | String  | -       |

## 事件

| 参数    | 说明                       | 回调参数 |
| :------ | :------------------------- | :------- |
| open    | Modal 打开的回调           | -        |
| opened  | Modal 打开动画结束时的回调 | -        |
| closed  | Modal 关闭动画结束时的回调 | -        |
| confirm | 点击确定按钮的回调         | -        |
| cancel  | 点击取消按钮的回调         | -        |

## Modal.method()

函数调用有三种类型

- Modal.confirm
- Modal.error
- Modal.confirm

| 参数               | 说明                                                             | 类型    | 默认值  |
| :----------------- | :--------------------------------------------------------------- | :------ | :------ |
| size               | 可选择值`large`,`medium`,`small`                                 | String  | small   |
| closable           | 是否显示右上角的关闭按钮                                         | Boolean | false   |
| title              | 标题                                                             | String  | -       |
| content            | 内容 string / VNode                                              | String  | -       |
| cancelText         | 取消按钮文字                                                     | String  | 取消    |
| confirmText        | 确定按钮文字                                                     | String  | 确定    |
| zIndex             | 设置 Modal 的 z-index                                            | Number  | -       |
| showCancel         | 是否显示取消按钮                                                 | Boolean | true    |
| titleAlign         | 标题 align，默认居中                                             | String  | center  |
| contentAlign       | 内容 align，默认居中                                             | String  | center  |
| cancelType         | 取消按钮类型                                                     | String  | default |
| confirmType        | 确认按钮类型                                                     | String  | primary |
| onConfirm          | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | String  | center  |
| onCancel           | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭     | String  | center  |
| maskClosable       | 点击蒙层是否允许关闭                                             | Boolean | true    |
| closeOnPressEscape | 是否支持键盘 esc 关闭                                            | Boolean | true    |
