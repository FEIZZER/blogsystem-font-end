<!--
 * @Author: xiao-jie
 * @Date: 2021-08-16 11:01:20
 * @LastEditors: feizzer
 * @LastEditTime: 2021-11-10 19:02:27
 * @Description: 
-->
<template>
    <div id="article_list">
        <div v-for="article in articles" :key="article.articleID" class="article_box">
            <div class="article_title" @click="toDetail(article.articleID)">{{article.title}}</div>
            <div class="article_preview">
            </div>
            <div class="article_msg">
                <i class="el-icon-date">2021-1-9</i>
                <div class="little_label" v-for="label in article.labels" :key="label.labelContent">
                    {{label.labelContent}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Articlelist',

    data() {
        return {
            articles: {},
            articleID_in_read: '',
        };
    },
    created() {
        this.getAllArticles()
    },
    mounted() {
    },

    methods: {
        getAllArticles() {
            this.$http.get('/getAllArticle')
            .then( res => {
                let data = res.data
                if (data.code ===  200) {
                    this.articles = data.data
                }else if (data.code === 400) {
                    console.error(data.msg)
                }
            })
            .catch( err => {
                console.error(err)
            })
        },
        toDetail(id) {

            this.$router.push({path: `/articleDetail/${id}`})
        }
    },
};
</script>

<style lang="css" scoped>
    #article_list{
        height: 100%;
    }
    .article_box{
        width: 100%;
        height: 23%;
        border: 0.5px #eee solid;
        display: flex;
        flex-direction: column;
        padding: 13px;
        padding-bottom: 0;
        margin-bottom: 15px;
    }
    .article_title{
        cursor:pointer;
        font-size: 27px;
        margin-bottom: 13px;
    }
    .article_preview{
        height: 52%;
    }
    .article_msg{
        display: flex;
        justify-self: flex-end;
        font-size: 10px;
    }
    .article_msg i{
        margin-left: 3px;
        margin-right: 15px;
    }
    .article_msg .little_label{
        background-color: aquamarine;
        border-radius: 10%;
        margin-right: 5px;
    }
    
</style>
