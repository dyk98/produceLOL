<template>
    <div class="note" id="login_body">
        <img style="width: 100%; height:100%; position:fixed; left:0; top:0; bottom: 0; z-index:-1;" src="../assets/img/loginbg.png"/>
        <div style="position: fixed;top: 20px;left: 20px;">
            <img src="../assets/img/back.png" alt="" class="back" @click="backRouter">
        </div>

        <div style="position: fixed; width: 100%">
            <div style="height: 200px; width: 100%;display: block"></div>
            <div>
                <input type="text" class="loginInput inputName" placeholder="请输入您的用户名" id="name">
            </div>
            <div>
                <input type="password" class="loginInput inputPass" placeholder="请输入您的密码" id="password">
            </div>
            <div>
                <a class="loginP forgetPass">忘记密码</a>
                <a class="loginP register">注册账号</a>
            </div>
            <div>
                <button class="loginButton" @click="checkUser">登陆</button>
            </div>
        </div>

        <div style="top: 80%; position: fixed; width: 100%; height: 20% ;">
            <div class="loginLogo tencent" @click="quickLogin">
                <img src="../assets/img/tencentqq.png" class="qqtim" alt="">
                <a href="" class="quickLogin">QQ登录</a>
            </div>
            <div class="loginLogo wechat" @click="quickLogin">
                <img src="../assets/img/wechatlogo.png" class="wechat" alt="">
                <a href="" class="quickLogin">微信登录</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                note: {
                    background: "url(" + require("../assets/img/loginbg.png") + ")  no-repeat fixed ",
                    backgroundSize: "100% 100%",
                    textAlign: "center",
                    // paddingBottom: "30%",
                    // paddingLeft:"24%",
                    overflow: "hidden",
                    margin: "0 auto"
                }
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            checkUser: function () {
                var name = document.getElementById('name').value;
                var password = document.getElementById('password').value;
                if (name === "test123" && password === 'test123') {
                    alert('登陆成功');
                    this.$router.push({path: '/'})
                } else {
                    alert('用户名或密码错误');
                }
            },
            quickLogin: function () {
                alert('授权登录暂未开放')
            },
            backRouter() {
                this.$router.back(-1)
            }
        },
    }
</script>

<style scoped>
    .note {
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
        padding: 0;
    }

    .back {
        height: 30px;
        width: 30px;
    }

    input::-webkit-input-placeholder {
        color: white;
        font-size: 15px;
    }

    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: white;
        font-size: 15px;
    }

    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: white;
        font-size: 15px;
    }

    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
        font-size: 15px;
    }


    .loginInput {
        background-color: rgba(255, 255, 255, 0);
        border: none;
        border-bottom: 0.5px white solid;
        outline: none;
        color: white;
        height: 20px;
        width: 60%;
        font-size: 15px;
        margin-bottom: 5px;
    }

    .inputName {
        margin-bottom: 10%;
    }

    .inputPass {
        margin-bottom: 8%;
    }

    .loginP {
        color: white;
        font-size: 13px;
        margin-right: 16%;
        margin-left: 16%;
    }

    .loginButton {
        background-color: #B99D6F;
        border: none;
        border-radius: 5px;
        color: white;
        width: 20%;
        margin-top: 7%;
    }

    .loginLogo {
        display: inline-flex;
        flex-direction: column;
    }

    .tencent {
        margin-right: 22%;

    }

    .quickLogin {
        color: white;
        text-decoration: none;
        font-size: 10px;
    }

    .qqtim {
        height: 50px;
        width: 50px;
    }

    .wechat {
        height: 50px;
        width: 50px;
    }
</style>
