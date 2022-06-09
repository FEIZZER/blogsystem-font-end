<!--
 * @Author: feizzer
 * @Date: 2021-11-11 14:24:23
 * @LastEditors: feizzer
 * @LastEditTime: 2021-11-16 15:01:19
 * @Description: 
-->
<template>
    <div class="login-box">
        <el-form ref="loginForm" :rules="rules" :model="loginData" label-position="left" label-width="70px" 
                hide-required-asterisk>
            <el-form-item label="admin" prop="name">
                <el-input v-model="loginData.name"></el-input>
            </el-form-item>
            <el-form-item label="password" prop="password">
                <el-input v-model="loginData.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import encrypt from '../utils/encrypt'
export default {
    name: 'BlogsystemFontEndLogin',

    data() {
        return {
            loginData: {
                name: 'feizzer',
                password: '123456',
            },
            rules: {
                name: [
                    {required:true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '请输入6~20长度的密码', trigger: 'blur'}
                ]
            }
        };
    },

    mounted() {
        this.getPublicKey()
        console.log()
    },

    methods: {
        getPublicKey() {
            this.$http.get('/getPublicKey')
            .then( res => {
                console.log(res)
                sessionStorage.setItem('publicKey', res.data.data)
            })
            .catch( err => {
                console.error(err)
            })
        },
        login() {
            this.$refs.loginForm.validate( res => {
                let ps = encrypt(this.loginData.password)
                console.log('hahah',this.loginData.name, ps)
                if (!res) {
                    this.$message.error('请输入正确的登录信息')
                } else{
                    this.$http({
                        url: '/login',
                        method: 'post',
                        data: {
                            name: this.loginData.name,
                            password: ps
                        },
                    })
                    .then( res => {
                        let data = res.data
                        if (data.code === 200) {
                            console.log(data.data)
                        } else if (data.code === -100){
                            this.$message.error(data.msg)
                        }
                    })
                    .catch( err => {
                        console.error(err)
                    })
                }
            })
        }
    },
};
</script>

<style lang="css" scoped>
.login-box{
    height: 100%;
    padding: auto auto;
    display: flex;
    align-content: center;
    justify-content: center;
}
.el-form{
    width: 30%;
    margin: auto;
}
</style>
