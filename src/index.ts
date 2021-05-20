import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import { default as Button } from '../packages/button'
import { default as Input } from '../packages/input'
import { default as Modal } from '../packages/modal'
import { default as Icon } from '../packages/icon'
import { default as Empty } from '../packages/empty'

const components = {
  Button,
  Input,
  Modal,
  Icon,
  Empty,
}

const install = (vue: any): void => {
  Object.keys(components).forEach((c) => {
    vue.use(components[c])
  })
}

export { install, Button, Input, Modal, Icon, Empty }

export default {
  install,
}
