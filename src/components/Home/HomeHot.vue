<template>
  <div class="page">
    <Header :game="game" :hot="hot"></Header>
    <div class="content">
      <!-- 轮播图 -->
      <Slider></Slider>
      <!--  战队对战 -->
      <div class="match">
        <div class="match_center">
          <a href="" class="team_left">
            <img src="../../assets/img/rng.png" alt="">
          </a>
          <p>
            对战
          </p>
          <a href="" class="team_right">
            <img src="../../assets/img/omg/omg.png" alt="">
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
          <p>2018英雄联盟全球总决赛入围赛即将到来</p>
          <span class="msg_left_time">
            2018-09-30
          </span>
          <span class="msg_left_num">
            1.5万次阅读
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a1.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>"集卡兑换【龙的传人 乘龙御天】功能现已开启</p>
          <span class="msg_left_time">
            2018-09-28
          </span>
          <span class="msg_left_num">
            4.8万次阅读
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a2.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>8.19版本更新：世界赛版本正式来袭</p>
          <span class="msg_left_time">
              2018-09-26
            </span>
          <span class="msg_left_num">
              3.5万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a3.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>雅加达 2018 珍藏纪念图标限时销售</p>
          <span class="msg_left_time">
              2018-09-30
            </span>
          <span class="msg_left_num">
              2.6万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a4.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>2018全球总决赛解说宣传片《没有假如》</p>
          <span class="msg_left_time">
              2018-09-30
            </span>
          <span class="msg_left_num">
              25.7万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a5.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>S8火热开打 幻联赛助威活动抢先看！</p>
          <span class="msg_left_time">
              2018-10-02
            </span>
          <span class="msg_left_num">
              1.2万次阅读
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_a6.jpg" alt="">
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
  </div>
</template>

<script>

  export default {
    name: "HomeHot",
    data () {
      return {
        home: '首页',
        hot:'active',
        discuss_gol : require('../../assets/img/discuss.png'),
        gol : require('../../assets/img/home1.png'),
        match_gol : require('../../assets/img/match.png'),
        data_gol : require('../../assets/img/data.png'),
        game : require('../../assets/img/lol.png'),
        team:require('../../assets/img/omg/omg.png')

      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/information.css";
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
