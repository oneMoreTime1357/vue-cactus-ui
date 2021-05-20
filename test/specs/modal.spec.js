import { ref, nextTick } from '@vue/composition-api'
import { mount } from '@vue/test-utils'
import Modal from '../../packages/modal/src/index'
import ModalConfirm from '../../packages/modal/index'
import { rAF, sleep } from '../testUtils'

const AXIOM = 'test default text'

const _mount = ({ slots, ...rest }) => {
  return mount(Modal, {
    slots: {
      default: AXIOM,
      ...slots,
    },
    ...rest,
  })
}

describe('Modal', () => {
  it('render correctly', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      propsData: {
        value: true,
      },
    })

    await nextTick()
    await rAF()
    await nextTick()
    expect(wrapper.find('.c-modal__body').text()).toEqual(AXIOM)
  })

  it('dialog should have a title when title has been given', async () => {
    const HEADER = 'I am header'
    let wrapper = _mount({
      slots: {
        title: HEADER,
      },
      propsData: {
        value: true,
      },
    })
    await nextTick()
    console.log(wrapper.find('.c-modal__header').text())
    expect(wrapper.find('.c-modal__header').text()).toBe(HEADER)

    wrapper = _mount({
      propsData: {
        title: HEADER,
        value: true,
      },
    })
    await nextTick()
    await rAF()
    console.log(wrapper.find('.c-modal__header').text())
    expect(wrapper.find('.c-modal__header').text()).toBe(HEADER)
  })

  test('default close btn hidden', async () => {
    const wrapper = _mount({
      propsData: {
        value: true,
      },
    })
    await nextTick()
    expect(wrapper.find('.c-modal__headerbtn').exists()).toBe(false)
    // expect(wrapper.find('.c-modal__close').exists()).toBe(false)
  })

  test('should show close button', async () => {
    const wrapper = _mount({
      propsData: {
        value: true,
        closeable: true,
      },
    })

    await nextTick()
    console.log(wrapper.find('.c-modal__headerbtn'))
    expect(wrapper.find('.c-modal__close').exists()).toBe(true)
  })

  test('should close dialog when click on close button', async () => {
    const wrapper = _mount({
      propsData: {
        value: true,
        closeable: true,
      },
    })
    await nextTick()
    await wrapper.find('.c-modal__headerbtn').trigger('click')
    expect(wrapper.vm.visible).toBe(false)
  })

  test('render without footer', async () => {
    const wrapper = _mount({
      propsData: {
        value: true,
        footer: null,
      },
    })
    await nextTick()
    expect(wrapper.find('.c-modal__footer').exists()).toBe(false)
  })
})

const selector = '.c-mask'
describe('Modal confirm', () => {
  test('trigger confirm btn click', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()

    ModalConfirm.confirm({
      title: 'confirm title',
      message: 'description',
      onConfirm,
      onCancel,
    })
    await sleep()
    await rAF()
    const btn = document
      .querySelector(selector)
      .querySelector('.c-button--primary')

    btn.click()
    await rAF()
    expect(onCancel.mock.calls.length).toBe(0)
    expect(onConfirm.mock.calls.length).toBe(1)
  })

  it('trigger onCancel once when click on cancel button', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    ModalConfirm.confirm({
      title: 'confirm title',
      message: 'description',
      onConfirm,
      onCancel,
    })
    await sleep()
    // first Modal
    const btn = document.querySelector(selector).querySelector('.c-button')
    btn.click()
    expect(onCancel.mock.calls.length).toBe(1)
    expect(onConfirm.mock.calls.length).toBe(0)
  })

  it('trigger error onCancel once when click on cancel button', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    ModalConfirm.error({
      title: 'confirm title',
      message: 'description',
      onConfirm,
      onCancel,
    })
    await sleep()
    // first Modal
    const btn = document.querySelector(selector).querySelector('.c-button')
    btn.click()
    expect(onCancel.mock.calls.length).toBe(1)
    expect(onConfirm.mock.calls.length).toBe(0)
  })

  it('trigger success onCancel once when click on cancel button', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    ModalConfirm.success({
      title: 'confirm title',
      message: 'description',
      onConfirm,
      onCancel,
    })
    await sleep()
    // first Modal
    const btn = document.querySelector(selector).querySelector('.c-button')
    btn.click()
    expect(onCancel.mock.calls.length).toBe(1)
    expect(onConfirm.mock.calls.length).toBe(0)
  })
})
