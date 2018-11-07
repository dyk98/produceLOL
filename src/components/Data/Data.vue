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
    $(function(){
      var player = 1;

      var show_more =1;
      var show_less =0;

      var team = 1;

      var E = 1;
      var W = 0;


      $('#player').click(function () {
        if(player === 1){
          player = 0;
          $('#player').css( "transform","rotate(180deg)" );
          $('#rank_player').css("display","none");
        }else {
          player = 1;
          $('#rank_player').css("display","block");
          $('#player').css( "transform","rotate(0deg)" );
        }
      });

      $('#show_more').click(function () {
        if(show_more === 1){
          show_more = 0;
          $('#show_more').css("display","none");
          $('.hidden').css("display","block");
          $('#show_less').css("display","block");
          show_less = 1;
        }
      });

      $('#show_less').click(function () {
        if(show_less === 1){
          show_more = 1;
          $('#show_more').css("display","block");
          $('.hidden').css("display","none");
          $('#show_less').css("display","none");
          show_less = 0;
        }
      });

      $('#team').click(function () {
        if(team === 1){
          team = 0;
          $('#rank_team').css("display","none");
          $('#team').css( "transform","rotate(180deg)" );
        }else {
          team = 1;
          $('#rank_team').css("display","block");
          $('#team').css( "transform","rotate(0deg)" );
        }
      });

      $('#east').click(function () {
        if(E === 1){
          $('#east_content').css("display","block");
          $('#west_content').css("display","none");
          $('#east').css("color","#B99D6F");
          $('#east_').css("background","#B99D6F");
          $('#west').css("color","#000000");
          $('#west_').css("background","#FFFFFF");
        }
      });

      $('#west').click(function () {
        if(W === 0) {
          $('#east_content').css("display", "none");
          $('#west_content').css("display", "block");
          $('#west').css("color","#B99D6F");
          $('#west_').css("background","#B99D6F");
          $('#east').css("color","#000000");
          $('#east_').css("background","#FFFFFF");
        }
      });

      $('#saiqu_a').click(function () {
        $('.saiqu').css("border-bottom","4px solid #EAEAEA");
        $('#saiqu_a').css("border-bottom","4px solid #B99D6F");
        $('.lck').css("display","none");
        $('.ranking_player').css("display","block");
        $('.ranking_team').css("display","block");
      });

      $('#saiqu_b').click(function () {
        $('.saiqu').css("border-bottom","4px solid #EAEAEA");
        $('#saiqu_b').css("border-bottom","4px solid #B99D6F");

        $('.lck').css("display","block");
        $('.ranking_player').css("display","none");
        $('.ranking_team').css("display","none");

      });
    })


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
