<template>
  <div class="page">
    <Header :game="game" :gui="gui"></Header>
    <div class="content">
      <!-- 攻略 -->
      <div class="guide">
        <div class="guide_top">
          <p class="guide_title">国服王者狮子亲创 迅捷步法流野区大热</p>
          <p class="guide_content">S8全球赛事正在火热进行，这也意味着S8赛季即将迎来结算，这段时间内一定有很多小伙伴想趁此机会冲一波分。</p>
        </div>
        <div class="guide_center">
          <img src="../../assets/img/guide1.jpg" alt="">
          <img src="../../assets/img/guide2.jpg" alt="">
          <img src="../../assets/img/guide3.jpg" alt="">
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            2018-10-06
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            2779
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
            <!--<img src="../assets/img/like.png" alt="">-->
          </div>
          <div class="guide_like">
            <span class="guide_like">
            3449
            </span>
            <img src="../../assets/img/like.png" alt="" class="guide_comment">
            <!--<img src="../assets/img/like.png" alt="">-->
          </div>
        </div>
      </div>
      <div class="guide">
        <div class="guide_top">
          <p class="guide_title">三战士成让帝杀手锏 诺手剑魔砍翻上路</p>
          <p class="guide_content">让帝这几天在韩服疯狂上分!短短时日，也已经冲上韩服最强王者。恐怖的胜率用血洗韩服来形容可以说丝毫不为过。</p>
        </div>
        <div class="guide_center">
          <img src="../../assets/img/guide4.jpg" alt="">
          <img src="../../assets/img/guide5.jpg" alt="">
          <img src="../../assets/img/guide6.jpg" alt="">
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            2018-10-06
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            3904
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
            <span class="guide_like">
            5669
            </span>
            <img src="../../assets/img/like.png" alt="" class="guide_comment">
          </div>
        </div>
      </div>
      <div class="guide">
        <div class="guide_top">
          <p class="guide_title">LetMe暴力皇子 霸道开团一骑当千</p>
          <p class="guide_content">皇子，作为一个老牌英雄曾在在野区和盲僧平分秋色，随着版本的更替慢慢的淡出我们的视野，但是在近期的高分段中皇子转位上单强势归来，成为了一个Carry能力极强的上单选择。</p>
        </div>
        <div class="guide_center">
          <img src="../../assets/img/guide7.jpg" alt="">
          <img src="../../assets/img/guide8.jpg" alt="">
          <img src="../../assets/img/guide9.jpg" alt="">
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            2018-10-06
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            3.8万
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
            <span class="guide_like">
            5.8万
            </span>
            <img src="../../assets/img/like.png" alt="" class="guide_comment">
          </div>
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>
  </div>


</template>

<script>
    export default {
      name: "Guide",
      data() {
        return {
          guide:'攻略',
          gui:'active',
          discuss_gol : require('../../assets/img/discuss.png'),
          gol : require('../../assets/img/home1.png'),
          match_gol : require('../../assets/img/match.png'),
          data_gol : require('../../assets/img/data.png'),
          game : require('../../assets/img/lol.png'),
          team:require('../../assets/img/omg/omg.png')
        }
      }
    }
</script>

<style scoped>
  .content {
    margin-top: 90px;
  }
  .guide {
    height: 200px;
    width: 90%;
    margin: 0 auto;
    border-top: 1px solid #dedede;
    /*padding-top: 5px;*/
    padding-bottom: 8px;
  }
  .guide_center {
    width: 100%;
    height: 80px;
    text-align: left;
  }
  .guide_center img {
    margin-right: 4%;
    height: 80px;
    width: 80px;
  }
  .guide_content {
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .guide_bottom {
    margin-top: 10px;
    height: 24px;
    width: 100%;
  }
  .guide_bottom span {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #AAAAAA;
  }
  .guide_bottom  img {
    width: 24px;
    height: 24px;

  }
  .guide_comment {
    float: right;
  }
  .guide_comment img {
    margin-left: 10px;
  }
  .guide_like {
    float: right;
  }
</style>
