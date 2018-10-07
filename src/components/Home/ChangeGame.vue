<template>
  <div class="page">
    <Header :game="game" :hot="hot"></Header>
    <div class="content">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/img/silde5.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/silde6.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/slide7.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/slide8.png" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--  战队对战 -->
      <div class="match">
        <div class="match_center">
          <a href="" class="team_left">
            <img src="../../assets/img/team1.png" alt="">
          </a>
          <p>
            对战
          </p>
          <a href="" class="team_right">
            <img src="../../assets/img/BBQ.png" alt="">
          </a>
        </div>
        <span>
          <p>
            13:00
          </p>
        </span>
      </div>
      <!-- 资讯浏览 -->
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../../assets/img/top.png" alt="">
          <p>10月6日瓶子KPL速递：eStar零封YTG,RNG.M成功阻击JC连胜</p>
          <span class="msg_left_time">
            2018-10-07
          </span>
          <span class="msg_left_num">
            12.6万次阅读
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/wz1.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>【第六届王者荣耀城市赛】赛况直击：荣耀战火起，赛场硝烟弥漫！</p>
          <span class="msg_left_time">
            2018-10-06
          </span>
          <span class="msg_left_num">
            24.6万次阅读
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/wz2.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>BA黑凤梨 3-0 RW侠，BA3ban张良压制性豪取七连胜</p>
          <span class="msg_left_time">
              2018-10-06
            </span>
          <span class="msg_left_num">
              14.6万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/wz3.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>久妹上分日记：最初-鬼谷子篇，峡谷灵性开团发动机</p>
          <span class="msg_left_time">
              2018-10-06
            </span>
          <span class="msg_left_num">
              7.6万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/wz4.jpg" alt="">
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "ChangeGame",
    data () {
      return {
        home: '首页',
        hot:'active',
        discuss_gol : require('../../assets/img/discuss.png'),
        gol : require('../../assets/img/home1.png'),
        match_gol : require('../../assets/img/match.png'),
        data_gol : require('../../assets/img/data.png'),
        game : require('../../assets/img/game0.png'),
        team:require('../../assets/img/BBQ.png')
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
  @import "../../assets/css/information.css";
  .swiper-slide img{
    width: 100%;
    height: 200px;
  }
  .content {
    margin-top: 90px;
  }
  .match {
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
  }
  .match .match_center {
    width: 160px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
  }
  .match .match_center .team_left {
    float: left;
  }
  .match .match_center  img {
    width: 44px;
    height: 50px;
  }
  .match .match_center p {
    font-size: 14px;
    display: inline-block;
    height: 40px;
    width: 50px;
    line-height: 40px;
    margin-top: 8px;
  }
  .match .match_center .team_right {
    float: right;
  }
  .match span p {
    margin: 0;
    text-align: center ;
    font-size: 14px;
    color: #AAAAAA;

  }




</style>
