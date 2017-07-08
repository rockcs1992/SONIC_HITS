import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import ContactPage from '@/components/ContactPage'
import Home from '@/components/Home'
import ServicePage from '@/components/ServicePage'
import AboutPage from '@/components/AboutPage'
import TestPage from '@/components/TestPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/contact',
      	name: 'ContactPage',
      	component: ContactPage
    },
    {
    	path: '/services',
    	name: 'ServicePage',
    	component: ServicePage
    },
    {
    	path: '/about',
    	name: 'AboutPage',
    	component: AboutPage
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
