(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{857:function(a,e,t){"use strict";t.r(e);var s=t(1),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装elastic-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装elastic-search"}},[a._v("#")]),a._v(" 安装Elastic Search")]),a._v(" "),t("h2",{attrs:{id:"windows下安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows下安装"}},[a._v("#")]),a._v(" Windows下安装")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),t("OutboundLink")],1),a._v("最新版本 Elasticsearch （7.6.1）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315110946-410556.png",alt:"img"}})]),a._v(" "),t("blockquote",[t("p",[a._v("顺带一提：在下载之前你应该确保你的 Java 版本保持在 1.8 及以上（就 1.8 吧..），这是 Elasticsearch 的硬性要求，可以自行打开命令行输入 "),t("code",[a._v("java -version")]),a._v(" 来查看 Java 的版本")])]),a._v(" "),t("p",[a._v("下载完成后，可以看到是一个压缩包，我们直接解压在 D 盘上，然后打开 "),t("code",[a._v("bin")]),a._v(" 目录下的 elasticsearch.bat 文件")]),a._v(" "),t("p",[a._v("浏览器访问")]),a._v(" "),t("p",[a._v("http://localhost:9200/")]),a._v(" "),t("p",[a._v("返回如下json数据表示成功")]),a._v(" "),t("h2",{attrs:{id:"安装kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装kibana"}},[a._v("#")]),a._v(" 安装Kibana")]),a._v(" "),t("p",[a._v("这是一个官方推出的把 Elasticsearch 数据可视化的工具，官网在这里："),t("a",{attrs:{href:"https://www.elastic.co/cn/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[a._v("【传送门】"),t("OutboundLink")],1),a._v("，不过我们现在暂时还用不到那些数据分析的东西，不过里面有一个 Dev Tools 的工具可以方便的和 Elasticsearch 服务进行交互，去官网下载了最新版本的 Kibana（7.6.1）")]),a._v(" "),t("p",[a._v("下载后解压，执行bin目录的kibana.bat")]),a._v(" "),t("p",[a._v("运行")]),a._v(" "),t("p",[a._v("出现超时错误")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315111842-200901.png",alt:"image-20200315111837446"}})]),a._v(" "),t("p",[a._v("解决")]),a._v(" "),t("p",[a._v("修改kibana\\config目录下的kibana.yml文件")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112845-376308.png",alt:"image-20200315112844231"}})]),a._v(" "),t("p",[a._v("改成如下图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112912-103026.png",alt:"image-20200315112912595"}})]),a._v(" "),t("p",[a._v("重新运行")]),a._v(" "),t("p",[a._v("出现如下图表示成功")]),a._v(" "),t("p",[a._v("浏览器访问http://localhost:5601/app/kibana#/home")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113032-241900.png",alt:"image-20200315113028103"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113227-779083.png",alt:"image-20200315113151512"}})]),a._v(" "),t("p",[a._v("找到左边侧栏的扳手图标，点击进入dev tools")]),a._v(" "),t("p",[a._v("点击 【Get to work】，然后在控制台输入 "),t("code",[a._v("GET /_cat/health?v")]),a._v(" 查看服务器状态，可以在右侧返回的结果中看到 "),t("code",[a._v("green")]),a._v(" 即表示服务器状态目前是健康的：")])])}),[],!1,null,null,null);e.default=n.exports}}]);