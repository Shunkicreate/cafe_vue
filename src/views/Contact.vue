<template>
  <div class="access">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <div id="v-model-select" class="demo">
            <select v-model="selected" @change=change_selected()>
              <option disabled value="">Please select one</option>
              <option>ご予約</option>
              <option>イベントについて</option>
              <option>その他のお問い合わせ</option>
            </select>
          </div>
          <div id="v-model-radiobutton">
            <span>KUJIRA Cafeにご来店頂いたことはありますか．</span>
            <br />
            <input type="radio" id="yes" value="Yes" v-model="picked" @change=change_picked() />
            <label for="yes">はい</label>
            <br />
            <input type="radio" id="no" value="No" v-model="picked" @change=change_picked() />
            <label for="no">いいえ</label>
            <br />
          </div>
          
          <div id="v-model-multiple-checkboxes">
            <span>当カフェをお知りになったきっかけは？</span>
            <br />
            <input type="checkbox" id="freiends" value="freiends" v-model="checkedNames" @change=change_checkedNames() />
            <label for="freiends">知り合いの紹介で</label>
            <br />
            <input type="checkbox" id="magazines" value="magazines" v-model="checkedNames" @change=change_checkedNames() />
            <label for="magazines">雑誌，Webサイトを見て</label>
            <br />
          </div>
          <span>お問い合わせの内容</span>
          <br />
          <textarea v-model="message" placeholder="入力してください" @change=change_message()></textarea>
          <router-link to="/contents/contact/result">送信</router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, inject, Ref } from "vue";

export default defineComponent({
  name: "Contact",

  setup() {

    const selected = ref("")
    const picked = ref("");
    const checkedNames = ref([]);
    const message = ref("");

    const kind = inject<Ref<string>>("kind");
    const experience = inject<Ref<string>>("experience");
    const acquaintance = inject<Ref<never[]>>("acquaintance");
    const contents = inject<Ref<string>>("contents");
    
    const change_selected = () => {
      if(kind){
        kind.value=selected.value
      }
    }
    const change_picked = () => {
      if(experience){
        experience.value=picked.value
      }
    }
    const change_checkedNames = () => {
      if(acquaintance){
        acquaintance.value=checkedNames.value
      }
    }
    const change_message = () => {
      if(contents){
        contents.value=message.value
      }
    }

    return {

      kind,
      experience,
      acquaintance,
      contents,


      selected,
      picked,
      checkedNames,
      message,

      change_selected,
      change_picked,
      change_checkedNames,
      change_message,
    };
  },
});
</script>