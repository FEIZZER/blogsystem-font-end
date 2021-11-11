<!--
 * @Author: xiao-jie
 * @Date: 2021-08-16 10:18:40
 * @LastEditors: feizzer
 * @LastEditTime: 2021-11-10 18:09:24
 * @Description: 
-->
<template>
  <el-container>
    <el-aside>
     <el-menu  @open="handleOpen" @close="handleClose" unique-opened :collapse-transition="false" :router="true" 
            :default-active="activedMenu">
        <div class="menu_box">
            <img src="../assets/logo.png" alt="" 
                style="width:150px; height:150px; border-radius:50%;" >
        </div>
        <el-menu-item index=''><i class="el-icon-s-home"></i>首页</el-menu-item>
        <el-menu-item index='/articleList'><i class="el-icon-toilet-paper"></i>博客</el-menu-item>
        <el-menu-item index=''><i class="el-icon-s-home"></i>归档</el-menu-item>
        <el-menu-item index=''><i class="el-icon-s-home"></i>标签</el-menu-item>
        <el-menu-item index=''><i class="el-icon-s-home"></i>主题</el-menu-item>
        
    </el-menu>
    </el-aside>
    <el-container class="el-container">
      <el-header id="main-header" >
      </el-header>
      <el-main id="main-main">
            <router-view></router-view>
      </el-main>
      <el-footer id="main-footer">footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
          menusList: [], 
          isCollapse: true,
          activedMenu: '/articleList',
      };
  },
  created() {
      this.setPageSessionStorage()
  },
  methods:{
      setPageSessionStorage() {
        if (sessionStorage.getItem('naviData')) {
            Object.assign(this.$data, JSON.parse(sessionStorage.getItem('naviData')))
            console.log('get session' + this.activedMenu)
        }
        window.addEventListener("beforeunload",()=>{
            console.log('before reloaded')
            sessionStorage.setItem("naviData",JSON.stringify(this.$data));
        });
      },
      handleOpen() {
      },
      handleClose() {
      },
      changeCollpase() {
          this.isCollapse = !this.isCollapse
          
      },
      changeActivedMenu(menuPath){
          this.activedMenu = menuPath
      },
  }
}
</script>

<style scoped>
.el-container {
    height: 100%;
}
.el-aside{
    width: 250px!important;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    color: blue;
    text-align: center;   
    box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-header{
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.el-main {
    padding: 30px;
    padding-left: 280px;

}
</style>

