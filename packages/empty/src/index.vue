<template>
  <div class="c-empty">
    <div class="c-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" />
      <slot v-else name="image">
        <imgEmpty></imgEmpty>
      </slot>
    </div>
    <div class="c-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ description }}</p>
    </div>
    <div v-if="$slots.default" class="c-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { string, oneOfType } from 'vue-types'
import imgEmpty from './img-empty.vue'
import { isNumber } from '../../_utils/utils'

export default defineComponent({
  name: 'CEmpty',
  components: {
    imgEmpty,
  },
  props: {
    image: string(),
    imageWidth: oneOfType([String, Number]),
    description: string().def('暂无数据'),
  },
  setup(props) {
    const normalizeWidth = () => {
      if (isNumber(props.imageWidth)) return `${props.imageWidth}px`
      else return props.imageWidth
    }

    const imageStyle = computed(() => {
      return {
        width: normalizeWidth(),
      }
    })

    return {
      imageStyle,
    }
  },
})
</script>
