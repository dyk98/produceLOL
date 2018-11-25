<template>
    <div class="page">
        <!--header-->
        <Header :game="game" :hot="hot"></Header>
        <!--content-->
        <div class="content">
            <!-- 轮播图 -->
            <Slider></Slider>
            <!--  战队对战 -->

            <router-link tag="div" to="/VideoDetail" class="match">
                <div class="match_center">
                    <router-link class="team_left" :to="match_team.path1"><img :src="match_team.team_left" alt="">
                    </router-link>
                    <p>{{match_team.p1}}</p>
                    <router-link class="team_right" :to="match_team.path2"><img :src="match_team.team_right" alt="">
                    </router-link>
                </div>
                <span><p>{{match_team.p2}}</p></span>
            </router-link>

            <!-- 资讯浏览 -->

            <router-link v-for="msg in msgs" :key="msg.index" tag="div" class="msg_hot" :to="msg.path">
                <div class="msg_left">
                    <img :src="msg.top" alt="">
                    <p>{{msg.title}}</p>
                    <span class="msg_left_time">{{msg.time}}</span>
                    <span class="msg_left_num">{{msg.num}}</span>
                </div>
                <div class="msg_right">
                    <img :src="msg.img" alt="">
                </div>
            </router-link>

        </div>
        <!--footer-->
        <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"
                :team="team"></Footer>
    </div>
</template>

<script>

    export default {
        name: "HomeHot",
        data() {
            return {
                home: '首页',
                hot: 'active',
                discuss_gol: '/static/discuss.png',
                gol: '/static/home1.png',
                match_gol: '/static/match.png',
                data_gol: '/static/data.png',
                game: '/static/lol.png',
                team: '/static/omg/omg.png',
                match_team: {
                    team_left: '/static/rng.png',
                    team_right: '/static/omg/omg.png',
                    path1: '/Competition',
                    path2: '/Competition',
                    p1: '对战',
                    p2: '13:00'
                },
                msgs: [
                    {
                        path: '/DetailArticle2',
                        top: '/static/top.png',
                        title: '2018英雄联盟全球总决赛入围赛即将到来',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a1.jpg'
                    },{
                        path: '/DetailArticle3',
                        top: '',
                        title: '集卡兑换【龙的传人 乘龙御天】功能现已开启',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a2.jpg'
                    },{
                        path: '/DetailArticle2',
                        top: '',
                        title: '8.19版本更新：世界赛版本正式来袭',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a3.jpg'
                    },{
                        path: '/DetailArticle2',
                        top: '',
                        title: '雅加达 2018 珍藏纪念图标限时销售',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a4.jpg'
                    },{
                        path: '/DetailArticle2',
                        top: '',
                        title: '2018全球总决赛解说宣传片《没有假如》',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a5.jpg'
                    },{
                        path: '/DetailArticle2',
                        top: '',
                        title: 'S8火热开打 幻联赛助威活动抢先看！',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img:'/static/home_a6.jpg'
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

    .match {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }

    .match .match_center {
        width: 160px;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        margin-top: 10px;
    }

    .match .match_center .team_left {
        float: left;
    }

    .match .match_center img {
        width: 44px;
        height: 50px;
    }

    .match .match_center p {
        font-size: 14px;
        display: inline-block;
        height: 40px;
        width: 50px;
        line-height: 40px;
        margin-top: 8px;
    }

    .match .match_center .team_right {
        float: right;
    }

    .match span p {
        margin: 0;
        text-align: center;
        font-size: 14px;
        color: #AAAAAA;

    }


</style>
