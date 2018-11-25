<template>
    <div class="page">


        <div class="header">


            <router-link to="/Person" class="head">
                <img :src="head" alt="">
            </router-link>
            <p>圈子</p>
        </div>
        <div id="content">
            <div class="search">
                <input type="text" value="" id="input_search" placeholder="搜索一下">
                <img :src="search" alt="" class="search_left">
                <img :src="out" alt="" class="search_right" @click="clear">
            </div>
            <div class="discuss">
                <p>我的关注</p>
                <br>
                <ul v-for="focus in focuses">
                    <router-link tag="li" to="/DiscussDetail">
                        <img :src="focus.img" alt="">
                        <span>{{focus.name}}</span>
                    </router-link>
                </ul>
                <br>
                <p class="discuss_hot">热门精选</p>
                <br>
                <ul v-for="nofocus in nofocuses">
                    <li>
                        <img :src="nofocus.img" alt="">
                        <span>{{nofocus.name}}</span>
                    </li>

                </ul>
            </div>
        </div>


        <Footer :discuss_gol="gol" :home_gol="home_gol" :match_gol="match_gol" :data_gol="data_gol"
                :team="team"></Footer>
    </div>
</template>

<script>
    export default {
        name: "Discuss",
        data() {
            return {
                home_gol: '/static/home.png',
                gol: '/static/discuss1.png',
                match_gol: '/static/match.png',
                data_gol: '/static/data.png',
                team: '/static/omg/omg.png',
                head: '/static/head.png',
                search: '/static/search.png',
                out: '/static/out.png',
                focuses:[
                    {
                        img:'/static/rng.png',
                        name:'RNG'
                    },{
                        img:'/static/omg/omg.png',
                        name:'OMG'
                    },
                ],
                nofocuses:[
                    {
                        img:'/static/EDG/0-2.png',
                        name:'EDG'
                    },{
                        img:'/static/IG/0-9.png',
                        name:'IG'
                    },{
                        img:'/static/JDG/0-10.png',
                        name:'JDG'
                    },{
                        img:'/static/FPX/0-8.png',
                        name:'FPX'
                    },{
                        img:'/static/SS/0-14.png',
                        name:'SS'
                    },{
                        img:'/static/VG/0-15.png',
                        name:'VG'
                    }
                ]
            }
        },
        methods: {
            clear() {
                document.getElementById('input_search').value = "";
                document.getElementById('input_search').focus();
            }
        }
    }
</script>

<style scoped>
    #content {
        width: 100%;
    }

    .header {
        height: 3.4375rem;
        width: 100%;
        text-align: center;
        position: fixed;
        z-index: 999;
        top: 0;
        background-color: white;
    }

    .header .head img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        position: fixed;
        left: 0.625rem;
        top: 0.7rem;
        padding: 4px;
        border: 1px solid #AAAAAA;
    }

    .header p {
        position: fixed;
        left: 45.8%;
    }

    #content .search {
        height: 35px;
        margin-top: 55px;
        text-align: center;
    }

    #content .search input {
        border: 1px solid #d7d7d7;
        width: 86%;
        height: 30px;
        outline: none;
        border-radius: 5px;
        padding-left: 9%;
    }

    #content .search img {
        width: 15px;
        height: 15px;
    }

    #content .search .search_left {
        position: absolute;
        top: 65px;
        left: 5%;
    }

    #content .search .search_right {
        position: absolute;
        top: 65px;
        right: 5%;
    }

    #content .discuss p {
        display: inline-block;
        padding-left: 10px;
        border-left: 3px solid #b99d6f;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    #content .discuss {
        overflow: hidden;
    }

    #content .discuss ul {
        height: 100%;
        width: 15%;
        margin: 0;
        padding-left: 12px;
        display: inline-block;
    }

    #content .discuss ul li {
        display: inline-block;
        list-style: none;
        width: 100%;
        margin-left: 3%;
        margin-bottom: 5px;
    }

    #content .discuss ul li img {
        width: 100%;
        height: 100%;
        border: 1px solid #DADADA;
    }

    #content .discuss ul li span {
        font-size: 14px;
        text-decoration: none;
        color: #000;
        margin-left: 22%;
    }
</style>
