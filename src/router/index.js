import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import UpsertCurriculum from '@/views/UpsertCurriculum.vue'
import DisplayCurriculum from '@/views/DisplayCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'Upsert Curriculum',
    component: UpsertCurriculum
  },
  {
    path: '/curricula',
    name: 'Display Curriculum',
    component: DisplayCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router
