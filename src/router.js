import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import MainPower from './views/main/Power.vue'
import MainElectric from './views/main/Electric.vue'
import Monitor from './views/Monitor.vue'
import MonitorDetail from './views/monitor/Detail.vue'
import MonitorList from './views/monitor/List.vue'
import Alarm from './views/Alarm.vue'
import My from './views/My.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: Main
        },
        {
          path: 'monitor',
          name: 'monitor',
          component: Monitor
        },
        {
          path: 'alarm',
          name: 'alarm',
          component: Alarm
        },
        {
          path: 'my',
          name: 'my',
          component: My
        }
      ]
    },
    {
      path: '/main/power',
      name: 'mainPower',
      component: MainPower
    },
    {
      path: '/main/electric',
      name: 'mainElectric',
      component: MainElectric
    },
    {
      path: '/monitor/detail',
      name: 'monitorDetail',
      component: MonitorDetail
    },
    {
      path: '/monitor/list',
      name: 'monitorList',
      component: MonitorList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
