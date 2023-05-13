<template>
  <div class="container">asdf</div>
  <A v-move="{ background: 'red' }"></A>
</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';
import A from './A.vue';

type Dir = {
  background: string;
};
const vMove: Directive = {
  created() {
    console.log('==========>craeted');
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    // ...args: Array<any>
    console.log('==========>mounted', el, dir);
    el.style.background = dir.value.background;
  },
  unmounted() {
    console.log('==========>unmounted');
  },
};
</script>

<style scoped lang="scss">
</style>