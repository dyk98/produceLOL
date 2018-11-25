<template>
    <div>
        <div>
            <router-link to="Sign"><img class="back" :src="back" alt=""></router-link>

            <div class="header">注册账号</div>
        </div>
        <div class="circle">
            <p class="select">选择你感兴趣的圈子</p>
            <ul v-for="circle in circles">
                <li @click="sc">
                    <img :src="circle.img" alt="">
                    <span>{{circle.name}}</span>
                </li>
            </ul>
        </div>
        <button class="Sign_Button" @click="team">下一步</button>
        <p class="know">注册即代表阅读并同意<a href="">使用条款</a>和<a href="">隐私政策</a></p>
    </div>
</template>

<script>
    export default {
        name: "SelectCircle",
        data() {
            return {
                back:'/static/back.png',
                circles: [
                    {
                        img: "/static/0-2.png",
                        name: "EDG",

                    }, {
                        img: "/static/IG/0-9.png",
                        name: "IG"
                    }, {
                        img: "/static/JDG/0-10.png",
                        name: "JDG"
                    }, {
                        img: "/static/FPX/0-8.png",
                        name: "FPX"
                    }, {
                        img: "/static/SS/0-14.png",
                        name: "SS"
                    }, {
                        img: "/static/VG/0-15.png",
                        name: "VG"
                    }
                ]
            }
        },
        methods: {
            team() {

                this.$router.push({path: '/SelectTeam'})
            },
            sc() {
                console.log(this.circles.index)
            }
        }

    }
</script>

<style scoped>
    .back {
        width: 25px;
        position: fixed;
        top: 15px;
        left: 15px;
    }

    .header {
        text-align: center;
        color: #B99D6F;
        font-size: 18px;
        line-height: 55px;
    }

    .select {
        margin-left: 3%;
    }

    .circle ul {
        height: 100%;
        width: 15%;
        margin: 0;
        padding-left: 12px;
        display: inline-block;
    }

    .circle ul li {
        display: inline-block;
        list-style: none;
        width: 100%;
        margin-left: 3%;
        margin-bottom: 5px;
    }


    .circle ul li img {
        width: 100%;
        height: 100%;
        border: 1px solid #DADADA;
    }

    .circle ul li span {
        font-size: 14px;
        text-decoration: none;
        color: #000;
        margin-left: 22%;
    }

    .Sign_Button {
        text-align: center;
        margin: 70px auto;
        background: #B99D6F;
        border: none;
        outline: none;
        color: #FFFFFF;
        width: 70px;
        height: 30px;
        border-radius: 4px;
        font-size: 14px;
        display: block;
    }

    .know {
        font-size: 14px;
        margin-top: 35%;
        position: fixed;
        width: 100%;
        text-align: center;
    }

    .know a {
        color: #B99D6F;
        text-decoration: none;
    }
</style>