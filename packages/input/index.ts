import { default as Input } from './src/index.vue'
import { default as Textarea } from './src/textarea.vue'
import type { SFCWithInstall } from '../_utils/types'

Input.install = (vue: any): void => {
  vue.component(Input.name, Input)
  vue.component(Textarea.name, Textarea)
}

const _Input: SFCWithInstall<typeof Input> = Input

export default _Input
