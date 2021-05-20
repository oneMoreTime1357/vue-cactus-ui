<template>
  <div
    class="c-mask"
    :style="[zIndex ? { zIndex: zIndex } : '']"
    @click="onMaskClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CMask',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
    },
  },
  setup(props, ctx) {
    const onMaskClick = (e: MouseEvent) => {
      // due to these two value were set only when props.mask is true
      // so there is no need to do any extra judgment here.
      // if and only if
      // if (mousedownTarget && mouseupTarget) {
      ctx.emit('click', e)
      // }
      // mousedownTarget = mouseupTarget = false
    }

    return {
      onMaskClick,
    }
  },
})
</script>

<style lang="scss">
@import 'packages/theme/var/index';
@import 'packages/theme/mixins/mixins';

@include b(mask) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2001;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
</style>
