import { ref, nextTick, computed, SetupContext } from '@vue/composition-api'
import { inputPropType } from './inputProps'

export default function (props: inputPropType, ctx: SetupContext, inputVal) {
  const isComposing = ref(false)
  const hovering = ref(false)
  const focused = ref(false)

  const nativeInputValue = computed(() =>
    props.value === null || props.value === undefined
      ? ''
      : String(props.value),
  )

  const handleCompositionStart = () => {
    isComposing.value = true
  }

  const handleCompositionUpdate = (event: MouseEvent) => {
    // const text = event.target.value
    // const lastCharacter = text[text.length - 1] || ''
    isComposing.value = true
  }

  const handleCompositionEnd = (event: MouseEvent) => {
    if (isComposing.value) {
      isComposing.value = false
      handleInput(event)
    }
  }

  const handleInput = (event: MouseEvent) => {
    const { value } = event.target
    // should not emit input during composition
    if (isComposing.value) return

    ctx.emit('input', value)
    ctx.emit('change', event.target.value)

    // ensure native input value is controlled
    nextTick(setNativeInputValue)
  }

  const setNativeInputValue = () => {
    const input = inputVal.value
    if (!input || input.value === nativeInputValue.value) return
    input.value = nativeInputValue.value
    console.log(inputVal)
  }

  const handleFocus = (event: MouseEvent) => {
    focused.value = true
    ctx.emit('focus', event)
  }

  const handleBlur = (event: MouseEvent) => {
    focused.value = false
    ctx.emit('blur', event)
    // if (props.validateEvent) {
    //   elFormItem.formItemMitt?.emit('el.form.blur', [props.modelValue])
    // }
  }

  const onMouseLeave = (e: MouseEvent) => {
    hovering.value = false
    ctx.emit('mouseleave', e)
  }

  const onMouseEnter = (e: MouseEvent) => {
    hovering.value = true
    ctx.emit('mouseenter', e)
  }

  const handleKeydown = (e: MouseEvent) => {
    if (e.keyCode === 13) {
      ctx.emit('pressEnter', e)
    }
    ctx.emit('keydown', e)
  }

  return {
    isComposing,
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
  }
}
