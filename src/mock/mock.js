import Mock from 'mockjs'

Mock.mock('http://localhost:8080/admin/login', {
  'code': 200,
  'message': 'success',
  'data': '123123213'
})
