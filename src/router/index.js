import Vue from 'vue'
import Router from 'vue-router'
import Navi from '../components/authorised/navi.vue'
import Login from '../components/login.vue'
import menu from '../components/authorised/menu.json'
import { rawListeners } from 'node-notifier'

Vue.use(Router)


let routes = [
    {path: '/login', component: Login, },
    {path: '/', redirect: '/index'},
    {path: '/index', component: Navi, children:[
      {path: '/menu_management', 
        component: ()=>import ('../components/authorised/menu_management.vue')},
    ]},
]

menu.forEach(ele => {
  if (ele.type == 'item') {
    routes[2].children.push({
      path: ele.index,
      component: ()=>import('../components/myComponent' + ele.index)
    })

  }else if(ele.type == 'submenu'){
    ele.children.forEach(el => {
      routes[2].children.push({
        path: el.index,
        component: ()=>import('../components/myComponent' + el.index)
      })
    })
  }
});


export default new Router({
  routes
})
