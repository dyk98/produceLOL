<template>
    <div>
        <div>
            <img class="back" @click="back" src="../assets/img/back.png" alt="">
            <div class="header">注册账号</div>
        </div>
        <div class="input_box">
            <input id="username" class="Sign_Input" type="text" placeholder="请输入您的用户名">
            <input id="nickname" class="Sign_Input" type="text" placeholder="请输入您的昵称">
            <input id="password1" class="Sign_Input" type="password" placeholder="请输入您的密码">
            <input id="password2" class="Sign_Input" type="password" placeholder="再次输入您的密码">
            <!--<router-link tag="p" to="/DiscussDetail">-->
            <button class="Sign_Button" @click="circle">下一步</button>
            <!--</router-link>-->
        </div>
        <p class="know">注册即代表阅读并同意<router-link to="">使用条款</router-link>和<router-link to="">隐私政策</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "Sign",
        methods: {
            back() {
                this.$router.push({path: '/Login'});
            },

            circle() {
                var a = this;
                // this.$router.push({path: '/SelectCricle'})
                console.log(a);
                var username = document.getElementById('username').value;
                var nickname = document.getElementById('nickname').value;
                var password1 = document.getElementById('password1').value;
                var password2 = document.getElementById('password2').value;

                console.log(username);

                if (username === " " || nickname === " " || password1 === " " || password2 === "") {

                    alert("您有信息未输完");

                } else {
                    if (password1 === password2) {

                        this.$http.get('http://39.106.102.208:8889/hbws/sign.php', {

                            params: {
                                username: username,
                                nickname: nickname,
                                password: password1
                            }

                        })
                            .then(function (aaa) {
                                console.log(aaa);

                                if (aaa.data.result === "signed") {
                                    alert("已有该用户名");
                                } else {
                                     a.$router.push({path: '/SelectCricle'});
                                    console.log(a);
                                }

                            })
                            .catch(function (bbb) {
                                    console.log(bbb)
                                }
                            )

                    } else {
                        alert("两次密码不一致");
                    }
                }


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

    .input_box {
        text-align: center;
        margin: 80px auto;
    }

    .Sign_Input {
        border: none;
        border-bottom: solid 1px #B99D6F;
        outline: medium #B99D6F;
        width: 60%;
        font-size: 16px;
        margin: 25px auto;
        display: block;
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