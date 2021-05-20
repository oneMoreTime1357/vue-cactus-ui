import Modal from './src/index.vue'
import type { SFCWithInstall } from '../_utils/types'
import modalConfirm from './src/confirm'
import { modalFuncProps } from './src/modalProps'
import { ExtractPropTypes } from '@vue/composition-api'
import IconSuccess from './src/iconSuccess.vue'
import IconError from './src/iconError.vue'

type modalFuncType = ExtractPropTypes<typeof modalFuncProps>

Modal.confirm = function (props: modalFuncType) {
  const config = {
    ...props,
    type: 'confirm',
  }

  return modalConfirm(config)
}

Modal.success = function (props: modalFuncType) {
  const config = {
    ...props,
    type: 'success',
  }
  return modalConfirm(config)
}

Modal.error = function (props: modalFuncType) {
  const config = {
    ...props,
    type: 'error',
  }
  return modalConfirm(config)
}

Modal.install = (vue: any): void => {
  vue.component(Modal.name, Modal)
  vue.component(IconSuccess.name, IconSuccess)
  vue.component(IconError.name, IconError)
}

const _Modal: SFCWithInstall<typeof Modal> = Modal

export default _Modal
