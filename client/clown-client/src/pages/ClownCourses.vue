<template>
  <div>
    <h1>Clown Courses</h1>
    <img id="courseLogo" src="https://static.wixstatic.com/media/d3e215_5e13f5d10333452ea94c6ecfb473c4d0~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d3e215_5e13f5d10333452ea94c6ecfb473c4d0~mv2.jpg">
    <div id="courseContainer">
      <CourseCard />
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import CourseCard from '../components/CourseCard.vue'
  export default {
    name: 'ClownCourses',
    components: {
      CourseCard 
    },
    Data: ()=> ({
      courses: []
    }),
    methods: {
    async getCourses() {
      const res = await axios.get(
        `http://localhost3001/course`
      )
      this.courses = res.data
    }
  },

  }
  </script>

  <style>
    h1 {
    color: #d8572a;
    text-shadow: -1px 1px 2px #000,
      1px 1px 2px #000,
      1px -1px 0 #000,
      -1px -1px 0 #000;
  }
  </style>