import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'
import Home from './components/Home.vue'
import Categories from './components/Categories.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Me from './components/Me.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {name: 'Hello', path: '/', template: HelloWorld},
    {name: 'Home', path: '/home', template: Home},
    {name: 'Categories', path: '/categories', template: Categories},
    {name: 'ShoppingCart', path: '/shoppingCart', template: ShoppingCart},
    {name: 'Me', path: '/me', template: Me}
  ]
})
