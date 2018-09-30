<template>
    <div id="content">
      <a href="" class="head">
        <img src="../assets/img/head.png" alt="">
      </a>
      <p>
        {{msg}}
      </p>
      <a href="" class="select">
        <img src="../assets/img/search.png" alt="">
      </a>
      <!-- 栏目 -->
      <div class="column">
        <ul >
          <router-link tag="li" to="/" :class="hot">热点</router-link>
          <router-link tag="li" to="/HomeMsg" :class="imf">资讯</router-link>
          <router-link tag="li" to="/Guide" :class="gui">攻略</router-link>
          <router-link tag="li" to="/Entertainment" :class="ent">娱乐</router-link>
          <router-link tag="li" to="/Product" :class="pro">周边</router-link>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Header",
      props: {
        'msg': String,
        'hot': String,
        'imf': String,
        'gui': String,
        'ent': String,
        'pro': String,
      }
    }
</script>

<style scoped>
  .column {
    background-color: white;
    z-index: 999;
    margin-top: 3.4rem;
    width: 100%;
  }
  #content .column ul {
    display: flex;
    padding: 0;
    padding-top: 3px;
    margin: 0;
    justify-content: space-between;
  }

  #content .column ul li {
    width: 52px;
    height: 24px;
    list-style: none;
    /*flex: 1;*/
    font-size: 14px;
  }
  .active {
    color: #b99d6f;
  }

  #content {
    height: 3.4375rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: white;
    text-align: center;
  }
  #content .head img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius:50%;
    position: fixed;
    left: 0.625rem;
    top: 0.7rem;
    padding: 4px;
    border: 1px solid #AAAAAA;
  }
  #content p {
    position: fixed;
    left: 45.8%;
  }
  .select img {
    position: fixed;
    top: 1rem;
    right: 0.625rem;
    width: 1.5rem;
    height: 1.5rem;
  }





</style>
