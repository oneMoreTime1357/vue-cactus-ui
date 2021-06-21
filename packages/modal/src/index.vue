<template>
  <transition
    name="modal-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <c-mask
      v-show="visible"
      :z-index="zIndex"
      @click="onModalClick"
    >
      <div
        :class="['c-modal', size ? 'c-modal--' + size : '', customClass]"
        :style="style"
        @click.stop=""
      >
        <div
          class="c-modal__header"
          :style="[titleAlign ? { textAlign: titleAlign } : '']"
        >
          <slot name="title">
            <span class="c-modal__title">
              {{ title }}
            </span>
          </slot>
          <button
            v-if="closeable"
            aria-label="close"
            class="c-modal__headerbtn"
            type="button"
            @click="handleClose"
          >
            <i class="c-modal__close c-icon-close-bold"></i>
          </button>
        </div>
        <div class="c-modal__body">
          <slot></slot>
        </div>
        <div
          v-if="$slots.footer"
          class="c-modal__footer"
        >
          <slot name="footer"></slot>
        </div>
        <div
          v-else-if="footer === undefined"
          class="c-modal__footer"
        >
          <c-button
            size="small"
            @click="handleCancel"
          >{{
            cancelText ? cancelText : '取 消'
          }}</c-button>
          <c-button
            type="primary"
            size="small"
            :loading="confirmLoading"
            @click="handleConfirm"
          >{{ confirmText ? confirmText : '确 定' }}</c-button>
        </div>
      </div>
    </c-mask>
  </transition>
</template>
<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  onMounted,
  computed,
} from '@vue/composition-api'
import { modalProps } from './modalProps'
import Mask from './mask.vue'
import Button from '../../button'
import { useModal } from '../../_hooks'
import { isNumber } from '../../_utils/utils'

export default defineComponent({
  name: 'CModal',
  components: {
    'c-mask': Mask,
    'c-button': Button,
  },
  props: {
    ...modalProps,
  },
  emits: ['open', 'opened', 'closed', 'cancel', 'confirm'],
  setup(props, ctx) {
    const visible = ref(false)

    const normalizeWidth = () => {
      if (isNumber(props.width)) return `${props.width}px`
      else return props.width
    }

    const style = computed(() => {
      const style = {}
      // if (!props.fullscreen) {
      style.marginTop = props.top
      if (props.width) {
        style.width = normalizeWidth()
      }
      // }
      return style
    })

    watch(
      () => props.value,
      (val) => {
        if (val) {
          ctx.emit('open')
          open()
        } else {
          if (visible.value) {
            close()
          }
        }
      },
    )

    if (props.closeOnPressEscape) {
      useModal(
        {
          handleClose,
        },
        visible,
      )
    }

    onMounted(() => {
      if (props.value) {
        open()
      }
    })

    function open() {
      visible.value = true
    }

    function close() {
      visible.value = false
    }

    function onModalClick() {
      if (props.maskClosable) {
        handleClose()
      }
    }
    function handleClose() {
      close()
    }
    function afterEnter() {
      ctx.emit('opened')
    }

    function afterLeave() {
      ctx.emit('closed')
      ctx.emit('input', false)
    }

    // function beforeLeave() {
    //   ctx.emit('closed')
    // }

    function handleCancel() {
      ctx.emit('cancel')
    }

    function handleConfirm() {
      ctx.emit('confirm')
    }

    return {
      visible,
      style,
      onModalClick,
      handleClose,
      afterEnter,
      afterLeave,
      // beforeLeave,
      handleCancel,
      handleConfirm,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
