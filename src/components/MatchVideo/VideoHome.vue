<template>
  <div id="content1">
    <div class="header">
      <a href="" class="head">
        <img src="../../assets/img/head.png" alt="">
      </a>
      <p>
        比赛
      </p>
    </div>
    <div class="search">
      <input type="text" value="" id="input_search" placeholder="搜索一下">
      <img src="../../assets/img/search.png" alt="" class="search_left">
      <img src="../../assets/img/out.png" alt="" class="search_right" @click="clear">
    </div>
    <!-- 轮播图 -->
    <div class="slider">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/img/home_a6.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/home_b2.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- 比赛视频 -->
    <div class="game">
      <div class="game_time">2018-10-2</div>
      <div class="game_name">
        <img class="logo" src="../../assets/img/lpl1.png" alt="">
        <span class="game_font" >2018全国总决赛入围赛</span>
        <div class="heng"></div>
      </div>
      <router-link tag="div" class="game_content" to="/VideoDetail">
        <div class="game_team">
          <div class="game_kong">
            <img class="logo" src="../../assets/img/0-5.png" alt="">
            <span class="team_name">OMG</span>
            <span class="team_name">2</span>
          </div>
          <div>
            <img class="logo" src="../../assets/img/0-12.png" alt="">
            <span class="team_name">RNG</span>
            <span class="team_name">3</span>
          </div>
        </div>
        <div class="game_situation">
          <span>已结束</span><br>
          <span>BO5   15:00</span>
        </div>
        <div class="game_live">
          <img class="picture" src="../../assets/img/game.png" alt="">
        </div>
      </router-link>
    </div>
    <div class="game">
      <div class="game_time">2018-10-2</div>
      <div class="game_name">
        <img class="logo" src="../../assets/img/lpl1.png" alt="">
        <span class="game_font" >2018全国总决赛入围赛</span>
        <div class="heng"></div>
      </div>
      <router-link tag="div" class="game_content" to="/VideoDetail">
        <div class="game_team">
          <div class="game_kong">
            <img class="logo" src="../../assets/img/0-5.png" alt="">
            <span class="team_name">OMG</span>
            <span class="team_name">2</span>
          </div>
          <div>
            <img class="logo" src="../../assets/img/0-12.png" alt="">
            <span class="team_name">RNG</span>
            <span class="team_name">3</span>
          </div>
        </div>
        <div class="game_situation">
          <span>已结束</span><br>
          <span>BO5   15:00</span>
        </div>
        <div class="game_live">
          <img class="picture" src="../../assets/img/game.png" alt="">
        </div>
      </router-link>
    </div>
    <Footer :discuss_gol="discuss_gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "VideoHome",
    methods: {
      clear() {
        document.getElementById('input_search').value = "";
        document.getElementById('input_search').focus();
      }
    },
    data() {
      return {
        home_gol : require('../../assets/img/home.png'),
        discuss_gol : require('../../assets/img/discuss.png'),
        match_gol : require('../../assets/img/match1.png'),
        data_gol : require('../../assets/img/data.png'),
        team:require('../../assets/img/omg/omg.png')

      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 150px;
  }
  #content1 {
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


  #content1 .search {
    height: 35px;
    margin-top: 55px;
    text-align: center;
    margin-bottom: 10px;
  }
  #content1 .search input {
    border: 1px solid #d7d7d7;
    width: 86%;
    height: 30px;
    outline: none;
    border-radius: 5px;
    padding-left: 9%;
  }
  #content1 .search img {
    width: 15px;
    height: 15px;
  }
  #content1 .search .search_left {
    position: absolute;
    top: 65px;
    left: 5%;
  }
  #content1 .search .search_right {
    position: absolute;
    top: 65px;
    right: 5%;
  }


  .game {
    width: 100%;
    background: #FFFFFF;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 162px;
    margin-top: 10px;
  }

  .game_time {
    background: #F1F1F1;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .logo {
    width: 30px;
    margin-left: 13px;
    display:inline-block;
    vertical-align:middle;
  }

  .game_font {
    margin-left: 10px;
    line-height: 40px;
  }

  .heng {
    height: 1px;
    width: 100%;
    background: #EAEAEA;
  }

  .game_content {
    display: flex;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  .game_kong {
    margin-bottom: 15px;
  }

  .game_team {
    flex: 1;
    height: 80px;
  }

  .team_name {
    margin-left: 10px;
    line-height: 30px;
  }

  .game_situation {
    flex: 1;
    text-align: center;
    height: 60px;
    color: #828282;
    margin-top: 20px;
  }

  .game_live {
    flex: 1;
    height: 80px;
  }

  .picture {
    width: 120px;
    height: 80px;
  }
</style>
