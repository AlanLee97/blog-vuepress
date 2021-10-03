(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1044:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"出现的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现的问题"}},[t._v("#")]),t._v(" 出现的问题")]),t._v(" "),s("h2",{attrs:{id:"问题1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[t._v("#")]),t._v(" 问题1")]),t._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("重启网络时")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200424182357-313460.png",alt:"image-20200424182356781"}})]),t._v(" "),s("h3",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("关闭NetworkManager")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("systemctl stop NetworkManager\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"问题2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题2"}},[t._v("#")]),t._v(" 问题2")]),t._v(" "),s("h3",{attrs:{id:"问题-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("Another app is currently holding the yum lock; waiting for it to exit...")]),t._v(" "),s("h3",{attrs:{id:"解决-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-2"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("可以通过强制关掉yum进程：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f /var/run/yum.pid\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports},907:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"出现的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现的问题"}},[t._v("#")]),t._v(" 出现的问题")]),t._v(" "),s("h2",{attrs:{id:"问题1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[t._v("#")]),t._v(" 问题1")]),t._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v('[root@master init.d]# service nginx start\nStarting nginx (via systemctl):  Job for nginx.service failed because the control process exited with error code. See "systemctl status nginx.service" and "journalctl -xe" for details.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/20200425104238-894457.png",alt:"image-20200425104236968"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425104519014.png",alt:"image-20200425104519014"}})]),t._v(" "),s("h3",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("p",[t._v("nginx文件中nginx的执行文件的路径没写对")]),t._v(" "),s("h3",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("修正路径就就可以解决了")]),t._v(" "),s("p",[t._v("重新加载配置")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("systemctl daemon-reload\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"问题2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题2"}},[t._v("#")]),t._v(" 问题2")]),t._v(" "),s("p",[t._v("keepalived加载检查脚本失败")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425122656224.png",alt:"image-20200425122656224"}})]),t._v(" "),s("blockquote",[s("p",[t._v("这个问题未解决")])]),t._v(" "),s("h2",{attrs:{id:"问题3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题3"}},[t._v("#")]),t._v(" 问题3")]),t._v(" "),s("p",[t._v("负载均衡时，连接拒绝代理的节点")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200430095223530.png",alt:"image-20200430095223530"}})]),t._v(" "),s("h3",{attrs:{id:"解决-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-2"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("我这边是使用了service nginx restart命令，然后出现了这个问题，解决方法就是使用")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("service nginx stop\nservice nginx start\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("这两个命令就可以了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);