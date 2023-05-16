import type { App, VNode } from 'vue';
import { createVNode, render } from 'vue';
import Loading from './index.vue';

export default {
  install (app:App) {
    const VNode: VNode = createVNode(Loading);
    render(VNode, document.body);
    app.config.globalProperties._loading = {
      show: VNode.component?.exposed?.show,
      hide: VNode.component?.exposed?.hide
    }
    console.log("app========>",app, VNode.component?.exposed)
  }
}