<template>
  <c-button
    :type="type"
    :loading="loading"
    :size="size"
    @click="onClick"
  >
    <slot></slot>
  </c-button>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import VueTypes from 'vue-types'
import Button from '../../button'
import buttonProps from '../../button/src/buttonTypes'

export default defineComponent({
  components: {
    'c-button': Button,
  },
  props: {
    type: buttonProps.type,
    size: buttonProps.size,
    actionFn: VueTypes.func,
    closeModal: VueTypes.func,
    buttonProps: VueTypes.object,
  },
  setup(props, ctx) {
    const loading = ref(false)

    function onClick() {
      const { closeModal } = props
      if (props.actionFn) {
        // console.log(props.actionFn, closeModal, 6666666)
        let ret: any
        if (props.actionFn.length) {
          ret = props.actionFn(closeModal)
        } else {
          ret = props.actionFn()
          if (!ret) {
            props.closeModal()
          }
        }

        if (ret && ret.then) {
          loading.value = true
          ret.then(
            () => {
              loading.value = false
              props.closeModal()
            },
            (e: Event) => {
              console.error(e)
              loading.value = false
            },
          )
        }
      } else {
        props.closeModal()
      }
    }

    return {
      onClick,
      loading,
    }
  },
})
</script>
