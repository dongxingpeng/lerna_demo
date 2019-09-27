import Vue from 'vue'
import Router from 'vue-router'
import urlRouter from './router';
// import Home from '../views/Home.vue'
// const  Home =  (resolve)=> require(['views/Home'],resolve);
// const  About =  (resolve)=> require(['views/About'],resolve);
// const  Home =  ()=> import(/* webpackChunkName: "home" */ '../views/Home.vue');
Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: urlRouter
});
router.beforeEach(function (to, from, next) {
  console.log(to);
  console.log(from);
  console.log(next);
  next();
});
export default router;
