import VueTypes from 'vue-types'
import { ComSizeType } from '../../_utils/types'

export const modalProps = {
  value: VueTypes.bool.def(false),
  size: VueTypes.oneOf(ComSizeType).def('default'),
  title: VueTypes.string,
  width: VueTypes.oneOfType([String, Number]),
  closeable: VueTypes.bool.def(false),
  cancelText: VueTypes.string,
  confirmText: VueTypes.string,
  confirmLoading: VueTypes.bool.def(false),
  footer: VueTypes.any,
  maskClosable: VueTypes.bool.def(true),
  closeOnPressEscape: VueTypes.bool.def(true),
  // mask: VueTypes.bool,
  zIndex: VueTypes.number,
  appendToBody: VueTypes.bool.def(false),
  top: VueTypes.string.def('15vh'),
  customClass: VueTypes.string,
  titleAlign: VueTypes.string,
}

export const modalFuncProps = {
  title: VueTypes.string,
  visible: VueTypes.bool.def(false),
  message: VueTypes.string,
  content: VueTypes.string,
  size: VueTypes.oneOf(ComSizeType).def('small'),
  contentAlign: VueTypes.string.def('center'),
  titleAlign: VueTypes.string.def('left'),
  cancelText: VueTypes.string,
  confirmText: VueTypes.string,
  closeable: VueTypes.bool.def(false),
  cancelType: VueTypes.string,
  confirmType: VueTypes.string,
  onConfirm: VueTypes.func,
  onCancel: VueTypes.func,
  close: VueTypes.func,
  type: VueTypes.oneOf(['success', 'error', 'confirm']).def('confirm'),
  showCancel: VueTypes.bool.def(true),
  maskClosable: VueTypes.bool.def(true),
  closeOnPressEscape: VueTypes.bool.def(true),
}