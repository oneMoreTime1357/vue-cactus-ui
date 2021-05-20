import { default as Empty } from './src/index.vue'
import type { SFCWithInstall } from '../_utils/types'

Empty.install = (vue: any): void => {
  vue.component(Empty.name, Empty)
}

const _Empty: SFCWithInstall<typeof Empty> = Empty

export default _Empty
