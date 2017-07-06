export default {
  isAuthenticated (state) {
    return state.authenticated
  },
  getError (state) {
    return state.error
  },
  getArticleList (state) {
    if (state.searchQuery.length) {
      return state.articles
        .filter((item) => Object.values(item)
          .some((value) => value.toUpperCase()
            .includes(state.searchQuery.toUpperCase())))
    } else {
      return state.articles
    }
  },
  getProductList (state) {
    if (state.searchQuery.length) {
      return state.products
        .filter((item) => Object.values(item)
          .some((value) => value.toUpperCase()
            .includes(state.searchQuery.toUpperCase())))
    } else {
      return state.products
    }
  },
  getPageList (state) {
    if (state.searchQuery.length) {
      return state.pages
        .filter((item) => Object.values(item)
          .some((value) => value.toUpperCase()
            .includes(state.searchQuery.toUpperCase())))
    } else {
      return state.pages
    }
  },
  getMenuItems (state) {
    return state.menuItems
      .filter(item => item.active)
      .sort((a, b) => a.order - b.order)
  },
  getMessages (state) {
    return state.userInfo.messages
  },
  getTasks (state) {
    return state.userInfo.messages
  },
  getNotifications (state) {
    return state.userInfo.notifications
  },
  isPending (state) {
    return state.pending ? '<i class="icon-spinner icon-spin icon-large"></i>' : ''
  },
  getCategories (state) {
    return state.categories
  },
  getProducts (state) {
    return state.products
  },
  getCurrencies (state) {
    return state.currencies
  },
  getUnits (state) {
    return state.units
  }
}
