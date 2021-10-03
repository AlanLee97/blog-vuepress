## CSS

### 优先级

!important **>** 行内样式 **>** ID **>** 类 = 属性 = 伪类 **>** 标签 = 伪元素 **>** 通配符 **>** 继承 **>** 浏览器默认属性



#### 权重排行

行内样式： 1000

ID： 100

类 = 属性 = 伪类： 10

标签 = 伪元素： 1

继承：0



使用!important是一个**坏习惯**，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找bug变得更加困难了。



### 可继承的属性

1、字体系列属性

- font：组合字体
- font-family：规定元素的字体系列

- font-weight：设置字体的粗细
- font-size：设置字体的尺寸

- font-style：定义字体的风格
- font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

- font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。
- font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与"font-size" 高度之间的比率被称为一个字体的 aspect 值。这样就可以保持首选字体的 x-height。



2、文本系列属性

- text-indent：文本缩进
- text-align：文本水平对齐

- line-height：行高
- word-spacing：增加或减少单词间的空白（即字间隔）

- letter-spacing：增加或减少字符间的空白（字符间距）
- text-transform：控制文本大小写

- direction：规定文本的书写方向
- color：文本颜色



3、元素可见性：

- visibility



4、表格布局属性：

- caption-side、
- border-collapse、

- border-spacing、
- empty-cells、

- table-layout



5、列表属性：

- list-style-type、
- list-style-image、

- list-style-position、
- list-style



6、生成内容属性：

- quotes



7、光标属性：

- cursor



8、页面样式属性：

- page、
- page-break-inside、

- windows、
- orphans



9、声音样式属性：

- speak、
- speak-punctuation、

- speak-numeral、
- speak-header、

- speech-rate、
- volume、

- voice-family、
- pitch、

- pitch-range、
- stress、

- richness、
- azimuth、

- elevation



所有元素可以继承的属性：

- 元素可见性：visibility、opacity
- 光标属性：cursor



内联元素可以继承的属性:

- 字体系列属性
- 除text-indent、text-align之外的文本系列属性



块级元素可以继承的属性:

- text-indent、text-align



### 居中

#### 水平居中

1. margin: 0 auto
2. text-align: center

1. padding + text-align: center
2. flex布局，justify-content: center

#### 垂直居中

1. margin: auto 0
2. line-height的值 = height的值

1. position + transform
2. flex布局，align-items: center

1. 父元素display: table-cell; vertical-align: middle; 

#### 水平+垂直居中

1. margin: auto
2. text-align: center; line-height: 父元素height

1. padding + text-align: center
2. flex布局，justify-content: center; align-items: center

1. postion: relative + postion: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;
2. 父元素display: table-cell; vertical-align: middle; 子元素margin: auto



### 选择器

1. ID 选择器， 如 #id{}
2. 类选择器， 如 .class{}

1. 属性选择器， 如 a[href="baidu.com"]{}
2. 伪类选择器， 如 :hover{}

1. 伪元素选择器， 如 ::before{}
2. 标签选择器， 如 span{}

1. 通配选择器， 如 *{}

 

### 伪元素/伪类

#### 伪元素

::before

::after



#### 伪类



### 盒子模型





### 边距折叠





### 块格式化上下文





### 

### 清除浮动





### Flex布局







### 

### 网格布局（了解）







### 媒体查询





### 动画