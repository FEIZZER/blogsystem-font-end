<!--
 * @Author: xiao-jie
 * @Date: 2021-08-16 11:01:20
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-16 16:38:47
 * @Description: 
-->
<template>
    <div id="article_list">
        <div class="article_box">
            <div class="article_title">java的hashCode</div>
            <div class="article_preview">
                基于JDK8源码分析hashCode()的生成规则，基于JDK8源码分析hashCode()的生成规则，
                基于JDK8源码分析hashCode()的生成规则，
                基于JDK8源码分析hashCode()的生成规则，
                基于JDK8源码分析hashCode()的生成规则，
                基于JDK8源码分析hashCode()的生成规则，
                基于JDK8源码分析hashCode()的生成规则，

            </div>
            <div class="article_msg">
                <i class="el-icon-date">  2021-1-9</i>
                <div class="little_label">pyhthon</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Articlelist',

    data() {
        return {
            
        };
    },

    mounted() {
    },

    methods: {
        
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
    }
    .article_title{
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
    }
    
</style>
