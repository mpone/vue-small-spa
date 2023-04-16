import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const base = "/vue-small-spa/"

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
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base,
  routes
})

export default router
