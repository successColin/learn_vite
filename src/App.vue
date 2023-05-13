<template>
  <my-jsx name="我是超人" @on-click="getItem"></my-jsx>
</template>

<script setup lang="ts">
import MyJsx from './components/MyJsx.tsx';
const getItem = (v: any) => {
  console.log(v, '接收到了');
};
</script>

<style scoped>
</style>
