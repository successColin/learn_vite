<!-- 封装插件 -->
<template>
  <div v-if="isShow" class="loading">
    <div style="margin: 0 auto">
      Loading...
    </div>
  </div>
</template>

<script setup lang='ts'>
const isShow = ref<boolean>(false)
const show = () => isShow.value = true;
const hide = () => isShow.value = false;

defineExpose({
  show,
  hide,
  isShow
})
</script>

<style lang="scss" scoped>
.loading {
  background: black;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  justify-self: center;
  align-items: center;
  height: 100vh;
  color: white;
  position: fixed;
  width: 100%;
}
</style>
