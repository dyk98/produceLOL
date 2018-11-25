<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <router-link v-for="swipe in swipes" :key="swipe.index"  tag="div" class="swiper-slide" :to="swipe.path">
                <img :src="swipe.img" alt="">
            </router-link>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: "slider",
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        data() {
            return {
                swipes:[
                    {
                        img:'/static/slide1.jpg',
                        path:'/DetailArticle'
                    },
                    {
                        img:'/static/slide2.jpg',
                        path:'/DetailArticle1'
                    },
                    {
                        img:'/static/slide3.jpg',
                        path:'/DetailArticle2'
                    },
                    {
                        img:'/static/slide4.jpg',
                        path:'/DetailArticle3'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .swiper-slide img {
        width: 100%;
        height: 200px;
    }
</style>
