<template>
    <div>
      <div class="content">
        <!-- 资讯浏览 -->
        <div class="msg_hot" v-for="msg in msgs">
          <div class="msg_left">
            <img :src="msg.top" alt="">
            <p>{{msg.title}}</p>
            <span class="msg_left_time">
            {{msg.time}}
            </span>
            <span class="msg_left_num">
            {{msg.num}}
            </span>
          </div>
          <div class="msg_right">
            <img :src="msg.img" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DiscussWell",
        data(){
            return{
                msgs:[
                    {
                        top:'/static/top.png',
                        title:'【赛事信息】2018全球总决赛小组赛RNG赛程',
                        time:'2018-10-07',
                        num:'1.7万阅读量',
                        img:'/static/discuss8.jpg'
                    },{
                        top:'',
                        title:'Uzi这是怎么了，真的费了吗',
                        time:'2018-10-07',
                        num:'1.7万阅读量',
                        img:'/static/discuss9.jpg'
                    },{
                        top:'',
                        title:'终于看懂UZI新名字的意思了',
                        time:'2018-10-07',
                        num:'1.7万阅读量',
                        img:'/static/discuss10.jpg'
                    },{
                        top:'',
                        title:'给RNG每个人写了首词或者诗，有没有兴趣猜猜看每段',
                        time:'2018-10-07',
                        num:'1.7万阅读量',
                        img:'/static/discuss11.jpg'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/information.css";
  .content .msg_hot {
    border: none;
  }
</style>
