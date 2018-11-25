<template>
    <div class="note" id="login_body">
        <img style="width: 100%; height:100%; position:fixed; left:0; top:0; bottom: 0; z-index:-1;"
             :src="bg"/>
        <div style="position: fixed;top: 20px;left: 20px;" @click="backhome">
            <img :src="back" alt="" class="back">
        </div>


        <div style="margin-top: 150px; width: 100%">
            <div>
                <input type="text" class="loginInput inputName" placeholder="请输入您的用户名" id="name">
            </div>
            <div>
                <input type="password" class="loginInput inputPass" placeholder="请输入您的密码" id="password">
            </div>
            <div>
                <a class="loginP forgetPass">忘记密码</a>
                <a class="loginP register" @click="sign">注册账号</a>
            </div>
            <div>
                <button class="loginButton" @click="checkUser">登陆</button>
            </div>
        </div>

        <div style="top: 80%; position: fixed; width: 100%; height: 20% ;">
            <div class="loginLogo tencent" @click="quickLogin">
                <img :src="tencentqq" class="qqtim" alt="">
                <a href="" class="quickLogin">QQ登录</a>
            </div>
            <div class="loginLogo wechat" @click="quickLogin">
                <img :src="wechatlogo" class="wechat" alt="">
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
                bg: '/static/loginbg.png',
                back: '/static/back.png',
                tencentqq: '/static/tencentqq.png',
                wechatlogo: '/static/wechatlogo.png'
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            checkUser: function () {
                var a = this;

                var name = document.getElementById('name').value;
                var password = document.getElementById('password').value;


                if (name === "" || password === "") {
                    alert('您有信息未输完');
                } else {
                    this.$http.get('http://39.106.102.208:8889/hbws/login.php', {

                        params: {
                            username: name,
                            password: password
                        }

                    }).then(function (aaa) {
                        console.log(aaa);

                        if (aaa.data.result === "false") {
                            alert("该用户名未被注册");
                        } else {
                            if (aaa.data.msg.password === password){
                                alert('登录成功');
                                a.$router.push({path: '/'});
                            }else {
                                alert('用户名或密码错误');
                            }

                        }

                    })
                        .catch(function (bbb) {
                                console.log(bbb)
                            }
                        )

                }
            },
            quickLogin: function () {
                alert('授权登录暂未开放')
            },
            sign() {
                this.$router.push({path: '/sign'})
            },
            backhome() {
                this.$router.push({path: '/'})
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
        outline: none;
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

        width: 50px;
    }

    .wechat {

        width: 50px;
    }
</style>
