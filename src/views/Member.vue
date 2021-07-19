<template>
  <div>
    <h2>Member</h2>
    <p>同じコンポーネント内でのデータ表示: {{firstName}} {{lastName}}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      firstName: "Taro",
      lastName: "Tokyo"
    };
  }
};
</script>