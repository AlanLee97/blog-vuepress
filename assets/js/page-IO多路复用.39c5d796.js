(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{865:function(t,e,a){"use strict";a.r(e);var s=a(1),c=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"io多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io多路复用"}},[t._v("#")]),t._v(" IO多路复用")]),t._v(" "),a("p",[t._v("多路复用是指使用一个线程来检查多个文件描述符（Socket）的就绪状态，比如调用select和poll函数，传入多个文件描述符，如果有一个文件描述符就绪，则返回，否则阻塞直到超时。得到就绪状态后进行真正的操作可以在同一个线程里执行，也可以启动线程执行（比如使用线程池）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/50/9155e2307879cd7ce515e7a997b9d532_hd.jpg",alt:"img"}}),a("img",{attrs:{src:"https://pic3.zhimg.com/80/9155e2307879cd7ce515e7a997b9d532_1440w.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("这样在处理1000个连接时，只需要1个线程监控就绪状态，对就绪的每个连接开一个线程处理就可以了，这样需要的线程数大大减少，减少了内存开销和上下文切换的CPU开销。")]),t._v(" "),a("p",[t._v("使用select函数的方式如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/50/bf52854bd1dc678de998b77aebaa2311_hd.jpg",alt:"img"}}),a("img",{attrs:{src:"https://pic4.zhimg.com/80/bf52854bd1dc678de998b77aebaa2311_1440w.jpg",alt:"img"}})])])}),[],!1,null,null,null);e.default=c.exports}}]);