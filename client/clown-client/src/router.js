import { createWebHistory, createRouter } from "vue-router"

import HomePage from './pages/'
import ClownCourses from './pages/ClownCourses'
import StudentsList from './pages/StudentsList'

const routes = [
  {path: '/', component: HomePage, name:'HomePage'},
  {path: '/courses', component: ClownCourses, name:'ClownCourses'}
  {path: '/students', component: StudentsList, name:'StudentsList'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router