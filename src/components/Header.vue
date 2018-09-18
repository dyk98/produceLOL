<template>
    <div id="content">
      <a href="" class="head">
        <img src="../assets/head.png" alt="">
      </a>
      <p>
        首页
      </p>
      <a href="" class="select">
        <img src="../assets/select.png" alt="">
      </a>
    </div>
</template>

<script>
    export default {
      name: "Header",
      // data () {
      //   return
      // }
    }
</script>

<style scoped>
  #content {
    height: 3.34375rem;
    width: 100%;
  }
  #content .head img {
    width: 3rem;
    height: 3rem;
    border-radius:50%;
    position: fixed;
    left: 0.625rem;
    top: 0.625rem;
  }
  #content p {
    position: fixed;
    top: 0.625rem;
    left: 50%;

  }
  .select img {
    position: fixed;
    top: 0.625rem;
    right: 0.625rem;
  }




</style>
