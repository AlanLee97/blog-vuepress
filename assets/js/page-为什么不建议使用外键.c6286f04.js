(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{854:function(t,_,v){"use strict";v.r(_);var e=v(1),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"为什么不建议使用外键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不建议使用外键"}},[t._v("#")]),t._v(" 为什么不建议使用外键")]),t._v(" "),v("h2",{attrs:{id:"外键和级联"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#外键和级联"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"https://snailclimb.gitee.io/javaguide/#/docs/database/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E6%95%B0%E6%8D%AE%E5%BA%93%E9%83%A8%E5%88%86%E7%9A%84%E4%B8%80%E4%BA%9B%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5?id=%E5%A4%96%E9%94%AE%E5%92%8C%E7%BA%A7%E8%81%94",target:"_blank",rel:"noopener noreferrer"}},[t._v("外键和级联"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("对于外键和级联，阿里巴巴开发手册这样说到：")]),t._v(" "),v("blockquote",[v("p",[t._v("【强制】不得使用外键与级联，一切外键概念必须在应用层解决。")]),t._v(" "),v("p",[t._v("说明:以学生和成绩的关系为例，学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群;级联更新是强阻塞，存在数据库更新风暴的风 险;外键影响数据库的插入速度")])]),t._v(" "),v("p",[t._v("为什么不要用外键呢？大部分人可能会这样回答：")]),t._v(" "),v("blockquote",[v("ol",[v("li",[v("strong",[t._v("增加了复杂性：")]),t._v(" a.每次做DELETE 或者UPDATE都必须考虑外键约束，会导致开发的时候很痛苦,测试数据极为不方便;b.外键的主从关系是定的，假如那天需求有变化，数据库中的这个字段根本不需要和其他表有关联的话就会增加很多麻烦。")]),t._v(" "),v("li",[v("strong",[t._v("增加了额外工作")]),t._v("： 数据库需要增加维护外键的工作，比如当我们做一些涉及外键字段的增，删，更新操作之后，需要触发相关操作去检查，保证数据的的一致性和正确性，这样会不得不消耗资源；（个人觉得这个不是不用外键的原因，因为即使你不使用外键，你在应用层面也还是要保证的。所以，我觉得这个影响可以忽略不计。）")]),t._v(" "),v("li",[t._v("外键还会因为需要请求对其他表内部加锁而容易出现死锁情况；")]),t._v(" "),v("li",[v("strong",[t._v("对分不分表不友好")]),t._v(" ：因为分库分表下外键是无法生效的。")]),t._v(" "),v("li",[t._v("......")])])]),t._v(" "),v("p",[t._v("我个人觉得上面这种回答不是特别的全面，只是说了外键存在的一个常见的问题。实际上，我们知道外键也是有很多好处的，比如：")]),t._v(" "),v("ol",[v("li",[t._v("保证了数据库数据的一致性和完整性；")]),t._v(" "),v("li",[t._v("级联操作方便，减轻了程序代码量；")]),t._v(" "),v("li",[t._v("......")])]),t._v(" "),v("p",[t._v("所以说，不要一股脑的就抛弃了外键这个概念，既然它存在就有它存在的道理，如果系统不涉及分不分表，并发量不是很高的情况还是可以考虑使用外键的。")]),t._v(" "),v("p",[t._v("我个人是不太喜欢外键约束，比较喜欢在应用层去进行相关操作。")])])}),[],!1,null,null,null);_.default=s.exports}}]);