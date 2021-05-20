import VueTypes from 'vue-types'
import { ComSizeType } from '../../_utils/types'
import { ExtractPropTypes } from '@vue/composition-api'

const inputProps = {
  value: VueTypes.oneOfType([String, Number]),
  type: VueTypes.string.def('text'),
  disabled: VueTypes.bool.def(false),
  size: VueTypes.oneOf(ComSizeType).def('default'),
  readonly: VueTypes.bool.def(false),
  placeholder: VueTypes.string,
  showPassword: VueTypes.bool.def(false),
  prefixIcon: VueTypes.string,
  suffixIcon: VueTypes.string,
  showWordLimit: VueTypes.bool.def(false),
  clearable: VueTypes.bool.def(false),
}

export type inputPropType = ExtractPropTypes<typeof inputProps>

export default inputProps
