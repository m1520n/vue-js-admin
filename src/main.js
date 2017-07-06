import 'script-loader!jquery/dist/jquery.min'
import 'bootstrap-loader'
import 'admin-lte'
import 'admin-lte/build/less/AdminLTE.less'
import 'admin-lte/build/less/skins/_all-skins.less'
import 'font-awesome/less/font-awesome.less'

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'
import store from './store'
import types from './store/mutation.types'
import authService from './services/auth.service.js'

// Disable develoment mode message displayed in console
Vue.config.productionTip = false

// Inject libs
Vue.use(VueRouter)
Vue.use(VueResource)

if (authService.isTokenInLocalStorage) {
  setTokenInStore()
  setCommonHeaders(Vue)
}

Vue.http.interceptors.push((request, next) => {
  request.headers['Authorization'] = authService.authHeader
  next()
})

// Routing logic
let router = new VueRouter({
  routes,
  mode: 'history'
})

// Middleware redirecting unauthenticated users to login route.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !store.getters.isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

function setCommonHeaders (app) {
  app.http.headers.common['Access-Control-Allow-Origin'] = '*'
  app.http.headers.common['Authorization'] = authService.authHeader
}

function setTokenInStore () {
  store.commit(types.SET_TOKEN, authService.authTokenFromLocalStorage)
}
