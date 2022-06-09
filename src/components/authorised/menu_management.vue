<!--
 * @Author: feizzer
 * @Date: 2022-06-08 13:15:42
 * @LastEditors: feizzer
 * @LastEditTime: 2022-06-08 17:18:02
 * @Description: 
-->
<template>
    <div>
        <div style="font-size: 24px">
            菜单管理
        </div>
        <div>
            <el-table :data="menuList" 
             :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
              row-key="name">
                <el-table-column label="名称" prop="name"></el-table-column>
                <el-table-column label="路径" prop="index"></el-table-column>
                <el-table-column label="类型" prop="type"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="success" size="mini">下行</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import menuData from './menu.json'
export default {
    name: 'BlogsystemFontEndMenuManagement',

    data() {
        return {
            menuList:[],
        };
    },
    created() {
        this.menuList = menuData
    },
    mounted() {
        
    },

    methods: {
        goBack() {

        }
    },
};
</script>

<style lang="css" scoped>

</style>
