// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import './assets/css/reset.css'
import './assets/js/rem'
import VIscroll from 'viscroll'

// 可以在use的时候设置iscroll的参数
Vue.use(VIscroll, {
    mouseWheel: true,
    click: false,
    preventDefault: true,
    tap: false,
    bounce: false,
    disableTouch: true
})

import MyHttpServer from './plugins/http.js'
Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(MyHttpServer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
