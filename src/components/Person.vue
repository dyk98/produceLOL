<template>
    <div>
      <div class="head">
        <router-link tag="div" to="/" class="rightDiv">
          <img src="../assets/img/out.png" alt="" class="right">
        </router-link>
        <router-link tag="div" to="/Login" class="leftDiv">
          <img src="../assets/img/head.png" alt="" class="left">
        </router-link>

        <p>用户名</p>
      </div>
      <div class="menu">
        <div class="line">
          <img src="../assets/img/person.png" alt="">
          <p>账号</p>
        </div>
        <div class="line">
          <img src="../assets/img/msg.png" alt="">
          <p>消息管理</p>
        </div>
        <div class="line">
          <img src="../assets/img/eye.png" alt="">
          <p>我的关注</p>
        </div>
        <div class="line">
          <img src="../assets/img/send.png" alt="">
          <p>发布中心</p>
        </div>
        <div class="line">
          <img src="../assets/img/out1.png" alt="">
          <p>退出登录</p>
        </div>
      </div>
      <div class="bottom">
        <img src="../assets/img/set.png" alt="">
        <p class="p_left">设置</p>
        <p class="p_right">关于我们</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Person"
    }
</script>

<style scoped>
  .head {
    height: 80px;

  }
  .head p {
    display: inline-block;
    font-size: 24px;
    position: fixed;
    left: 20%;
    /*top: 5px;*/
    margin-top: 20px;
  }
  .head .left {
    width: 36px;
    height: 36px;
    border-radius:50%;
    position: fixed;
    left: 1rem;
    top: 1rem;
    padding: 4px;
    border: 1px solid #AAAAAA;
  }
  .leftDiv {
    width: 36px;
    height: 36px;
    position: fixed;
    left: 1rem;
    top: 1rem;
  }
  .head .right {
    height: 24px;
    width: 24px;
    position: fixed;
    right: 0.625rem;
    top: 20px;
  }
  .rightDiv {
    display: inline-block;
    height: 24px;
    width: 24px;
    position: fixed;
    right: 0.625rem;
    top: 20px;
  }
  .menu .line {
    height: 50px;
    /*width: 90%;*/
    /*margin: auto;*/
    margin-left: 5%;
  }
  .menu img {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }
  .menu p {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    margin: 0;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    height: 50px;
    padding-left: 5%;
    /*margin-left: 5%;*/
    width: 95%;
  }
  .bottom img {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    /*margin-left: 15%;*/
  }
  .bottom p {
    display: inline-block;
    margin: 0;
    height: 50px;
    line-height: 50px;
  }
  .bottom .p_right {
    position: fixed;
    right: 5%;
  }
</style>
