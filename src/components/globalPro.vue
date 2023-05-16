<template>
  <div class="container">
    全局方法
  </div>
  <div>{{ $env }}</div>
  <div>{{ $filters.format('的飞机') }}</div>
</template>

<script setup lang='ts'>
const app = getCurrentInstance()
console.log(app?.proxy?.$filters.format('垃圾垃圾'))
</script>

<style lang="scss" scoped>
</style>
