<template>
  <div class="container">
    <img width="400" id="img" src="../assets/img/11111.jpg" alt="">
  </div>
</template>

<script setup lang='ts'>
import useBase64 from '../hooks';
useBase64({
  el: '#img'
}).then((res) => {
  console.log(1111, res.baseUrl)
})
</script>

<style lang="scss" scoped>
</style>
