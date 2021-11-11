<!--
 * @Author: xiao-jie
 * @Date: 2021-08-21 14:06:45
 * @LastEditors: feizzer
 * @LastEditTime: 2021-11-10 20:03:33
 * @Description: 
-->
<template>
    <div id="mavon">
        <article-title style="padding: 25px;display: block;">{{article.title}}</article-title>
        <article-info style="padding: 25px; display: block;">2020-1-1</article-info>
        <mavon-editor :value="article.content" :subfield="false" :defaultOpen="'preview'"
            :toolbarsFlag="false" :editable="false" :scrollStyle="false" :ishljs="true" boxShadowStyle="">
            <p></p>
        </mavon-editor>
    </div>
</template>

<script>
export default {
    name: 'Articledetail',

    data() {
        return {
            article:{
            }
        };
    },

    mounted() {
        
    },
    created() {
        this.getArticleById()
    },

    methods: {
        getArticleById : function(id){
            this.$http.get(`/getArticleById/${this.$route.params.articleID}`,{
            })
            .then((res) => {
                let data = res.data
                console.log(data)
                if (data.code === 200) {
                    this.article = data.data
                }
            })
            .catch( res => {
                console.error(res)
            })

        },
    },
};
</script>

<style lang="css" scoped>
#mavon{
    background-color: #fbfbfb;
}
</style>
