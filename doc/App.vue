<template>
  <div class="app">
    <doc-header />
    <doc-container>
      <doc-nav slot="nav" />
      <router-view />
    </doc-container>
  </div>
</template>

<script>
import DocHeader from 'doc/components/header'
import DocNav from 'doc/components/nav'
import DocContainer from 'doc/components/container'

export default {
  name: 'App',
  components: {
    DocHeader,
    DocNav,
    DocContainer,
  },
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>
