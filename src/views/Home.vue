<template>
  <div class="home">
    <div class="container ">
      <div class="row justify-content-center ">
        <div class="col-auto col-md-12 ">
        <img alt="Vue logo" src="../assets/keyvisual.jpg" class="img-fluid" />
        </div>
        <div class="col-auto col-md-8 ">
        <h1 class="textcontent">News</h1>
        </div>
        <div class="col-auto col-md-8 ">
          <p class="textcontent">
          4月29日（土）は、九寺楽町の春祭りに出店するため、お店は休業させていたただきます。春祭りでタルトやキッシュ、コーヒーも販売するので、ぜひお越しください。
          3月20日（月・祝）は、18時からアコースティックギターデュオ「<a
            href="https://www.sbcr.jp"
            target="_blank"
            >PICNIC</a
          >」のライブを開催します。投げ銭方式です。お楽しみに！

          </p>
        </div>
      </div>
    </div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <Header/> -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
// import Header from '../components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    // Header
  },
});
</script>

<style lang="scss">
h1 {
  color: #3f5170;
  margin: 20px;
  border-bottom: 3px dotted #3f5170;
}
// .row{
//   text-align: center;
// }
.textcontent{
  text-align: left;
}
</style>
