import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Collect from './views/Collect.vue'
import Detail from './views/Detail.vue'
import Add from './views/Add.vue'

Vue.use(Router)

let routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: name
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/collect',
    component: Collect
  },
  {
    path: '/add',
    component: Add
  }
]
export default new Router({
  routers
})
