<template>
  <div class="access">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <form method="GET" action="/result">
            <div class="form-group col-6">
              <label for="kind">お問い合わせの種類</label>
              <select
                class="form-control"
                id="kind"
                name="kind"
                style="width: 30em; text-align: center"
              >
                <option value="reservation">ご予約</option>
                <option value="about event">イベントについて</option>
                <option value="others">その他のお問い合わせ</option>
              </select>
            </div>
            <div class="col">
              KUJIRA Cafeにご来店頂いたことはありますか．<br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="first"
                  id="inlineRadio1"
                  value="yes"
                />
                <label class="form-check-label" for="inlineRadio1">はい</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="first"
                  id="inlineRadio2"
                  value="no"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >いいえ</label
                >
              </div>
            </div>
            <div class="col">
              当カフェをお知りになったきっかけは？<br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  name="how"
                  value="freiends"
                  checked
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >知り合いの紹介で</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="magazines"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                  >雑誌，Webサイトを見て</label
                >
              </div>
            </div>

            <div class="form-group col">
              <label for="exampleInputEmail1">お問い合わせの件名</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                name="subject"
                aria-describedby="emailHelp"
                placeholder="お問い合わせ"
                style="width: 30em"
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="col mb-3">
              <label for="validationTextarea">お問い合わせの具体的な内容</label>
              <textarea
                class="form-control"
                id="validationTextarea"
                name="message"
                style="width: 30em; height: 6em"
              ></textarea>
            </div>
            <div>
              <input type="submit" name="submit" value="送信" />
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <Header/> -->
  </div>
</template> 

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
});
</script>