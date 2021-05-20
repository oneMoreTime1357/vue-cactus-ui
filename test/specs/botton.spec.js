import Button from '../../packages/button/src/index'
import { mount } from '@vue/test-utils'

describe('Button hello', () => {
  it('has a button', () => {
    const wrapper = mount(Button)
    expect(wrapper.find('button')).toBeTruthy()
  })

  it('button type primary', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'primary',
      },
    })
    expect(wrapper.classes('c-button--primary')).toBe(true)
  })

  it('button type danger', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'danger',
      },
    })
    expect(wrapper.classes('c-button--danger')).toBe(true)
  })

  it('plain', () => {
    const wrapper = mount(Button, {
      propsData: { plain: true },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('click', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      propsData: { disabled: true },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeUndefined()
  })
})
