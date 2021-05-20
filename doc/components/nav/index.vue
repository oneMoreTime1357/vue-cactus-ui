<template>
  <div class="doc-nav">
    <div class="menu">
      <div v-for="(item, key) in navData" :key="key" class="submenu">
        <div class="sub-title">
          {{ item.title }}
        </div>
        <div
          v-for="(subItem, key) in item.groups"
          :key="key"
          class="menu-item-group"
        >
          <div class="group-title">
            {{ subItem.title }}
          </div>
          <div
            v-for="(child, key) in subItem.items"
            :key="key"
            class="menu-item"
          >
            <router-link :to="child.path" active-class="active">{{
              child.name
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navData from '../../config/nav'

export default {
  name: 'Nav',
  data() {
    return {
      navData,
    }
  },
}
</script>

<style lang="scss" scoped>
.doc-nav {
  padding: 25px 0 75px;
  height: 100%;
  width: 220px;
  overflow-y: scroll;
  box-shadow: 0 8px 12px #ebedf0;
  border-right: 1px solid #f1f4f8;
  box-sizing: border-box;
  user-select: none;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }
}
.menu {
  .submenu {
  }
  .sub-title {
    margin: 0px;
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #455a64;
  }
  .group-title {
    margin: 0px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 12px;
    font-weight: 400;
    color: #455a6499;
    border-bottom: 1px solid #ececec;
  }
  .menu-item {
    margin: 0px;
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #455a64;
    a {
      text-decoration: none;
      color: #455a64;
    }
    a:hover {
      color: #1989fa;
    }
    .router-link-exact-active {
      color: #1989fa;
    }
  }
  .active {
    color: #1989fa;
  }
}
</style>
