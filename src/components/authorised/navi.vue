<!--
 * @Author: xiao-jie
 * @Date: 2021-08-16 10:18:40
 * @LastEditors: feizzer
 * @LastEditTime: 2022-06-09 17:21:20
 * @Description: 
-->
<template>
  <el-container>
    <el-aside>
        <el-menu class="el-menu" @open="handleOpen" @close="handleClose" unique-opened 
                :router="true" 
                :default-active="activedMenu" @select="handleSelect">
            <!-- <div class="menu_box">
                <img src="../assets/logo.png" alt="" 
                    style="width:150px; height:150px; border-radius:50%;" >
            </div> -->
            <!-- <el-menu-item @click="collapse" class="collapse">
                <i style="font-size:24px" class="el-icon-s-fold"></i>
            </el-menu-item>  -->
            <div class="collapse"></div>
            <el-menu-item index="/menu_management">
                <i class="el-icon-s-operation"></i>菜单管理
            </el-menu-item>
            <div v-for="item in menusList" :key="item.name">
                <el-menu-item v-if="item.type == 'item'" :index="item.index">
                    {{item.name}}
                </el-menu-item>
                <el-submenu v-if="item.type == 'submenu'" :index="item.name">
                     <template slot="title">{{item.name}}</template>
                    <el-menu-item v-for="ite in item.children" 
                        :key="ite.name" :index="ite.index">
                        {{ite.name}}
                    </el-menu-item>
                </el-submenu>
            </div>
            
            
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
import menuData from './menu.json'
export default {
  name: 'Home',
  data() {
      return {
          menusList: [], 
          isCollapse: false,
          activedMenu: '/articleList',
      };
  },
  created() {
      this.setPageSessionStorage()
      this.menusList = menuData
  },
  methods:{
      collapse() {
          console.log('close');
      },
      handleSelect(key, keyPath) {
          this.activedMenu = key
      },
      setPageSessionStorage() {
        if (sessionStorage.getItem('naviData')) {
            Object.assign(this.$data, JSON.parse(sessionStorage.getItem('naviData')))
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 60px;
}
.el-main {
    padding: 30px;
    padding-left: 280px;

}
.collapse{
    height: 60px;
}
</style>

