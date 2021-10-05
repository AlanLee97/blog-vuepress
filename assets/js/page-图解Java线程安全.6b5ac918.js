(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{796:function(a,n,t){"use strict";t.r(n);var s=t(1),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"图解java线程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图解java线程安全"}},[a._v("#")]),a._v(" 图解Java线程安全")]),a._v(" "),t("h1",{attrs:{id:"什么是线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程"}},[a._v("#")]),a._v(" 什么是线程")]),a._v(" "),t("p",[a._v("按操作系统中的描述，线程是 CPU 调度的最小单元，直观来说线程就是代码按顺序执行下来，执行完毕就结束的一条线。")]),a._v(" "),t("p",[a._v("举个 🌰，富土康的一个组装车间相当于 CPU ，而线程就是当前车间里的一条条作业流水线。为了提高产能和效率，车间里一般都会有多条流水线同时作业。同样在我们 Android 开发中多线程可以说是随处可见了，如执行耗时操作，网络请求、文件读写、数据库读写等等都会开单独的子线程来执行。")]),a._v(" "),t("p",[a._v("那么你的线程是安全的吗？线程安全的原理又是什么呢？（本文内容是个人学习总结浅见，如有错误的地方，望大佬们轻拍指正）")]),a._v(" "),t("h1",{attrs:{id:"线程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程安全"}},[a._v("#")]),a._v(" 线程安全")]),a._v(" "),t("p",[a._v("了解线程安全的之前先来了解一下 Java 的内存模型，先搞清楚线程是怎么工作的。")]),a._v(" "),t("h2",{attrs:{id:"java-内存模型-jmm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型-jmm"}},[a._v("#")]),a._v(" Java 内存模型 - JMM")]),a._v(" "),t("h3",{attrs:{id:"什么是-jmm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jmm"}},[a._v("#")]),a._v(" 什么是 JMM")]),a._v(" "),t("p",[a._v("JMM(Java Memory Model),是一种基于"),t("code",[a._v("计算机内存模型（定义了共享内存系统中多线程程序读写操作行为的规范）")]),a._v("，屏蔽了各种硬件和操作系统的访问差异的，保证了Java程序在各种平台下对内存的访问都能保证效果一致的机制及规范。保证共享内存的"),t("strong",[a._v("原子性")]),a._v("、"),t("strong",[a._v("可见性")]),a._v("、"),t("strong",[a._v("有序性")]),a._v("。")]),a._v(" "),t("p",[a._v("能用图的地方尽量不废话，先来看一张图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/15/16bf62d8c174d776?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),a._v(" "),t("p",[a._v("上图描述了一个多线程执行场景。 线程 A 和线程 B 分别对主内存的"),t("code",[a._v("变量")]),a._v("进行读写操作。其中"),t("strong",[a._v("主内存")]),a._v("中的"),t("code",[a._v("变量")]),a._v("为"),t("code",[a._v("共享变量")]),a._v(",也就是说此变量只此一份，多个线程间共享。但是线程不能直接读写主内存的"),t("code",[a._v("共享变量")]),a._v("，每个线程都有自己的"),t("strong",[a._v("工作内存")]),a._v("，线程需要读写主内存的"),t("code",[a._v("共享变量")]),a._v("时需要先将该变量拷贝一份副本到自己的工作内存，然后在自己的工作内存中对该变量进行所有操作，线程工作内存对变量副本完成操作之后需要将结果同步至主内存。")]),a._v(" "),t("blockquote",[t("p",[a._v("线程的工作内存是线程私有内存，线程间无法互相访问对方的工作内存。")])]),a._v(" "),t("p",[a._v("为了便于理解，用图来描述一下线程对变量赋值的流程。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/15/16bf62d905a78509?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),a._v(" "),t("p",[a._v("那么问题来了，线程工作内存怎么知道什么时候又是怎样将数据同步到主内存呢？ 这里就轮到 "),t("strong",[a._v("JMM")]),a._v(" 出场了。 "),t("strong",[a._v("JMM")]),a._v(" 规定了何时以及如何做线程工作内存与主内存之间的数据同步。")]),a._v(" "),t("p",[a._v("对 JMM 有了初步的了解，简单总结一下"),t("strong",[a._v("原子性")]),a._v("、"),t("strong",[a._v("可见性")]),a._v("、"),t("strong",[a._v("有序性")])]),a._v(" "),t("p",[t("strong",[a._v("原子性")]),a._v("：")]),a._v(" "),t("blockquote",[t("p",[a._v("对共享内存的操作必须是要么全部执行直到执行结束，且中间过程不能被任何外部因素打断，要么就不执行。")])]),a._v(" "),t("p",[t("strong",[a._v("可见性")]),a._v("：")]),a._v(" "),t("blockquote",[t("p",[a._v("多线程操作共享内存时，执行结果能够及时的同步到共享内存，确保其他线程对此结果及时可见。")])]),a._v(" "),t("p",[t("strong",[a._v("有序性")]),a._v("：")]),a._v(" "),t("blockquote",[t("p",[a._v("程序的执行顺序按照代码顺序执行，在单线程环境下，程序的执行都是有序的，但是在多线程环境下，JMM 为了性能优化，编译器和处理器会对指令进行重排，程序的执行会变成无序。")])]),a._v(" "),t("p",[a._v("到这里，我们可以引出本文的主题了 --"),t("strong",[a._v("【线程安全】")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"线程安全的本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程安全的本质"}},[a._v("#")]),a._v(" 线程安全的本质")]),a._v(" "),t("p",[a._v("其实第一张图的例子是有问题的，主内存中的变量是共享的，所有线程都可以访问读写，而线程工作内存又是线程私有的，线程间不可互相访问。那在多线程场景下，图上的线程 A 和线程 B 同时来操做共享内存里的同一个变量，那么主内存内的此变量数据就会被破坏。也就是说主内存内的此变量不是线程安全的。 我们来看个代码小例子帮助理解。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('public class ThreadDemo {\n    private int x = 0;\n\n    private void count() {\n        x++;\n    }\n\n    public void runTest() {\n        new Thread() {\n            @Override\n            public void run() {\n                for (int i = 0; i < 1_000_000; i++) {\n                    count();\n                }\n                System.out.println("final x from 1: " + x);\n            }\n        }.start();\n        new Thread() {\n            @Override\n            public void run() {\n                for (int i = 0; i < 1_000_000; i++) {\n                    count();\n                }\n                System.out.println("final x from 2: " + x);\n            }\n        }.start();\n    }\n\n    public static void main(String[] args) {\n        new ThreadDemo().runTest();\n    }\n}\n复制代码\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br")])]),t("p",[a._v("示例代码中 "),t("code",[a._v("runTest")]),a._v(" 方法2个线程分别执行 "),t("code",[a._v("1_000_000")]),a._v(" 次 "),t("code",[a._v("count()")]),a._v(" 方法, "),t("code",[a._v("count()")]),a._v(" 方法中只执行简单的 "),t("code",[a._v("x++")]),a._v(" 操作,理论上每次执行 "),t("code",[a._v("runTest")]),a._v(" 方法应该有一个线程输出的 "),t("code",[a._v("x")]),a._v(" 结果应该是"),t("code",[a._v("2_000_000")]),a._v("。但实际的运行结果并非我们所想：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("final x from 1: 989840\nfinal x from 2: 1872479\n复制代码\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("我运行了10次，其中一个线程输出 "),t("code",[a._v("x")]),a._v(" 的值为 "),t("code",[a._v("2_000_000")]),a._v(" 只出现了2次。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("final x from 1: 1000000\nfinal x from 2: 2000000\n复制代码\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("出现这样的结果的原因也就是我们上面所说的，在多线程环境下，我们主内存的 "),t("code",[a._v("x")]),a._v(" 变量的数据被破坏了。 我们都知道完成一次 "),t("code",[a._v("i++")]),a._v(" 相当于执行了：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("int tmp = x + 1;\nx = tmp;\n复制代码\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("在多线程环境下就会出现在执行完 "),t("code",[a._v("int tmp = x + 1;")]),a._v(" 这行代码时就发生了"),t("code",[a._v("线程切换")]),a._v("，当线程再次切回来的时候，"),t("code",[a._v("x")]),a._v(" 就会被重复赋值，导致出现上面的运行结果，2个线程都无法输出 "),t("code",[a._v("2_000_000")]),a._v("。")]),a._v(" "),t("p",[a._v("下图描述了示例代码的执行时序：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/15/16bf62d8ff93ec61?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),a._v(" "),t("p",[a._v("那么 Java 是如何来解决上述问题来保证线程安全，保证共享内存的"),t("strong",[a._v("原子性")]),a._v("、"),t("strong",[a._v("可见性")]),a._v("、"),t("strong",[a._v("有序性")]),a._v("的呢？")]),a._v(" "),t("h1",{attrs:{id:"线程同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程同步"}},[a._v("#")]),a._v(" 线程同步")]),a._v(" "),t("p",[a._v("Java 提供了一系列的关键字和类来保证线程安全")]),a._v(" "),t("h2",{attrs:{id:"synchronized-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-关键字"}},[a._v("#")]),a._v(" Synchronized 关键字")]),a._v(" "),t("h3",{attrs:{id:"synchronized-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-作用"}},[a._v("#")]),a._v(" Synchronized 作用")]),a._v(" "),t("h4",{attrs:{id:"_1-保证方法或代码块操作的原子性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-保证方法或代码块操作的原子性"}},[a._v("#")]),a._v(" 1. 保证方法或代码块操作的原子性")]),a._v(" "),t("p",[a._v("Synchronized 保证⽅法内部或代码块内部资源（数据）的互斥访问。即同⼀时间、由同⼀个 "),t("a",{attrs:{href:"https://www.hollischuang.com/archives/2030",target:"_blank",rel:"noopener noreferrer"}},[a._v("Monitor（监视锁）"),t("OutboundLink")],1),a._v(" 监视的代码，最多只能有⼀个线程在访问。")]),a._v(" "),t("blockquote",[t("p",[a._v("关于 Monitor 和 Synchronized 实现原理了解可以看下这2篇文章："),t("a",{attrs:{href:"http://www.hollischuang.com/archives/1883",target:"_blank",rel:"noopener noreferrer"}},[a._v("Synchronized 的实现原理"),t("OutboundLink")],1),a._v("、 "),t("a",{attrs:{href:"https://www.hollischuang.com/archives/2030",target:"_blank",rel:"noopener noreferrer"}},[a._v("Moniter 的实现原理"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("话不多说来张动图描述一下 Monitor 工作机制：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/15/16bf62d8f00da505?imageslim",alt:"image"}})]),a._v(" "),t("p",[a._v("被 Synchronized 关键字描述的方法或代码块在多线程环境下同一时间只能由一个线程进行访问，在持有当前 Monitor 的线程执行完成之前，其他线程想要调用相关方法就必须进行排队，知道持有持有当前 Monitor 的线程执行结束，释放 Monitor ，下一个线程才可获取 Monitor 执行。")]),a._v(" "),t("p",[a._v("如果存在多个 Monitor 的情况时，多个 Monitor 之间是不互斥的。")]),a._v(" "),t("blockquote",[t("p",[a._v("多个 Monitor 的情况出现在自定义多个锁分别来描述不同的方法或代码块，Synchronized 在描述代码块时可以指定自定义 Monitor ，默认为 "),t("code",[a._v("this")]),a._v(" 即当前类。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/7/15/16bf62d8e8f32fab?imageslim",alt:"image"}})]),a._v(" "),t("h4",{attrs:{id:"_2-保证监视资源的可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-保证监视资源的可见性"}},[a._v("#")]),a._v(" 2.保证监视资源的可见性")]),a._v(" "),t("p",[a._v("保证多线程环境下对监视资源的数据同步。即任何线程在获取到 Monitor 后的第⼀时 间，会先将共享内存中的数据复制到⾃⼰的缓存中；任何线程在释放 Monitor 的第⼀ 时间，会先将缓存中的数据复制到共享内存中。")]),a._v(" "),t("h4",{attrs:{id:"_3-保证线程间操作的有序性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-保证线程间操作的有序性"}},[a._v("#")]),a._v(" 3.保证线程间操作的有序性")]),a._v(" "),t("p",[a._v("Synchronized 的原子性保证了由其描述的方法或代码操作具有有序性，同一时间只能由最多只能有一个线程访问，不会触发 JMM 指令重排机制。")]),a._v(" "),t("h2",{attrs:{id:"volatile-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字"}},[a._v("#")]),a._v(" Volatile 关键字")]),a._v(" "),t("h3",{attrs:{id:"volatile-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volatile-作用"}},[a._v("#")]),a._v(" Volatile 作用")]),a._v(" "),t("p",[a._v("保证被 Volatile 关键字描述变量的操作具有"),t("strong",[a._v("可见性")]),a._v("和"),t("strong",[a._v("有序性")]),a._v("（禁止指令重排）")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：\n1.Volatile 只对基本类型 (byte、char、short、int、long、float、double、boolean) 的赋值 操作和对象的引⽤赋值操作有效。\n2 对于 "),t("code",[a._v("i++")]),a._v(" 此类复合操作， Volatile 无法保证其有序性和原子性。\n3.相对 Synchronized 来说 Volatile 更加轻量一些。")])]),a._v(" "),t("h2",{attrs:{id:"_3-java-util-concurrent-atomic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-java-util-concurrent-atomic"}},[a._v("#")]),a._v(" 3. java.util.concurrent.atomic")]),a._v(" "),t("p",[t("code",[a._v("java.util.concurrent.atomic")]),a._v(" 包提供了一系列的 "),t("code",[a._v("AtomicBoolean")]),a._v("、"),t("code",[a._v("AtomicInteger")]),a._v("、"),t("code",[a._v("AtomicLong")]),a._v(" 等类。使用这些类来声明变量可以保证对其操作具有"),t("strong",[a._v("原子性")]),a._v("来保证线程安全。")]),a._v(" "),t("p",[a._v("实现原理上与 Synchronized 使用 Monitor（监视锁）保证资源在多线程环境下阻塞互斥访问不同，"),t("code",[a._v("java.util.concurrent.atomic")]),a._v(" 包下的各原子类基于 "),t("code",[a._v("CAS(CompareAndSwap)")]),a._v(" 操作原理实现。")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/ae25eb3cfb5d",target:"_blank",rel:"noopener noreferrer"}},[a._v("CAS"),t("OutboundLink")],1),a._v(" 又称无锁操作，一种乐观锁策略，原理就是多线程环境下各线程访问共享变量不会加锁阻塞排队，线程不会被挂起。通俗来讲就是一直循环对比，如果有访问冲突则重试，直到没有冲突为止。")])]),a._v(" "),t("h2",{attrs:{id:"_4-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-lock"}},[a._v("#")]),a._v(" 4. Lock")]),a._v(" "),t("p",[a._v("Lock 也是 "),t("code",[a._v("java.util.concurrent")]),a._v(" 包下的一个接口，定义了一系列的锁操作方法。Lock 接口主要有 ReentrantLock，ReentrantReadWriteLock.ReadLock，ReentrantReadWriteLock.WriteLock 实现类。与 Synchronized 不同是 Lock 提供了获取锁和释放锁等相关接口，使得使用上更加灵活，同时也可以做更加复杂的操作，如：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ReentrantReadWriteLock lock = new ReentrantReadWriteLock();\nLock readLock = lock.readLock();\nLock writeLock = lock.writeLock();\nprivate int x = 0;\nprivate void count() {\n    writeLock.lock();\n    try {\n        x++;\n    } finally {\n        writeLock.unlock();\n    }\n}\nprivate void print(int time) {\n    readLock.lock();\n    try {\n        for (int i = 0; i < time; i++) {\n            System.out.print(x + " ");\n        }\n        System.out.println();\n    } finally {\n        readLock.unlock();\n    }\n}\n复制代码\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br")])]),t("p",[a._v("关于 Lock 实现原理和更详细的使用推荐以下2篇文章：\n"),t("a",{attrs:{href:"https://juejin.im/post/5ab9a5b46fb9a028ce7b9b7e#heading-2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lock锁的使用"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://juejin.im/entry/5b4ddf6d6fb9a04f97650336",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lock锁源码分析"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ol",[t("li",[a._v("出现线程安全问题的原因：\n在多个线程并发环境下，多个线程共同访问同一共享内存资源时，其中一个线程对资源进行写操作的中途(写⼊入已经开始，但还没 结束)，其他线程对这个写了一半的资源进⾏了读操作，或者对这个写了一半的资源进⾏了写操作，导致此资源出现数据错误。")]),a._v(" "),t("li",[a._v("如何避免线程安全问题？")])]),a._v(" "),t("ul",[t("li",[a._v("保证共享资源在同一时间只能由一个线程进行操作(原子性，有序性)。")]),a._v(" "),t("li",[a._v("将线程操作的结果及时刷新，保证其他线程可以立即获取到修改后的最新数据（可见性）。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);