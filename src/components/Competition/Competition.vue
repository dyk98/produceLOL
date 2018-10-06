<template>
  <div class="page">
    <div id="content">
      <a href="" class="head">
        <img src="../../assets/img/head.png" alt="">
      </a>
      <img src="../../assets/img/omg/omg.png" alt="" class="omg">
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
    <Footer :discuss_gol="discuss_gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol" :gol="gol"></Footer>
  </div>

</template>

<script>
    export default {
      name: "Competition",
      data() {
        return {
          home_gol:'/static/home.png',
          discuss_gol:'/static/discuss.png',
          match_gol:'/static/match.png',
          data_gol:'/static/data.png',
          gol:true
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
        }
      }
    }
</script>

<style scoped>
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
</style>
