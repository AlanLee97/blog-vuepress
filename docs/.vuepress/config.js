const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Blog | AlanLee",
  description: "If the short cut to learning, it also must be diligent.",

  // base: "/blog-vuepress/",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
    // "/zh/": {
    //   title: "Theme Demo",
    //   description: "vuepress-theme-hope 的 demo",
    // },
  },

  themeConfig: {
    logo: "/assets/AlanLee.jpg",
    hostname: "http://blog.alanlee.top",

    author: "AlanLee",
    // repo: "https://github.com/AlanLee97/blog-vuepress",

    nav: require('./config/nav'),

    sidebar: require('./config/sidebar'),

    // sidebar: {
    //   "/": [
    //     "",
    //     "home",
    //     "layout",
    //   ],
    // },

    // locales: {
    //   "/zh/": {
    //     nav: [
    //       { text: "博客主页", link: "/zh/", icon: "home" },
    //       { text: "项目主页", link: "/zh/home/", icon: "home" },
    //       {
    //         text: "如何使用",
    //         icon: "creative",
    //         link: "/zh/guide/",
    //       },
    //       {
    //         text: "主题文档",
    //         icon: "note",
    //         link: "https://vuepress-theme-hope.github.io/zh/",
    //       },
    //     ],
    //     sidebar: {
    //       "/zh/": [
    //         "",
    //         "home",
    //         "slides",
    //         "layout",
    //         {
    //           title: "如何使用",
    //           icon: "creative",
    //           prefix: "guide/",
    //           children: ["", "page", "markdown", "disable", "encrypt"],
    //         },
    //       ],
    //     },
    //   },
    // },

    blog: {
      intro: "/about/",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/AlanLee97",
        Gitee: "https://gitee.com/AlanLee97",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
});
