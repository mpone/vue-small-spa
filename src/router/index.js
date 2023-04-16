import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("/src/views/MainPage.vue")
  },
  {
    path: "/photo",
    component: () => import("/src/views/PhotosPage.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/vue-small-spa/",
  routes
})

export default router
