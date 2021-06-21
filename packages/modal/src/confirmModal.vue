<template>
  <c-modal
    v-model="visible"
    v-bind="$attrs"
    :size="size"
    :title="title"
    :titleAlign="titleAlign"
    :closeable="closeable"
    footer=""
    :maskClosable="maskClosable"
    :zIndex="zIndex"
  >
    <template #title>
      <div
        v-if="type === 'confirm'"
        class="c-modal__title"
      >
        <span>{{ title }}</span>
      </div>
      <div
        v-else
        class="c-modal__confirmtitle"
      >
        <component :is="iconElement" />
        <span class="c-modal__confirmtitle--icontitle">{{ title }}</span>
      </div>
    </template>

    <div
      class="c-modal__confirmcontent"
      :style="{ textAlign: contentAlign }"
    >
      <span v-if="!dangerouslyUseHTMLString">{{ message }}</span>
      <div
        v-else
        v-html="message"
      >{{ message }}</div>
    </div>
    <template #footer>
      <actionBtn
        v-if="showCancel"
        size="small"
        :type="cancelType ? cancelType : 'default'"
        :closeModal="close"
        :width="footButtonWidth"
        :actionFn="onCancel"
      >{{ cancelText ? cancelText : '取 消' }}</actionBtn>
      <actionBtn
        :type="confirmType ? confirmType : 'primary'"
        size="small"
        :closeModal="close"
        :width="footButtonWidth"
        :actionFn="onConfirm"
      >{{ confirmText ? confirmText : '确 定' }}</actionBtn>
    </template>
  </c-modal>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import Modal from './index.vue'
import actionBtn from './actionBtn.vue'
import { modalFuncProps } from './modalProps'
import IconSuccess from './iconSuccess.vue'
import IconError from './iconError.vue'

const IconMap: Indexable<string> = {
  success: 'icon-success',
  error: 'icon-error',
}

export default defineComponent({
  inheritAttrs: false,
  components: {
    CModal: Modal,
    actionBtn,
    IconSuccess,
    IconError,
  },
  props: {
    ...modalFuncProps,
  },
  emits: ['action'],
  setup(props) {
    const iconElement = computed(() => {
      const type = props.type
      return type && IconMap[type] ? IconMap[type] : ''
    })

    return {
      iconElement,
    }
  },
})
</script>
