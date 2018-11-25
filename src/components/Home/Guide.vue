<template>
    <div class="page">


        <Header :game="game" :gui="gui"></Header>

        <!-- 攻略 -->
        <div class="content">
            <div v-for="content in contents" class="guide">
                <div class="guide_top">
                    <p class="guide_title">{{content.title}}</p>
                    <p class="guide_content">{{content.content}}</p>
                </div>
                <div class="guide_center">
                    <img :src="content.img1" alt="">
                    <img :src="content.img2" alt="">
                    <img :src="content.img3" alt="">
                </div>
                <div class="guide_bottom">
          <span class="guide_time">
            {{content.time}}
          </span>
                    <div class="guide_comment">
            <span class="guide_comment">
            {{content.comment}}
            </span>
                        <img :src="comment_img" alt="" class="guide_comment">

                    </div>
                    <div class="guide_like">
            <span class="guide_like">
            {{content.like}}
            </span>
                        <img :src="like_img" alt="" class="guide_comment">

                    </div>
                </div>
            </div>


            <Footer :home_gol="gol" :discuss_gol="discuss_gol" :match_gol="match_gol" :data_gol="data_gol"
                    :team="team"></Footer>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Guide",
        data() {
            return {
                guide: '攻略',
                gui: 'active',
                discuss_gol: '/static/discuss.png',
                gol: '/static/home1.png',
                match_gol: '/static/match.png',
                data_gol: '/static/data.png',
                game: '/static/lol.png',
                team: '/static/omg/omg.png',
                like_img: '/static/like.png',
                comment_img: '/static/comment.png',
                contents: [
                    {
                        title: '国服王者狮子亲创 迅捷步法流野区大热',
                        content: 'S8全球赛事正在火热进行，这也意味着S8赛季即将迎来结算，这段时间内一定有很多小伙伴想趁此机会冲一波分。',
                        img1: '/static/guide1.jpg',
                        img2: '/static/guide2.jpg',
                        img3: '/static/guide3.jpg',
                        time: '2018-10-06',
                        comment: '3904',
                        like: '5669'
                    }, {
                        title: '三战士成让帝杀手锏 诺手剑魔砍翻上路',
                        content: '让帝这几天在韩服疯狂上分!短短时日，也已经冲上韩服最强王者。恐怖的胜率用血洗韩服来形容可以说丝毫不为过。',
                        img1: '/static/guide4.jpg',
                        img2: '/static/guide5.jpg',
                        img3: '/static/guide6.jpg',
                        time: '2018-10-06',
                        comment: '3904',
                        like: '5669'
                    }, {
                        title: 'LetMe暴力皇子 霸道开团一骑当千',
                        content: '皇子，作为一个老牌英雄曾在在野区和盲僧平分秋色，随着版本的更替慢慢的淡出我们的视野，但是在近期的高分段中皇子转位上单强势归来，成为了一个Carry能力极强的上单选择。',
                        img1: '/static/guide7.jpg',
                        img2: '/static/guide8.jpg',
                        img3: '/static/guide9.jpg',
                        time: '2018-10-06',
                        comment: '3904',
                        like: '5669'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .content {
        margin-top: 90px;
    }

    .guide {
        height: 200px;
        width: 90%;
        margin: 0 auto;
        border-top: 1px solid #dedede;
        /*padding-top: 5px;*/
        padding-bottom: 8px;
    }

    .guide_center {
        width: 100%;
        height: 80px;
        text-align: left;
    }

    .guide_center img {
        margin-right: 4%;
        height: 80px;
        width: 80px;
    }

    .guide_content {
        width: 100%;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .guide_bottom {
        margin-top: 10px;
        height: 24px;
        width: 100%;
    }

    .guide_bottom span {
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #AAAAAA;
    }

    .guide_bottom img {
        width: 24px;
        height: 24px;

    }

    .guide_comment {
        float: right;
    }

    .guide_comment img {
        margin-left: 10px;
    }

    .guide_like {
        float: right;
    }
</style>
