<template>
  <div class="page">
    <Header :msg="product" :pro="pro"></Header>
    <div class="content">
      <div class="msg_hot">
        <div class="msg_left">
          <img src="../assets/img/top.png" alt="">
          <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
          <span class="msg_left_time">
            2018-9-18
          </span>
          <span class="msg_left_num">
            1.7万阅读量
          </span>
        </div>
        <div class="msg_right">
          <img src="../assets/img/a.png" alt="">
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"></Footer>

  </div>
</template>

<script>
  export default {
    name: "Product",
    data () {
      return {
        product:'周边',
        pro:'active',
        gol:'/static/home1.png',
        discuss_gol:'/static/discuss.png',
        match_gol:'/static/match.png',
        data_gol:'/static/data.png',
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/information.css";
  .content {
    margin-top: 90px;
  }
</style>
