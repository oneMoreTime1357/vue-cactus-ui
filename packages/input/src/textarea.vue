<template>
  <div
    class="c-textarea"
    :class="[
      inputSize ? 'c-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
      },
      $attrs.class,
    ]"
    :style="$attrs.style"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <textarea
      ref="textarea"
      class="c-textarea__inner"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :style="textareaStyle"
      :placeholder="placeholder"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
    >
    </textarea>
    <span
      v-if="showWordLimit"
      class="c-input__count"
    >
      <span class="c-input__count-inner">
        {{ textLength }}/{{ upperLimit }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  shallowRef,
  computed,
  PropType,
  watch,
  nextTick,
} from '@vue/composition-api'
import inputProps from './inputProps'
import inputEvents from './inputEvents'
import calcTextareaHeight from './calcTextareaHeight'
import VueTypes from 'vue-types'

export default defineComponent({
  name: 'CTextarea',
  props: {
    ...inputProps,
    rows: VueTypes.number.def(2),
    maxRows: VueTypes.number,
  },
  setup(props, ctx) {
    const textarea = ref(null)
    const _textareaCalcStyle = shallowRef({})

    const inputSize = computed(() => props.size)
    const inputDisabled = computed(() => props.disabled)
    const inputVal = computed(() => textarea.value)

    const upperLimit = computed(() => ctx.attrs.maxlength)

    const textLength = computed(() => {
      return typeof props.value === 'number'
        ? String(props.value).length
        : (props.value || '').length
    })

    const {
      hovering,
      focused,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      setNativeInputValue,
      handleFocus,
      handleBlur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
    } = inputEvents(props, ctx, inputVal)

    const textareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
    }))

    const resizeTextarea = () => {
      const { rows, maxRows } = props

      const minRows = rows
      _textareaCalcStyle.value = calcTextareaHeight(
        textarea.value,
        minRows,
        maxRows,
      )
    }

    onMounted(() => {
      setNativeInputValue()
      // updateIconOffset()
      nextTick(resizeTextarea)
    })

    watch(
      () => props.value,
      (val) => {
        nextTick(resizeTextarea)
        // if (props.validateEvent) {
        //   elFormItem.formItemMitt?.emit('el.form.change', [val])
        // }
      },
    )

    return {
      textarea,
      inputSize,
      inputDisabled,
      textareaStyle,
      upperLimit,
      textLength,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      setNativeInputValue,
      handleFocus,
      handleBlur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
    }
  },
})
</script>
