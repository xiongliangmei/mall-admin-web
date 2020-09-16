import Mock from 'mockjs'

Mock.mock('http://localhost:8080/admin/login', {
  'code': 200,
  'message': 'success',
  'data': '123123213'
})

Mock.mock('http://localhost:8080/admin/logout', {
  'code': 200,
  'message': 'success',
  'data': '123123213'
})

Mock.mock('http://localhost:8080/admin/getInfo', {
  'code': 200,
  'message': 'success',
  'data': '123123213'
})
