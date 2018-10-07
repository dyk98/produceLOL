<template>
  <div>
    <div class="video">
      <div :style="note">
        <router-link tag="div" to="/VideoHome" class="wbackDiv">
          <img class="wback" src="../../assets/img/wback.png" alt="" >
        </router-link>
      </div>
      <p class="video_font" >2018-10-03 14:20:00</p>
      <div class="video_flex">
        <div class="video_team">
          <img class="video_logo" src="../../assets/img/0-12.png" alt="">
          <p style="margin: 0">RNG</p>
        </div>
        <div class="video_team">
          <span class="score">3</span>
          <span class="score_m">:</span>
          <span class="score">1</span>
          <p style="margin: 5px">赛后数据</p>
        </div>
        <div class="video_team">
          <img class="video_logo" src="../../assets/img/0-5.png" alt="">
          <p style="margin: 0">OMG</p>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="comment_area">
        <p>
          回复
        </p>
      </div>
      <div class="comment_all">
        <div class="comment">
          <div class="comment_top">
            <img src="../../assets/img/rng.png" alt="">
            <p class="comment_name">啊啊啊</p>
          </div>
          <div class="comment_content">
            <p>阿达萨达萨达飒飒打撒阿斯顿打撒打撒</p>
          </div>
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            刚刚
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            458
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
              <span class="guide_like">
              458
              </span>
            <img src="/static/like.png" alt="" class="guide_comment" v-show="isShow" @click="toggle">
            <img src="/static/like1.png" alt="" class="guide_comment" v-show="!isShow" @click="toggle">
          </div>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>嘻嘻嘻：</p>
          <p>啊大大撒旦</p>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>嘻嘻嘻：</p>
          <p>啊大大撒旦</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "VideoDetail",
    data() {
      return {
        isShow: true,
        note: {
          width: "100%",
          height: "200px",
          background: "url("+ require("../../assets/img/video.png") + ") ",
          backgroundSize:" 100% 100%"
        }
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .video {
    font-size: 14px;
  }

  .wback {
    width: 20px;
    margin: 13px 5px;
  }
  .wbackDiv {
    width: 20px;
  }
  .video_font {
    margin: 5px 13px;
  }

  .video_flex {
    display: flex;
  }

  .video_team {
    flex: 1;
    text-align: center;
  }

  .score {
    font-size: 28px;
    line-height: 50px;
    height: 50px;
    background: #F1F1F1;
    width: 40px;
    display: inline-block;
    margin: 5px auto;
    border-radius: 3px;
  }

  .score_m {
    font-size: 28px;
  }

  .video_logo {
    width: 60px;
    height: 60px;
  }



  .comment_area {
    width: 100%;
    margin: auto;
    border-bottom: 5px solid #f5f5f5;
    position: relative;
  }
  .comment_area p{
    font-size: 14px;
    margin: 5px 0;
    padding-left: 15px;
    border-left: 3px solid #b99d6f;
  }
  .comment {
    width: 90%;
    margin: auto;
    margin-top: 5px;
    position: relative;
  }
  .comment_top .comment_name {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 0;
    position: absolute;
    left: 12%;
    top: 3px;
  }
  .comment_top img {
    height: 30px;
    width: 30px;
  }
  .comment_content p {
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 30px;
    font-size: 14px;
  }
  .center .comment_again {
    width: 90%;
    margin: auto;
    background-color: #f0f0f1;
    height: 35px;
  }
  .center .comment_again p {
    display: inline-block;
    margin: 0;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
  }
  .comment_all {
    border-bottom: 5px solid #f5f5f5;
    padding-bottom: 10px;
  }

  .guide_bottom {
    margin-top: 10px;
    height: 24px;
    width: 90%;
    margin: auto;
    padding-bottom: 5px;
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
