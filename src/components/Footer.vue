<template>
    <div id="footer">
      <ul class="bottom">
        <router-link tag="li" to="/"><img :src="home_gol" alt=""></router-link>
        <router-link tag="li" class="left" to="/Discuss"><img :src="discuss_gol" alt=""></router-link>
        <li id="rng"><img src="../assets/img/omg/omg.png" alt="" class="rng" @click="change()" ref="rng"></li>
        <li class="right"><img :src="match_gol" alt=""></li>
        <li><img :src="data_gol" alt=""></li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "Footer",
      methods:{
        change() {
          this.$refs.rng.style.border = '1px solid #b99d6f';
        }
      },
      props: {
        'home_gol': String,
        'discuss_gol': String,
        'match_gol': String,
        'data_gol': String
      }
    }
</script>

<style scoped>
  #footer {
    height: 3.3rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #dedede;
  }
  #footer .bottom {
    padding: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 12px;
  }
  #footer .bottom img {
    width: 26px;
    height: 26px;
  }
  #footer .bottom li {
    width: 50px;
    height: 65px;
  }
  #footer .bottom .rng{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid #cdcdcd;
  }
  #footer .bottom #rng {
    position: fixed;
    bottom: 3px;
    left: 44%;
    background-color: white;
  }
  #footer .bottom .left {
    padding-right: 10%;
  }
  #footer .bottom .right {
    padding-left: 10%;
  }
</style>
