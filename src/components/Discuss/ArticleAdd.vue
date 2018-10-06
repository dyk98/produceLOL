<template>
    <div>
      <div class="top">
        <router-link tag="div" to="/DiscussDetail" class="noDiv">
          <img class="no" src="../../assets/img/out.png" alt="">
        </router-link>
        <span class="head">发布帖子</span>
        <span class="fly">发布</span>
      </div>
      <div style="margin: 10px auto; text-align: center">
        <textarea class="text" cols="55" rows="16" placeholder="说点什么吧..." ></textarea>
      </div>
      <img class="addimg" src="../../assets/img/addimg.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "ArticleAdd"
    }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
  }

  .no {
    width: 20px;
    vertical-align: middle;
    height: 20px;
  }
  .noDiv {
    height: 20px;
    width: 20px;
    display: inline-block;
  }

  .head {
    line-height: 20px;
  }

  .fly {
    line-height: 20px;
  }

  .text {
    outline: none;
  }

  .addimg {
    width: 100px;
    height: 100px;
    margin-left: 20px;
  }

</style>
