<template>
  <div class="page">
    <Header :game="game" :ent="ent"></Header>
    <div class="content">
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../../assets/img/top.png" alt="">
          <p>你心中的本届世界赛TOP5战队为？</p>
          <span class="msg_left_time">
            2018-9-28
          </span>
          <span class="msg_left_num">
            1.7万阅读量
          </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_d1.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p>美测服：伊泽瑞尔原画更新，又翻身了？</p>
          <span class="msg_left_time">
                  2018-9-28
                </span>
          <span class="msg_left_num">
                  2.5万阅读量
                </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_d2.jpg" alt="">
        </div>
      </div>
      <div class="msg_hot">
        <div class="msg_left">
          <p> LOL短视频团强力招募啦！</p>
          <span class="msg_left_time">
                  2018-9-21
                </span>
          <span class="msg_left_num">
                  4.8万阅读量
                </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/home_d3.jpg" alt="">
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>

  </div>
</template>

<script>
  export default {
    name: "Entertainment",
    data () {
      return {
        entertainment:'娱乐',
        ent:'active',
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
</style>
