<template>
  <div class="doc-header">
    <div class="title">
      <router-link to="/" class="nav-title">CACTUS-UI</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.doc-header {
  display: flex;
  height: 60px;
  background-color: #404040;
  box-shadow: 0 4px 12px #ebedf0;
  .title {
    align-self: center;
    padding-left: 80px;
    font-size: 22px;
    color: #ffffff;
    line-height: 1;
  }
  .nav-title {
    color: #fff;
    text-decoration: none;
  }
}
</style>
