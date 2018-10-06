<template>
  <div>
    <nav id="menu">
      <h2 class="head"><img src="../assets/img/head.png" alt=""></h2>
      <ul>
        <li>
          <span>
            <img src="../assets/img/head.png" alt="">
          </span>
          <p>账号</p>
        </li>
        <li>
          <img src="" alt="">
          <p>消息管理</p>
        </li>
        <li>
          <img src="" alt="">
          <p>我的关注</p>
        </li>
        <li>
          <img src="" alt="">
          <p>发布中心</p>
        </li>
        <li>
          <img src="" alt="">
          <p>退出登录</p>
        </li>
      </ul>

    </nav>

    <main id="panel">
      <header>
        <button class="toggle-button"><img src="../assets/img/head.png" alt=""></button>
      </header>
    </main>
  </div>
</template>


<script>
    import Slideout from 'slideout'
    export default {
      name: "Test",
      mounted(){
        var slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': 180,
          'tolerance': 70
        });

        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function() {
          slideout.toggle();
        });
      }
    }

</script>

<style scoped>
  body {
    width: 100%;
    height: 100%;
  }
  .toggle-button {
    margin-top: 10px;
    list-style: none;
    border: none;
    background-color: white;
    outline: none;
  }
  .toggle-button img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius:50%;
    border: 1px solid #AAAAAA;
    padding: 4px;
  }
  #menu h2 {
    /*margin-bottom: 0;*/
  }
  #menu .head img{
    width: 40px;
    height: 40px;
    border-radius:50%;
    border: 1px solid #AAAAAA;
    padding: 4px;
    margin-left: 10%;
  }
  #menu ul {
    padding-left: 10%;
    margin: 0;
  }
  #menu ul li {
    list-style: none;
    height: 40px;
  }
  /*#menu ul li span{*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
  /*}*/
  #menu ul li p {
    margin: 0;
    height: 40px;
    line-height: 40px;
    display: inline-block;
  }
  #menu ul li img {
    height: 20px;
    width: 20px;
    /*line-height: 24px;*/
    /*margin-top: 10px;*/
    display: inline-block;
    vertical-align: middle;
  }















  .slideout-menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    width: 256px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: none;
  }

  .slideout-panel {
    position:relative;
    z-index: 1;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
  }

</style>
