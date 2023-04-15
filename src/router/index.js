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

const base = "vue-small-spa"

const router = new VueRouter({
  mode: 'history',
  base,
  routes
})

export default router
