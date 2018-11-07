<template>
  <div class="page">
    <div class="header">
      <div class="header_top">
        <div class="back">
          <img src="../../assets/img/back.png" alt="" @click="backRouter">
        </div>
        <!--<p>-->
        <!--Rng粉丝鸭血汤-->
        <!--</p>-->
      </div>
    </div>
    <div class="content">
      <div class="article">
        <div class="article_top">
          <img src="../../assets/img/discuss2.jpg" alt="">
          <p class="user_name">官方赛事中心</p>
        </div>
        <div class="article_content">
          <div class="text">
            <p>【龙的传人 李青 乘龙御天】现已开启兑换通道，收集指定卡片即可兑换出【龙的传人 李青 乘龙御天】，并领取至任意大区。

              　　具体兑换方法如下：

              　　1、召唤师在任意大区(峡谷之巅及体验服除外)拥有【龙的传人 李青】、【龙的传人 李青 飞龙在天】、【龙的传人 李青 亢龙有悔】或【龙的传人 李青 跃龙在渊】皮肤，即前往兑换页面(链接地址在下方)兑换每款皮肤所对应的卡片。若在多个不同大区均拥有同一款皮肤或炫彩皮肤，则可兑换多张该皮肤卡片，每个大区仅可兑换1次。

              　　2、消耗【龙的传人 李青】卡片、【龙的传人 李青 飞龙在天】卡片、【龙的传人 李青 亢龙有悔】卡片及【龙的传人 李青 跃龙在渊】卡片各1张，可兑换1张【龙的传人 李青 乘龙御天】卡片。

              　　3、消耗1张【龙的传人 李青 乘龙御天】卡片，即可兑换1个【龙的传人 李青 乘龙御天】皮肤，并领取至任意选定大区内。
            </p>
          </div>
          <!--<textarea name="" id="" cols="30" rows="99">啊实打实打算</textarea>-->
          <img src="../../assets/img/home_a2.jpg" alt="">
        </div>
      </div>
      <div class="guide_bottom">
          <span class="guide_time">
            2018-9-30
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
          <img src="../../assets/img/like.png" alt="" class="guide_comment" v-show="isShow" @click="toggle">
          <img src="../../assets/img/like1.png" alt="" class="guide_comment" v-show="!isShow" @click="toggle">
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
            <img src="../../assets/img/discuss3.jpg" alt="">
            <p class="comment_name">野草疯</p>
          </div>
          <div class="comment_content">
            <p>FW从未缺席4强？？？我记得去年四强好像是RNG WE SKT SSG吧</p>
          </div>
        </div>
        <div class="guide_bottom">
          <span class="guide_time">
            2018-9-30
          </span>
          <div class="guide_comment">
            <span class="guide_comment">
            258
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
              <span class="guide_like">
              658
              </span>
            <img src="../../assets/img/like.png" alt="" class="guide_comment" v-show="isShow" @click="toggle">
            <img src="../../assets/img/like1.png" alt="" class="guide_comment" v-show="!isShow" @click="toggle">
          </div>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>点点elise：</p>
          <p>1.EDG  2.IG  3.GEN.G 4.KT 5.RNG</p>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>Spadger：</p>
          <p>rng kt geng一个档次  都是第一</p>
        </div>
      </div>
      <div class="comment_all">
        <div class="comment">
          <div class="comment_top">
            <img src="../../assets/img/discuss4.jpg" alt="">
            <p class="comment_name">沉醉屠龙情</p>
          </div>
          <div class="comment_content">
            <p>TOP1. RNG   KT并列</p>
          </div>
        </div>
        <div class="guide_bottom">
            <span class="guide_time">
              刚刚
            </span>
          <div class="guide_comment">
            <span class="guide_comment">
            568
            </span>
            <img src="../../assets/img/comment.png" alt="" class="guide_comment">
          </div>
          <div class="guide_like">
            <span class="guide_like">
            128
            </span>
            <img src="../../assets/img/like.png" alt="" class="guide_comment" v-show="isShow" @click="toggle">
            <img src="../../assets/img/like1.png" alt="" class="guide_comment" v-show="!isShow" @click="toggle">
          </div>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>普拉夫：</p>
          <p>我觉得今年rng确实厉害</p>
        </div>
        <div class="comment_again">
          <img src="" alt="">
          <p>抱抱你：</p>
          <p>1.gen.g 2.kt 3.rng 4.afs 5.fw</p>
        </div>
      </div>

    </div>
    <div class="bottom">
      <img src="../../assets/img/pen.png" alt="" class="bottom_left">
      <input type="text" placeholder="我来说几句..." id="input_search">
      <!--<p @click="clear" style="display: inline-block" class="bottom_right">发送</p>-->
      <img src="../../assets/img/send1.png" alt="" class="bottom_right" @click="clear">
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailArticle",
    methods: {
      clear() {
        document.getElementById('input_search').value = "";
        document.getElementById('input_search').focus();
      },
      toggle() {
        this.isShow = !this.isShow
      },
      backRouter() {
        this.$router.back(-1)
      }
    },
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 3.4375rem;
    border-bottom: 5px solid #f5f5f5;
  }
  .header{
    height: 3.4375rem;
    width: 100%;
    text-align: center;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: white;
  }
  .header .back img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius:50%;
    position: fixed;
    left: 0.625rem;
    top: 0.7rem;
    padding: 4px;
  }
  .header p {
    position: fixed;
    left: 35%;
    font-size: 18px;
    margin-top: 15px;
  }



  .article {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    /*padding-top: 5px;*/
    padding-bottom: 8px;
  }
  .article_top .user_name {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 0;
    position: absolute;
    left: 12%;
    top: 3px;
  }
  .article_top {
    position: relative;
  }
  .article_top img {
    height: 30px;
    width: 30px;

  }
  .article_content .text p{
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 30px;
    font-size: 14px;
  }
  .article_content img {
    width: 100%;
    height: 160px;
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
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: white;

  }
  .bottom img{
    height: 20px;
    width: 20px;
  }
  .bottom input {
    width: 85%;
    border: none;
    background-color: #f0f0f1;
    height: 30px;
    border-radius: 3px;
    padding-left: 10%;
    outline: none;
    margin-left: 3%;
    margin-top: 10px;
  }
  .bottom .bottom_right {
    position: absolute;
    right: 5%;
    top: 17.5px;
    height: 20px;
    width: 20px;
  }
  .bottom .bottom_left {
    position: absolute;
    left: 5%;
    top: 15px;
  }
</style>
