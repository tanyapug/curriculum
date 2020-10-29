import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import UpsertCurriculum from '@/views/UpsertCurriculum.vue'
import DisplayCurriculum from '@/views/DisplayCurriculum.vue'
import DisplayCurricula from '@/views/DisplayCurricula.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curricula',
    name: 'Curricula',
    component: DisplayCurricula
  },
  {
    path: '/curriculum',
    name: 'Display Curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/curriculum/upsert',
    name: 'Upsert Curriculum',
    component: UpsertCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router
