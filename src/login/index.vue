<template>
  <div class="login">
    <div class="login-card">
        <div class="card-top">
          <img src="../assets/logo_index.png" alt="">
        </div>
        <div class="card-bottom">
        <el-form ref='loginForm' :rules="loginRules" :model='loginForm' >
            <el-form-item prop='mobile' >
              <el-input v-model="loginForm.mobile" placeHolder='请输入手机号码' ></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 20px" prop='code' >
                <el-input v-model="loginForm.code" style="width: 240px;" placeHolder='请输入验证码' ></el-input>
                <el-button style="float: right" >发送验证</el-button>
              </el-form-item>
              <el-form-item style='margin:20px 0' prop='check' >
              <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-button @click='btn'  class="card-btn" type="primary" plain>登录</el-button>
              </el-form>
        </div>
    </div>
  </div>
    </template>
<script>

export default {
  data () {
    let validator = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('不同意条款别想用'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        check: [{
          validator
        }],
        mobile: [{
          required: true,
          message: '手机号码不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机格式不正确'
        }],
        code: [{
          required: true,
          message: '验证号码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证号码不正确'
        }]
      }

    }
  },
  methods: {
    btn () {
      this.$refs.loginForm.validate(isok => {
        if (isok) {
          this.$axios({
            url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(res => {
            window.localStorage.setItem('user-token', res.data.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '手机号码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>
    <style>
      .login{
        background:url('../assets/login_bg.jpg');
        /* width: 100%; */
        height: 100vh;
        background-size:cover;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .login-card{
          width: 400px;
          height: 300px;
          background-color:skyblue;
        }
        .card-top {
          height: 50px;
          text-align :center;
      }
      .card-top img{
          margin: 20px 0;
          width: 200px;
          height: 40px;
        }
      .card-bottom{
        padding: 20px 20px 20px;

      }
      .card-btn{

        width: 100%;

      }
      el-input{
        margin-top: 20px
      }

    </style>
