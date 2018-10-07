<template>
  <div class="page3">
    <div class="content2">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <router-link tag="div" class="swiper-slide" to="/MemberData">
            <img src="../../assets/img/xiyang.png" alt="">
          </router-link>
          <!--<div class="swiper-slide">-->
            <!--<img src="../../assets/img/xiyang.png" alt="">-->
          <!--</div>-->
          <div class="swiper-slide">
            <img src="../../assets/img/icon.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/world6.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/xiyang.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/xiyang.png" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "CompetitionMes",
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          // clickable: true,
        },
      });
    }
  }
</script>

<style scoped>
  .page3, .content2 {
    position: relative;
    height: 500px;
    width: 100%;
  }
  .content2 {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    height: 100%;
  }
</style>
