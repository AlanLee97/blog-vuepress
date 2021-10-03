(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{842:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql主从配置与mycat读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从配置与mycat读写分离"}},[t._v("#")]),t._v(" MySQL主从配置与Mycat读写分离")]),t._v(" "),s("h2",{attrs:{id:"一、主数据库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、主数据库配置"}},[t._v("#")]),t._v(" 一、主数据库配置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("编辑配置文件")]),t._v(" "),s("p",[t._v("添加如下内容")]),t._v(" "),s("div",{staticClass:"language-conf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("server-id=1\nbinlog-do-db=master_db1 #备份的数据库\nlog-bin=mysql-bin\nbinlog-ignore-db=mysql\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200523133136523.png",alt:"image-20200523133136523"}})])]),t._v(" "),s("li",[s("p",[t._v("重启mysql")])]),t._v(" "),s("li",[s("p",[t._v("创建一个允许从服务器来访问的用户(主服务器)：")]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grant replication slave on *.* to 'root'@'%' identified by '123456';\n\nGRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';\n\nFLUSH PRIVILEGES;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("grant replication slave on "),s("em",[t._v(".")]),t._v(" to 'root'@'%' identified by '123456';")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("root：Slave使用的账号")])]),t._v(" "),s("li",[s("p",[t._v("IDENTIFIED BY 123456：Slave使用的密码")])]),t._v(" "),s("li",[s("p",[t._v("%：Slave数据库IP")])])])])]),t._v(" "),s("li",[s("p",[t._v("查看配置的信息")]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("show master status \\G;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200522155203831.png",alt:"image-20200522155203831"}})]),t._v(" "),s("blockquote",[s("p",[t._v("记住 File和Position的值，后面会用到")])])])]),t._v(" "),s("h2",{attrs:{id:"二、从数据库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、从数据库配置"}},[t._v("#")]),t._v(" 二、从数据库配置")]),t._v(" "),s("ol",[s("li",[t._v("编辑配置文件my.cnf，在[mysqld]下面添加这段内容")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("log-bin=mysql-bin\nserver-id=2\n# 忽略日志的db\nbinlog-ignore-db=information_schema\nbinlog-ignore-db=cluster\nbinlog-ignore-db=mysql\n# 需要备份的db\nreplicate-do-db=master_db1\n# 忽略备份的db\nreplicate-ignore-db=mysql\nlog-slave-updates\nslave-skip-errors=all\nslave-net-timeout=60\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("关联Master信息")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("stop slave;\n\nCHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;\n\nstart slave;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("这里的MASTER_LOG_POS=154的154就是配置主服务器的时候说要记住的那个，")]),t._v(" "),s("p",[t._v("MASTER_LOG_FILE的值就是之前的Position的值")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("查看状态")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("show slave status \\G;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200522170042277.png",alt:"image-20200522170042277"}})]),t._v(" "),s("blockquote",[s("p",[t._v("只有Slave_IO_Running与Slave_SQL_Running都为Yes才配置成功。")])]),t._v(" "),s("h2",{attrs:{id:"三、主从复制测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、主从复制测试"}},[t._v("#")]),t._v(" 三、主从复制测试")]),t._v(" "),s("ol",[s("li",[t._v("在从服务器中创建数据库master_db1")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200523131328951.png",alt:"image-20200523131328951"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在主MySQL服务器创建test表，测试结果是从MySQL的服务器会自动复制主MySQL服务器的test表。")]),t._v(" "),s("li",[t._v("添加500w条数据进行测试，可以使用jdbc插入，也可以使用dataFactory。（可以先手动插入一条数据查看效果）"),s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603111431707.png",alt:"image-20200603111431707"}})])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603111537557.png",alt:"image-20200603111537557"}})]),t._v(" "),s("h2",{attrs:{id:"四、启用mycat读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、启用mycat读写分离"}},[t._v("#")]),t._v(" 四、启用Mycat读写分离")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("主机名")]),t._v(" "),s("th",[t._v("IP和端口")]),t._v(" "),s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("引擎")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("主MySQL服务器")]),t._v(" "),s("td",[t._v("master")]),t._v(" "),s("td",[t._v("192.168.1.20:3306")]),t._v(" "),s("td",[t._v("写")]),t._v(" "),s("td",[t._v("InnoDB")])]),t._v(" "),s("tr",[s("td",[t._v("从MySQL服务器")]),t._v(" "),s("td",[t._v("node-1")]),t._v(" "),s("td",[t._v("192.168.1.21:3306")]),t._v(" "),s("td",[t._v("读")]),t._v(" "),s("td",[t._v("MyISAM")])])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("修改从数据库的表")]),t._v(" "),s("p",[t._v("将表的引擎改为"),s("code",[t._v("MyISAM")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200523135553033.png",alt:"image-20200523135553033"}})])]),t._v(" "),s("li",[s("p",[t._v("配置mycat读写分离")])])]),t._v(" "),s("p",[t._v("编辑schema.xml文件")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("mycat:schema")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("SYSTEM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema.dtd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mycat:")]),t._v("schema")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("mycat")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://org.opencloudb/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("schema")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zdxh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("checkSQLschema")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sqlMaxLimit")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 测试读写分离 --\x3e")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("primaryKey")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataNode")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dn4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 测试读写分离 --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dn4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataHost")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("local-master-rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("master_db1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 测试读写分离 --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataHost")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("local-master-rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxCon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("minCon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("writeType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dbType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dbDriver")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("native"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("switchType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slaveThreshold")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("heartbeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("select user()"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("heartbeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 写入配置--\x3e")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("writeHost")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hostM4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("192.168.1.20:3306"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n                   "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("123456"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 添加只读库配置--\x3e")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("readHost")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hostS1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("192.168.1.21:3306"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n                      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("123456"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("writeHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dataHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mycat:")]),t._v("schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200523145846248.png",alt:"image-20200523145846248"}})]),t._v(" "),s("h2",{attrs:{id:"五、mycat读写分离测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、mycat读写分离测试"}},[t._v("#")]),t._v(" 五、Mycat读写分离测试")]),t._v(" "),s("p",[t._v("测试分为启用读写分离测试和不启用读写分离的情况赖测试")]),t._v(" "),s("h3",{attrs:{id:"启用读写分离的查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用读写分离的查询"}},[t._v("#")]),t._v(" 启用读写分离的查询")]),t._v(" "),s("p",[t._v("配置schema.xml")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603092525583.png",alt:"image-20200603092525583"}})]),t._v(" "),s("p",[t._v("在mycat中查询")]),t._v(" "),s("p",[s("strong",[t._v("count关键字查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select count(id) from test;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603093857376.png",alt:"image-20200603093857376"}})]),t._v(" "),s("p",[s("strong",[t._v("like关键字查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select * from test where name like '%alanlee%';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603094541570.png",alt:"image-20200603094541570"}})]),t._v(" "),s("p",[s("strong",[t._v("=查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select * from test where name = 'alanlee';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603094709481.png",alt:"image-20200603094709481"}})]),t._v(" "),s("p",[s("strong",[t._v("insert")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("insert into test(name) values('libuguan');\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603095335013.png",alt:"image-20200603095335013"}})]),t._v(" "),s("p",[s("strong",[t._v("update")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("update test set name = 'libuguan-007' where name = 'libuguan';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603095728778.png",alt:"image-20200603095728778"}})]),t._v(" "),s("p",[s("strong",[t._v("delete")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("delete from test where name = 'libuguan-007';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603100214050.png",alt:"image-20200603100214050"}})]),t._v(" "),s("h3",{attrs:{id:"不启用读写分离的查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不启用读写分离的查询"}},[t._v("#")]),t._v(" 不启用读写分离的查询")]),t._v(" "),s("p",[t._v("配置schema.xml")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200529152232726.png",alt:"image-20200529152232726"}})]),t._v(" "),s("p",[t._v("在mycat中查询")]),t._v(" "),s("p",[s("strong",[t._v("count关键字查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select count(*) from test;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200529151832264.png",alt:"image-20200529151832264"}})]),t._v(" "),s("p",[s("strong",[t._v("like关键字查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select * from test where name like '%alanlee%';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200529153145449.png",alt:"image-20200529153145449"}})]),t._v(" "),s("p",[s("strong",[t._v("=查询")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select * from test where name = 'alanlee';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200529153440308.png",alt:"image-20200529153440308"}})]),t._v(" "),s("p",[s("strong",[t._v("insert")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("insert into test(name) values('libuguan-01');\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603104934708.png",alt:"image-20200603104934708"}})]),t._v(" "),s("p",[s("strong",[t._v("update")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("update test set name = 'libuguan-02' where name = 'libuguan-01';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603105102926.png",alt:"image-20200603105102926"}})]),t._v(" "),s("p",[s("strong",[t._v("delete")])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("delete from test where name = 'libuguan-02';\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603105351203.png",alt:"image-20200603105351203"}})]),t._v(" "),s("h3",{attrs:{id:"统计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计"}},[t._v("#")]),t._v(" 统计")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Sql语句")]),t._v(" "),s("th",[t._v("启用读写分离机制（读库使用MyISAM）")]),t._v(" "),s("th",[t._v("取消读写分离机制(读使用的是Innodb)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("0.00秒")]),t._v(" "),s("td",[t._v("1.68秒")])]),t._v(" "),s("tr",[s("td",[t._v("like")]),t._v(" "),s("td",[t._v("2.36秒")]),t._v(" "),s("td",[t._v("3.01秒")])]),t._v(" "),s("tr",[s("td",[t._v("=")]),t._v(" "),s("td",[t._v("0.92秒")]),t._v(" "),s("td",[t._v("1.30秒")])]),t._v(" "),s("tr",[s("td",[t._v("insert")]),t._v(" "),s("td",[t._v("0.11秒")]),t._v(" "),s("td",[t._v("0.05秒")])]),t._v(" "),s("tr",[s("td",[t._v("update")]),t._v(" "),s("td",[t._v("3.27秒")]),t._v(" "),s("td",[t._v("3.02秒")])]),t._v(" "),s("tr",[s("td",[t._v("delete")]),t._v(" "),s("td",[t._v("2.93秒")]),t._v(" "),s("td",[t._v("3.31秒")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200603110848207.png",alt:"image-20200603110848207"}})]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("**启用mycat读写分离，查询操作的速度比不启用读写分离快很多。**原因是查询时使用的是MyISAM引擎。而插入、更新、删除的操作基本上没有变化，因为执行这3个操作时都是使用的InnoDB引擎。")]),t._v(" "),s("h2",{attrs:{id:"六、遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、遇到的问题"}},[t._v("#")]),t._v(" 六、遇到的问题")]),t._v(" "),s("h3",{attrs:{id:"问题1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[t._v("#")]),t._v(" 问题1")]),t._v(" "),s("p",[t._v("[ERROR] unknown variable 'master-host=192.168.1.20'")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200522162243354.png",alt:"image-20200522162243354"}})]),t._v(" "),s("h4",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("p",[t._v("MySQL5.6和之后的版本没有master-host参数了")]),t._v(" "),s("h4",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("ol",[s("li",[t._v("在my.cnf文件的[mysqld]下面添加以下配置")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("log-bin=mysql-bin\nserver-id=2\n# 忽略日志的db\nbinlog-ignore-db=information_schema\nbinlog-ignore-db=cluster\nbinlog-ignore-db=mysql\n# 需要备份的db\nreplicate-do-db=master_db\n# 忽略备份的db\nreplicate-ignore-db=mysql\nlog-slave-updates\nslave-skip-errors=all\nslave-net-timeout=60\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200522165424009.png",alt:"image-20200522165424009"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("重启mysql")])]),t._v(" "),s("li",[s("p",[t._v("命令行输入")])])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("CHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("需根据自己的机子修改参数值")]),t._v(" "),s("ul",[s("li",[t._v("MASTER_HOST")]),t._v(" "),s("li",[t._v("MASTER_LOG_FILE")]),t._v(" "),s("li",[t._v("MASTER_LOG_POS")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200522164835461.png",alt:"image-20200522164835461"}})]),t._v(" "),s("h3",{attrs:{id:"问题2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题2"}},[t._v("#")]),t._v(" 问题2")]),t._v(" "),s("p",[t._v("配置好了主从服务器之后，主服务器创建表后，从服务器不会复制")]),t._v(" "),s("h3",{attrs:{id:"原因-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因-2"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("p",[t._v("没有赋予Slave机器有File权限，没有刷新权限。")]),t._v(" "),s("h3",{attrs:{id:"解决-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-2"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("在主MySQL服务器中命令行执行")]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 赋予Slave机器有File权限\nGRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';\n# 刷新权限\nFLUSH PRIVILEGES;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("重启主MySQL服务器")]),t._v(" "),s("blockquote",[s("p",[t._v("还要检查其他的配置是否准确，例如MASTER_HOST，MASTER_LOG_FILE，MASTER_LOG_POS的参数值等等。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);