import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Resources from '../views/Resources.vue'
import PortfolioP2 from '../views/PortfolioP2.vue'
import PortfolioP3 from '../views/PortfolioP3.vue'
import PortfolioP4 from '../views/PortfolioP4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources,
  },
  {
    path: '/portfolio/page/2',
    name: 'portfoliop2',
    component: PortfolioP2,
  },
  {
    path: '/portfolio/page/3',
    name: 'portfoliop3',
    component: PortfolioP3,
  },
  {
    path: '/portfolio/page/4',
    name: 'portfoliop4',
    component: PortfolioP4
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
  //mode: 'history',
})

export default router
