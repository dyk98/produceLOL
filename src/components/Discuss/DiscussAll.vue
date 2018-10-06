<template>
    <div>
      <div class="content">
        <!-- 资讯浏览 -->
        <router-link tag="div" class="msg_hot" to="/DetailArticle">
          <div class="msg_left">
            <img src="../../assets/img/top.png" alt="">
            <p>按时大苏打飒飒打撒萨达阿三打算啊实打实打算大苏打飒飒按时大苏打飒飒实打实按时大苏打飒飒</p>
            <span class="msg_left_time">
            2018-9-18
            </span>
            <span class="msg_left_num">
            1.7万阅读量
            </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/a.png" alt="">
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DiscussAll"
    }
</script>

<style scoped>
  @import "../../assets/css/information.css";
  .content .msg_hot {
    border: none;
  }
</style>
