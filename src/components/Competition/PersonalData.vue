<template>
  <div>
    <div class="hero">
      <p>常用英雄</p>
      <ul class="hero1" >
        <li v-for="img in heroImgs"><img :src="img.address" alt=""></li>
      </ul>
    </div>
    <div class="data">
      <p class="dataP">赛事数据</p>
      <div class="dataDetail" v-for="msg in msgs">
        <p class="match_name">{{msgs.title}}</p>
        <div class="dataNum">
          <div class="line1">
            <p>出场次数 </p>
            <p>总击杀(场均)</p>
            <p>总助攻(场均)</p>
            <p>总死亡(场均)</p>
          </div>
          <div class="line2">
            <p>{{msg.time}}</p>
            <p>{{msg.K}}</p>
            <p>{{msg.A}}</p>
            <p>{{msg.D}}</p>
          </div>
          <div class="line1">
            <p>KDA </p>
            <p>MVP次数</p>
          </div>
          <div class="line2">
            <p>{{msg.KPA}}</p>
            <p>{{msg.MVPTime}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "PersonalData",
        data() {
            return{
                heroImgs:[
                    {
                        address: '/static/q.png'
                    },
                    {
                        address: '/static/s.png'
                    },
                    {
                        address: '/static/d.png'
                    },
                    {
                        address: '/static/f.png'
                    },
                    {
                        address: '/static/g.png'
                    },
                    {
                        address: '/static/h.png'
                    },
                    {
                        address: '/static/j.png'
                    }
                ],
                msgs:[
                    {
                        title: '淘汰赛春季赛常规赛',
                        time: '1',
                        K: '4（4.00）',
                        D: '8（8.00）',
                        A: '3（3.00)',
                        KPA: '0.80',
                        MVPTime: '0'
                    },
                    {
                        title: '淘汰赛春季赛常规赛',
                        time: '1',
                        K: '4（4.00）',
                        D: '8（8.00）',
                        A: '3（3.00)',
                        KPA: '0.80',
                        MVPTime: '0'
                    },
                    {
                        title: '淘汰赛春季赛常规赛',
                        time: '1',
                        K: '4（4.00）',
                        D: '8（8.00）',
                        A: '3（3.00)',
                        KPA: '0.80',
                        MVPTime: '0'
                    }
        ]
        }
        }
    }
</script>

<style scoped>
  .hero {
    overflow: hidden;
  }
  .hero p {
    margin-top: 0;
    margin-left: 4%;
    font-size: 14px;
  }
  .data p {
    margin-top: 0;
    margin-left: 4%;
    font-size: 14px;
  }
  .hero ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding-left: 2px;

  }
  .hero ul li {
    display: inline-block;
    list-style: none;
    width: 15%;
    height: 80px;
    margin-left: 3%;
    margin-bottom: 5px;
    /*background-color: #000;*/
  }
  .hero ul li img {
    width: 100%;
    height: 100%;
    /*border: 1px solid #AAAAAA;*/
  }
  .data {
    margin-top: 10px;
  }
  .dataDetail .match_name{
    border-top: 1px solid #dedede;
    margin-bottom: 0;
  }
  .dataNum {
    width: 92%;

    margin: auto;
  }
  .dataNum .line1{
    display: flex;
    justify-content: left;
    width: 100%;
    height: 24px;
    color: #AAAAAA;
    /*background-color: #e2d7c5;*/
  }
  .dataNum p {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    margin: 0;
    width: 25%;
  }
  .dataNum .line2{
    display: flex;
    justify-content: left;
    width: 100%;
    height: 24px;
  }
  .dataP {
    margin-bottom: 8px;
  }
</style>
