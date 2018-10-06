<template>
    <div class="page_Member">
      <div class="pageHead">
        <router-link tag="div" to="/Competition/CompetitionMember" class="wbackDiv">
          <img src="../../assets/img/wback.png" alt="" class="wback">
        </router-link>
        <img src="../../assets/img/omg/xiyang.png" alt="" class="headCenter">
        <p class="memberName">xiyang/杨彬</p>
        <p class="memberPosition">OMG 上单</p>
      </div>
      <div class="column">
        <div>
          <router-link tag="p" to="/MemberData/MemberNews">选手动态</router-link>
        </div>
        <div>
          <router-link tag="p" to="/MemberData/PersonalData">个人数据</router-link>
        </div>
        <div>
          <router-link tag="p" to="/MemberData/CompetitionHis">比赛历史</router-link>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MemberData"
    }
</script>

<style scoped>
  .router-link-active {
    border-bottom: 2px solid #b99d6f;
  }
  .pageHead {
    width: 100%;
    height: 230px;
    background-color: #1a1a1c;
    position: relative;
  }
  .pageHead .wback {
    width: 25px;
    height: 25px;
    margin-top: 15px;
    margin-left: 10px;
  }
  .wbackDiv {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .pageHead .headCenter {
    position: absolute;
    height: 100px;
    width: 100px;
    top: 23%;
    left: 50%;
    margin-left: -50px;
    border: 1px solid white;
    border-radius: 50%;
  }
  .pageHead p {
    color: white;
    font-size: 14px;
  }
  .pageHead .memberName {
    position: absolute;
    top: 68%;
    left: 41%;
  }
  .pageHead .memberPosition {
    position: absolute;
    top: 80%;
    left: 41.5%;
  }
  .column {
    display: flex;
    height: 45px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;

  }
  .column div {
    flex: 1;
    margin: auto;
  }
  .column p {
    display: inline-block;
    width: 64px;
    font-size: 14px;
  }
</style>
