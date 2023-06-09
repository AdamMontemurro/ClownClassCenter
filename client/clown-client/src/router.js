import { createWebHistory, createRouter } from "vue-router"

import HomePage from './pages/HomePage.vue'
import ClownCourses from './pages/ClownCourses.vue'
import StudentsList from './pages/StudentsList.vue'
import StudentGrades from './pages/StudentGrades'

const routes = [
  {path: '/', component: HomePage, name:'HomePage'},
  {path: '/courses', component: ClownCourses, name:'ClownCourses'},
  {path: '/students', component: StudentsList, name:'StudentsList'},
  {path: `/students/:id`,component: StudentGrades, name:'StudentGrades'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router