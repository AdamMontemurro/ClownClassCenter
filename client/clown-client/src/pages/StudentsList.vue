<template>
  <div>
    <h1 class="pageTitle">Students</h1>
    <img id="logoImg" src="https://i.pinimg.com/736x/30/24/e8/3024e8e03debed075156a58ccd9cfd22.jpg" alt="">
    <div id="studentContainer" v-for="student in students" :key="student.id">
      <div class="studentCard">
        <h4>{{ student.first_name }}</h4>
        <h4>{{ student.last_name  }}</h4>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'StudentsList',
  data: () => ({
    students: []
  }),
  methods: {
    async getStudents() {
      const res = await axios.get(
        `http://localhost3001/students`
      )
      this.students = res.data
    }
  },
  // mounted: {
  //   getStudents()
  // }
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
</style>