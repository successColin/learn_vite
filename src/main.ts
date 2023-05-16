import useResize from 'v-resize-tx';
import { createApp } from 'vue';
// import '../xxx.d';
import App from './App.vue';
import Loading from './components/Loading';
import './style.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import 'uno.css';


const app = createApp(App);
app.config.globalProperties.$env = "dev";


app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `小满-${str}`
  }
};

// 声明全局变量和方法
type Filter = {
  format<T>(str:T):string
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string
  }
}

// Loading 声明文件
type Lod = {
  show: () => void,
  hide: () => void
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    _loading: Lod
  }
}

app.use(useResize).use(Loading).use(ElementPlus).mount('#app')
