<template>
  <div class="page">
    <Header :game="game" :ent="ent"></Header>


    <div class="content">
      <div class="msg_hot" v-for="content in contents">
        <div class="msg_left">
          <img :src="content.top" alt="">
          <p>{{content.title}}</p>
          <span class="msg_left_time">
            {{content.time}}
          </span>
          <span class="msg_left_num">
            {{content.num}}
          </span>
        </div>
        <div class="msg_right">
          <img :src="content.img" alt="">
        </div>
      </div>

    </div>


    <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol" :team="team"></Footer>

  </div>
</template>

<script>
  export default {
    name: "Entertainment",
    data () {
      return {
        entertainment:'娱乐',
        ent:'active',
        discuss_gol : '/static/discuss.png',
        gol : '/static/home1.png',
        match_gol : '/static/match.png',
        data_gol : '/static/data.png',
        game : '/static/lol.png',
        team:'/static/omg/omg.png',
        contents:[
            {
                top:'/static/top.png',
                title:'你心中的本届世界赛TOP5战队为？',
                time:'2018-9-28',
                num:'1.7万阅读量',
                img:'/static/home_d1.jpg'
            },{
                top:'',
                title:'美测服：伊泽瑞尔原画更新，又翻身了？',
                time:'2018-9-28',
                num:'1.7万阅读量',
                img:'/static/home_d2.jpg'
            },{
                top:'',
                title:'LOL短视频团强力招募啦！',
                time:'2018-9-28',
                num:'1.7万阅读量',
                img:'/static/home_d3.jpg'
            },
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/information.css";
  .content {
    margin-top: 90px;
  }
</style>
