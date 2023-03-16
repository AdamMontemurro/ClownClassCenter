<template>
  <div>
    <h1 class="pageTitle">Students</h1>
    <img id="logoImg" src="https://i.pinimg.com/736x/30/24/e8/3024e8e03debed075156a58ccd9cfd22.jpg" alt="">
    <div v-if="newStudentToggle">
      <form @submit="onSubmit" id="studentForm">
        <h4>First Name</h4>
        <input type="text" v-model="newStudent.first_name">
        <h4>Last Name</h4>
        <input type="text" v-model="newStudent.last_name">
        <h4>E-mail</h4>
        <input type="email" v-model="newStudent.email"><br><br>
        <button type="submit" id="submitForm">Add Student</button>
        <br>
      </form>
    </div>
    <br>
    <button @click="studentFormToggle">Enroll a Student</button>
    <div id="studentContainer" v-for="student in students" :key="student.id">
      <div class="studentCard">
        <h4>{{ student.first_name }} {{ student.last_name  }}</h4>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'StudentsList',
  data: () => ({
    students: [],
    newStudentToggle: false,
    newStudent: {
      first_name:'',
      last_name:'',
      email:''
    }
  }),
  methods: {
    async getStudents() {
      const res = await axios.get(
        `http://localhost:3001/students`
      )
      this.students = res.data
    },
    async addStudent(data) {
      const res=await axios.post(
        `http://localhost:3001/students`, data
      )
      return res.data
    },
    studentFormToggle(){
      this.newStudentToggle = !this.newStudentToggle
    },
    onSubmit(e){
      e.preventDefault()
      this.addStudent(this.newStudent)
      this.newStudent = {
      first_name:'',
      last_name:'',
      email:''
    }
      location.reload()
    }
  },
  mounted: function() {
    this.getStudents()
  }
}
</script>

<style scoped>
#logoImg {
  border: 2px yellow double
}

h1 {
  color: #d8572a;
  text-shadow: -1px 1px 2px #000,
    1px 1px 2px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
}

#studentForm {
  background-color: #780116;
}

#studentForm>h4  {
  color: #f7b538
}
#submitForm {
  background-color: #c32f27;
  color: #f7b538;
  text-shadow: -1px 1px 2px #000,
    1px 1px 2px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
    margin-bottom: 1rem;
}


h4 {

  text-shadow: -1px 1px 2px #000,
    1px 1px 2px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
}

</style>z