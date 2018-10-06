<template>
    <div class="page">
      <div class="header">
        <div class="header_top">
          <router-link class="back" to="/Discuss">
            <img src="../../assets/img/back.png" alt="">
          </router-link>
          <p>
            Rng粉丝鸭血汤
          </p>
          <router-link class="add" to="/ArticleAdd" tag="div">
            <img src="../../assets/img/add.png" alt="">
          </router-link>
        </div>
        <div class="header_center">
          <img src="../../assets/img/rng.png" alt="">
          <p>发帖量348</p>
          <p class="p_bottom">关注人数4563</p>
          <button @click="toggle()" ref="btn" :class="{'black':isBlack,'golden':!isBlack}" v-model="btnInner">
            {{btnInner}}
          </button>
        </div>
        <div class="search">
          <input type="text" value="" id="input_search">
          <img src="../../assets/img/search.png" alt="" class="search_left">
          <img src="../../assets/img/out.png" alt="" class="search_right" @click="clear">
        </div>
      </div>
      <div class="content">
        <div class="column">
          <router-link to="/DiscussDetail/DiscussAll" :class="{'line':!ro}" @click.native="active">全部</router-link>
          <router-link to="/DiscussDetail/DiscussWell" :class="{'line':ro}" @click.native="active">精选</router-link>
          <!--<router-link>精选</router-link>-->
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
      <Footer :discuss_gol="gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol"></Footer>
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
          ro: false,
          home_gol : require('../../assets/img/home.png'),
          gol : require('../../assets/img/discuss1.png'),
          match_gol : require('../../assets/img/match.png'),
          data_gol : require('../../assets/img/data.png'),
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
        },
        clear() {
          document.getElementById('input_search').value = "";
          document.getElementById('input_search').focus();
        },
        active(){
          if (this.$route.name === 'DiscussWell') {
            this.ro = true
          }else {
            this.ro = false
          }
        }
      }
    }
</script>

<style scoped>
  .page {
    width: 100%;
    height: 100%;
  }
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
  .header .add {
    width: 1.8rem;
    height: 1.8rem;
    position: fixed;
    right: 0.625rem;
    top: 0.65rem;
  }
  .header .add img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius:50%;
    position: fixed;
    right: 0.625rem;
    top: 0.65rem;
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
    width: 20%;
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
  .header .search {
    height: 35px;
    /*margin-top: 55px;*/
    text-align: center;
  }
  .header .search input {
    border: 1px solid #d7d7d7;
    width: 86%;
    height: 30px;
    outline: none;
    border-radius: 5px;
    padding-left: 9%;
  }
  .header .search img {
    width: 15px;
    height: 15px;
  }
  .header .search .search_left {
    position: absolute;
    margin-top: 10px;
    left: 5%;
  }
  .header .search .search_right {
    position: absolute;
    margin-top: 10px;
    /*top: 65px;*/
    right: 5%;
  }
  .content .column  {
    margin-top: 175px;
    border-bottom: 5px solid #f5f5f5;
    padding-bottom: 5px;
    height: 30px;
    padding-top: 10px;
  }
  .content .column a {
    font-size: 16px;
    color: black;
    text-decoration: none;
    margin-left: 3%;
    padding-bottom: 3px;
  }
  .line {
    border-bottom: 3px solid #b99d6f;
  }
</style>
