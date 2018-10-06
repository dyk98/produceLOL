<template>
  <div class="page">
    <div id="content" v-show="hid">
      <a href="" class="head " >
        <img src="../../assets/img/head.png" alt="">
      </a>
      <div class="teamDiv"  @click="showteam">
        <img src="../../assets/img/omg/omg.png" alt="" class="omg">
        <img src="../../assets/img/arrow.png" alt="" class="more">
      </div>
      <a href="" class="select">
        <img src="../../assets/img/search.png" alt="">
      </a>
      <!-- 栏目 -->
      <div class="column">
        <ul >
          <router-link tag="li" to="/Competition/CompetitionMsg" >动态</router-link>
          <router-link tag="li" to="/Competition/CompetitionTime" >赛程</router-link>
          <router-link tag="li" to="/Competition/CompetitionMember" >队员</router-link>
          <router-link tag="li" to="/Competition/CompetitionData" >数据</router-link>
          <router-link tag="li" to="/Competition/CompetitionMes" >资料</router-link>
        </ul>
      </div>
    </div>
    <router-view ></router-view>


    <div id="show_team" hidden>
      <div class="bg">

      </div>
      <div style="position: absolute; top: 20px; left: 15px"><img style="width: 20px" src="../../assets/img/out.png" alt="" @click="showteam"></div>
      <span>
    <div class="zone" >
        <div id="lpl" class="zone_bg" ><img class="zone_logo" src="../../assets/img/lpl.png" alt=""></div>
        <div class="zone_bg" ><img class="zone_logo" src="../../assets/img/LCK.png" alt=""></div>
        <div class="zone_bg" ><img class="zone_logo" src="../../assets/img/LCS.NA.png" alt=""></div>
        <div class="zone_bg" ><img class="zone_logo" src="../../assets/img/LCS.EU.png" alt=""></div>
        <div class="zone_bg" ><img class="zone_logo" src="../../assets/img/LMS.png" alt=""></div>
    </div>
    <div class="team">
        <img class="team_logo" src="../../assets/img/BLG/0-7.png" alt="">
        <router-link tag="div" to="/ChangeTeam" class="logoDiv">
          <img class="team_logo" src="../../assets/img/EDG/0-2.png" alt="">
        </router-link>
        <img class="team_logo" src="../../assets/img/FPX/0-8.png" alt="">
        <img class="team_logo" src="../../assets/img/IG/0-9.png" alt="">
        <img class="team_logo" src="../../assets/img/JDG/0-10.png" alt="">
    </div>

    <div class="team_b">
        <img class="team_logo" src="../../assets/img/LGD/0-11.png" alt="">
        <img class="team_logo" src="../../assets/img/omg/0-5.png" alt="">
        <img class="team_logo" src="../../assets/img/Rng/0-12.png" alt="">
        <img class="team_logo" src="../../assets/img/RW/0-1.png" alt="">
        <img class="team_logo" src="../../assets/img/SNG/0-13.png" alt="">
    </div>
    <div class="team_c">
        <img class="team_logo" src="../../assets/img/SS/0-14.png" alt="">
        <img class="team_logo" src="../../assets/img/TOP/0-6.png" alt="">
        <img class="team_logo" src="../../assets/img/VG/0-15.png" alt="">
        <img class="team_logo" src="../../assets/img/WE/0-16.png" alt="">
        <div class="team_logo" >
    </div>

        </div>
        </span>
    </div>


    <Footer :discuss_gol="discuss_gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol" :gol="gol"></Footer>
  </div>

</template>

<script>
    export default {
      name: "Competition",
      data() {
        return {
          discuss_gol : require('../../assets/img/discuss.png'),
          home_gol : require('../../assets/img/home.png'),
          match_gol : require('../../assets/img/match.png'),
          data_gol : require('../../assets/img/data.png'),
          gol:true,
          hid:true
        }
      },
      methods: {
        active(){

          // if (this.$route.name === 'CompetitionData') {
          //   this.button = true
          // }else {
          //   this.button = false
          // }
          // console.log(this.$route.name)
        },
        showteam() {
          var q = document.getElementById('show_team');
          if (q.style.display = 'hidden'){
            q.style.display = 'block';
            this.hid = !this.hid
          } else {
            q.style.display = 'hidden';
            this.hid = !this.hid
            console.log('aaa')
          }
        }
      }
    }
</script>

<style scoped>
  .teamDiv {
    position: fixed;
    left: 45%;
    /*top: 8px;*/
    width: 60px;
    height: 50px;
    display: inline-block;
  }
  .more {
    position: fixed;
    left: 55.8%;
    top: 18px;
    width: 24px;
    height: 24px;
  }
  .router-link-active {
    color: #b99d6f;
  }
  .column {
    background-color: white;
    z-index: 999;
    margin-top: 3.4rem;
    width: 100%;
  }
  #content .column ul {
    display: flex;
    padding: 0;
    padding-top: 3px;
    margin: 0;
    justify-content: space-between;
  }

  #content .column ul li {
    width: 52px;
    height: 24px;
    list-style: none;
    /*flex: 1;*/
    font-size: 14px;
  }

  #content {
    /*height: 3.4375rem;*/
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
  #content .omg {
    position: fixed;
    left: 45.8%;
    width: 36px;
    height: 36px;
    top: 10px;
  }
  .select img {
    position: fixed;
    top: 1rem;
    right: 0.625rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .page {
    padding-top: 5.5rem;
  }


  /*select*/

  .bg {
    background: #FFFFFF ;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: fixed;
    margin: 0;
    top: 0;
    bottom: 0;
  }

  .zone {
    position: absolute;
    top: 80px;
    display: flex;
    width: 100%;
  }

  .zone_bg {
    flex: 1;
    text-align: center;
    background: #E5D8C3;
    border-bottom: 3px solid #B99D6F;
  }

  .zone_logo {
    width: 40px;
    height: 40px;
    padding-top: 5px;

  }

  #lpl {
    border: 3px solid #B99D6F;
    border-bottom: none;
  }

  .team {
    position: absolute;
    top: 150px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .team_logo {
    width: 50px;
    height: 50px;
  }
  .logoDiv {
    display: inline-block;
    width: 50px;
    height: 50px;
  }


  .team_b {
    position: absolute;
    top: 220px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .team_c {
    position: absolute;
    top: 290px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  /*select*/
</style>
