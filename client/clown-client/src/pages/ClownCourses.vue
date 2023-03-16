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
  import CourseCard from '../components/CourseCard.vue'
  export default {
    name: 'ClownCourses',
    components: {
      CourseCard 
    }
  }
  </script>