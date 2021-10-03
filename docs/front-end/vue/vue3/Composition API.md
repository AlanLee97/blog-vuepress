# Composition API

setup

从vue中可以解构出一下方法

- defineComponent - 要让 TypeScript 正确推断 Vue 组件选项中的类型，需要使用 defineComponent 全局方法定义组件

- ref - 给原始类型的变量赋予响应式
- reactive - 给对象类型的变量赋予响应式（深度转换）

- toRefs - 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。

（1）用于es6解构响应式的对象时，保持响应式

（2）将响应式对象转换为普通对象



- toRef 用于解构响应式的对象，保持响应式，如没有解构的目标变量，则会创建目标ref变量

用于从reactive中取出单个响应式属性

- onMounted - 生命周期mounted
- watch - watch观察函数

- h - 渲染函数
- PropType - 将props类型提供给 TypeScript，需要使用 PropType 指明构造函数

- computed - 计算值将根据返回值自动推断类型



#### ref/reactive/toRef/toRefs

```javascript
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';

...

let obj = {
  name: "AlanLee",
  age: 18
};

let objNameRef = ref(obj.name); // ref接收一个基本类型的值，将其转为响应式，取值需加.value
let objReactive = reactive(obj); // reactive接收一个对象类型的值，将其转为响应式（深度转换），取值不需要加.value
let objNameToRef = toRef(objReactive, 'name'); // 将指定的对象的属性转为响应式，取值需加.value
let objToRefs = toRefs(obj); // 将对象的所有属性转为响应式，取值需加.value


// ref
console.log('test objNameRef', objNameRef.value); // AlanLee

// reactive
console.log('test objReactive', objReactive); // Proxy {name: "AlanLee", age: 18}
console.log('test objReactive name', objReactive.name); // AlanLee

// toRef
console.log('test objNameToRef', objNameToRef); // ObjectRefImpl {_object: Proxy, _key: "name", __v_isRef: true}
console.log('test objNameToRef value', objNameToRef.value); // AlanLee

// toRefs
console.log('test objToRefs', objToRefs); // {name: ObjectRefImpl, age: ObjectRefImpl}
console.log('test objToRefs name value', objToRefs.name.value); // AlanLee
```