import Vue from 'vue'
import confirmModal from './confirmModal.vue'
import { isVNode } from '../../_utils/utils'

const ConfrimModalConstructor = Vue.extend(confirmModal)

let msgQueue: any[] = []

const initInstance = () => {
  return new ConfrimModalConstructor({
    el: document.createElement('div'),
  })
}

const showNextMsg = () => {
  const instance = initInstance()

  if (!instance.visible) {
    if (msgQueue.length > 0) {
      const currentMsg = msgQueue.shift()
      let options = currentMsg.options
      options.close = () => {
        instance.visible = false
        setTimeout(() => {
          document.body.removeChild(instance.$el)
        }, 200)
      }

      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }

      if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message]
        instance.message = null
      } else {
        delete instance.$slots.default
      }

      document.body.appendChild(instance.$el)
      Vue.nextTick(() => {
        instance.visible = true
      })
    }
  }
}

export default function confirm(options: any) {
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options,
    }
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1]
    }
  }

  return new Promise((resolve, reject) => {
    // eslint-disable-line
    msgQueue.push({
      options: options,
      resolve: resolve,
      reject: reject,
      close,
    })
    showNextMsg()
  })
}
