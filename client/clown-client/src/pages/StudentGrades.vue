<template>
  <div>
    <h1>{{ student }}</h1>
  </div>
  <div v-for="x of student" :key="x.id">
      {{course_id}} {{x.grade}}
  </div>
  <h2> GPA: </h2>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StudentGrades',
  data: () => ({
    student: [],
    courses: {}
  }),
  methods: {
    async getStudent(id) {
      const res = await axios.get(
        `http://localhost:3001/students/${id}`
      )
      console.log(res.data)
      this.student = res.data
  },
  async getCourses() {
      const res = await axios.get(
        `http://localhost:3001/course`
      )
      this.courses = res.data
    },
    async getStudentsCourses() {
      const res = await axios.get(
        `http://localhost:3001/studentcourses`
      )
      this.studentGrades = res.data
    },
  },
  mounted: function() {
    this.getStudent(2)
    this.getCourses()
  }
  
}
</script>