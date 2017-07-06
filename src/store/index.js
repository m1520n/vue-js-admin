import Vue from 'vue'
import Vuex from 'vuex'

import config from '@/config'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import menuItems from '@/config/menuItems'
import {
  CATEGORIES as categories,
  PRODUCTS as products,
  UNITS as units,
  CURRENCIES as currencies
} from '@/mocks/products'

Vue.use(Vuex)

const state = {
  authenticated: !!localStorage.getItem('token'),
  pending: false,
  serverURI: config.env.staging.api,
  user: null,
  token: null,
  userInfo: {
    messages: [
      {
        user: 'user123',
        text: 'message 1'
      },
      {
        user: 'user456',
        text: 'message 2'
      }
    ],
    notifications: ['first notification!'],
    tasks: ['1st task']
  },
  articles: null,
  pages: null,
  products,
  categories,
  units,
  currencies,
  menuItems,
  searchQuery: '',
  error: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
