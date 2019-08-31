<template>
  <div class="login">
    <div class="login-card">
        <div class="card-top">
          <img src="../assets/logo_index.png" alt="">
        </div>
        <div class="card-bottom">
            <el-form >
              <el-input placeHolder='请输入手机号码' ></el-input>
            </el-form>
            <el-form style="margin-top: 20px" >
                <el-input style="width: 240px;" placeHolder='请输入验证码' ></el-input>
                <el-button style="float: right" >发送验证</el-button>
              </el-form>
              <el-button class="card-btn" type="primary" plain>登录</el-button>
        </div>
    </div>
  </div>
    </template>
<script>

export default {}
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
