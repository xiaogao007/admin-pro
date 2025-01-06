import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Ngrogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
    meta: {
      title: "首页",
      keepAlive: true   
    },
    children:[]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  Ngrogress.start()
  next()
})
router.afterEach((to, from) => {
  Ngrogress.done()
})
export default router;