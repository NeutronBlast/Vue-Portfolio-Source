import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Plugins */
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(FlagIcon)

Vue.config.productionTip = false

/* CSS */
require('../public/css/styles.css')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
