// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import './assets/js/rem'      
import Vant from 'vant'
import App from './App'
import router from './router'
import 'vant/lib/index.css'
import './assets/css/reset.css'
// import 'lib-flexible/flexible'
// import VIscroll from 'viscroll'
// import axios from 'axios'
// Vue.use(VIscroll, {
//   mouseWheel: true,
//   click: false,
//   preventDefault: true,
//   tap: false,
//   bounce: false,
//   disableTouch: true
// });

import MyHttpServer from './plugins/http.js'
Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(MyHttpServer)
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
};
setHtmlFontSize();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
