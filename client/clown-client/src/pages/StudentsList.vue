<template>
  <div>
    <h1 class="pageTitle">Students</h1>
    <img id="logoImg" src="https://i.pinimg.com/736x/30/24/e8/3024e8e03debed075156a58ccd9cfd22.jpg" alt="">
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