<template>
  <div>
    <h1>Home</h1>
    <div id="content">
    <img class="left" src ="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/09/896/500/Clown-3-iStock.jpg?ve=1&tl=1">
    <p ><br><br><br><br> Clown Class Center is a unique and exciting school that is dedicated to the art of clowning. 
      With multiple classes that teach a wide range of skills and 
      tricks, this center is the perfect place for anyone who wants 
      to become a clown or simply improve their clowning abilities.</p>
    <img class="right" src="https://i.pinimg.com/originals/93/b4/f6/93b4f6b8ddb68e0e53aeb5fc301bb9e3.jpg">
    <p><br><br>At Clown Class Center, students will learn everything from classic clown techniques to modern clowning trends. Whether you are interested in physical comedy, juggling, balloon art, or any other aspect of clowning, there is a class for you. With experienced and knowledgeable instructors, each class is designed to help students develop their skills and master the art of clowning.</p>
    </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'HomePage',
    components: {

    }
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

  img {
    border:2px double yellow;
    width:644px;
    height:428px;
    object-fit: cover;
  }

  .left {
    float: left;
  
  }
  .right {
    float: right
  }

  #content {
  width:50%;
  margin:auto
  }

  p {
    font-size: 25px;
    color: white;
    text-shadow: -1px 1px 2px #000,
      1px 1px 2px #000,
      1px -1px 0 #000,
      -1px -1px 0 #000;
      margin: 1rem;
      margin-bottom: 8rem;
  }

</style>
