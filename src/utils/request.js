import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
// import store from '../store'
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时
})
service.interceptors.request.use(config => {
/*  if (store.getter.token) {
    config.headers['Authorization'] = '123231'
  } */
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })
    }
    // 401 未登录
    if (res.code === 401) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录, 确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('未登录')
      })
    }
    return response.data
  }, error => {
    console.log('error' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
