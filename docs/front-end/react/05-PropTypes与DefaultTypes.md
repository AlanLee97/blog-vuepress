# PropTypes与DefaultTypes

## PropTypes

PropTypes可以用来检验父组件传递给子组件的内容的类型

使用

1. 在子组件中引入PropTypes

```
import PropTypes from "prop-types";
```

2. 子组件中定义要传的内容的属性

```css
TodoItem.propTypes = {
  content: PropTypes.string.isRequired,		//isRequired表示必传的内容
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
```

这段代码要写在类外面



## DefaultTypes

给要传的内容设定默认值，如果父组件没给传递的属性传值，可通过DefaultTypes设定一个默认值

**使用**

在类外面加上这段代码

```
TodoItem.defaultProps = {
  testDefaultProps: 'test defaultTypes'
}
```

