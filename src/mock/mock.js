import Mock from 'mockjs'

Mock.mock('http://localhost:8080/userInfo', {
  'name': '@name',
  'email': '@email',
  'age|1-10': 5
})
