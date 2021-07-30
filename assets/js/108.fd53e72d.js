(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{590:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"cpu缓存一致性协议mesi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu缓存一致性协议mesi"}},[s._v("#")]),s._v(" CPU缓存一致性协议MESI")]),s._v(" "),a("p",[s._v("CPU为何要有高速缓存？")]),s._v(" "),a("p",[s._v("为了解决内存和硬盘的存取数据的速度与CPU不匹配的问题，在内存和CPU之间加了高速缓存")]),s._v(" "),a("p",[s._v("为什么缓存会生效？")]),s._v(" "),a("p",[s._v("局部性原理")]),s._v(" "),a("blockquote",[a("p",[s._v("时间局部性：如果执行了程序中的某条指令，那么不久后这条指令很有可能再次执行；如果某个数据被访问过，不久之后该数据很有可能再次被访问。（因为程序中存在大量循环）")]),s._v(" "),a("p",[s._v("空间局部性：一旦程序访问了某个存储单元，那不久之后，其附近的存储单元也很有可能被访问，典型的情况是程序的顺序执行。（很多数据在内存中都是连续存放的）")])]),s._v(" "),a("p",[s._v("通过这个局部性原理，我们在操作系统中引入高速缓存能够大大提高程序的运行效率。")]),s._v(" "),a("p",[s._v("带有高速缓存的单核CPU执行计算流程")]),s._v(" "),a("ul",[a("li",[s._v("一开始程序和数据被加载到主内存")]),s._v(" "),a("li",[s._v("指令和数据被加载到CPU的高速缓存")]),s._v(" "),a("li",[s._v("CPU执行指令，把结果写到高速缓存")]),s._v(" "),a("li",[s._v("在适当的时机将高速缓存写回主内存")])]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"D:\\_temp\\网络图片\\1195582-20180503162310300-647146146.png",alt:"1195582-20180503162310300-647146146"}}),s._v(" "),a("p",[s._v("多核CPU多级缓存一致性协议MESI")]),s._v(" "),a("p",[s._v("每个核下有自己的高速缓存，如何让缓存一致，提出了MESI缓存一致性协议")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"D:\\_temp\\网络图片\\20180620152100969.png",alt:"20180620152100969"}}),s._v(" "),a("p",[s._v("在MESI协议中，每个Cache line行有4个状态，CPU对缓存有4个动作，这些动作会使缓存行在4个状态之间来回切换。")]),s._v(" "),a("blockquote",[a("p",[s._v("缓存行（Cache line）：缓存存储数据的单元。")])]),s._v(" "),a("p",[s._v("MESI4个状态")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("状态")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("M(Modified)")]),s._v(" "),a("td",[s._v("这行数据有效，数据被修改了，和内存中的数据不一致，数据只存在于本Cache中。")])]),s._v(" "),a("tr",[a("td",[s._v("E(Exclusive)")]),s._v(" "),a("td",[s._v("这行数据有效，数据和内存中的数据一致，数据只存在于本Cache中。")])]),s._v(" "),a("tr",[a("td",[s._v("S(Shared)")]),s._v(" "),a("td",[s._v("这行数据有效，数据和内存中的数据一致，数据存在于很多Cache中。")])]),s._v(" "),a("tr",[a("td",[s._v("I(Invalid)")]),s._v(" "),a("td",[s._v("这行数据无效。")])])])]),s._v(" "),a("p",[s._v("状态转移图")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"D:\\_temp\\网络图片\\0_1310996148S8xr.gif",alt:"0_1310996148S8xr"}}),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("action")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Local Read")]),s._v(" "),a("td",[s._v("本内核对本Cache的读")])]),s._v(" "),a("tr",[a("td",[s._v("Local Write")]),s._v(" "),a("td",[s._v("本内核对本Cache的写，会让该Cache Line状态转移到M")])]),s._v(" "),a("tr",[a("td",[s._v("Remote Read")]),s._v(" "),a("td",[s._v("其他内核对其Cache的读，会让该Cache Line状态转移到S")])]),s._v(" "),a("tr",[a("td",[s._v("Remote Write")]),s._v(" "),a("td",[s._v("其他内核对其Cache的写，会让其他核的Cache Line失效，该Cache Line状态转移到I")])])])]),s._v(" "),a("p",[s._v("缓存一致性需要通过消息传递机制的来通知其他核心对其Cache Line状态的变更，本核心也需要等待其他核心的响应来对Cache Line设置状态。消息传递需要时间，会造成性能问题。")]),s._v(" "),a("p",[s._v("为了解决这个问题，在硬件上增加了存储缓存Store Buffers，处理器把它想要写入主存的值写到缓存，然后继续处理其他事情，引入Store Buffers就需要讲到内存一致性模型了。")]),s._v(" "),a("p",[s._v("cache一致性关注的是多个CPU看到一个地址的数据是否一致。而内存一致性关注的是多个CPU看到多个地址数据读写的次序。一个关注的是一个地址，一个关注的是多个地址的顺序。")]),s._v(" "),a("h2",{attrs:{id:"tso内存一致性模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tso内存一致性模型"}},[s._v("#")]),s._v(" TSO内存一致性模型")]),s._v(" "),a("p",[s._v("内存模型主要是帮助程序员理解CPU与内存的交互逻辑，使得程序员不必知道硬件的具体实现细节而编写出正确且高性能的代码。")]),s._v(" "),a("p",[s._v("TSO模型有三点")]),s._v(" "),a("ul",[a("li",[s._v("写操作可以被缓存到StoreBuffer，其他CPU感知不到数据的变化")]),s._v(" "),a("li",[s._v("读操作时可以读取StoreBuffer，就是说本核心可以看到自己的更新")]),s._v(" "),a("li",[s._v("写操作写入主存遵循FIFO顺序")])]),s._v(" "),a("p",[s._v("MESI解决了缓存一致性的问题，使CPU每个核心看到的数据是相同的，引入Store Buffers之后，会使得本核心对共享数据的修改，其他核心的对共享数据暂时不可见，这就导致下面代码最终会出现"),a("code",[s._v("r1=r2=0")]),s._v("的情况，在程序员眼中就好像出现两个语句的顺序交换了，即我们常说的指令重排现象")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("static int x = 0, y = 0;\nstatic int r1, r2;\n\n// 两个核心并行执行两个函数\nstatic void int thread_cpu0(void)\n{\n        x = 1;    /* 1) */\n        r1 = y;   /* 2) */\n}\n\n\nstatic void int thread_cpu1(void)\n{\n        y = 1;    /* 3) */\n        r2 = x;   /* 4) */\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("施以内存壁障来禁止指令重排")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("void ordering_thread_fn_cpu0(void)\n{\n        x = 1;\n        smp_mb();\n        r1 = y;\n}      \n\n\nstatic void ordering_thread_fn_cpu1(void)\n{\n        y = 1;\n        smp_mb();\n        r2 = x;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("Linux内核中提供了"),a("code",[s._v("smp_mb()")]),s._v("宏对不同架构的指令进行封装，"),a("code",[s._v("smp_mb()")]),s._v("的作用是阻止它后面的读写操作不会乱序到宏前面的指令前执行。他就像是个屏障一样，不容逾越。")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("store---------------------+\nload----------+           |\n              |           |\n              v           v\n-----------------smp_mb()--------------\n              ^           ^\n              |           |\nload----------+           |\nstore---------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("非常棒的文章：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/115114220",target:"_blank",rel:"noopener noreferrer"}},[s._v("多核Cache一致性"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/lqlqlq/p/13693876.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("x86-TSO : 适用于x86体系架构并发编程的内存模型"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);