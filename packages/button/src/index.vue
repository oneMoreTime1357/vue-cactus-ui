<template>
  <button
    class="c-button"
    :class="[
      type ? 'c-button--' + type : '',
      size ? 'c-button--' + buttonSize : '',
      {
        'is-round': round,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    :style="style"
    @click="handleClick"
  >
    <i v-if="loading" class="c-icon-loading"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import buttonProps from './buttonTypes'
import { isNumber } from '../../_utils/utils'

export default defineComponent({
  name: 'CButton',
  props: {
    ...buttonProps,
  },
  emits: ['click'],
  setup(props, ctx) {
    const normalizeWidth = () => {
      if (isNumber(props.width)) return `${props.width}px`
      else return props.width
    }

    const style = computed(() => {
      const style = {}
      if (props.width) {
        style.width = normalizeWidth()
      }
      return style
    })

    const buttonSize = computed(() => {
      return props.size
    })

    const handleClick = (evt: any) => {
      ctx.emit('click', evt)
    }

    return {
      style,
      buttonSize,
      handleClick,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
