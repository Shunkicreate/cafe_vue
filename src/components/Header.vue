<template>
  <div class="header">
    <img src="../assets/kujira_logo.png" />
    <div class="container">
      <div class="row bg">
        <div class="col-12 col-md-auto my-1">
          <router-link to="/">Home</router-link>
        </div>
        <div class="col-12 col-md-auto my-1">
          <router-link to="/containts">About</router-link>
        </div>
        <div class="col-12 col-md-auto my-1">
          <router-link to="/access">Access</router-link>
        </div>
        <div class="col-12 col-md-auto my-1">
          <router-link to="/menu">Menu</router-link>
        </div>
        <div class="col-12 col-md-auto my-1">
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
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
  background-image: url(../assets/menu-bg.png);
}
</style>