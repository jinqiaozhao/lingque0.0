import Vue from 'vue'
import Router from 'vue-router'
import components from '@/router/components.js'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    }
  ]
})
