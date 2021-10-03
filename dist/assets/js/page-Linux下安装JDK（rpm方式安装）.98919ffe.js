(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1037:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux下安装jdk-rpm方式安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装jdk-rpm方式安装"}},[s._v("#")]),s._v(" Linux下安装JDK（rpm方式安装）")]),s._v(" "),e("h3",{attrs:{id:"_1-上传jdk压缩包到服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传jdk压缩包到服务器"}},[s._v("#")]),s._v(" 1. 上传JDK压缩包到服务器")]),s._v(" "),e("p",[s._v("创建文件夹opt/package")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /opt/package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("切换到文件夹opt/package")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("用ftp工具将文件上传至服务器的/opt/package目录下")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408153342-377241.png",alt:"image-20200408153223542"}})]),s._v(" "),e("h3",{attrs:{id:"_2-安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装jdk"}},[s._v("#")]),s._v(" 2. 安装JDK")]),s._v(" "),e("p",[s._v("执行命令")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-7u79-linux-x64.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-配置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置环境变量"}},[s._v("#")]),s._v(" 3. 配置环境变量")]),s._v(" "),e("p",[s._v("编辑/etc/profile文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加以下代码")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/java/jdk1.7.0_79\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$:CLASSPATH:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154802-968410.png",alt:"image-20200408154759206"}})]),s._v(" "),e("p",[s._v("更新配置文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/peofile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-验证是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证是否安装成功"}},[s._v("#")]),s._v(" 4. 验证是否安装成功")]),s._v(" "),e("p",[s._v("查看JDK版本")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("java -version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154945-653797.png",alt:"image-20200408154945590"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);