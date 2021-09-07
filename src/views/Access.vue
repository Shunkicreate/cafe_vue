<template>
  <div class="access">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1 class="textcontent">アクセス</h1>
        </div>
        <div class="col-12">
          <img
            src="../assets/map.png"
            class="img-fluid d-block mx-auto"
            alt="KUJIRA Cafe"
            style="margin: 0 1em 1em 0; max-width: 100%; height: auto"
          />
        </div>
        <div class="col-12">
          <p>九寺楽駅 東口 徒歩2分</p>
        </div>
        <div class="col-12">
          <ol>
            <li>駅東口を出ます。</li>
            <li>駅前商店街を国道999号線方面へ向かいます。</li>
            <li>国道999号線を渡り直進します。</li>
            <li>銀行ATMの角を左に曲がり2軒目の1階です。</li>
          </ol>
        </div>
      </div>
    </div>

  </div>
</template> 

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>