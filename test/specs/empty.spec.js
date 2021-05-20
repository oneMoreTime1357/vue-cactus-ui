import { mount } from '@vue/test-utils'
import Empty from '../../packages/empty/src/index'

const AXIOM = 'test default text'

const _mount = ({ slots, ...rest }) => {
  return mount(Empty, {
    slots: {
      ...slots,
    },
    ...rest,
  })
}

describe('Empty component', () => {

  test('render test', () => {
    const wrapper = _mount({
      slots: AXIOM
    })

    expect(wrapper.find('.c-empty__image').exists()).toBe(true)
    expect(wrapper.find('.c-empty__description').exists()).toBe(true)
    expect(wrapper.find('.c-empty__bottom').exists()).toBe(true)
  })

  test('should render image props', () => {
    const wrapper = _mount({
      propsData: {
        image: AXIOM,
      },
    })
    expect(wrapper.find('.c-empty__image img').exists()).toBe(true)
  })

  test('should render image props', () => {
    const wrapper = _mount({
      propsData: {
        imageWidth: 100,
      },
    })
    expect(wrapper.find('.c-empty__image').attributes('style')).toContain('width: 100px')
    await wrapper.setProps({
      imageWidth: 200,
    })
    expect(wrapper.find('.c-empty__image').attributes('style')).toContain('width: 200px')
  })

  test('should render description slots', () => {
    const wrapper = _mount({
      slots: {
        description: AXIOM,
      },
    })
    expect(wrapper.find('.c-empty__description').text()).toEqual(AXIOM)
  })

  test('should render description props', () => {
    const wrapper = mount({
      propsData: {
        description: AXIOM,
      },
    })
    expect(wrapper.find('.c-empty__description').text()).toEqual(AXIOM)
  })
})