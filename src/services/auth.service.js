import config from '@/config'

const API_URL = `${config.env.staging.api}/api/v1/`
const LOGIN_URL = API_URL + 'login'

export default {
  options: {
    options: { 'Content-Type': 'multipart/form-data' },
    emulateJSON: true
  },

  login (context, creds) {
    return context.$http.post(LOGIN_URL, creds, this.options)
  },

  get isTokenInLocalStorage () {
    return !!localStorage.getItem('token')
  },

  get authHeader () {
    return 'Bearer ' + this.authTokenFromLocalStorage
  },

  get authTokenFromLocalStorage () {
    localStorage.getItem('token')
  }
}
