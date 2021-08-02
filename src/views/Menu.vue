<template>
  <div class="menu">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1 class="textcontent">Menu</h1>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-7">
                <img
                  src="../assets/menu-photo1.jpg"
                  class="img-fluid d-block mx-auto"
                  alt="KUJIRA Cafe"
                  style="margin: 0 1em 1em 0; max-width: 100%; height: auto"
                />
              </div>
              <div class="col-12 col-md-5">
                <h5 id="juice">カシスとオレンジのジュース</h5>
                <p>
                  リキュールを使ったカクテルでおなじみのカシスは、ポリフェノールやビタミンが豊富なベリー系のフルーツです。オレンジとともにジューサーにかけて、爽やかなドリンクに仕上げました。
                </p>
                <p>&yen;480-</p>
              </div>
            </div>
          </div>
          <div class="col12">
            <hr style="border: 0; border-top: thin dashed gray" />
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-7">
                <img
                  src="../assets/menu-photo2.jpg"
                  class="img-fluid d-block mx-auto"
                  alt="KUJIRA Cafe"
                  style="margin: 0 1em 1em 0; max-width: 100%; height: auto"
                />
              </div>
              <div class="col-12 col-md-5">
                <h5 id="nets_tart">ナッツのタルト</h5>
                <p>
                  ピーカンナッツにアーモンド、くるみ、ヘーゼルナッツ、パンプキンシード。5種類のナッツを贅沢にトッピングした当店の定番タルトです。黒糖を使用したコクのある甘味は、コーヒーのお供にぴったりです。
                </p>
                <p>&yen;550-</p>
              </div>
            </div>
          </div>
          <div class="col12">
            <hr style="border: 0; border-top: thin dashed gray" />
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-7">
                <img
                  src="../assets/menu-photo3.jpg"
                  class="img-fluid d-block mx-auto"
                  alt="KUJIRA Cafe"
                  style="margin: 0 1em 1em 0; max-width: 100%; height: auto"
                />
              </div>
              <div class="col-12 col-md-5">
                <h5 id="sun_tart">太陽プラムのタルト</h5>
                <p>
                  今月の旬のタルトはこちら。山梨産のプラム「太陽」を使用しています。太陽は、完熟すると酸味が抜けて、驚くほど甘くなります。クリームチーズを混ぜ込んだフィリングとも相性抜群。この時期だけの味、ぜひお試しください。
                </p>
                <p>&yen;600-</p>
              </div>
            </div>
          </div>
          <div class="col12">
            <hr style="border: 0; border-top: thin dashed gray" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script lang="ts">
import { defineComponent } from "vue";
//ヘッダは100パーセントにする ヘッダとコンテンツのコンテナを分ける cssは使わない routerをネスト構造にしてみる

export default defineComponent({
  name: "Menu",

});

</script>

