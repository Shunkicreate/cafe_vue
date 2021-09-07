<template>
  <div class="contains">
    <div class="container">
      <div class="row justify-content-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, provide, reactive, ref } from "vue";

export default defineComponent({
  name: "Contains",
  setup() {

    const kind = ref("未選択");
    const experience = ref("無し");
    const acquaintance = ref([]);
    const contents = ref("無し");


    provide('kind', kind);
    provide('experience', experience);
    provide('acquaintance', acquaintance);
    provide('contents', contents);


  },

});
</script>