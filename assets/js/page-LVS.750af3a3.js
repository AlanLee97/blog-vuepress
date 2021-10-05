(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1055:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"lvs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lvs"}},[s._v("#")]),s._v(" LVS")]),s._v(" "),t("p",[s._v("Linux Virtual Server")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("IP")]),s._v(" "),t("th",[s._v("软件")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("DR(Master)")]),s._v(" "),t("td",[s._v("192.168.1.20"),t("br"),s._v("vip:192.168.1.100")]),s._v(" "),t("td",[s._v("keepalived,ipvsadm")])]),s._v(" "),t("tr",[t("td",[s._v("DR(BACKUP)")]),s._v(" "),t("td",[s._v("192.168.1.20"),t("br"),s._v("vip:192.168.1.100")]),s._v(" "),t("td",[s._v("keepalived,ipvsadm")])]),s._v(" "),t("tr",[t("td",[s._v("RS1")]),s._v(" "),t("td",[s._v("192.168.1.22"),t("br"),s._v("隐藏vip:192.168.1.100")]),s._v(" "),t("td",[s._v("nginx")])]),s._v(" "),t("tr",[t("td",[s._v("RS2")]),s._v(" "),t("td",[s._v("192.168.1.23"),t("br"),s._v("隐藏vip:192.168.1.100")]),s._v(" "),t("td",[s._v("nginx")])])])]),s._v(" "),t("h2",{attrs:{id:"配置dr服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置dr服务器"}},[s._v("#")]),s._v(" 配置DR服务器")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ifconfig ens33:192.168.1.100/24\nroute add -host 192.168.1.100 dev ens33\nipvsadm -A -t 192.168.1.100:80 -s wlc\nipvsadm -a -t 192.168.1.100:80 -s wlc -r 192.168.1.22 -g -w 1\nipvsadm -a -t 192.168.1.100:80 -s wlc -r 192.168.1.23 -g -w 1\nipvsadm -Ln\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("route add -host 192.168.1.100 dev ens33\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置rs服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置rs服务器"}},[s._v("#")]),s._v(" 配置RS服务器")]),s._v(" "),t("p",[s._v("在2台RS服务器上操作")]),s._v(" "),t("p",[s._v("修改内核参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/conf/ens33/arp_ignore\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/conf/all/arp_ignore\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/conf/ens33/arp_announce\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/conf/all/arp_announce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在两台机器（RS）上，设置网卡的别名IP：192.168.1.200")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" lo:0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.255 broadcast "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在两台机器（RS）上，添加一个路由")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -host "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.200 dev lo:0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("DR上需要加一个路由设置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -host "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100 dev ens33\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在DR上使用ipvsadm添加集群服务")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Ipvsadm –C\n\nipvsadm -A -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:80 -s wlc\n\nipvsadm -a -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:80 -r "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.21 -g -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nipvsadm -a -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100:80 -r "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.22 -g -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);