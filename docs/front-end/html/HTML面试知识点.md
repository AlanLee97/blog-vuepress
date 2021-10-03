## HTML面试知识点

### 怪异模式/标准模式

#### 怪异模式

没有<!DOCTYPE html>的文档

#### 标准模式

有<!DOCTYPE html>的文档
​

<!DOCTYPE html>开启标准模式，没有<!DOCTYPE html>的文档被当作怪异模式来处理。
​


### html5语义化标签

- header
- footer
- nav
- aside
- section
- main
- article
- detials
- video
- audio
- ...



### 内联元素和块级元素

#### 内联元素

元素包裹内容，设置宽高无效，设置边距只有左右内外边距有效，上下内外边距无效。

#### 块级元素

元素独占一行。宽度自动充满父容器。
​

### shadow DOM（了解）






### HTML优化

> [如何制作快速加载的HTML页面](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages)

通过rel="preload"进行内容预加载 