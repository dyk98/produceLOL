<template>
  <div class="page1">
    <div class="title">
      <img src="../../assets/img/lpl.png" alt="">
      <p class="p_left">LPL夏季赛</p>
      <p class="p_right">胜率排名:13</p>
    </div>
    <div class="dataTable">
      <div class="line1">
        <p>出场次数</p>
        <p>胜/负</p>
        <p>胜率</p>
        <p>总击杀(场均)</p>
      </div>
      <div class="line2">
        <p>46</p>
        <p>15/31</p>
        <p>32%</p>
        <p>497(10.8)</p>
      </div>
      <div class="line1">
        <p>总死亡(场均)</p>
        <p>场均插眼</p>
        <p>场均排眼</p>
        <p>场均金钱</p>
      </div>
      <div class="line2">
        <p>595(12.9)</p>
        <p>108</p>
        <p>50</p>
        <p>58865</p>
      </div>
      <div class="line1">
        <p>场均大龙</p>
        <p>场均小龙</p>
        <p></p>
        <p></p>
      </div>
      <div class="line2">
        <p>1.5</p>
        <p>0.4</p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="title">
      <img src="../../assets/img/lpl.png" alt="">
      <p class="p_left">LPL夏季赛</p>
      <p class="p_right">胜率排名:12</p>
    </div>
    <div class="dataTable">
      <div class="line1">
        <p>出场次数</p>
        <p>胜/负</p>
        <p>胜率</p>
        <p>总击杀(场均)</p>
      </div>
      <div class="line2">
        <p>46</p>
        <p>15/31</p>
        <p>32%</p>
        <p>497(10.8)</p>
      </div>
      <div class="line1">
        <p>总死亡(场均)</p>
        <p>场均插眼</p>
        <p>场均排眼</p>
        <p>场均金钱</p>
      </div>
      <div class="line2">
        <p>595(12.9)</p>
        <p>108</p>
        <p>50</p>
        <p>58865</p>
      </div>
      <div class="line1">
        <p>场均大龙</p>
        <p>场均小龙</p>
        <p></p>
        <p></p>
      </div>
      <div class="line2">
        <p>1.5</p>
        <p>0.4</p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "CompetitionData"
    }
</script>

<style scoped>
  .page1 {
    width: 100%;
  }
  .page1 .title {
    width: 100%;
    height: 40px;
    background-color: #f0f0f0;
  }
  .page1 .title img {
    float: left;
    margin-left: 2%;
  }
  .page1 .title p {
    display: inline-block;
    font-size: 14px;
    margin: 0;
    height: 40px;
    line-height: 40px;
  }
  .page1 .title .p_left {
    float: left;
  }
  .page1 .title .p_right {
    float: right;
    margin-right: 2%;
  }
  .page1 .dataTable {
    width: 100%;
    height: 180px;
  }
  .page1 .dataTable .line1{
    display: flex;
    justify-content: left;
    width: 100%;
    height: 30px;
    background-color: #e2d7c5;
  }
  .page1 .dataTable p {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin: 0;
    width: 25%;
  }
  .page1 .dataTable .line2{
    display: flex;
    justify-content: left;
    width: 100%;
    height: 30px;
  }
</style>
