<template>
  <div id="nav" class="container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <!-- <Member></Member>
    <Club></Club> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./App.scss"


// import Member from "./views/Member.vue";
// import Club from "./views/Club.vue";
 
export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Footer
    // Member,
    // Club
  }
};
</script>
