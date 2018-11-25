<template>
    <div class="page">
        <Header :game="game" :hot="hot"></Header>

        <!-- 轮播图 -->
        <div class="content">

            <div class="swiper-container">
                <div class="swiper-wrapper" >
                    <div class="swiper-slide" v-for="swipe in swipes">
                        <img :src="swipe.img" alt="">
                    </div>
                </div>

                <div class="swiper-pagination"></div>

            </div>


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
        <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"
                :team="team"></Footer>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: "ChangeGame",
        data() {
            return {
                home: '首页',
                hot: 'active',
                discuss_gol: '/static/discuss.png',
                gol: '/static/home1.png',
                match_gol: '/static/match.png',
                data_gol: '/static/data.png',
                game: '/static/game0.png',
                team: '/static/BBQ.png',
                match_team: {
                    team_left: '/static/team1.png',
                    team_right: '/static/BBQ.png',
                    path1: '/Competition',
                    path2: '/Competition',
                    p1: '对战',
                    p2: '13:00'
                },
                msgs: [
                    {
                        path: '/DetailArticle2',
                        top: '/static/top.png',
                        title: '10月6日瓶子KPL速递：eStar零封YTG,RNG.M成功阻击JC连胜',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img: '/static/wz1.jpg'
                    }, {
                        path: '/DetailArticle3',
                        top: '',
                        title: '【第六届王者荣耀城市赛】赛况直击：荣耀战火起，赛场硝烟弥漫！',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img: '/static/wz2.jpg'
                    }, {
                        path: '/DetailArticle2',
                        top: '',
                        title: 'BA黑凤梨 3-0 RW侠，BA3ban张良压制性豪取七连胜',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img: '/static/wz3.jpg'
                    }, {
                        path: '/DetailArticle2',
                        top: '',
                        title: '久妹上分日记：最初-鬼谷子篇，峡谷灵性开团发动机',
                        time: '2018-09-30',
                        num: '1.5万次阅读',
                        img: '/static/wz4.jpg'
                    }
                ],
                swipes:[
                    {
                        img:'/static/slide5.png',
                        path:'/DetailArticle'
                    },
                    {
                        img:'/static/slide6.png',
                        path:'/DetailArticle1'
                    },
                    {
                        img:'/static/slide7.png',
                        path:'/DetailArticle2'
                    },
                    {
                        img:'/static/slide8.png',
                        path:'/DetailArticle3'
                    }
                ]

            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }
</script>

<style scoped>
    @import "../../assets/css/information.css";

    .swiper-slide img {
        width: 100%;
        height: 200px;
    }

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
