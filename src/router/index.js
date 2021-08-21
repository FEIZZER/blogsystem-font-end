import Vue from 'vue'
import Router from 'vue-router'
import Navi from '../components/navi.vue'
import ArticleList from '../components/ctn/articleList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Navi, children: [
      {path: '/articleList', component: ArticleList},
    ]}
  ]
})
