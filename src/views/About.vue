<template>
  <div class="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1 class="">手作りタルトと香り高い珈琲で、寛ぎのカフェタイムを</h1>
        </div>
        <!--写真横の文字ここから-->
        <div class="col-auto">
          <div class="row">
            <div class="col-auto col-md-6">
              <img
                src="../assets/about-photo.jpg"
                class="img-fluid d-block mx-auto"
                alt="KUJIRA Cafe"
                style="margin: 0 1em 1em 0; max-width: 100%; height: auto"
              />
            </div>
            <div class="col-auto col-md-6">
              <p class="">
                大海原を悠然と泳ぐクジラの姿を見たことがあるでしょうか。そのゆったりとした動きや優しい眼差しを見ていると、慌ただしい日常が遠い世界のできごとのように感じられるのです。時間が経つのも忘れて、ただただクジラを眺めてぼーっと過ごしたひとときの心の充実を、私は今も忘れません。
              </p>

              <p class="">
                そんなゆったりとした時間を過ごせるカフェがあったら……そんな思いでつくったのが、このKUJIRA
                CAFEです。古材を活用した味わいのある内装、花と緑に囲まれたテラス。旬の味覚をふんだんに使ったタルトや、地元の野菜にこだわったキッシュは、どれも手作りです。コーヒーは注文をいただいてから焙煎し、挽きたての香りをお楽しみいただいております。
              </p>
            </div>
          </div>
        </div>
        <!--写真横の文字ここまで-->

        <div class="col-12">
          <p>
            天気のいい日には、自然を感じられるテラス席もおすすめ。テラス席のみ、ペットの同伴もOKです。おひとり様もお子様連れの方も、お気に入りのお席で、思い思いの時間をゆったりとお過ごしください。
            カフェでの時間をより楽しいものにしていただくべく、フラワーアレンジメントの講座や絵本の読み聞かせ、作品展やライブなど、さまざまなイベントも開催しております。スケジュールは<router-link :to="{name: 'menu', hash: '#sun_tart'}">News</router-link
            >で告知いたしますので、ご確認くださいませ。
          </p>
        </div>
        <div class="col-12">
          <p>皆さまのお越しを心よりお待ちしております。</p>
        </div>

        <div class="col-12">
          <p>
            <strong>店主</strong> <br />
            鯨井コウタ
          </p>
        </div>
        <div class="col-12">
          <h4
            style="
              color: #3f5170;
              margin: 20px;
              border-bottom: 3px dotted #3f5170;
            "
          >
            店舗情報
          </h4>
        </div>
        <div class="col-12">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" class="table-active" style="color: #3f5170">
                  住所
                </th>
                <th scope="col">
                  〒199-9999 或留県九寺楽市九寺楽町3-30-8（<router-link
                    to="/access"
                    >地図</router-link
                  >）
                </th>
              </tr>
              <tr>
                <th scope="row" class="table-active" style="color: #3f5170">
                  電話番号
                </th>
                <td>09-9280-2611</td>
              </tr>
              <tr>
                <th scope="row" class="table-active" style="color: #3f5170">
                  営業時間
                </th>
                <td>10:00～22:00</td>
              </tr>
              <tr>
                <th scope="row" class="table-active" style="color: #3f5170">
                  定休日
                </th>
                <td>水曜日・日曜日</td>
              </tr>
              <tr>
                <th scope="row" class="table-active" style="color: #3f5170">
                  ご予約
                </th>
                <td>
                  ご予約は、お電話もしくは<router-link to="/contact"
                    >お問い合わせフォーム</router-link
                  >より受け付けております。ご予約希望日時と人数をお知らせください。<br />
                  ※フォームからのご予約にはお時間がかかる場合がございますので、ご了承ください。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  componets: {
    // Headers,
  },
};
</script>

