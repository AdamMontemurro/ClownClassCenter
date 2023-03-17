<template class="course-page">
  <div>
    <h1 class="course-title">Clown Courses</h1>
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
    <div class="course-container">
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

    .course-page {
    margin: 1vh;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    }

    .course-title{
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    color: rgb(7, 33, 117);
    text-shadow: rgb(240, 240, 240) 1px 0 5px;
    }

    .course-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    overflow-y: auto;
    }

    .courseCard {
    background-color: #d8572a;
    color: white;
    text-shadow: -1px 1px 2px #000,
      1px 1px 2px #000,
      1px -1px 0 #000,
      -1px -1px 0 #000;
    border: 2px solid black;
    border-radius: 20px;
    transition: .20s;
    padding: 2vh 2vw;
    max-width: 200px;
    max-height: 200px;
    margin: .5vh .5vw;
    }

    .courseCard:hover {
    background-color: rgba(255, 191, 0, 0.687);
    color: white;
    }
  
  

  </style>