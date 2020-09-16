/*
 * 系统登录模块
 */

// 登录接口
export function login () {
  const loginData = {
    'code': 200,
    'message': 'success',
    'data': {
      'token': '77ae89be36504adfb5c09ef71409ea0e',
      'expireTime': '2018-09-01T16:24:50.473+0000',
      'lastUpdateTime': '2018-09-01T04:24:50.473+0000'
    }
  }
  return {
    url: 'login',
    type: 'post',
    dta: loginData
  }
}

// 登出接口
export function logout () {
  const data = {
    'code': 200,
    'message': 'success',
    'data': {}
  }
  return {
    url: 'logout',
    type: 'get',
    data: data
  }
}
