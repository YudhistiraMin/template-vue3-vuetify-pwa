const TOKEN_KEY = "access_token"
const USER = "access_user"

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },
  getUser() {
    return localStorage.getItem(USER)
  },
  saveToken(accessToken, accessUser) {
    localStorage.setItem(TOKEN_KEY, accessToken)
    localStorage.setItem(USER, accessUser)
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER)
  }
}

export { TokenService }