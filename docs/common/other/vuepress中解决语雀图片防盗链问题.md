# vuepress中解决语雀图片防盗链问题

在config.js的head属性中增加配置

```javascript
head: [
  	...
  
    // 解决语雀防盗链问题
    [
      "meta",
      { name: "referrer", content: "no-referrer" },
    ],
]
```

原理就是在html的head中生成meta标签

```html
<meta name="referrer" content="no-referrer" />
```

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1633274923829-40d639de-612f-46cd-bd79-880d97384fad.png)

![img](https://cdn.nlark.com/yuque/0/2021/png/743297/1633274815266-e7cc161f-126b-459a-a1b6-c421d8e4bb48.png)