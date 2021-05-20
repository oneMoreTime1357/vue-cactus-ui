import { ComSizeType, tuple } from '../../_utils/types'
import { oneOf, bool, oneOfType } from 'vue-types'

const ButtonTypes = tuple(
  'primary',
  'warning',
  'success',
  'danger',
  'info',
  'default',
)
export type ButtonType = typeof ButtonTypes[number]

const buttonProps = {
  type: oneOf(ButtonTypes).def('default'),
  size: oneOf(ComSizeType).def('default'),
  nativeType: oneOf(['button', 'submit', 'reset']).def('button'),
  width: oneOfType([String, Number]),
  plain: bool().def(false),
  round: bool(),
  loading: bool(),
  disabled: bool(),
  circle: bool(),
}

export default buttonProps
