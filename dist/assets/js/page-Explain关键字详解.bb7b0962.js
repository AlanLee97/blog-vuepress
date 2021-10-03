(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{843:function(e,s,a){"use strict";a.r(s);var t=a(1),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"explain关键字详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain关键字详解"}},[e._v("#")]),e._v(" Explain关键字详解")]),e._v(" "),a("blockquote",[a("p",[e._v("原文："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000021458117",target:"_blank",rel:"noopener noreferrer"}},[e._v("一张图彻底搞懂MySQL的 explain"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("地址：https://segmentfault.com/a/1190000021458117?utm_source=tag-newest#item-1")])]),e._v(" "),a("blockquote",[a("p",[e._v("explain关键字可以模拟MySQL优化器执行SQL语句，可以很好的分析SQL语句或表结构的性能瓶颈。")])]),e._v(" "),a("h2",{attrs:{id:"explain的用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain的用途"}},[e._v("#")]),e._v(" explain的用途")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1. 表的读取顺序如何\n2. 数据读取操作有哪些操作类型\n3. 哪些索引可以使用\n4. 哪些索引被实际使用\n5. 表之间是如何引用\n6. 每张表有多少行被优化器查询\n......\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h2",{attrs:{id:"explain的执行效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain的执行效果"}},[e._v("#")]),e._v(" explain的执行效果")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> explain select * from subject where id = 1 \\G\n******************************************************\n           id: 1\n  select_type: SIMPLE\n        table: subject\n   partitions: NULL\n         type: const\npossible_keys: PRIMARY\n          key: PRIMARY\n      key_len: 4\n          ref: const\n         rows: 1\n     filtered: 100.00\n        Extra: NULL\n******************************************************\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h2",{attrs:{id:"explain包含的字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain包含的字段"}},[e._v("#")]),e._v(" explain包含的字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1. id //select查询的序列号，包含一组数字，表示查询中执行select子句或操作表的顺序\n2. select_type //查询类型\n3. table //正在访问哪个表\n4. partitions //匹配的分区\n5. type //访问的类型\n6. possible_keys //显示可能应用在这张表中的索引，一个或多个，但不一定实际使用到\n7. key //实际使用到的索引，如果为NULL，则没有使用索引\n8. key_len //表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度\n9. ref //显示索引的哪一列被使用了，如果可能的话，是一个常数，哪些列或常量被用于查找索引列上的值\n10. rows //根据表统计信息及索引选用情况，大致估算出找到所需的记录所需读取的行数\n11. filtered //查询的表行占表的百分比\n12. Extra //包含不适合在其它列中显示但十分重要的额外信息\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h2",{attrs:{id:"图片版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片版"}},[e._v("#")]),e._v(" 图片版")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458122/view",alt:"一张图搞定explain"}})]),e._v(" "),a("h2",{attrs:{id:"文字版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字版"}},[e._v("#")]),e._v(" 文字版")]),e._v(" "),a("h3",{attrs:{id:"id字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id字段"}},[e._v("#")]),e._v(" id字段")]),e._v(" "),a("h5",{attrs:{id:"_1-id相同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-id相同"}},[e._v("#")]),e._v(" 1. id相同")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("执行顺序从上至下\n例子：\nexplain select subject.* from subject,student_score,teacher where subject.id = student_id and subject.teacher_id = teacher.id;\n读取顺序：subject > teacher > student_score\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458124",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_2-id不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-id不同"}},[e._v("#")]),e._v(" 2. id不同")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("如果是子查询，id的序号会递增，id的值越大优先级越高，越先被执行\n例子：\nexplain select score.* from student_score as score where subject_id = (select id from subject where teacher_id = (select id from teacher where id = 2));\n读取顺序：teacher > subject > student_score\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458120",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_3-id相同又不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-id相同又不同"}},[e._v("#")]),e._v(" 3. id相同又不同")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("id如果相同，可以认为是一组，从上往下顺序执行\n在所有组中，id值越大，优先级越高，越先执行\n例子：\nexplain select subject.* from subject left join teacher on subject.teacher_id = teacher.id\n -> union \n -> select subject.* from subject right join teacher on subject.teacher_id = teacher.id;\n 读取顺序：2.teacher > 2.subject > 1.subject > 1.teacher\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458126",alt:"一张图搞定 explain"}})]),e._v(" "),a("h3",{attrs:{id:"select-type字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-type字段"}},[e._v("#")]),e._v(" select_type字段")]),e._v(" "),a("h5",{attrs:{id:"_1-simple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-simple"}},[e._v("#")]),e._v(" 1. SIMPLE")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("简单查询，不包含子查询或Union查询\n例子：\nexplain select subject.* from subject,student_score,teacher where subject.id = student_id and subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458121",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_2-primary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-primary"}},[e._v("#")]),e._v(" 2. PRIMARY")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("查询中若包含任何复杂的子部分，最外层查询则被标记为主查询\n例子：\nexplain select score.* from student_score as score where subject_id = (select id from subject where teacher_id = (select id from teacher where id = 2));\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458125",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_3-subquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-subquery"}},[e._v("#")]),e._v(" 3. SUBQUERY")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("在select或where中包含子查询\n例子：\nexplain select score.* from student_score as score where subject_id = (select id from subject where teacher_id = (select id from teacher where id = 2));\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458123",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_4-derived"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-derived"}},[e._v("#")]),e._v(" 4. DERIVED")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("在FROM列表中包含的子查询被标记为DERIVED（衍生），MySQL\n会递归执行这些子查询，把结果放在临时表中\n备注：\nMySQL5.7+ 进行优化了，增加了derived_merge（派生合并），默认开启，可加快查询效率\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h5",{attrs:{id:"_5-union"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-union"}},[e._v("#")]),e._v(" 5. UNION")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("若第二个select出现在uion之后，则被标记为UNION\n例子：\nexplain select subject.* from subject left join teacher on subject.teacher_id = teacher.id\n -> union \n -> select subject.* from subject right join teacher on subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458127",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_6-union-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-union-result"}},[e._v("#")]),e._v(" 6. UNION RESULT")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("从UNION表获取结果的select\n例子：\nexplain select subject.* from subject left join teacher on subject.teacher_id = teacher.id\n -> union \n -> select subject.* from subject right join teacher on subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458128",alt:"一张图搞定 explain"}})]),e._v(" "),a("h3",{attrs:{id:"type字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type字段"}},[e._v("#")]),e._v(" type字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NULL>system>const>eq_ref>ref>fulltext>ref_or_null>index_merge>unique_subquery>index_subquery>range>index>ALL //最好到最差\n备注：掌握以下10种常见的即可\nNULL>system>const>eq_ref>ref>ref_or_null>index_merge>range>index>ALL\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h5",{attrs:{id:"_1-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-null"}},[e._v("#")]),e._v(" 1. NULL")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL能够在优化阶段分解查询语句，在执行阶段用不着再访问表或索引\n例子：\nexplain select min(id) from subject;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458137",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_2-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-system"}},[e._v("#")]),e._v(" 2. system")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("表只有一行记录（等于系统表），这是const类型的特列，平时不大会出现，可以忽略\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"_3-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-const"}},[e._v("#")]),e._v(" 3. const")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("表示通过索引一次就找到了，const用于比较primary key或uique索引，因为只匹配一行数据，所以很快，如主键置于where列表中，MySQL就能将该查询转换为一个常量\n例子：\nexplain select * from teacher where teacher_no = 'T2010001';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458138",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_4-eq-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-eq-ref"}},[e._v("#")]),e._v(" 4. eq_ref")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("唯一性索引扫描，对于每个索引键，表中只有一条记录与之匹配，常见于主键或唯一索引扫描\n例子：\nexplain select subject.* from subject left join teacher on subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458134",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_5-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-ref"}},[e._v("#")]),e._v(" 5. ref")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("非唯一性索引扫描，返回匹配某个单独值的所有行\n本质上也是一种索引访问，返回所有匹配某个单独值的行\n然而可能会找到多个符合条件的行，应该属于查找和扫描的混合体\n例子：\nexplain select subject.* from subject,student_score,teacher where subject.id = student_id and subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458135",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_6-ref-or-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-ref-or-null"}},[e._v("#")]),e._v(" 6. ref_or_null")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("类似ref，但是可以搜索值为NULL的行\n例子：\nexplain select * from teacher where name = 'wangsi' or name is null;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458130",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_7-index-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-index-merge"}},[e._v("#")]),e._v(" 7. index_merge")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("表示使用了索引合并的优化方法\n例子：\nexplain select * from teacher where id = 1 or teacher_no = 'T2010001' .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458129",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_8-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-range"}},[e._v("#")]),e._v(" 8. range")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("只检索给定范围的行，使用一个索引来选择行，key列显示使用了哪个索引\n一般就是在你的where语句中出现between、<>、in等的查询。\n例子：\nexplain select * from subject where id between 1 and 3;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458132",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_9-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-index"}},[e._v("#")]),e._v(" 9. index")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Full index Scan，Index与All区别：index只遍历索引树，通常比All快\n因为索引文件通常比数据文件小，也就是虽然all和index都是读全表，但index是从索引中读取的，而all是从硬盘读的。\n例子：\nexplain select id from subject;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458131",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_10-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-all"}},[e._v("#")]),e._v(" 10. ALL")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Full Table Scan，将遍历全表以找到匹配行\n例子：\nexplain select * from subject;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458133",alt:"一张图搞定 explain"}})]),e._v(" "),a("h3",{attrs:{id:"table字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table字段"}},[e._v("#")]),e._v(" table字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("数据来自哪张表\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"possible-keys字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possible-keys字段"}},[e._v("#")]),e._v(" possible_keys字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("显示可能应用在这张表中的索引，一个或多个\n查询涉及到的字段若存在索引，则该索引将被列出，但不一定被实际使用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"key字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key字段"}},[e._v("#")]),e._v(" key字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" 实际使用到的索引，如果为NULL，则没有使用索引\n查询中若使用了覆盖索引（查询的列刚好是索引），则该索引仅出现在key列表\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"key-len字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-len字段"}},[e._v("#")]),e._v(" key_len字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" 表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度\n在不损失精确度的情况下，长度越短越好\nkey_len显示的值为索引字段最大的可能长度，并非实际使用长度\n即key_len是根据定义计算而得，不是通过表内检索出的\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"ref字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref字段"}},[e._v("#")]),e._v(" ref字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("显示索引的哪一列被使用了，如果可能的话，是一个常数，哪些列或常量被用于查找索引列上的值\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"rows字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows字段"}},[e._v("#")]),e._v(" rows字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("根据表统计信息及索引选用情况，大致估算出找到所需的记录所需读取的行数\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"partitions字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitions字段"}},[e._v("#")]),e._v(" partitions字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("匹配的分区\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"filtered字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filtered字段"}},[e._v("#")]),e._v(" filtered字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("查询的表行占表的百分比\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"extra字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra字段"}},[e._v("#")]),e._v(" Extra字段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("包含不适合在其它列中显示但十分重要的额外信息\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"_1-using-filesort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-filesort"}},[e._v("#")]),e._v(" 1. Using filesort")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("说明MySQL会对数据使用一个外部的索引排序，而不是按照表内的索引顺序进行读取\nMySQL中无法利用索引完成的排序操作称为“文件排序”\n例子：\nexplain select * from subject order by name;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458136",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_2-using-temporary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-using-temporary"}},[e._v("#")]),e._v(" 2. Using temporary")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("使用了临时表保存中间结果，MySQL在对结果排序时使用临时表，常见于排序order by 和分组查询group by\n例子：\nexplain select subject.* from subject left join teacher on subject.teacher_id = teacher.id\n -> union \n -> select subject.* from subject right join teacher on subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458141",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_3-using-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-using-index"}},[e._v("#")]),e._v(" 3. Using index")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("表示相应的select操作中使用了覆盖索引（Covering Index）,避免访问了表的数据行，效率不错！\n如果同时出现using where，表明索引被用来执行索引键值的查找\n如果没有同时出现using where，表明索引用来读取数据而非执行查找动作\n例子：\nexplain select subject.* from subject,student_score,teacher where subject.id = student_id and subject.teacher_id = teacher.id;\n备注：\n覆盖索引：select的数据列只用从索引中就能够取得，不必读取数据行，MySQL可以利用索引返回select列表中的字段，而不必根据索引再次读取数据文件，即查询列要被所建的索引覆盖\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458145",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_4-using-where"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-using-where"}},[e._v("#")]),e._v(" 4. Using where")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("使用了where条件\n例子：\nexplain select subject.* from subject,student_score,teacher where subject.id = student_id and subject.teacher_id = teacher.id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458139",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_5-using-join-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-using-join-buffer"}},[e._v("#")]),e._v(" 5. Using join buffer")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("使用了连接缓存\n例子：\nexplain select student.*,teacher.*,subject.* from student,teacher,subject;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458140",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_6-impossible-where"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-impossible-where"}},[e._v("#")]),e._v(" 6. impossible where")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("where子句的值总是false，不能用来获取任何元组\n例子：\nexplain select * from teacher where name = 'wangsi' and name = 'lisi';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458144",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_7-distinct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-distinct"}},[e._v("#")]),e._v(" 7. distinct")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("一旦mysql找到了与行相联合匹配的行，就不再搜索了\n例子：\nexplain select distinct teacher.name from teacher left join subject on teacher.id = subject.teacher_id;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458143",alt:"一张图搞定 explain"}})]),e._v(" "),a("h5",{attrs:{id:"_8-select-tables-optimized-away"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-select-tables-optimized-away"}},[e._v("#")]),e._v(" 8. Select tables optimized away")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT操作已经优化到不能再优化了（MySQL根本没有遍历表或索引就返回数据了）\n例子：\nexplain select min(id) from subject;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021458142",alt:"一张图搞定 explain"}})]),e._v(" "),a("h3",{attrs:{id:"使用的数据表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用的数据表"}},[e._v("#")]),e._v(" 使用的数据表")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create table subject(\n -> id int(10) auto_increment,\n -> name varchar(20),\n -> teacher_id int(10),\n -> primary key (id),\n -> index idx_teacher_id (teacher_id));//学科表\n \ncreate table teacher(\n -> id int(10) auto_increment,\n -> name varchar(20),\n -> teacher_no varchar(20),\n -> primary key (id),\n -> unique index unx_teacher_no (teacher_no(20)));//教师表\n \n create table student(\n -> id int(10) auto_increment,\n -> name varchar(20),\n -> student_no varchar(20),\n -> primary key (id),\n -> unique index unx_student_no (student_no(20)));//学生表\n \n create table student_score(\n -> id int(10) auto_increment,\n -> student_id int(10),\n -> subject_id int(10),\n -> score int(10),\n -> primary key (id),\n -> index idx_student_id (student_id),\n -> index idx_subject_id (subject_id));//学生成绩表\n \n alter table teacher add index idx_name(name(20));//教师表增加名字普通索引\n \n 数据填充：\n insert into student(name,student_no) values ('zhangsan','20200001'),('lisi','20200002'),('yan','20200003'),('dede','20200004');\n \n insert into teacher(name,teacher_no) values('wangsi','T2010001'),('sunsi','T2010002'),('jiangsi','T2010003'),('zhousi','T2010004');\n \n insert into subject(name,teacher_id) values('math',1),('Chinese',2),('English',3),('history',4);\n \ninsert into student_score(student_id,subject_id,score) values(1,1,90),(1,2,60),(1,3,80),(1,4,100),(2,4,60),(2,3,50),(2,2,80),(2,1,90),(3,1,90),(3,4,100),(4,1,40),(4,2,80),(4,3,80),(4,5,100);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);