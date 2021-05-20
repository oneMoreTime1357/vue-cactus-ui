declare module '*.vue' {
  import Vue from 'vue'
  import { defineComponent } from '@vue/composition-api'
  const component: ReturnType<typeof defineComponent> & {
    install(vue: Vue): void
  }
  export default component
}

declare type Indexable<T> = {
  [key: string]: T
}
