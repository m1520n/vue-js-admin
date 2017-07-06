import types from './mutation.types'
import authService from '@/services/auth.service'
import resourceService from '@/services/resource.service'

export default {
  login ({ commit }, { context, creds }) {
    commit(types.ENABLE_LOADING)

    authService.login(context, creds).then((response) => {
      let jwt = response.body.data.jwt

      if (jwt) {
        commit(types.SET_TOKEN, jwt)
        localStorage.setItem('token', jwt)
        commit(types.LOGIN_SUCCESS)
        context.$router.push('/')
      }
    }).catch((response) => {
      commit(types.DISABLE_LOADING)
      if (response.body && response.body.data && response.body.data.message) {
        commit(types.SET_ERROR_MESSAGE, response.body.data.message)
      }
    })
  },

  logout ({ commit }) {
    localStorage.removeItem('token')
    commit(types.LOGOUT)
  },

  getArticles ({ commit }) {
    commit(types.ENABLE_LOADING)
    resourceService.getArticles().then((res) => {
      commit(types.SET_ARTICLES, res)
      commit(types.DISABLE_LOADING)
    })
  },

  getPages ({ commit }) {
    commit(types.ENABLE_LOADING)
    resourceService.getPages().then((res) => {
      commit(types.SET_PAGES, res)
      commit(types.DISABLE_LOADING)
    })
  }
}
