<template>
  <div class="play-container">
    <p>调试组件页面</p>
    <c-button
      type="primary"
      width="140px"
      @click="onClick"
    >按 钮</c-button>
    <p>{{ inputVal }}</p>
    <c-input
      placeholder="这是一个按钮"
      style="width: 180px"
      v-model="inputVal"
      :maxlength="100"
      clearable
      showPassword
      @focus="inputFocus"
      @blur="inputblur"
      @keydown="inputKeydown"
      @change="inputChange"
      @pressEnter="pressEnter"
    ></c-input>

    <c-textarea
      v-model="textareaData"
      :rows="2"
      maxlength="200"
      showWordLimit
    ></c-textarea>

    <c-icon
      name="loading"
      style="font-size: 24px"
    ></c-icon>

    <c-icon name="refresh"></c-icon>

    <c-empty>
      <c-button>Home</c-button>
    </c-empty>
    <IconSuccess></IconSuccess>
    <IconError></IconError>
    <c-modal
      title="弹窗组件"
      v-model="showModal"
      closeable
      :width="300"
      size="small"
      @cancel="showModal = false"
      @confirm="confirmAction"
    >
      <!-- <p>testsss {{ showModal }}</p> -->
    </c-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { defineComponent, ref } from '@vue/composition-api'
// import { default as Modal } from '../packages/modal'
import Modal from '../lib/modal'
// Vue.use(Modal)
export default {
  // components: {
  //   'CModal': Modal
  // },
  setup (props, ctx) {
    const inputVal = ref('')
    const textareaData = ref('')
    // const showModal = ref(false)
    // console.log(showModal, 888)
    return {
      inputVal,
      textareaData,
      // showModal
    }
  },
  data () {
    return {
      showModal: false,
    }
  },
  methods: {
    inputFocus () {
      // console.log('inputFocus', 24)
    },
    inputblur () {
      // console.log('inputblur', 3344)
    },
    inputKeydown () {
      // console.log('input keydown', 23)
    },
    inputChange () {
      console.log('input change', 45)
    },
    pressEnter () {
      console.log('pressEnter 1234')
    },
    onClick () {
      console.log(this.showModal, 432456)
      this.showModal = true
      // Modal.confirm({
      //   titleAlign: 'left',
      //   title: '弹窗确认',
      //   message: 'dasdfssss confirm 弹出',
      //   closeable: true,
      //   type: 'error',
      //   onConfirm: () => {
      //     console.log('confirm load 233',)
      //     return new Promise((resolve, reject) => {
      //       setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      //     }).catch(() => console.log('Oops errors!'))
      //   }
      // })
    },
    confirmAction () {
      console.log('confirm button')
      this.showModal = false
    },
  },
}
</script>
