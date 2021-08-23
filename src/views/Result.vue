<template>
  <div class="result">
    <h1>お問い合わせフォームの入力内容</h1>
    <table id="result">
      <tbody id="test">
        <tr>
          <th>name属性</th>
          <th>入力された内容</th>
        </tr>
      </tbody>
    </table>
    <p><router-link to="/contact"
                    >←お問い合わせフォームに戻る</router-link
                  ></p>

  </div>
</template> 

<script lang="ts">
"use strict";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Result",
});
	// window.addEventListener('DOMContentLoaded', function(){
	// 	var params = decodeURI(location.search);
	// 	params = params.substring(1);
	// 	var paramArray = [];
	// 	paramArray = params.split("&");
	// 	var tableContent = "";
	// 	paramArray.forEach(function(item, index){
	// 		var keyValue = [];
	// 		keyValue = item.split("=");
	// 		var tr = document.createElement("tr");
	// 		var tdName = document.createElement("td");
	// 		tdName.textContent = keyValue[0];
	// 		var tdValue = document.createElement("td");
	// 		tdValue.textContent = keyValue[1];
	// 		tr.appendChild(tdName);
	// 		tr.appendChild(tdValue);
	// 		var ea = document.getElementById("test");
	// 		ea.appendChild(tr);
	// 	});
	// });
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