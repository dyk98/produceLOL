<template>
  <div class="page2">
    <div class="content1">
      <div class="team_name">
        <img src="../../assets/img/omg/omg.png" alt="">
        <p class="simple">OMG</p>
        <p class="all">OHMYGOD</p>
      </div>
      <div class="introduction">
        <p class="title1">战队简介</p>
        <p class="team_content">       OMG电子竞技俱乐部成立于2012年6月在四川成都成立，旗下拥有英雄联盟分部、守望先锋分部、FIFA分部等。OMG电子竞技俱乐部，全称为：OHMYGOD，是国内迄今为止最具人气的英雄联盟战队之一，曾在职业联赛赛场上创造过17连胜的惊人记录。“黑暗势力”“星球之光”是玩家对于他们深刻的记忆，他们的成长令人震惊，他们每一次披荆前行，都会让见证者高呼他们的名字。2018年，OMG将在成都开启主场，为成都带来更多精彩的电竞。</p>
      </div>
      <div class="member">
        <p class="title1">现役队员</p>
        <div class="memberHead">
          <div class="line1">
            <img src="../../assets/img/omg/icon.png" alt="">
            <img src="../../assets/img/omg/xiyang.png" alt="">
            <img src="../../assets/img/omg/world6.png" alt="">
            <img src="../../assets/img/omg/Five.png" alt="">
          </div>
          <div class="line2">
            <p>Icon</p>
            <p>Xiyang</p>
            <p>World6</p>
            <p>Five</p>
          </div>
          <div class="line1">
            <img src="../../assets/img/omg/Mountain.png" alt="">
            <img src="../../assets/img/omg/Casual.png" alt="">
            <img src="../../assets/img/omg/JieKou.png" alt="">
            <img src="../../assets/img/omg/Chelly.png" alt="">
          </div>
          <div class="line2">
            <p>Icon</p>
            <p>Xiyang</p>
            <p>World6</p>
            <p>Five</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'CompetitionMes'
  }
</script>

<style>
  .page2 {
    width: 100%;
    overflow: auto;
    background-color: #1a1a1c;
  }
  .content1 {
    width: 90%;
    margin: 0 auto;
  }
  .content1 .team_name {
    width: 100%;
    height: 160px;
  }
  .content1 .team_name img{
    width: 40%;
    height: 150px;
    float: left;

  }
  .content1 .team_name p {
    display: inline-block;
    color: white;
    margin: 0;
    margin-top: 20px;
  }
  .content1 .team_name .simple {
    font-size: 48px;
  }
  .content1 .team_name .all {
    font-size: 36px;
  }
  .content1 .introduction {
    font-size: 14px;
    color: white;
  }
  .content1 .introduction .team_content {
    width: 100%;
    height: 190px;
    line-height: 20px;
    text-indent: 2em;
    text-align: left;
  }
  .title1 {
    text-align: left;
    color: white;
    font-size: 14px;
  }
  .content1 .memberHead .line1{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
  }
  .content1 .memberHead .line1 img {
    width: 80px;
    height: 80px;
  }
  .content1 .memberHead .line2 p {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: white;
    font-size: 14px;
    width: 25%;
    text-align: center;
    margin: 0;
  }
  .content1 .memberHead .line2{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
  }
</style>
