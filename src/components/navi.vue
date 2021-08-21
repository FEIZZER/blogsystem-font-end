<!--
 * @Author: xiao-jie
 * @Date: 2021-08-16 10:18:40
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-16 10:57:07
 * @Description: 
-->
<template>
  <el-container id="main-container">
    <el-aside id="main-aside">
     <el-menu  @open="handleOpen" @close="handleClose" unique-opened :collapse-transition="false" :router="true" 
            :default-active="activedMenu">
        <div class="menu_box">
            <img src="../assets/logo.png" alt="" 
                style="width:150px; height:150px; border-radius:50%;" >
        </div>
        <el-menu-item index=''>首页</el-menu-item>
        <el-menu-item index=''>博客</el-menu-item>
        <el-menu-item index=''>归档</el-menu-item>
        <el-menu-item index=''>标签</el-menu-item>
        <el-menu-item index=''>主题</el-menu-item>
        
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
import '../../static/js/navi.js'
export default {
  name: 'Home',
  data() {
      return {
          menusList: [], 
          isCollapse: true,
          activedMenu: '/home/users',
      };
  },
  created() {
      this.createMenuList()
      if (sessionStorage.getItem('data')) {
          Object.assign(this.$data, JSON.parse(sessionStorage.getItem('data')))
          console.log('get session' + this.activedMenu)
      }
       window.addEventListener("beforeunload",()=>{
            console.log('before reloaded')
    	    sessionStorage.setItem("data",JSON.stringify(this.$data));
    });
  },
  methods:{
      handleOpen() {
      },
      handleClose() {
      },
      changeCollpase() {
          this.isCollapse = !this.isCollapse
          
      },
      logout: function() {
          window.sessionStorage.removeItem('token')
          this.$router.push('/login')
      }, 
      changeActivedMenu(menuPath){
          this.activedMenu = menuPath
      },
      createMenuList: function() {
          this.$http.get('/menus')
          .then(res => {
              let data = res.data
              if (data.meta.status == 200) {
                  this.menusList = data.data
              } else {
                  this.$message({
                      type: 'error', 
                      message: data.meta.msg
                  })
              }
          })
      }
  }
}
</script>

<style scoped>
  @import '../../static/style/navi.css';
  #main-header{
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  .el-meun{
      background-color: "#fff";
      border: 0px white solid;
  }
</style>

