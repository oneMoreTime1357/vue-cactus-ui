<template>
  <i :class="`c-icon-${name}`"></i>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
