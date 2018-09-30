<template>
    <div class="page">
      <div class="header">
        <div class="header_top">
          <router-link class="back" to="/Discuss">
            <img src="/static/back.png" alt="">
          </router-link>
          <p>
            Rng粉丝鸭血汤
          </p>
        </div>
        <div class="header_center">
          <img src="../assets/img/rng.png" alt="">
          <p>发帖量348</p>
          <p class="p_bottom">关注人数4563</p>
          <button @click="toggle()" ref="btn" :class="{'black':isBlack,'golden':!isBlack}" v-model="btnInner">
            {{btnInner}}
          </button>
        </div>
      </div>
      <div class="content">

      </div>
    </div>
</template>

<script>
    export default {
      name: "DiscussDetail",
      data() {
        return {
          btnInner:'已关注',
          isBlack: false,
          // _btnInner:'关注'
        }
      },
      methods: {
        toggle:function () {
          this.isBlack=!this.isBlack;
          if (this.isBlack === true){
            this.btnInner = '关注'
          }else if (this.isBlack === false){
            this.btnInner = '已关注'
          }
        }
      }
    }
</script>

<style scoped>
  .header{
    height: 3.4375rem;
    width: 100%;
    text-align: center;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: white;
  }
  .header .back img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius:50%;
    position: fixed;
    left: 0.625rem;
    top: 0.7rem;
    padding: 4px;
  }
  .header p {
    position: fixed;
    left: 35%;
    font-size: 18px;
    margin-top: 15px;
  }
  .header .header_center {
    height: 70px;
    width: 93%;
    margin: 0 auto;
    margin-top: 13%;
    position: relative;
  }
  .header .header_center img {
    width: 80px;
    height: 80px;
    float: left;
    margin-left: 2%;
  }
  .header .header_center p {
    position: absolute;
    font-size: 14px;
    left: 31%;
  }
  .header .header_center .p_bottom {
    position: absolute;
    top: 30px;
  }
  .header .header_center button {
    position: absolute;
    right: 3%;
    top: 25px;
    width: 17.2%;
    height: 30px;
    background-color: white;
    box-shadow: none;
    outline: none;
    border-radius: 3px;
  }
  .golden {
    color: #d0bd9f;
    border: 1px solid #d0bd9f;
  }
  .black {
    color: black;
    border: 1px solid #AAAAAA;
  }
</style>
