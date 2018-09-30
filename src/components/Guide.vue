<template>
  <div class="page">
    <Header :msg="guide" :gui="gui"></Header>
    <div class="content">
      <!-- 攻略 -->
      <div class="guide">
        <div class="guide_top">
          <p class="guide_title">[攻略]AP剑圣重出江湖！一Q千血！！！！</p>
          <p class="guide_content">一谈到中单剑圣，许多人都会想起曾经的AP剑圣adadasdassdasd</p>
        </div>
        <div class="guide_center">
          <img src="../assets/img/guide_1.jpg" alt="">
          <img src="../assets/img/guide_2.jpg" alt="">
          <img src="../assets/img/guide_3.jpg" alt="">
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            刚刚
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            458
            </span>
            <img src="../assets/img/comment.png" alt="" class="guide_comment">
            <!--<img src="../assets/img/like.png" alt="">-->
          </div>
          <div class="guide_like">
            <span class="guide_like">
            458
            </span>
            <img src="../assets/img/like.png" alt="" class="guide_comment">
            <!--<img src="../assets/img/like.png" alt="">-->
          </div>
        </div>
      </div>
      <div class="guide">
        <div class="guide_top">
          <p class="guide_title">[攻略]AP剑圣重出江湖！一Q千血！！！！</p>
          <p class="guide_content">一谈到中单剑圣，许多人都会想起曾经的AP剑圣adadasdassdasd</p>
        </div>
        <div class="guide_center">
          <img src="../assets/img/guide_1.jpg" alt="">
          <img src="../assets/img/guide_2.jpg" alt="">
          <img src="../assets/img/guide_3.jpg" alt="">
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            刚刚
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            458
            </span>
            <img src="../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
            <span class="guide_like">
            458
            </span>
            <img src="../assets/img/like.png" alt="" class="guide_comment">
          </div>
        </div>
      </div>
    </div>
    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"></Footer>
  </div>


</template>

<script>
    export default {
      name: "Guide",
      data() {
        return {
          guide:'攻略',
          gui:'active',
          gol:'/static/home1.png',
          discuss_gol:'/static/discuss.png',
          match_gol:'/static/match.png',
          data_gol:'/static/data.png',
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
