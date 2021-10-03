(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{876:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-创建第一个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-创建第一个容器"}},[s._v("#")]),s._v(" Kubernetes 创建第一个容器")]),s._v(" "),a("p",[s._v("以安装nginx为例")]),s._v(" "),a("h2",{attrs:{id:"创建容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[s._v("#")]),s._v(" 创建容器")]),s._v(" "),a("h3",{attrs:{id:"在master机器上操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在master机器上操作"}},[s._v("#")]),s._v(" 在master机器上操作")]),s._v(" "),a("p",[a("strong",[s._v("创建容器")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl run nginx --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --replicas"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("--image=nginx 指定镜像为nginx")]),s._v(" "),a("p",[s._v("--replicas=2 创建实例的数量为2")]),s._v(" "),a("p",[s._v("--port=80 指定容器端口为80")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229202958-354893.png",alt:"image-20200229105126482"}})]),s._v(" "),a("p",[a("strong",[s._v("查看创建的容器")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl get pods\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("刚刚创建就查看容器，READY为0/1，STATUS为ContainerCreating")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105321-235684.png",alt:"image-20200229105259402"}})]),s._v(" "),a("p",[s._v("等待容器创建玩就能启动起来")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203003-10452.png",alt:"image-20200229105555499"}})]),s._v(" "),a("p",[a("strong",[s._v("查看部署")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl get deployment\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105624-365409.png",alt:"image-20200229105624150"}})]),s._v(" "),a("p",[a("strong",[s._v("暴露服务")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl expose deployment nginx --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LoadBalancer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("--port=80 容器的端口为80")]),s._v(" "),a("p",[s._v("--type=LoadBalancer 类型为负载均衡")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203005-862018.png",alt:"image-20200229110032228"}})]),s._v(" "),a("p",[a("strong",[s._v("查看服务")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105800-470736.png",alt:"image-20200229105800297"}})]),s._v(" "),a("p",[a("strong",[s._v("查看服务详情")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203008-498443.png",alt:"image-20200229110615410"}})]),s._v(" "),a("h3",{attrs:{id:"在node节点机器上操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在node节点机器上操作"}},[s._v("#")]),s._v(" 在node节点机器上操作")]),s._v(" "),a("p",[a("strong",[s._v("在node节点机器上查看运行中的容器")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229110804-950910.png",alt:"image-20200229110803809"}})]),s._v(" "),a("h2",{attrs:{id:"删除容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[s._v("#")]),s._v(" 删除容器")]),s._v(" "),a("h3",{attrs:{id:"在master节点上操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在master节点上操作"}},[s._v("#")]),s._v(" 在master节点上操作")]),s._v(" "),a("p",[a("strong",[s._v("删除部署")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl delete deployment nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203013-83914.png",alt:"image-20200229111611631"}})]),s._v(" "),a("p",[a("strong",[s._v("删除服务")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl delete "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229111731-516235.png",alt:"image-20200229111730556"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);