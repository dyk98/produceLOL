<template>
    <div>
      <div class="head">
        <router-link tag="div" to="/" class="rightDiv">
          <img :src="person.out" alt="" class="right">
        </router-link>
        <router-link tag="div" to="/Login" class="leftDiv">
          <img :src="person.head" alt="" class="left">
        </router-link>
        <p>{{person.name}}</p>
      </div>
      <div v-for="content in contents" class="menu">
        <div class="line">
          <img :src="content.img" alt="">
          <p>{{content.p}}</p>
        </div>
      </div>
      <div class="bottom">
        <img :src="person.set" alt="">
        <p class="p_left">设置</p>
        <p class="p_right">关于我们</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        data(){
            return{
                person:{
                    out:'/static/out.png',
                    head:'/static/head.png',
                    set:'/static/set.png',
                    name:'用户名'
                },
                contents:[
                    {
                        img:'/static/person.png',
                        p:'账号'
                    },{
                        img:'/static/msg.png',
                        p:'消息管理'
                    },{
                        img:'/static/eye.png',
                        p:'我的关注'
                    },{
                        img:'/static/send.png',
                        p:'发布中心'
                    },{
                        img:'/static/out1.png',
                        p:'退出登录'
                    }
                ],
                head:'/static/head.png',
            }
        },

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
