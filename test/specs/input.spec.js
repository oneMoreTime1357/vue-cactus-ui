import { ref } from '@vue/composition-api'
import { mount, shallowMount } from '@vue/test-utils'
import Input from '../../packages/input/src/index'
import Textarea from '../../packages/input/src/textarea'
import { sleep } from '../testUtils'

const _mount = (options) =>
  mount({
    components: {
      'c-input': Input,
    },
    ...options,
  })

const _mountTexarea = (options) =>
  mount({
    components: {
      'c-textarea': Textarea,
    },
    ...options,
  })

describe('Input', () => {
  it('emits event focus', async () => {
    const wrapper = shallowMount(Input)
    wrapper.vm.$emit('focus')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().focus).toBeTruthy()
    // console.log(wrapper.emitted())
  })

  it('emits event change', async () => {
    const wrapper = shallowMount(Input)
    wrapper.vm.$emit('change')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().change).toBeTruthy()
    // console.log(wrapper.emitted())
  })

  test('create', async () => {
    const handleFocus = jest.fn()
    const wrapper = _mount({
      template: `
        <c-input
          :minlength="3"
          :maxlength="5"
          placeholder="请输入内容"
          @focus="handleFocus"
          :value="input">
        </c-input>
      `,
      setup() {
        const input = ref('input')

        return {
          input,
          handleFocus,
        }
      },
    })

    const inputElm = wrapper.find('input')
    const vm = wrapper.vm
    const nativeInput = inputElm.element
    expect(inputElm.exists()).toBe(true)

    await inputElm.trigger('focus')
    // expect(handleFocus).toHaveBeenCalled()
    // expect(handleFocus).toHaveReturnedTimes(1)
    // expect(handleFocus.called).toBe(true)
    expect(nativeInput.placeholder).toBe('请输入内容')
    expect(nativeInput.value).toBe('input')
    expect(nativeInput.minLength).toBe(3)
    expect(nativeInput.maxLength).toBe(5)

    vm.input = 'text'
    await sleep()
    expect(inputElm.element.value).toBe('text')
  })

  test('default to empty', () => {
    const wrapper = _mount({
      template: '<c-input />',
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })

  test('disabled', () => {
    const wrapper = _mount({
      template: `<c-input disabled />`,
    })
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull()
  })

  test('textarea default to empty', () => {
    const wrapper = _mountTexarea({
      template: `<c-textarea />`,
    })
    const inputElm = wrapper.find('textarea')
    expect(inputElm.element.value).toBe('')
  })

  test('textarea rows', () => {
    const wrapper = mount(Textarea, {
      propsData: {
        rows: 3,
        maxRows: 5,
      },
    })
    const textarea = wrapper.findComponent({ ref: 'textarea' })
    console.log(textarea.element, 3444)

    expect(textarea.exists()).toBe(true)
    expect(wrapper.props().rows).toBe(3)
    expect(wrapper.props().maxRows).toBe(5)
  })

  test('textarea disabled', () => {
    const wrapper = _mountTexarea({
      template: `<c-textarea disabled />`,
    })
    const inputElm = wrapper.find('textarea')
    expect(inputElm.element.disabled).not.toBeNull()
  })
})
