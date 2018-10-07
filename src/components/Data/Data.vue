<template>
<div class="page">
  <div id="content">
    <a href="" class="head">
      <img src="../../assets/img/head.png" alt="">
    </a>
    <p>
      数据
    </p>
    <a href="" class="select">
      <img src="../../assets/img/search.png" alt="">
    </a>
  </div>
  <!--ranking-->
  <div class="ranking">
    <div class="rank_saiqu">
      <router-link tag="div" to="/Data/LplData" class="saiquDiv">
        <img class="saiqu" id="saiqu_a" src="../../assets/img/lpl1.png" alt="" >
      </router-link>
      <router-link tag="div" to="/Data/LckData" class="saiquDiv">
        <img class="saiqu" id="saiqu_b" src="../../assets/img/LCK.png" alt="" >
      </router-link>
        <img class="saiqu" id="saiqu_c" src="../../assets/img/LCS.EU.png" alt="" >
        <img class="saiqu" id="saiqu_d" src="../../assets/img/LCS.NA.png" alt="" >
        <img class="saiqu" id="saiqu_e" src="../../assets/img/LMS.png" alt="" >
    </div>
    <router-view></router-view>

  </div>
  <Footer :discuss_gol="gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
</div>
</template>

<script>
    export default {
      name: "Data",
      data() {
        return {
          home_gol : require('../../assets/img/home.png'),
          gol : require('../../assets/img/discuss.png'),
          match_gol : require('../../assets/img/match.png'),
          data_gol : require('../../assets/img/data1.png'),
          team:require('../../assets/img/omg/omg.png')

        }
      },
    }

</script>

<style scoped>
  @import "../../assets/css/matchData.css";
  #content {
    height: 3.4375rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: white;
    text-align: center;
  }
  #content .head img {
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
  .select img {
    position: fixed;
    top: 1rem;
    right: 0.625rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .page {
    padding-top: 3.5rem;
  }
</style>
