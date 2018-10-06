<template>
    <div>
      <div class="game">
        <div class="game_time">2018-10-3</div>
        <div class="game_name">
          <img class="logo" src="../../assets/img/lpl1.png" alt="">
          <span class="game_font" >2018全国总决赛入围赛</span>
          <div class="heng"></div>
        </div>
        <router-link tag="div" class="game_content" to="/VideoDetail">
          <div class="game_team">
            <div class="game_kong">
              <img class="logo" src="../../assets/img/0-5.png" alt="">
              <span class="team_name">OMG</span>
              <span class="team_name">2</span>
            </div>
            <div>
              <img class="logo" src="../../assets/img/0-12.png" alt="">
              <span class="team_name">RNG</span>
              <span class="team_name">3</span>
            </div>
          </div>
          <div class="game_situation">
            <span>已结束</span><br>
            <span>BO5   15:00</span>
          </div>
          <div class="game_live">
            <img class="picture" src="../../assets/img/game.png" alt="">
          </div>
        </router-link>
      </div>
      <div class="game">
        <div class="game_time">2018-10-2</div>
        <div class="game_name">
          <img class="logo" src="../../assets/img/lpl1.png" alt="">
          <span class="game_font" >2018全国总决赛入围赛</span>
          <div class="heng"></div>
        </div>
        <router-link tag="div" class="game_content" to="/VideoDetail">
          <div class="game_team">
            <div class="game_kong">
              <img class="logo" src="../../assets/img/0-5.png" alt="">
              <span class="team_name">OMG</span>
              <span class="team_name">2</span>
            </div>
            <div>
              <img class="logo" src="../../assets/img/0-12.png" alt="">
              <span class="team_name">RNG</span>
              <span class="team_name">3</span>
            </div>
          </div>
          <div class="game_situation">
            <span>已结束</span><br>
            <span>BO5   15:00</span>
          </div>
          <div class="game_live">
            <img class="picture" src="../../assets/img/game.png" alt="">
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CompetitionTime"
    }
</script>

<style scoped>
  .game {
    width: 100%;
    background: #FFFFFF;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 162px;
  }

  .game_time {
    background: #F1F1F1;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .logo {
    width: 30px;
    margin-left: 13px;
    display:inline-block;
    vertical-align:middle;
  }

  .game_font {
    margin-left: 10px;
    line-height: 40px;
  }

  .heng {
    height: 1px;
    width: 100%;
    background: #EAEAEA;
  }

  .game_content {
    display: flex;
    padding-top: 10px;
  }

  .game_kong {
    margin-bottom: 15px;
  }

  .game_team {
    flex: 1;
    height: 80px;
  }

  .team_name {
    margin-left: 10px;
    line-height: 30px;
  }

  .game_situation {
    flex: 1;
    text-align: center;
    height: 60px;
    color: #828282;
    margin-top: 20px;
  }

  .game_live {
    flex: 1;
    height: 80px;
  }

  .picture {
    width: 120px;
    height: 80px;
  }
</style>
