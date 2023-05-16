<template>
  <div class="container">自定义指令</div>
  <A v-move1="{ background: 'red' }"></A>
  <button v-has-show="'shop:create'">创建</button>
  <button v-has-show="'shop:edit'">编辑</button>
  <button v-has-show="'shop:delete'">删除</button>

  <div v-move class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>

  <div class="imgBox">
    <img v-lazy="item" width="360" v-for="(item, i) in arr" :key="i" alt="">
  </div>
</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';
import A from './A.vue';

type Dir = {
  background: string;
};
const vMove1: Directive = {
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


// 按钮权限指令
localStorage.setItem('userId', 'xiaoman-zs');
const permission = [
  'xiaoman-zs:shop:edit',
  'xiaoman-zs:shop:create',
  'xiaoman-zs:shop:delete',
];
const userId = localStorage.getItem('userId') as string;
const vHasShow:Directive<HTMLElement, string> = (el, bingding) => {
  if (!permission.includes(userId+":"+bingding.value)) {
    el.style.display = 'none'
  }
}

// 指令拖拽案例
const vMove:Directive<any,void> = (el:HTMLElement, bingding:DirectiveBinding) => {
  let moveElement:HTMLDivElement = el.firstElementChild as HTMLDivElement;
  console.log(moveElement, bingding);
  const mouseDown = (e:MouseEvent) => {
    let X = e.clientX - el.offsetLeft;
    let Y = e.clientY - el.offsetTop;
    // console.log(X, Y);
    const move = (e:MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - X + 'px';
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup',() => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}

// 图片懒加载
let vLazy:Directive<HTMLImageElement, string> = async (el, bingding) => {
  console.log(el, bingding)
  const def = await import('../assets/vue.svg');
  el.src = def.default;
  const observer = new IntersectionObserver((enr) => {
    console.log(enr[0], bingding.value)
    if (enr[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = bingding.value
      }, 2000)
      observer.unobserve(el)
    }
  })
  observer.observe(el);
}
const imgList:Record<string, {default:string}> = import.meta.globEager('../assets/img/*')
let arr = Object.values(imgList).map(v => v.default);
console.log(imgList, arr);

</script>

<style scoped lang="scss">
.box {
  width: 400px;
  height: 200px;
  border: 1px solid red;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  .header {
    background: black;
    width: 100%;
    height: 50px;
  }
}
.imgBox {
  width: 400px;
  height: 200px;
  overflow-y: auto;
}
</style>