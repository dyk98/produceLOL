<template>
  <div :style="note" id="login_body">
    <div style="position: fixed;top: 20px;left: 20px;" >
        <img src="../assets/img/back.png" alt="" class="back" @click="backRouter">

    </div>
    <div style="position: fixed">
      <div>
        <input type="text" class="loginInput inputName" placeholder="请输入您的用户名" id="name">
      </div>
      <div>
        <input type="password" class="loginInput inputPass" placeholder="请输入您的密码" id="password">
      </div>
      <div>
        <a class="loginP forgetPass">忘记密码</a>
        <a class="loginP register" >注册账号</a>
      </div>
      <div>
        <button class="loginButton" @click="checkUser">登陆</button>
      </div>
    </div>

    <div style="position: fixed;top: 490px;width: 100%">
      <div class="loginLogo tencent" @click="quickLogin">
        <img src="../assets/img/tencentqq.png" class="qqtim" alt="">
        <a href="" class="quickLogin">QQ登录</a>
      </div>
      <div class="loginLogo wechat" @click="quickLogin">
        <img src="../assets/img/wechatlogo.png" class="wechat" alt="">
        <a href="" class="quickLogin">微信登录</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        note: {
          background: "url(" + require("../assets/img/loginbackground.png") + ")  no-repeat fixed ",
          backgroundSize: "100% 100%",
          textAlign: "center",
          paddingTop: "60%",
          paddingLeft:"24%",
          overflow:"hidden",
        }
      }
    },
    created() {
    },
    mounted() {
    },
    methods:{
      checkUser:function () {
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        if (name == "test123" && password == 'test123') {
          alert('登陆成功');
          this.$router.push({path:'/'})
        } else {
          alert('用户名或密码错误');
        }
      },
      quickLogin: function () {
        alert('授权登录暂未开放')
      },
      backRouter() {
        this.$router.back(-1)
      }
    },
  }
</script>

<style scoped>
  .back {
    height: 30px;
    width: 30px;
  }
  input::-webkit-input-placeholder{
    color:white;
    font-size: 15px;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:white;
    font-size: 15px;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:white;
    font-size: 15px;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:white;
    font-size: 15px;
  }
  #login_body {
    height: 667px;
  }

  .loginInput {
    background-color: rgba(255,255,255,0);
    border: none;
    border-bottom: 0.5px white solid;
    outline: none;
    color: white;
    height: 20px;
    width: 100%;
    font-size: 15px;
    margin-bottom: 5px;
  }
  .inputName {
    margin-bottom: 20%;
  }
  .inputPass {
    margin-bottom: 8%;
  }
  .loginP {
    color: white;
    font-size: 13px;
    margin-right: 10%;
    margin-left: 10%;
  }
  .loginButton {
    background-color: #B99D6F;
    border: none;
    border-radius: 5px;
    color: white;
    width: 40%;
    margin-top: 7%;
  }
  .register {

  }
  .forgetPass {

  }
  .loginLogo {
    float: left;
    display: inline-flex;
    flex-direction: column;
  }
  .tencent {
    margin-right: 24%;

  }
  .wechat {

  }
  .quickLogin {
    color: white;
    text-decoration: none;
    font-size: 10px;
  }
  .qqtim {
    height: 50px;
    width: 50px;
  }
  .wechat {
    height: 50px;
    width: 50px;
  }
</style>
