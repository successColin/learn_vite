<template>
  <div id="resize" v-resize="resizeFun">
    sdsdgg
  </div>
</template>

<script setup lang='ts'>
// import useResize from 'v-resize-tx';

// onMounted(() => {
//   useResize(document.querySelector('#resize') as HTMLAreaElement, (e:any) => {
//     console.log(e)
//   })
// })
const resizeFun = (e:any) => {
  console.log(e);
}
</script>

<style lang="scss" scoped>
#resize {
  border: 1px solid red;
  resize: both;
  overflow: hidden;
}
</style>
