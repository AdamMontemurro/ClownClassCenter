<template>
  <div>
    <h1>Students</h1>
    test
    <img id="logoImg" src="https://i.pinimg.com/736x/30/24/e8/3024e8e03debed075156a58ccd9cfd22.jpg" alt="">
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'StudentsList',
  data: ()=>  ({
    students: []
  }),
  methods: {
    async getStudents() {
      const res = await axios.get(
        `http://localhost3001/students`
      )
      this.students = res.data
    }
  }
}
</script>

<style>
#logoImg {
  border: 2px yellow double
}

</style>