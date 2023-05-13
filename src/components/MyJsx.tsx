// 111111
// import { ref } from 'vue';
// let v = ref<string>('我是填写')
// const renderDom = () => {
//     return (
//         <>
//             123123
//            <input v-model={v.value} type="text" />
//            <div>
//                {v.value}
//            </div>
//         </>
//     )
// }
// export default renderDom;

// 222222 optionApi
// import { defineComponent } from "vue";
// export default defineComponent({
//     data() { 
//         return {
//             age: 23
//         }
//     },
//     render() { 
//         return (<div>{ this.age}</div>)
//     }
// })

// 33333
// ref template 自动解包.value    tsx不会
// v-show 支持
// 三目 代替 v-if
// map 代替 v-for
// {} 代替 v-bind
// props emit
// 插槽
// v-model
const A = (props:any, { slots }:any) => (
    <>
      <h1>{ slots.default ? slots.default() : 'foo' }</h1>
      <h2>{ slots.bar?.() }</h2>
    </>
  );
  
interface Props { 
    name?: string
}
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: {
        name: String
    },
    emits: ['on-click'],
    setup(props: Props, { emit }) { 
        // const flag = ref(false);
        const data = [{
            name: '我是1'
        }, {
            name: '我是2'
        },{
            name: '我是3'
        },{
            name: '我是4'
        }];
        // return () => <div v-if={flag.value}>我是小强</div>
        const fn = (v:any) => { 
            console.log('触发了:' + v);
            emit('on-click', v);
        }
        const slots = {
            default: () => (<div>我是超人</div>),
            bar: () => (<div>小满 foo </div>)
        }
        const v = ref<string>('');
        return () => (<>
            <input type="text" v-model={v.value} />
            <div>{ v.value }</div>
            <hr />
            <A v-slots={slots}></A>
            <hr />
            <div>props: { props?.name }</div>
            <hr />
            {
                data.map(v => { 
                    return <div onClick={() => fn(v)}>{ v.name }</div>
                })
            }
        </>)
    }
})