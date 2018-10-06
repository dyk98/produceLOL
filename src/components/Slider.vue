<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/img/1.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../assets/img/2.png" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
      name: "slider",
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 200px;
  }
</style>
