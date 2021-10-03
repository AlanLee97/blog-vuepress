const configObj = {
  network: {
    basePath: "/common/network/",
    titles: [
      "计算机网络面试知识点.md",
      "计算机网络面试知识点总结.md",
      "计算机网络知识总结.md",
      "整合.md",
    ],
    sub: {
      http: {
        basePath: "/common/network/http/",
        titles: [
          "",
        ],
      },
      tcp: {
        basePath: "/common/network/tcp/",
        titles: [
          "",
        ],
      }
    }
  },
  designPattern: {
    basePath: "/common/design-pattern/",
    titles: [
      "1.单例模式.md",
      "设计模式01-单例模式.md",
    ],
    sub: {
      designPrinciple: {
        basePath: "/common/design-pattern/design-principle/",
        titles: [
          "1.单一职责原则.md",
          "2.接口隔离原则.md",
          "3.依赖倒置原则.md",
          "4.里氏替换原则.md",
          "5.开闭原则.md",
          "6.迪米特法则.md",
          "7.合成复用原则.md",
        ],
      }
    }
  },
  other: {
    basePath: "/common/other/",
    titles: [
      "vuepress中解决语雀图片防盗链问题.md",
    ],
    sub: {
      mediaKnowledage: {
        basePath: "/common/other/media-knowledage/",
        titles: [
          "音视频知识.md",
          "直播的运行过程.md",
          "Docker快速搭建Nginx流媒体服务器.md",
        ],
      }
    }
  },
}

function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  network: [
    {
      title: "计算机网络",
      collapsable: true,
      children: getChildren(configObj.network.basePath, configObj.network.titles)
    },
    {
      title: "HTTP",
      collapsable: true,
      children: getChildren(configObj.network.sub.http.basePath, configObj.network.sub.http.titles)
    },
    {
      title: "TCP",
      collapsable: true,
      children: getChildren(configObj.network.sub.tcp.basePath, configObj.network.sub.tcp.titles)
    },
  ],
  designPattern: [
    {
      title: "设计模式",
      collapsable: true,
      children: getChildren(configObj.designPattern.basePath, configObj.designPattern.titles)
    },
    {
      title: "设计原则",
      collapsable: true,
      children: getChildren(configObj.designPattern.sub.designPrinciple.basePath, configObj.designPattern.sub.designPrinciple.titles)
    },
  ],
  other: [
    {
      title: "音视频相关",
      collapsable: true,
      children: getChildren(configObj.other.sub.mediaKnowledage.basePath, configObj.other.sub.mediaKnowledage.titles)
    },
    {
      title: "杂项",
      collapsable: true,
      children: getChildren(configObj.other.basePath, configObj.other.titles)
    },
  ]
}