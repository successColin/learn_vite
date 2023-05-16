<template>
  <!-- <my-jsx name="我是超人" @on-click="getItem"></my-jsx> -->
  <MyDirective></MyDirective>
  <hook></hook>
  <resize></resize>
  <globalPro></globalPro>
  <myElement></myElement>
  <div class="flex red">吃颗</div>
</template>

<script setup lang="ts">
// import MyJsx from './components/MyJsx.tsx';
// const getItem = (v: any) => {
//   console.log(v, '接收到了');
// };
import MyDirective from './components/MyDirective.vue';
import globalPro from './components/globalPro.vue';
import hook from './components/hook.vue';
import myElement from './components/myElement.vue';
import resize from './components/resize.vue';
// import Loading from './components/Loading/index.vue'


const instance = getCurrentInstance();

instance?.proxy?._loading.show();
// app.config.globalProperties._loading.show();
setTimeout(() => {
  instance?.proxy?._loading.hide();
}, 3000)
</script>

<style scoped>
</style>
