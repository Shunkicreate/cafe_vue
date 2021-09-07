<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <img
            alt="cafe logo"
            src="../assets/keyvisual.jpg"
            class="img-fluid d-block mx-auto"
          />
        </div>
        <div class="col-auto col-md-12">
          <h1 class="textcontent" id="news">News</h1>
        </div>
        <div class="col-auto col-md-12">
          <p class="textcontent">
            {{ test.testValue }}
            {{ count.return_Value }}
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const test = reactive({ testValue: "テストだよ" }); // state
    const count = reactive({ return_Value: 0 });
    const changeTest = () => {
      test.testValue = "ボタンが押されました";
    }; // action
    const Counting = () => {
      count.return_Value++;
    };
    const Reset = () => {
      count.return_Value = 0;
    };
    const message = ref("")
    return {
      test,
      changeTest,
      count,
      Counting,
      Reset,
      message,
    };
  },
});
</script>

