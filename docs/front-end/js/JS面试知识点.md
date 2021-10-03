# JS基础



## 类型

共8种类型，其中，7种基本类型，1种引用类型。

### 基本类型

- number
- string

- null
- undefined

- boolean
- bigint

- symbol

### 引用类型

- object

- - Function（函数）
  - Array（数组）

- - Date（日期）
  - RegExp（正则表达式）





## 类型判断

### typeof

用于判断基本类型

```javascript
typeof 1 // "number"
typeof "1" // "string"
typeof true // "boolean"
typeof null // "object"
typeof undefined // "undefined"
typeof Symbol('hello') // "symbol"
typeof BigInt(9999999999999999999999999999) // "bigint"
```

对于引用类型，则返回object/function

```javascript
typeof {} // "object"
typeof [] // "object"
typeof function() {} // "function"
typeof Date // "function"
```

### instanceOf

用于检查是否是对象实例

```javascript
[] instanceof Array // true
```

### Object.prototype.toString.call(value)

一种“更高级的” `typeof`

```javascript
Object.prototype.toString.call("hello") // "[object String]"
```



### 总结

| 判断方式    | 用于                                                       | 返回值     |
| ----------- | ---------------------------------------------------------- | ---------- |
| typeof      | 原始数据类型                                               | string     |
| {}.toString | 原始数据类型，内建对象，包含 Symbol.toStringTag 属性的对象 | string     |
| instanceof  | 对象                                                       | true/false |

## let、const、var的区别

let：声明变量，有暂时性死区，不能变量提升，块级作用域，不允许重复声明

const：声明常量，作用同let，但是声明后的基本类型的变量不允许修改（引用类型可修改）

var：声明变量，变量可提升，函数作用域或全局作用域，允许重复声明



## 作用域（上下文）

### 全局作用域

变量在函数外定义，即为全局变量，作用域为全局。

### 函数作用域

变量在函数内定义，即为局部变量，作用域为该函数内。

### eval作用域

todo

### 作用域链

多层嵌套的作用域中，内层作用域可以访问外层的作用域（外层作用域不能访问内层作用域），以此类推，形成作用域链。



## 函数声明/函数表达式

### 函数声明

```javascript
function fnName() {

}
```

### 函数表达式

```javascript
let fnName = function() {

}
```

### 区别

函数声明可以提升，函数表达式不可以提升（函数表达式在执行时才会创建函数）



## this关键字

严格模式中，this为undefined

非严格模式中，this指向window



箭头函数中，本身没有this，写在箭头函数中的this会指向父作用域



## ES6特性

学习 ES2015 https://www.babeljs.cn/docs/learn

- let、const
- 字符串模板

- 结构赋值
- 类

- 剩余参数
- 展开运算符

- 迭代器for...of
- 生成器Generators

- unicode支持
- 导入/导出

- Map/WeakMap
- Set/WeakSet

- Proxy
- Symbol

- Promise
- Reflect



## 原型

### 原型

每个对象都有__proto__属性，指向它的原型，__proto__的终点是null

每个函数都有prototype属性，通过prototype可以给对象增加原型方法。

### 原型链

当访问一个对象的属性时，会在当前对象中查找是否有该属性，如果有则返回该属性的值，如果没有，则会通过该对象的__proto__查找原型中是否有该属性，如果有则返回该属性的值，如果没有，则继续在__proto__属性中查找，直到__proto__的值为null，才停止查找。以上通过__proto__查找属性的过程就形成了原型链。

## 继承

继承有6种方式

1. 原型链继承
2. 盗用构造函数继承

1. 组合继承
2. 原型式继承

1. 寄生式继承
2. 寄生式组合继承



### 原型链继承

将子对象的prototype指向要继承对象

```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

function Cat() {
  this.name = "猫";
}

// 继承：将Cat的prototype指向Animal对象
Cat.prototype = new Animal();

let xiaobai = new Cat();
console.log(xiaobai); // Cat {name: "猫"}
console.log(xiaobai.name); // 猫
console.log(xiaobai.eye); // 2
xiaobai.sound("喵喵喵"); // 猫的叫声： 喵喵喵
```



**原型链继承的问题**

- 原型中包含的引用值会在所有实例间共享
- 子类型在实例化时不能给父类型的构造函数传参



### 盗用构造函数继承

通过改变子对象中的this，将子对象的this指向要继承的对象的this

```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

function Dog() {
  // 继承：通过改变Dog函数中的this，将Dog的this指向Animal的this
  Animal.call(this);
  this.name = "狗";
}

let wangcai = new Dog(); 
console.log(wangcai); // Dog {eye: 2, name: "狗", sound: ƒ (voice="--")}
console.log(wangcai.name); // 狗
console.log(wangcai.eye); // 2
wangcai.sound("旺旺旺"); // 旺旺旺
```



**盗用构造函数继承的问题**



- 函数不能重用
- 子类也不能访问父类原型上定义的方法

### 组合继承

组合继承（原型链继承 + 构造函数继承），综合了原型链和盗用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。

```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

// 继承：组合继承（原型+构造函数）
function Cat(name) {
  Animal.call(this, name);
  this.ear = 2;
}
Cat.prototype = new Animal();

let xiaobai = new Cat("猫");
console.log(xiaobai); // Cat {name: "猫", eye: 2, ear: 2, sound: ƒ}
console.log(xiaobai.name); // 猫
console.log(xiaobai.eye); // 2
console.log(xiaobai.ear); // 2
xiaobai.sound("喵喵喵"); // 喵喵喵
```

组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：

- 一次在是创建子类原型时调用；
- 另一次是在子类构造函数中调用。

### 原型式继承

创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，createObj()是对传入的对象执行了一次浅复制。

```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

// 通过临时的构造函数创建
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let animal = new Animal();

let cat = inheritObj(animal);
console.log(cat); // F {name: "猫", __proto__: Animal}
cat.name = "猫";
console.log(cat.name); // 猫
console.log(cat.eye); // 2
cat.sound("喵喵喵"); // 喵喵喵


let dog = inheritObj(animal);
console.log(dog); // F {name: "狗", __proto__: Animal}
dog.name = "狗";
console.log(dog.name); // 狗
console.log(dog.eye); // 2
dog.sound("旺旺旺"); // 旺旺旺
```



### 寄生式继承

创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。

```javascript
let Animal = {
  name: "动物"
}

// 寄生式继承
function inheritObj(originObj) {
  // 返回一个新对象
  let newObj = Object.assign({}, originObj);
  // 然后增强新对象
  newObj.eat = function(food) {
    console.log(`${this.name}吃${food}`);
  }
  return newObj;
}


let cat = inheritObj(Animal);
cat.name = "猫";
console.log(cat); // F {name: "猫", eat: ƒ}
console.log(cat.name); // 猫
cat.eat("小鱼干"); // 猫吃小鱼干
```

### 寄生式组合继承

使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。

```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log("动物的叫声：", voice);
  }
}

function inheritObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 寄生式组合继承（盗用构造函数继承+原型式继承）
function inheritPrototype(subType, superType) {
  let superPrototype = inheritObj(superType.prototype);
  superPrototype.construct = subType;
  subType.prototype = superPrototype;
}

function Cat(name) {
  Animal.call(this, name);
}
inheritPrototype(Cat, Animal);
Cat.prototype.eat = function(food) {
  console.log(`${this.name}吃${food}`);
}

let cat = new Cat("猫");
console.log(cat); // Cat {name: "猫", eye: 2, sound: ƒ}
console.log(cat.name); // 猫
cat.eat('小鱼干'); // 猫吃小鱼干
```

## 闭包

闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。 ——JavaScript高级程序设计（第4版）

简单理解：一个函数中嵌套了一个函数，内层函数使用了外层函数的变量或者参数，就形成了一个闭包。



```javascript
function hello(name) {
  let i = 0;
  
  // 嵌套了一个函数
  return function greeting(msg){
    i++; // 使用外层函数的变量
    let str = msg + ', ' + name; // 使用外层函数的参数
    console.log(str); 
    console.log('i=', i);
  }
}

let greet = hello('Alan');
greet('Hi');  // Hi, Alan   i= 1 // Alan 和 i 的值都是引用着外层函数的变量/参数

// greet = null; // 释放引用

// Alan 和 i 的值都是引用着外层函数的变量/参数，所以再次执行时，i的值在原来的值上增加，所以为2
greet('Hey'); // Hey, Alan  i= 2 
```



**闭包的作用：**

1. 读取外层函数中变量/参数
2. 保持变量在内存中不被销毁

1. 封装对象的私有属性和私有方法

**闭包的****缺点：**

1. 比其他函数更占用内存，因为闭包会保留它们包含函数的作用域。

**闭包的****应用场景：**

1. 解决循环中var定义的变量污染全局的问题
2. 封装对象的属性和方法

1. 缓存结果



## 异步

### 回调函数

```javascript
function calc(a, b, callback) {
	callback(a, b);
}

calc(1, 2, (a, b) => {
	alert(1 + 2);
})
```

### Promise

#### 三种状态

- pending（等待中，初始状态，既没有被兑现，也没有被拒绝。）
- fullfilled（已解决，意味着操作成功完成。）

- rejected（已拒绝，意味着操作失败。）

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1632107239067-f4d0ac44-3780-4fb7-8c45-67cad3262421.png)

#### API

- then —— 在 promise resolved 后运行并接收结果
- catch —— 在 promise rejected 后运行并接收错误结果

- finally（es2018新增）—— 在 promise完成之后执行
- resolve

- - 返回一个状态由给定value决定的Promise对象。

- reject

- - 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法

- all

- - 参数为iterable，这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。

- race

- - 参数为iterable，当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

- any

- - 参数为iterable，接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。

### async/await

简单来说，它们是基于promises的语法糖，使异步代码更易于编写和阅读。通过使用它们，异步代码看起来更像是老式同步代码。



#### async

让函数返回promise

#### await

在async函数中使用，它会暂停代码在该行上，直到 promise 完成，然后返回结果值。



#### async/await的缺陷

await 关键字会阻塞其后的代码，直到promise完成，就像执行同步操作一样。它确实可以允许其他任务在此期间继续运行，但自己的代码会被阻塞。大量await的promises相继发生而变慢，因为每个await都会等待前一个完成。



### ajax

```javascript
const xhr = new XMLHttpRequest();
xhr.onload = (res) => {
  console.log('xhr.onload', res);
}
xhr.onerror = (err) => {
  console.log('xhr.onerror', err);
}
xhr.open("GET", "https://www.baidu.com");
xhr.send();
```





## 事件循环

事件循环是一个在JS引擎中**等待任务**、**执行任务**、**休眠**这三个状态中进行无线循环转换的过程。

以下为事件循环执行流程：



![img](https://cdn.nlark.com/yuque/0/2021/jpeg/743297/1632065961337-e97637e6-8137-4c2c-bddd-7a9989e108f7.jpeg)

1. JS引擎等待任务（**宏任务**），当有任务时

- 执行队列中第1个任务

- - 如果执行任务中出现**微任务**，则排入微任务队列，执行完微任务队列中的任务才执行下一步
  - 执行渲染，如果有。

- 如果下一个任务到来时，上一个任务还没执行完，则任务会放到一个队列中进行等待

1. 执行完任务，进入休眠状态，转入第1步。



整体事件循环示意图如下：

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1632065997339-37b3b21f-4581-4e6e-8776-666c4af4f48d.png)

### 宏任务

- script
- setTimeout

- Promise.resolve
- 鼠标事件

- UI渲染
- ...

每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行下一个宏任务，或渲染，或进行其他任何操作。

### 微任务

- Promise的then/catch/finally方法中
- MutationObserver

微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成。



### 实例分析

```javascript
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");
```

这里的执行顺序是怎样的？

1. code 首先显示，因为它是常规的同步调用。
2. promise 第二个出现，因为 then 会通过微任务队列，并在当前代码之后执行。

1. timeout 最后显示，因为它是一个宏任务。

## Web Workers（了解）

对于不应该阻塞事件循环的耗时长的繁重计算任务，我们可以使用 [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)。

这是在另一个并行线程中运行代码的方式。

Web Workers 可以与主线程交换消息，但是它们具有自己的变量和事件循环。

Web Workers 没有访问 DOM 的权限，因此，它们对于同时使用多个 CPU 内核的计算非常有用。





## 模块化

- ESModule —— ES6中导入导出
- AMD —— 最古老的模块系统之一，最初由 require.js 库实现。

- CMD —— CMD规范随sea.js一起出现的，可以像CommonJS那样书写自然直观的模块化代码。
- CommonJS —— 为 Node.js 服务器创建的模块系统。

- UMD —— 另外一个模块系统，建议作为通用的模块系统，它与 AMD 和 CommonJS 都兼容。



### ESModule

- import
- export



#### ESModule与CommonJS的区别

ESModule：静态引入

CommonJS：动态引入

### AMD（Asynchronous Module Definition）

解决了CommonJS不能用于浏览器端的问题，使用RequireJS实现模块化。

RequireJS使用define方法将代码定义为模块，当所有模块的依赖加载完，再执行回调函数。（依赖前置）



### CMD（Common Module Definition）

CMD规范随sea.js一起出现的，CMD规范可以像CommonJS那样书写自然直观的模块化代码。

也是使用define方法将代码定义为模块，不同的是在require之后，CMD会去寻找相应的依赖，找到依赖后再执行回调函数。（依赖后置）

### CommonJS

原文：前端科普系列-CommonJS：不是前端却革命了前端 https://zhuanlan.zhihu.com/p/113009496

Node.js 应用由模块组成，每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。



CommonJS 规范规定，每个模块内部有两个变量可以使用，require 和 module。



#### reqiure

- 读取exports的值
- reuqire的值是exports的值的拷贝



#### module

- 有一个exports属性，这个属性的值就是导出的对象
- node.js为每个模块exports提供一个私有的变量

### UMD（Universal Module Definition）

通用的模块系统，浏览器和服务端都可以使用。基于AMD规范兼容CommonJS。



## defer/async

### defer

不会阻塞页面，脚本文件在后台下载，在DOM解析完成之后，页面加载完成前（DOMContentLoaded事件之前）执行。多个带有defer属性的script标签会按顺序下载脚本执行。

### async

不会阻塞页面，脚本文件在后台下载，下载完成时就执行脚本，与引入顺序无关。