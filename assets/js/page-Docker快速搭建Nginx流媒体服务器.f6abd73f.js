(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{841:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker快速搭建nginx流媒体服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker快速搭建nginx流媒体服务器"}},[s._v("#")]),s._v(" Docker快速搭建Nginx流媒体服务器")]),s._v(" "),a("h1",{attrs:{id:"准备软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备软件"}},[s._v("#")]),s._v(" 准备软件")]),s._v(" "),a("p",[a("strong",[s._v("Linux")])]),s._v(" "),a("ul",[a("li",[s._v("Docker")]),s._v(" "),a("li",[s._v("nginx-rtmp")])]),s._v(" "),a("p",[a("strong",[s._v("Windows")])]),s._v(" "),a("ul",[a("li",[s._v("OBS")]),s._v(" "),a("li",[s._v("PotPlayer")])]),s._v(" "),a("p",[s._v("docker的nginx-rtmp是封装了nginx-rtmp-module和ffmpeg的镜像")]),s._v(" "),a("p",[s._v("https://hub.docker.com/r/alfg/nginx-rtmp")]),s._v(" "),a("h1",{attrs:{id:"搭建流媒体服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建流媒体服务器"}},[s._v("#")]),s._v(" 搭建流媒体服务器")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"编写docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写docker-compose-yml"}},[s._v("#")]),s._v(" 编写docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx-rtmp-test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" alfg/nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rtmp\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rtmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 1935"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/nginx.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/nginx.conf\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/nginx/html\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/log/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"编写nginx-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写nginx-conf"}},[s._v("#")]),s._v(" 编写nginx.conf")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user 指定运行 nginx 的用户和组（第一个参数为用户第二个为组，这里只有用户）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("  root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定工作进程数（一般设置为CPU核数）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx 连接配置模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每个工作进程最大连接数为 1024")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RTMP 服务（重点）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rtmp")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定服务端口")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //RTMP协议使用的默认端口  ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chunk_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //RTMP分块大小")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定 HLS 流应用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("application")]),s._v(" hls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hls为流应用的名称，可以随便填")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("live")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //打开直播流        ")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //打开 HLS        ")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hls_path")]),s._v(" /tmp/hls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http 配置模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 include 加载 mime.types 文件，里面的 types {} 模块将文件扩展名映射到响应的 MIME 类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("       mime.types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义响应的默认 MIME 类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v("  application/octet-stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用或者禁用 sendfile()")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sendfile")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 65 s 超时")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keepalive_timeout")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etag")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("etag")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过期时间")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7d")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟主机配置模块")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听 8080 端口")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听域名为 localhost")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /hls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Serve HLS fragments ")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("types")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("application/vnd.apple.mpegurl")]),s._v(" m3u8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("video/mp2t")]),s._v(" ts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /tmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Cache-Control no-cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])]),a("h3",{attrs:{id:"启动nginx流媒体服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx流媒体服务器"}},[s._v("#")]),s._v(" 启动Nginx流媒体服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"检查启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查启动状态"}},[s._v("#")]),s._v(" 检查启动状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntpl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1935")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038328747-b4329a5a-c6a1-4da5-a61e-8dd82b31cf4f.png",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"使用obs推流-rtmp流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用obs推流-rtmp流"}},[s._v("#")]),s._v(" 使用OBS推流（RTMP流）")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"打开设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开设置"}},[s._v("#")]),s._v(" 打开设置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038456312-215e9818-c21d-4fd8-beda-95dfca08b1e9.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"在设置中添加推流地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在设置中添加推流地址"}},[s._v("#")]),s._v(" 在设置中添加推流地址")]),s._v(" "),a("p",[s._v("服务：选择自定义")]),s._v(" "),a("p",[s._v("服务器：rtmp://自己服务器ip:1935/stream")]),s._v(" "),a("p",[s._v("串流密钥：随便填，相当于房间号")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038632080-0d25f9ee-3459-472e-90c9-8198b4d4cae5.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"添加媒体源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加媒体源"}},[s._v("#")]),s._v(" 添加媒体源")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038854141-6cc31c43-ad35-4828-954b-153705c0d42f.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038916295-ec4e8d0b-ac67-4f0f-a179-ff8c77170ffc.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632038967356-3d733ae2-c368-4a05-a76c-0f579eb4bed2.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"开始推流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始推流"}},[s._v("#")]),s._v(" 开始推流")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039072972-efe54a26-a40a-4a23-a36c-2bcfc979bc54.png",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"使用播放器拉流-rtmp流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用播放器拉流-rtmp流"}},[s._v("#")]),s._v(" 使用播放器拉流（RTMP流）")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("这里使用potplayer播放器拉流播放视频")]),s._v(" "),a("h3",{attrs:{id:"设置拉流地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置拉流地址"}},[s._v("#")]),s._v(" 设置拉流地址")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039282727-375c855b-c657-41f1-b21f-04321eed53c6.png",alt:"img"}})]),s._v(" "),a("p",[s._v("拉流地址的格式为：http://localhost:8080/live/$STREAM_NAME.m3u8")]),s._v(" "),a("p",[s._v("所以我们这里的拉流地址为：http://47.xxx.xxx.62:8080/live/alanlee.m3u8")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632043364901-8c77ce74-615b-4653-9823-aff41b4bb183.png",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("也可以使用rtmp协议地址播放视频")])]),s._v(" "),a("p",[s._v("拉流地址的格式为：http://localhost:1935/$STREAM_NAME")]),s._v(" "),a("p",[s._v("所以我们这里的拉流地址为：http://47.xxx.xxx.62:1935/alanlee")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039373111-76f9abac-0c32-4d49-9f7c-1b05431e58d9.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"播放视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放视频"}},[s._v("#")]),s._v(" 播放视频")]),s._v(" "),a("p",[s._v("设置好拉流地址后，过几秒就可以播放视频了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039420085-28bbe864-dbdc-4ea1-a5a6-d2419de5c452.png",alt:"img"}})]),s._v(" "),a("p",[s._v("也可以通过这个网页播放视频")]),s._v(" "),a("p",[s._v("http://www.ossrs.net/players/srs_player.html")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632043753448-2f752c3e-042a-4382-969e-fddee99f76e0.png",alt:"img"}})]),s._v(" "),a("p",[s._v("到这里已经完成搭建直播流媒体服务器的推流拉流过程了。下面是推hls流是可选方案。")]),s._v(" "),a("h1",{attrs:{id:"使用obs推流-hls流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用obs推流-hls流"}},[s._v("#")]),s._v(" 使用OBS推流（HLS流）")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("以上是使用rtmp推流的，在nginx配置中，我们也配置了hls的推流应用。推流方式与RTMP方式基本一致，只是推流地址有点小变化。")]),s._v(" "),a("h3",{attrs:{id:"在设置中添加推流地址-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在设置中添加推流地址-2"}},[s._v("#")]),s._v(" 在设置中添加推流地址")]),s._v(" "),a("p",[s._v("服务：选择自定义")]),s._v(" "),a("p",[s._v("服务器：rtmp://自己服务器ip:1935/hls")]),s._v(" "),a("p",[s._v("串流密钥：随便填，相当于房间号")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632040033806-232d5dec-cd28-4b3d-85d2-ffc0628ae779.png",alt:"img"}})]),s._v(" "),a("p",[s._v("设置好之后就开始推流")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039072972-efe54a26-a40a-4a23-a36c-2bcfc979bc54.png",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"使用播放器拉流-hls流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用播放器拉流-hls流"}},[s._v("#")]),s._v(" 使用播放器拉流（HLS流）")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"设置拉流地址-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置拉流地址-2"}},[s._v("#")]),s._v(" 设置拉流地址")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632040318979-9d4a7c84-c6b7-4dbd-a7d2-1c6f9f5ead7d.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"播放视频-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放视频-2"}},[s._v("#")]),s._v(" 播放视频")]),s._v(" "),a("p",[s._v("设置好拉流地址后，过几秒就可以播放视频了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/743297/1632039420085-28bbe864-dbdc-4ea1-a5a6-d2419de5c452.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);