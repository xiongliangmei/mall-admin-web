<template>
  <div class="login-container">
    <el-card class="login-form-layout">
      <el-form>
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title">mall-admin-web</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
            <i slot="prefix" class="el-input__icon el-icon-view"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-button type="primary" style="width: 240px" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    login () {
      // 登录
      let username = this.loginForm.username
      let password = this.loginForm.password
      console.log(username + password)
      // this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.login-form-layout{
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409EFF;
}
.login-title{
  text-align: center;
  color: #409EFF;
  margin-bottom: 40px;
  margin-top: 20px;
}
</style>
