<template>
    <div class="page">

        <!--header-->
        <Header :game="game" :imf="imf"></Header>

        <!-- 资讯浏览 -->
        <div class="content" >
            <div class="msg_hot" v-for="content in contents">
                <div class="msg_left">
                    <img :src="content.top" alt="">
                    <p>{{content.title}}</p>
                    <span class="msg_left_time">{{content.time}}</span>
                    <span class="msg_left_num">{{content.num}}</span>
                </div>
                <div class="msg_right">
                    <img :src="content.img" alt="">
                </div>
            </div>
        </div>

        <!--footer-->
        <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"
                :team="team"></Footer>
    </div>
</template>

<script>
    export default {
        name: "HomeMsg",
        data() {
            return {
                homemsg: '资讯',
                imf: 'active',
                discuss_gol: '/static/discuss.png',
                gol: '/static/home1.png',
                match_gol: '/static/match.png',
                data_gol: '/static/data.png',
                game: '/static/lol.png',
                team: '/static/omg/omg.png',
                contents: [
                    {
                        title: '《全球总决赛传奇》第二期：Uzi的传奇开篇',
                        top: '/static/top.png',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a1.jpg'
                    }, {
                        title: '2018全球总决赛主题曲MV—登峰造极境',
                        top: '',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a2.jpg'
                    }, {
                        title: '全球总决赛激战季开启！',
                        top: '',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a3.jpg'
                    }, {
                        title: '奥德赛船员性格测试 来看看你在船上的职责吧！',
                        top: '',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a4.jpg'
                    }, {
                        title: '2018全球总决赛解说宣传片《没有假如》',
                        top: '',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a5.jpg'
                    },{
                        title: 'S8火热开打 幻联赛助威活动抢先看！',
                        top: '',
                        time: '2018-10-02',
                        num: '1.2万次阅读',
                        img: '/static/home_a6.jpg'
                    }
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
