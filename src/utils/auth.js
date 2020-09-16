import Cookies from 'js-cookie'

const TokenKey = 'loginToken'

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function getToken (token) {
  return Cookies.get(TokenKey, token)
}

export function removeToken (token) {
  return Cookies.remove(TokenKey, token)
}
