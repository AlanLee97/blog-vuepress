(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{996:function(a,n,s){"use strict";s.r(n);var e=s(1),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"搭建spring-boot-admin时依赖冲突问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建spring-boot-admin时依赖冲突问题"}},[a._v("#")]),a._v(" 搭建Spring Boot Admin时依赖冲突问题")]),a._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("p",[a._v("依赖冲突")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("***************************\nAPPLICATION FAILED TO START\n***************************\n\nDescription:\n\nAn attempt was made to call a method that does not exist. The attempt was made from the following location:\n\n    de.codecentric.boot.admin.server.web.servlet.AdminControllerHandlerMapping.registerHandlerMethod(AdminControllerHandlerMapping.java:46)\n\nThe following method did not exist:\n\n    org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping.registerHandlerMethod(Ljava/lang/Object;Ljava/lang/reflect/Method;Lorg/springframework/web/servlet/mvc/method/RequestMappingInfo;)V\n\nThe method's class, org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping, is available from the following locations:\n\n    jar:file:/F:/software/dev/maven_repo/org/springframework/spring-webmvc/5.1.10.RELEASE/spring-webmvc-5.1.10.RELEASE.jar!/org/springframework/web/servlet/mvc/method/annotation/RequestMappingHandlerMapping.class\n\nIt was loaded from the following location:\n\n    file:/F:/software/dev/maven_repo/org/springframework/spring-webmvc/5.1.10.RELEASE/spring-webmvc-5.1.10.RELEASE.jar\n\n\nAction:\n\nCorrect the classpath of your application so that it contains a single, compatible version of org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("h2",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),s("p",[a._v("jar包重复")]),a._v(" "),s("h2",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[a._v("#")]),a._v(" 解决")]),a._v(" "),s("p",[a._v("单独加入依赖")])])}),[],!1,null,null,null);n.default=t.exports}}]);