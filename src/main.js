import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
// import 'vant/lib/index.less';

// 自定义主题
import './theme/index.less'

import VCharts from 'v-charts'

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

import RouteTransition from 'vue-route-transition'

Vue.use(VueGoodTablePlugin);

Vue.use(Vant);

Vue.use(VCharts)

Vue.use(RouteTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
