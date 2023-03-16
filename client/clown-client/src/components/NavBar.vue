<template>
  <nav id="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/courses">Courses</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
#navigation {
  display: flex;
  background-color: #780116;
  width:100%;
  height: 80px;
  box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);
  
}
nav a {
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 2em;
  color: #d8572A;
  text-decoration: none;
  font-weight: 800;
  font-size: 22px;
  display: flex;
  text-shadow: -1px 1px 2px #000,
    1px 1px 2px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
}

nav a:hover {
  cursor: pointer;

}



</style>
