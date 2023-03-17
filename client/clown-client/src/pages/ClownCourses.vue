<template>
  <div>
    <h1>Clown Courses</h1>
    <img id="courseLogo" src="https://static.wixstatic.com/media/d3e215_5e13f5d10333452ea94c6ecfb473c4d0~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d3e215_5e13f5d10333452ea94c6ecfb473c4d0~mv2.jpg">
    <div v-if="newCourseToggle">
      <form @submit="onSubmit" id="courseForm">
        <h4>Name</h4>
        <input type="text" v-model="newCourse.name">
        <h4>Course Code</h4>
        <input type="text" v-model="newCourse.course_code"><br><br>
        <button type="submit" id="submitForm">Add Course</button>
        <br>
      </form>
    </div>
    <div id="courseContainer">
      <div class="courseCard" v-for="course in courses" :key="course.id">
        <h4>{{ course.name }} {{ course.course_code }}</h4>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'ClownCourses',
    components: {
    },
    data: ()=> ({
      courses: [],
      newCourse: {
        name:'',
        course_code:''
      },
      newCourseToggle: false
    }),

    methods: {
    async getCourses() {
      const res = await axios.get(
        `http://localhost:3001/course`
      )
      this.courses = res.data
    },
    async addCourse(data) {
      const res = await axios.post(
        `http://localhost:3001/course`, data
      )
      return res.data
    },
    onSubmit(e) {
      e.preventDefault()
      this.addCourse(this.newCourse)
      this.newCourse = {
        name: '',
        course_code: '',
      }
      location.reload()
    }
  },
  mounted: function() {
    this.getCourses()
  }

  }
  </script>

  <style scoped>
    h1 {
    color: #d8572a;
    text-shadow: -1px 1px 2px #000,
      1px 1px 2px #000,
      1px -1px 0 #000,
      -1px -1px 0 #000;
  }
 
  img {
  width:644px;
  height:428px;
  border:yellow 2px double;
  object-fit: cover;
  }

  </style>