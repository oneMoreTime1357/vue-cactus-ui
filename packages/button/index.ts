import { default as Button } from './src/index.vue'
import type { SFCWithInstall } from '../_utils/types'

Button.install = (vue: any): void => {
  vue.component(Button.name, Button)
}

const _Button: SFCWithInstall<typeof Button> = Button

export default _Button
