<template>
  <div class="result">
    <h1>お問い合わせフォームの入力内容</h1>
    <table id="result">
      <tbody id="test">
        <tr>
          <th>name属性</th>
          <th>入力された内容</th>
        </tr>
        <tr>
          <th>お問い合わせの種類</th>
          <th>{{kind}}</th>
        </tr>
        <tr>
          <th>ご来店経験の有無</th>
          <th>{{experience}}</th>
        </tr>
        <tr>
          <th>ご来店の経緯</th>
          <th>{{acquaintance}}</th>
        </tr>
        <tr>
          <th>お問い合わせの内容</th>
          <th>{{contents}}</th>
        </tr>
      </tbody>
    </table>
    <p><router-link to="/contents/contact">←お問い合わせフォームに戻る</router-link></p>

  </div>
</template> 

<script lang="ts">
"use strict";

import { defineComponent, inject, Ref } from "vue";
import "./Contact.vue";

export default defineComponent({
  name: "Result",
  setup() {


    const kind = inject<Ref<string>>("kind");
    const experience = inject<Ref<string>>("experience");
    const acquaintance = inject<Ref<never[]>>("acquaintance");
    const contents = inject<Ref<string>>("contents");


    return {
      kind,
      experience,
      acquaintance,
      contents,

    };
  },
});
</script>

<style scoped>
#result {
  border: 1px solid #cccccc;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
}
th,
td {
  padding: 0.5em;
  border: 1px solid #cccccc;
  text-align: left;
  vertical-align: top;
}
th {
  width: 100px;
  background-color: #eeeeee;
}
</style>