<template>
    <div>
      <div class="content">
        <!-- 资讯浏览 -->
        <router-link tag="div" class="msg_hot" to="/DetailArticle">
          <div class="msg_left">
            <img src="../../assets/img/top.png" alt="">
            <p>你心中的本届世界赛TOP5战队为？</p>
            <span class="msg_left_time">
            2018-9-28
            </span>
            <span class="msg_left_num">
            1.7万阅读量
            </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/discuss1.jpg" alt="">
          </div>
        </router-link>
        <router-link tag="div" class="msg_hot" to="/DetailArticle">
          <div class="msg_left">
            <p>【每周一污】这么萌的盲僧，你还喜欢吗？？</p>
            <span class="msg_left_time">
            2018-9-28
            </span>
            <span class="msg_left_num">
            1.1万阅读量
            </span>
          </div>
          <div class="msg_right">
            <img src="../../assets/img/discuss5.jpg" alt="">
          </div>
        </router-link>        <router-link tag="div" class="msg_hot" to="/DetailArticle">
        <div class="msg_left">
          <p>盖伦牌凉皮，你要来一碗吗 ？</p>
          <span class="msg_left_time">
            2018-10-08
            </span>
          <span class="msg_left_num">
            1.5万阅读量
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/discuss6.jpg" alt="">
        </div>
      </router-link>        <router-link tag="div" class="msg_hot" to="/DetailArticle">
        <div class="msg_left">
          <p>二珂阿冷骚男献唱 淑怡大跳盖伦舞蹈？</p>
          <span class="msg_left_time">
            2018-10-01
            </span>
          <span class="msg_left_num">
            1.3万阅读量
            </span>
        </div>
        <div class="msg_right">
          <img src="../../assets/img/discuss7.jpg" alt="">
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
