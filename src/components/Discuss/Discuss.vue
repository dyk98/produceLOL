<template>
  <div class="page">
    <div class="header">
      <a href="" class="head">
        <img src="../../assets/img/head.png" alt="">
      </a>
      <p>
        圈子
      </p>
    </div>
    <div id="content">
      <div class="search">
        <input type="text" value="" id="input_search" placeholder="搜索一下">
        <img src="../../assets/img/search.png" alt="" class="search_left">
        <img src="../../assets/img/out.png" alt="" class="search_right" @click="clear">
      </div>
      <div class="discuss">
        <p>我的关注</p>
        <ul>
          <router-link tag="li" to="/DiscussDetail">
            <img src="../../assets/img/rng.png" alt="">
            <span>RNG</span>
          </router-link>
          <router-link tag="li" to="/DiscussDetail">
            <img src="../../assets/img/omg/omg.png" alt="">
            <span>OMG</span>
          </router-link>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="discuss_hot">热门精选</p>
        <ul>
          <li>
            <img src="../../assets/img/EDG/0-2.png" alt="">
            <span>EDG</span>
          </li>
          <li>
            <img src="../../assets/img/IG/0-9.png" alt="">
            <span>IG</span>
          </li>
          <li>
            <img src="../../assets/img/JDG/0-10.png" alt="">
            <span>JDG</span>
          </li>
          <li>
            <img src="../../assets/img/FPX/0-8.png" alt="">
            <span>FPX</span>
          </li>
          <li>
            <img src="../../assets/img/SS/0-14.png" alt="">
            <span>SS</span>
          </li>
          <li>
            <img src="../../assets/img/VG/0-15.png" alt="">
            <span>VG</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer :discuss_gol="gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
  </div>
</template>

<script>
    export default {
      name: "Discuss",
      data() {
        return {
          home_gol : require('../../assets/img/home.png'),
          gol : require('../../assets/img/discuss1.png'),
          match_gol : require('../../assets/img/match.png'),
          data_gol : require('../../assets/img/data.png'),
          team:require('../../assets/img/omg/omg.png')

        }
      },
      methods: {
        clear() {
          document.getElementById('input_search').value = "";
          document.getElementById('input_search').focus();
        }
      }
    }
</script>

<style scoped>
  #content {
    width: 100%;
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
  .header .head img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius:50%;
    position: fixed;
    left: 0.625rem;
    top: 0.7rem;
    padding: 4px;
    border: 1px solid #AAAAAA;
  }
  .header p {
    position: fixed;
    left: 45.8%;
  }


  #content .search {
    height: 35px;
    margin-top: 55px;
    text-align: center;
  }
  #content .search input {
    border: 1px solid #d7d7d7;
    width: 86%;
    height: 30px;
    outline: none;
    border-radius: 5px;
    padding-left: 9%;
  }
  #content .search img {
    width: 15px;
    height: 15px;
  }
  #content .search .search_left {
    position: absolute;
    top: 65px;
    left: 5%;
  }
  #content .search .search_right {
    position: absolute;
    top: 65px;
    right: 5%;
  }
  #content .discuss p{
    display: inline-block;
    padding-left: 10px;
    border-left: 3px solid #b99d6f;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  #content .discuss {
    overflow: hidden;
  }
  #content .discuss ul {
    height: 100%;
    width: 95%;
    margin: 0;
    padding-left: 2px;
  }
  #content .discuss ul li {
    display: inline-block;
    list-style: none;
    width: 15%;
    height: 45px;
    margin-left: 3%;
    margin-bottom: 5px;
  }
  #content .discuss ul li img {
    width: 100%;
    height: 100%;
    border: 1px solid #AAAAAA;
  }
  #content .discuss ul li span{
    font-size: 14px;
    text-decoration: none;
    color: #000;
    margin-left: 22%;
  }
</style>
