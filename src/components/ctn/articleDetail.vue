<!--
 * @Author: xiao-jie
 * @Date: 2021-08-21 14:06:45
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-21 16:29:50
 * @Description: 
-->
<template>
    <div id="mavon">
        <mavon-editor :value="article.content" :subfield="false" :defaultOpen="'preview'"
            :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true">
            
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
        console.log('hahah')
        this.getArticleById()
    },

    methods: {
        getArticleById : function(id){
            this.$http.get('/getArticleById',{
                params:{
                    'id': '1'
                }
            })
            .then((res) => {
                this.article = res.data.data
            })

        },
    },
};
</script>

<style lang="css" scoped>

</style>
