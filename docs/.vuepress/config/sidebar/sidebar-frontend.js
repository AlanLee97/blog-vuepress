const configObj = {
  javascript: {
    basePath: "/front-end/js/",
    titles: [
      "JS面试知识点.md",
      "JS手写代码.md",
      "读书笔记：JavaScript高级程序设计（第4版）.md",
    ],
    sub: {
      es6: {
        basePath: "/front-end/js/es6/",
        titles: [
          "01-let关键字和const关键字.md",
          "02-函数的参数.md",
          "03-解构赋值.md",
          "04-数组.md",
          "05-字符串.md",
          "06-面向对象.md",
          "07-JSON.md",
        ]
      }
    }
  },
  typescript: {
    basePath: "/front-end/ts/",
    titles: [
      "",
    ]
  },
  vue: {
    basePath: "/front-end/vue/",
    titles: [
      "父子组件通信",
      "element-ui自定义图片上传",
      "Vuepress在md文件中引入图片资源",
    ],
    sub: {
      vue3: {
        basePath: "/front-end/vue/vue3/",
        titles: [
          "Composition API.md",
        ],
      }
    }
  },
  react: {
    basePath: "/front-end/react/",
    titles: [
      "01-安装React",
      "02-JSX的使用",
      "03-React组件",
      "04-组件拆分与组件传值",
      "05-PropTypes与DefaultTypes",
      "06-虚拟DOM",
      "07-ref属性",
      "08-react的生命周期函数",
      "09-使用axios发送网络请求",
      "10-使用redux",
    ]
  },
  electron: {
    basePath: "/front-end/electron/",
    titles: [
      "",
    ]
  },
  html: {
    basePath: "/front-end/html/",
    titles: [
      "HTML01-简介.md",
      "HTML02-基础.md",
      "HTML03-元素.md",
      "HTML面试知识点.md",
    ]
  },
  css: {
    basePath: "/front-end/css/",
    titles: [
      "CSS面试知识点.md",
    ],
    sub: {
      flex: {
        basePath: "/front-end/css/flex/",
        titles: [
          "01-flex的使用.md",
          "02-flex container的flex-direction属性.md",
          "03-flex container的justify-content属性.md",
          "04-flex container的align-items属性.md",
          "05-flex container的flex-wrap属性.md",
          "06-flex container的flex-flow属性.md",
          "07-flex container的align-content属性.md",
          "08-flex-items的order属性.md",
          "09-flex items的align self属性.md",
          "10-flex items的flex-grow属性.md",
          "11-flex items的flex-shrink属性.md",
          "12-flex items的flex-basis属性.md",
          "13-flex items的flex属性.md",
        ]
      },
      css3: {
        basePath: "/front-end/css/",
        titles: [
          "",
        ]
      },
    }
  },
  microFrontend: {
    basePath: "/front-end/micro-front-end/",
    titles: [
      "",
    ]
  },
  webpack: {
    basePath: "/front-end/webpack/",
    titles: [
      "Webpack.md",
    ]
  },
  vite: {
    basePath: "/front-end/vite/",
    titles: [
      "vite搭建vue应用.md",
    ]
  },
  browser: {
    basePath: "/front-end/browser/",
    titles: [
      "浏览器知识.md",
    ]
  },
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  javascript: [
    {
      title: "JavaScript",
      collapsable: true,
      children: getChildren(configObj.javascript.basePath, configObj.javascript.titles)
    },
    {
      title: "ES6",
      collapsable: true,
      children: getChildren(configObj.javascript.sub.es6.basePath, configObj.javascript.sub.es6.titles)
    },
  ],
  typescript: [
    {
      title: "TypeScript",
      collapsable: true,
      children: getChildren(configObj.typescript.basePath, configObj.typescript.titles)
    },
  ],
  vue: [
    {
      title: "Vue",
      collapsable: true,
      children: getChildren(configObj.vue.basePath, configObj.vue.titles)
    },
    {
      title: "Vue3",
      collapsable: true,
      children: getChildren(configObj.vue.sub.vue3.basePath, configObj.vue.sub.vue3.titles)
    },
  ],
  react: [
    {
      title: "React",
      collapsable: true,
      children: getChildren(configObj.react.basePath, configObj.react.titles)
    },
  ],
  html: [
    {
      title: "HTML",
      collapsable: true,
      children: getChildren(configObj.html.basePath, configObj.html.titles)
    },
  ],
  css: [
    {
      title: "CSS",
      collapsable: true,
      children: getChildren(configObj.css.basePath, configObj.css.titles)
    },
    {
      title: "Flex",
      collapsable: true,
      children: getChildren(configObj.css.sub.flex.basePath, configObj.css.sub.flex.titles)
    },
  ],
  microFrontend: [
    {
      title: "微前端",
      collapsable: true,
      children: getChildren(configObj.microFrontend.basePath, configObj.microFrontend.titles)
    },
  ],
  webpack: [
    {
      title: "Webpack",
      collapsable: true,
      children: getChildren(configObj.webpack.basePath, configObj.webpack.titles)
    },
  ],
  vite: [
    {
      title: "Vite",
      collapsable: true,
      children: getChildren(configObj.vite.basePath, configObj.vite.titles)
    },
  ],
  browser: [
    {
      title: "浏览器",
      collapsable: true,
      children: getChildren(configObj.browser.basePath, configObj.browser.titles)
    },
  ],
}