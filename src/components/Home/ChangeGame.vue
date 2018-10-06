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
          <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
          <span class="msg_left_time">
            2018-9-18
          </span>
          <span class="msg_left_num">
            1.7万阅读量
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/a.png" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../../assets/img/top.png" alt="" >
          <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
          <span class="msg_left_time">
            2018-9-18
          </span>
          <span class="msg_left_num">
            1.7万阅读量
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/a.png" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../../assets/img/top.png" alt="">
          <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
          <span class="msg_left_time">
              2018-9-18
            </span>
          <span class="msg_left_num">
              1.7万阅读量
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/a.png" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../../assets/img/top.png" alt="">
          <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
          <span class="msg_left_time">
              2018-9-18
            </span>
          <span class="msg_left_num">
              1.7万阅读量
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/a.png" alt="">
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"></Footer>
  </div>
</template>

<script>

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
        game : require('../../assets/img/lpl1.png'),
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
