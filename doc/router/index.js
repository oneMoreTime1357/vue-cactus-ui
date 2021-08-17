import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '../config/nav'

Vue.use(Router)

export const commonRoutes = [
  {
    path: '/',
    name: 'home',
    meta: {
      name: 'home',
    },
    component: () =>
      import(/* webpackChunkName: "about" */ 'doc/markdown/index.md'),
  },
]

const navRoutes = []
navConfig.forEach((sub) => {
  sub.groups.forEach((group) => {
    group.items.forEach((item) => {
      const name = item.path.slice(1)
      navRoutes.push({
        path: item.path,
        name: name,
        meta: {
          name: name,
        },
        component: (resolve) => require([`doc/markdown/${name}.md`], resolve),
      })
    })
  })
})

export const playRoutes = [
  {
    path: '/play',
    name: 'play',
    meta: {
      name: 'play',
    },
    component: () => import(/* webpackChunkName: "play" */ 'doc/play.vue'),
  },
]

const routes = [...commonRoutes, ...navRoutes, ...playRoutes]

export default new Router({
  mode: 'history',
  base: '/vue-cactus-ui',
  routes,
})
