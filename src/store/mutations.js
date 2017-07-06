import types from './mutation.types'

export default {
  [types.ENABLE_LOADING] (state) {
    state.pending = true
  },
  [types.DISABLE_LOADING] (state) {
    state.pending = false
  },
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.LOGIN] (state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS] (state) {
    state.authenticated = true
    state.pending = false
  },
  [types.LOGOUT] (state) {
    state.authenticated = false
  },
  [types.SET_ARTICLES] (state, articles) {
    state.articles = articles
  },
  [types.SET_PAGES] (state, pages) {
    state.pages = pages
  },
  [types.UPDATE_SEARCH_QUERY] (state, query) {
    state.searchQuery = query
  },
  [types.SET_ERROR_MESSAGE] (state, error) {
    state.error = error
  },
  [types.REMOVE_PRODUCT] (state, index) {
    state.products.splice(index, 1)
  }
}
