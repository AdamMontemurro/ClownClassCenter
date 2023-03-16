import { createWebHistory, createRouter } from "vue-router"

import HomePage from './components/HomePage'
import ClownCourses from './components/ClownCourses'

const routes = [
  {path: '/', component: HomePage, name:'HomePage'},
  {path: '/courses', component: ClownCourses, name:'ClownCourses'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router