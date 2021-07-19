<template>
  <div id="nav">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <!-- <Member></Member>
    <Club></Club> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eeece9;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;



    &.router-link-exact-active:hover {
      color: #7b8dac;
    }
    &.router-link-exact-active:active {
      color: #5a9bc0;
    }
    &.router-link-exact-active:visited {
      color: #3c454d;
    }
    &.router-link-exact-active:link {
      color: #706a68;
    }
  }
  a:link{
    color: #d25833;
}
a:visited{
    color: #d25833;
}
a:hover{
    color: #e3937a;
}
a:active{
    color: #ff6a3b;
}
.bg a:link{
    color: #3c454d;
    text-decoration: none;
}
.bg a:visited{
    color: #3c454d;
    text-decoration: none;
}
.bg a:hover{
    color: #7b8dac;
    text-decoration: none;
}
.bg a:link{
    color: #5a9bc0;
    text-decoration: none;
}
}
</style>
