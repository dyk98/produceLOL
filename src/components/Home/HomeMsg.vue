<template>
    <div class="page">
      <Header :game="game" :imf="imf"></Header>
      <div class="content">
        <!-- 资讯浏览 -->
        <div class="msg_hot">
          <div class="msg_left">
            <img src="../../assets/img/top.png" alt="">
            <p>《全球总决赛传奇》第二期：Uzi的传奇开篇</p>
            <span class="msg_left_time">
            2018-10-01
          </span>
            <span class="msg_left_num">
            22.1万次阅读
          </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/home_b1.jpg" alt="">
          </div>
        </div>
        <div class="msg_hot">
          <div class="msg_left">
            <p>2018全球总决赛主题曲MV—登峰造极境</p>
            <span class="msg_left_time">
            2018-09-28
          </span>
            <span class="msg_left_num">
            166.0万次阅读
          </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/home_b2.jpg" alt="">
          </div>
        </div>
        <div class="msg_hot">
          <div class="msg_left">
            <p>全球总决赛激战季开启！</p>
            <span class="msg_left_time">
            2018-10-01
          </span>
            <span class="msg_left_num">
            12.6万次阅读
          </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/home_b3.jpg" alt="">
          </div>
        </div>
        <div class="msg_hot">
          <div class="msg_left">
            <p>奥德赛船员性格测试 来看看你在船上的职责吧！</p>
            <span class="msg_left_time">
            2018-09-28
          </span>
            <span class="msg_left_num">
            12.6万次阅读
          </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/home_b4.jpg" alt="">
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
      name: "HomeMsg",
      data () {
        return {
          homemsg: '资讯',
          imf:'active',
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
