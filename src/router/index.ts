import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name:"home",
    component:() => import('../views/HomeView.vue')
  },
  {
    path:"/movies",
    name:"movie",
    component:() => import('../views/MovieView.vue')
  },
  {
    path:"/films",
    name:"films",
    component:() => import('../views/FilmView.vue')
  },
  {
    path:"/series",
    name:"series",
    component:() => import('../views/SeriesView.vue')
  },
  {
    path:'/film/:id',
    name:'film-details',
    component:() => import('../views/FilmDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
