<template>
    <div>
      <div class="ranking_player">
        <img id="player" class="show" src="../../assets/img/down.png" alt="">
        <span>选手排名</span>
        <div id="rank_player">
          <div>
            <div style="padding: 5px 0">
              <span id="one">1</span>
              <img class="player_photo" src="../../assets/img/Rng/Uzi.png" alt="">
              <img class="team_logo" src="../../assets/img/0-12.png" alt="">
              <span class="player_name">Uzi 简自豪 &nbsp;&nbsp;战力:62.34</span>
            </div>
            <div class="r_heng"></div>
          </div>

          <div>
            <div style="padding: 5px 0">
              <span id="two">2</span>
              <img class="player_photo" src="../../assets/img/JDG/LokeN.png" alt="">
              <img class="team_logo" src="../../assets/img/JDG/0-10.png" alt="">
              <span class="player_name">LokeN 李东昱 &nbsp;&nbsp;战力:57.99</span>
            </div>
            <div class="r_heng"></div>
          </div>

          <div >
            <div style="padding: 5px 0">
              <span id="three">3</span>
              <img class="player_photo" src="../../assets/img/JDG/Clid.png" alt="">
              <img class="team_logo" src="../../assets/img/JDG/0-10.png" alt="">
              <span class="player_name">Clid  金太敏 &nbsp;&nbsp;战力:56.22</span>
            </div>
            <div class="r_heng"></div>
          </div>

          <div class="hidden" hidden>
            <div>
              <div style="padding: 5px 0">
                <span class="then">4</span>
                <img class="player_photo" src="../../assets/img/SNG/H4cker.png" alt="">
                <img class="team_logo" src="../../assets/img/SNG/0-13.png" alt="">
                <span class="player_name">H4cker  杨志浩 &nbsp;&nbsp;战力:56.19</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">5</span>
                <img class="player_photo" src="../../assets/img/IG/Rookie.png" alt="">
                <img class="team_logo" src="../../assets/img/IG/0-9.png" alt="">
                <span class="player_name">Rookie  宋义进 &nbsp;&nbsp;战力:55.51</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">6</span>
                <img class="player_photo" src="../../assets/img/Rng/Ming.png" alt="">
                <img class="team_logo" src="../../assets/img/Rng/0-12.png" alt="">
                <span class="player_name">Ming 史森明 &nbsp;&nbsp;战力:54.13</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">7</span>
                <img class="player_photo" src="../../assets/img/JDG/Yagao.png" alt="">
                <img class="team_logo" src="../../assets/img/JDG/0-10.png" alt="">
                <span class="player_name">Yagao  曾奇 &nbsp;&nbsp;战力:53.58</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">8</span>
                <img class="player_photo" src="../../assets/img/Rng/xiaohu.png" alt="">
                <img class="team_logo" src="../../assets/img/Rng/0-12.png" alt="">
                <span class="player_name">Xiaohu  李元浩 &nbsp;&nbsp;战力:53.45</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">9</span>
                <img class="player_photo" src="../../assets/img/IG/Baolan.png" alt="">
                <img class="team_logo" src="../../assets/img/IG/0-9.png" alt="">
                <span class="player_name">Baolan  王柳羿
         &nbsp;&nbsp;战力:52.73</span>
              </div>
              <div class="r_heng"></div>
            </div>

            <div>
              <div style="padding: 5px 0">
                <span class="then">10</span>
                <img class="player_photo" src="../../assets/img/IG/Ning.png" alt="">
                <img class="team_logo" src="../../assets/img/IG/0-9.png" alt="">
                <span class="player_name">Ning 高振宁 &nbsp;&nbsp;战力:52.51</span>
              </div>
              <div class="r_heng"></div>
            </div>

          </div>
          <div class="showmore" id="show_more">
            <span>展示更多</span>
            <img class="more" src="../../assets/img/more.png" alt="">
          </div>
          <div class="showmore" id="show_less" hidden>
            <span>收起</span>
            <img class="more" src="../../assets/img/less.png" alt="">
          </div>
        </div>
      </div>
      <div class="ranking_team">
        <img id="team" class="show" src="../../assets/img/down.png" alt="">
        <span>战队排名</span>
        <div id="rank_team">
          <div class="where">
            <span id="east">东部</span>
            <span id="west">西部</span>
          </div>
          <div class="where">
            <div class="duan" id="east_"></div>
            <div class="duan" id="west_"></div>
          </div>
          <div class="thead">
            <span>排名</span>
            <span>战队</span>
            <span>胜负</span>
            <span>积分</span>
          </div>
          <div id="east_content">
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">1</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/IG/0-9.png" alt="">&nbsp; I G &nbsp;</div>
                <div class="t_font"><span style="color: #B99D6F">18</span>/1</div>
                <div class="t_font">18</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">2</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/Rng/0-12.png" alt=""> RNG </div>
                <div class="t_font"><span style="color: #B99D6F">14</span>/5</div>
                <div class="t_font">14</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">3</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/JDG/0-10.png" alt=""> JDG </div>
                <div class="t_font"><span style="color: #B99D6F">13</span>/6</div>
                <div class="t_font">13</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">4</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/SNG/0-13.png" alt=""> SNG </div>
                <div class="t_font"><span style="color: #B99D6F">10</span>/9</div>
                <div class="t_font">10</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">5</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/LGD/0-11.png" alt=""> LGD </div>
                <div class="t_font"><span style="color: #B99D6F">9</span>/10</div>
                <div class="t_font">9</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">6</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/BLG/0-7.png" alt=""> BLG </div>
                <div class="t_font"><span style="color: #B99D6F">6</span>/13</div>
                <div class="t_font">6</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">7</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/VG/0-15.png" alt=""> V G </div>
                <div class="t_font"><span style="color: #B99D6F">2</span>/17</div>
                <div class="t_font">2</div>
              </div>
              <div class="t_heng"></div>
            </div>
          </div>
          <div id="west_content" hidden>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">1</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/RW/0-1.png" alt="">&nbsp;R W &nbsp;</div>
                <div class="t_font"><span style="color: #B99D6F">14</span>/5</div>
                <div class="t_font">14</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">2</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/EDG/0-2.png" alt=""> EDG </div>
                <div class="t_font"><span style="color: #B99D6F">11</span>/8</div>
                <div class="t_font">11</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">3</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/TOP/0-6.png" alt=""> TOP </div>
                <div class="t_font"><span style="color: #B99D6F">10</span>/9</div>
                <div class="t_font">10</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">4</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/FPX/0-8.png" alt=""> FPX </div>
                <div class="t_font"><span style="color: #B99D6F">8</span>/11</div>
                <div class="t_font">10</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">5</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/SS/0-14.png" alt=""> S S </div>
                <div class="t_font"><span style="color: #B99D6F">7</span>/12</div>
                <div class="t_font">7</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">6</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/WE/0-16.png" alt=""> W E </div>
                <div class="t_font"><span style="color: #B99D6F">6</span>/13</div>
                <div class="t_font">6</div>
              </div>
              <div class="t_heng"></div>
            </div>
            <div>
              <div class="tbody">
                <div style="flex: 1; text-align: center; "><span class="team_order">7</span></div>
                <div class="t_font"><img class="team_photo"  src="../../assets/img/omg/0-5.png" alt="">&nbsp;OMG</div>
                <div class="t_font"><span style="color: #B99D6F">5</span>/14</div>
                <div class="t_font">5</div>
              </div>
              <div class="t_heng"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LplData"
    }
</script>

<style scoped>
  @import "../../assets/css/matchData.css";

</style>
