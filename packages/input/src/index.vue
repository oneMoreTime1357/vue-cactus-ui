<template>
  <div
    class="c-input"
    :class="[
      inputSize ? 'c-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'el-input--prefix': prefixIcon,
        'el-input--suffix': suffixIcon || clearable || showPassword,
      },
    ]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- 前置元素 -->
    <div v-if="$slots.prepend" class="c-input-group__prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="c-input__inner"
      ref="input"
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :readonly="readonly"
      :placeholder="placeholder"
      :disabled="inputDisabled"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
    />
    <!-- 前置内容 -->
    <span v-if="prefixIcon" class="c-input__prefix">
      <i v-if="prefixIcon" :class="['c-input__icon', prefixIcon]"></i>
    </span>
    <!-- 后置内容 -->
    <span v-if="getSuffixVisible()" class="c-input__suffix">
      <span class="c-input__suffix-inner">
        <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
          <!-- <slot name="suffix"></slot> -->
          <i v-if="suffixIcon" :class="['c-input__icon', suffixIcon]"></i>
        </template>
        <i
          v-if="showClear"
          class="c-input__icon c-icon-error c-input__clear"
          @mousedown.prevent
          @click="handleClear"
        ></i>
        <i
          v-if="showPwdVisible"
          class="c-input__icon el-icon-view c-input__clear"
          @click="handlePasswordVisible"
          >eye</i
        >
        <span v-if="isWordLimitVisible" class="c-input__count">
          <span class="c-input__count-inner">
            {{ textLength }}/{{ upperLimit }}
          </span>
        </span>
      </span>
      <!-- <i
        v-if="validateState"
        :class="['c-input__icon', 'c-input__validateIcon', validateIcon]"
      ></i> -->
    </span>
    <!-- 后置元素 -->
    <div v-if="$slots.append" class="c-input-group__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  nextTick,
  onMounted,
  watch,
} from '@vue/composition-api'
import inputProps from './inputProps'
import inputEvents from './inputEvents'

export default defineComponent({
  name: 'CInput',
  props: {
    ...inputProps,
  },
  setup(props, ctx) {
    const input = ref(null)
    const passwordVisible = ref(false)

    const inputVal = computed(() => input.value)
    const inputDisabled = computed(() => props.disabled)
    const inputSize = computed(() => props.size)
    const nativeInputValue = computed(() =>
      props.value === null || props.value === undefined
        ? ''
        : String(props.value),
    )

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

    const showClear = computed(() => {
      return (
        props.clearable &&
        !inputDisabled.value &&
        !props.readonly &&
        nativeInputValue.value &&
        (focused.value || hovering.value)
      )
    })

    const showPwdVisible = computed(() => {
      return (
        props.showPassword &&
        !inputDisabled.value &&
        !props.readonly &&
        (!!nativeInputValue.value || focused.value)
      )
    })

    const isWordLimitVisible = computed(() => {
      return (
        props.showWordLimit &&
        ctx.attrs.maxlength &&
        (props.type === 'text' || props.type === 'textarea') &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword
      )
    })

    const upperLimit = computed(() => ctx.attrs.maxlength)

    const textLength = computed(() => {
      return typeof props.value === 'number'
        ? String(props.value).length
        : (props.value || '').length
    })

    onMounted(() => {
      setNativeInputValue()
      // updateIconOffset()
    })

    const getSuffixVisible = () => {
      return (
        ctx.slots.suffix ||
        props.suffixIcon ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value
      )
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const focus = () => {
      // see: https://github.com/ElemeFE/element/issues/18573
      nextTick(() => {
        inputVal.value.focus()
      })
    }

    watch(nativeInputValue, () => {
      setNativeInputValue()
    })

    const handleClear = () => {
      ctx.emit('input', '')
      ctx.emit('change', '')
      ctx.emit('clear')
    }

    return {
      input,
      inputSize,
      inputDisabled,
      getSuffixVisible,
      showPwdVisible,
      passwordVisible,
      upperLimit,
      textLength,
      showClear,
      handleClear,
      isWordLimitVisible,
      handlePasswordVisible,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      onMouseLeave,
      onMouseEnter,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
