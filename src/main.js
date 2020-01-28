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

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(FlagIcon)

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueTimeline from "@growthbunker/vuetimeline";
Vue.use(VueTimeline);

Vue.config.productionTip = false

/* CSS */
require('../public/css/styles.css')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
