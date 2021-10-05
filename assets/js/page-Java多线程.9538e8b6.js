(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{773:function(v,a,_){"use strict";_.r(a);var t=_(1),l=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"java多线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java多线程"}},[v._v("#")]),v._v(" Java多线程")]),v._v(" "),_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),_("p",[v._v("Java 给多线程编程提供了内置的支持。 一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。")]),v._v(" "),_("p",[v._v("多线程是多任务的一种特别的形式，但多线程使用了更小的资源开销。")]),v._v(" "),_("p",[v._v("这里定义和线程相关的另一个术语 - 进程：一个进程包括由操作系统分配的内存空间，包含一个或多个线程。一个线程不能独立的存在，它必须是进程的一部分。一个进程一直运行，直到所有的非守护线程都结束运行后才能结束。多线程能满足程序员编写高效率的程序来达到充分利用 CPU 的目的。")]),v._v(" "),_("h2",{attrs:{id:"一个线程的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一个线程的生命周期"}},[v._v("#")]),v._v(" 一个线程的生命周期")]),v._v(" "),_("p",[v._v("线程是一个动态执行的过程，它也有一个从产生到死亡的过程。")]),v._v(" "),_("p",[v._v("下图显示了一个线程完整的生命周期。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建状态:")]),v._v(" "),_("p",[v._v("使用 "),_("strong",[v._v("new")]),v._v(" 关键字和 "),_("strong",[v._v("Thread")]),v._v(" 类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序 "),_("strong",[v._v("start()")]),v._v(" 这个线程。")])]),v._v(" "),_("li",[_("p",[v._v("就绪状态:")]),v._v(" "),_("p",[v._v("当线程对象调用了start()方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，要等待JVM里线程调度器的调度。")])]),v._v(" "),_("li",[_("p",[v._v("运行状态:")]),v._v(" "),_("p",[v._v("如果就绪状态的线程获取 CPU 资源，就可以执行 "),_("strong",[v._v("run()")]),v._v("，此时线程便处于运行状态。处于运行状态的线程最为复杂，它可以变为阻塞状态、就绪状态和死亡状态。")])]),v._v(" "),_("li",[_("p",[v._v("阻塞状态:")]),v._v(" "),_("p",[v._v("如果一个线程执行了sleep（睡眠）、suspend（挂起）等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到或获得设备资源后可以重新进入就绪状态。可以分为三种：")]),v._v(" "),_("ul",[_("li",[v._v("等待阻塞：运行状态中的线程执行 wait() 方法，使线程进入到等待阻塞状态。")]),v._v(" "),_("li",[v._v("同步阻塞：线程在获取 synchronized 同步锁失败(因为同步锁被其他线程占用)。")]),v._v(" "),_("li",[v._v("其他阻塞：通过调用线程的 sleep() 或 join() 发出了 I/O 请求时，线程就会进入到阻塞状态。当sleep() 状态超时，join() 等待线程终止或超时，或者 I/O 处理完毕，线程重新转入就绪状态。")])])]),v._v(" "),_("li",[_("p",[v._v("死亡状态:")]),v._v(" "),_("p",[v._v("一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。")])])]),v._v(" "),_("h2",{attrs:{id:"线程的优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程的优先级"}},[v._v("#")]),v._v(" 线程的优先级")]),v._v(" "),_("p",[v._v("每一个 Java 线程都有一个优先级，这样有助于操作系统确定线程的调度顺序。")]),v._v(" "),_("p",[v._v("Java 线程的优先级是一个整数，其取值范围是 1 （Thread.MIN_PRIORITY ） - 10 （Thread.MAX_PRIORITY ）。")]),v._v(" "),_("p",[v._v("默认情况下，每一个线程都会分配一个优先级 NORM_PRIORITY（5）。")]),v._v(" "),_("p",[v._v("具有较高优先级的线程对程序更重要，并且应该在低优先级的线程之前分配处理器资源。但是，线程优先级不能保证线程执行的顺序，而且非常依赖于平台。")]),v._v(" "),_("h2",{attrs:{id:"创建一个线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建一个线程"}},[v._v("#")]),v._v(" 创建一个线程")]),v._v(" "),_("p",[v._v("Java 提供了三种创建线程的方法：")]),v._v(" "),_("ul",[_("li",[v._v("通过实现 Runnable 接口；")]),v._v(" "),_("li",[v._v("通过继承 Thread 类本身；")]),v._v(" "),_("li",[v._v("通过 Callable 和 Future 创建线程。")])]),v._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[v._v("#")]),v._v(" 问题")]),v._v(" "),_("p",[_("strong",[v._v("Runnable与Callable有什么区别？")])]),v._v(" "),_("ul",[_("li",[v._v("Runnable是在JDK1.0的时候提出的多线程实现接口，而Callable是在JDK1.5之后提出的。")]),v._v(" "),_("li",[v._v("java.lang.Runnable接口之中只提供有一个run()方法，并且没有返回值。")]),v._v(" "),_("li",[v._v("java.util.concurrent.Callable接口提供有call方法，可以有返回值。")])])])}),[],!1,null,null,null);a.default=l.exports}}]);