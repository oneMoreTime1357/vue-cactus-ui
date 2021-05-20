import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import components from 'src/index'
// import components from '../lib/cactus-ui.common'
import 'doc/assets/css/reset.scss'
import './demo-styles/index.scss'
import DemoBlock from 'doc/components/demoBlock'
import Modal from '../packages/modal'
import icon from './icon.json'

import '../packages/theme/index.scss'

Vue.component('demo-block', DemoBlock)
Vue.use(components)

Vue.prototype.$modal = Modal
Vue.prototype.$icon = icon

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
