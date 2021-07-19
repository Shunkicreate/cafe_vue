<template>
  <div class="header">
    <img src="..\assets\kujira_logo.png" />
    <div class="bg">

      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/access">Access</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.bg {
  margin: 0;
  padding: 20px 10px 15px 20px;
  background-repeat: repeat-x;
  /* background-image: url(..\assets\menu-bg.png); */
  /* background-image: url(..\..\public\img\menu-bg.png); */
}
</style>