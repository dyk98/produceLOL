<template>
    <div>
      <div class="lck">
        <img class="show" id="player" src="../../assets/img/down.png" alt="">
        <span>选手排名</span>
        <div id="rank_player">
          <div>
            <div style="padding: 5px 0">
              <span id="one">1</span>
              <img class="player_photo" src="../../assets/img/LCK/smeb.png" alt="">
              <img class="team_logo" src="../../assets/img/LCK/KT.png" alt="">
              <span class="player_name">Smeb &nbsp;&nbsp;平均PP:168</span>
            </div>
            <div class="r_heng"></div>
          </div>

          <div>
            <div style="padding: 5px 0">
              <span id="two">2</span>
              <img class="player_photo" src="../../assets/img/LCK/default2.png" alt="">
              <img class="team_logo" src="../../assets/img/LCK/AFS.png" alt="">
              <span class="player_name">Kiin &nbsp;&nbsp;平均PP:151</span>
            </div>
            <div class="r_heng"></div>
          </div>

          <div >
            <div style="padding: 5px 0">
              <span id="three">3</span>
              <img class="player_photo" src="../../assets/img/LCK/default2.png" alt="">
              <img class="team_logo" src="../../assets/img/LCK/GRF.png" alt="">
              <span class="player_name">Sword &nbsp;&nbsp;平均PP:147</span>
            </div>
            <div class="r_heng"></div>
          </div>
          <div class="showmore">
            <span>展示更多</span>
            <img class="more" src="../../assets/img/more.png" alt="">
          </div>
        </div>

        <img class="show" src="../../assets/img/down.png" alt="">
        <span>战队排名</span>
        <div class="thead">
          <span>排名</span>
          <span>战队</span>
          <span>胜负</span>
          <span>积分</span>
        </div>
        <div >
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">1</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/KT.png" alt="">&nbsp; K T &nbsp;</div>
              <div class="t_font"><span style="color: #B99D6F">18</span>/1</div>
              <div class="t_font">18</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">2</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/GRF.png" alt=""> GRF </div>
              <div class="t_font"><span style="color: #B99D6F">14</span>/5</div>
              <div class="t_font">14</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">3</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/KZ.png" alt=""> K Z </div>
              <div class="t_font"><span style="color: #B99D6F">13</span>/6</div>
              <div class="t_font">13</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">4</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/GEN.png" alt=""> GEN </div>
              <div class="t_font"><span style="color: #B99D6F">10</span>/9</div>
              <div class="t_font">10</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">5</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/AFS.png" alt=""> AFS </div>
              <div class="t_font"><span style="color: #B99D6F">9</span>/10</div>
              <div class="t_font">9</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">6</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/HLE.png" alt=""> HLE </div>
              <div class="t_font"><span style="color: #B99D6F">6</span>/13</div>
              <div class="t_font">6</div>
            </div>
            <div class="t_heng"></div>
          </div>
          <div>
            <div class="tbody">
              <div style="flex: 1; text-align: center; "><span class="team_order">7</span></div>
              <div class="t_font"><img class="team_photo"  src="../../assets/img/LCK/SKT.png" alt=""> SKT </div>
              <div class="t_font"><span style="color: #B99D6F">2</span>/17</div>
              <div class="t_font">2</div>
            </div>
            <div class="t_heng"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LckData"
    }
</script>

<style scoped>
  @import "../../assets/css/matchData.css";

</style>
