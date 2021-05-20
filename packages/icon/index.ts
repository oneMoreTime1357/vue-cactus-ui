import Icon from './src/index.vue'
import type { SFCWithInstall } from '../_utils/types'

Icon.install = (vue: any): void => {
  vue.component(Icon.name, Icon)
}

const _Icon: SFCWithInstall<typeof Icon> = Icon

export default _Icon
