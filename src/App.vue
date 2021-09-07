<template>
  <div id="nav" class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./App.scss";
import { defineComponent } from "vue";


export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },

});

</script>
