(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{573:function(a,e,s){"use strict";s.r(e);var r=s(4),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"评估gc的主要性能指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评估gc的主要性能指标"}},[a._v("#")]),a._v(" 评估GC的主要性能指标")]),a._v(" "),s("ul",[s("li",[a._v("吞吐量：运行用户代码的时间占总运行时间的比例（总运行时间=程序运行时间+内存回收时间）")]),a._v(" "),s("li",[a._v("暂停时间：执行垃圾收集时，程序的工作线程被暂停的时间")])]),a._v(" "),s("h2",{attrs:{id:"吞吐量vs暂停时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#吞吐量vs暂停时间"}},[a._v("#")]),a._v(" 吞吐量vs暂停时间")]),a._v(" "),s("p",[a._v("高吞吐量较好因为这会让应用程序的最终用户感觉只有应用程序线程在做“生产性”工作。直觉上，吞吐量越高程序运行越快。")]),a._v(" "),s("p",[a._v("低暂停时间（低延迟）较好因为从最终用户的角度来看不管是GC还是其他原因导致一个应用被挂起始终是不好的。这取决于应用程序的类型，有时候甚至短暂的200毫秒暂停都可能打断终端用户体验。因此，具有低的较大暂停时间是非常重要的，特别是对于一个交互式应用程序。")]),a._v(" "),s("p",[a._v("不幸的是“高吞吐量”和“低暂停时间”是一对相互竞争的目标（矛盾）。")]),a._v(" "),s("p",[a._v("因为如果选择以吞吐量优先，那么必然需要降低内存回收的执行频率，但是这样会导致GC需要更长的暂停时间来执行内存回收。")]),a._v(" "),s("p",[a._v("相反的，如果选择以低延迟优先为原则，那么为了降低每次执行内存回收时的暂停时间，也只能频繁地执行内存回收，但这又引起了年轻代内存的缩减和导致程序吞吐量的下降。")]),a._v(" "),s("p",[a._v("在设计（或使用）GC算法时，我们必须确定我们的目标：一个GC算法只可能针对两个目标之一（即只专注于较大吞吐量或最小暂停时间），或尝试找到一个二者的折衷。")]),a._v(" "),s("p",[a._v("目前的标准：在最大吞吐量优先的情况下，降低停顿时间。")]),a._v(" "),s("h2",{attrs:{id:"_7种经典的垃圾回收器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7种经典的垃圾回收器"}},[a._v("#")]),a._v(" 7种经典的垃圾回收器")]),a._v(" "),s("ul",[s("li",[a._v("串行回收器：Serial、Serial old")]),a._v(" "),s("li",[a._v("并行回收器：ParNew、Parallel Scavenge、Parallel old")]),a._v(" "),s("li",[a._v("并发回收器：CMS、G1")])]),a._v(" "),s("p",[a._v("串行和并行回收器会STW，并发回收器可以在执行垃圾回收的时候执行用户线程。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%BB%8F%E5%85%B8%E7%9A%84%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8.png",alt:"经典的垃圾回收器"}})]),a._v(" "),s("p",[a._v("未来：ZGC")]),a._v(" "),s("h2",{attrs:{id:"_7种垃圾收集器的组合关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7种垃圾收集器的组合关系"}},[a._v("#")]),a._v(" 7种垃圾收集器的组合关系")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%BB%8F%E5%85%B8%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E7%9A%84%E7%BB%84%E5%90%88.png",alt:"经典垃圾收集器的组合"}})]),a._v(" "),s("p",[a._v("按照分代分类")]),a._v(" "),s("ul",[s("li",[a._v("新生代收集器：Serial、ParNew、Parallel Scavenge")]),a._v(" "),s("li",[a._v("老年代收集器：Serial old、Parallel old、CMS")]),a._v(" "),s("li",[a._v("整堆收集器：G1")])]),a._v(" "),s("p",[a._v("各垃圾回收器组合使用说明")]),a._v(" "),s("ul",[s("li",[a._v('其中Serial o1d作为CMS出现"Concurrent Mode Failure"失败的后备预案，即当垃圾产生的速度大于回收的速度时，CMS无法更快的垃圾回收，这时候启用Serial Old停掉用户线程全力做垃圾清理操作。')]),a._v(" "),s("li",[a._v("红色虚线：由于维护和兼容性测试的成本，在JDK8时将Serial+CMS、ParNew+Serial old这两个组合声明为废弃（JEP173），并在JDK9中完全取消了这些组合的支持（JEP214），即：移除。")]),a._v(" "),s("li",[a._v("绿色虚线：JDK14中：弃用Paralle1 Scavenge和Serialold GC组合（JEP366）")]),a._v(" "),s("li",[a._v("青色虚线：JDK14中：删除CMS垃圾回收器（JEP363）")])]),a._v(" "),s("p",[a._v("查看使用的垃圾回收器")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("XX"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrintcommandLineFlags")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查看命令行相关参数（包含使用的垃圾收集器）")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 命令行")]),a._v("\njps   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查看运行的java线程")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// 查看jvm是否使用了某个参数："+"表示使用了，"-"表示不使用')]),a._v("\njinfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("flag 相关垃圾回收器参数 进程ID\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"serial回收器-串行回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial回收器-串行回收"}},[a._v("#")]),a._v(" Serial回收器：串行回收")]),a._v(" "),s("p",[a._v("年轻代中：Serial收集器采用复制算法、串行回收和STW机制的方式执行内存回收。\n老年代中：Serial Old采用标记压缩算法、串行回收和STW机制")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Serial&Serial%20Old.png",alt:"Serial&Serial Old"}})]),a._v(" "),s("p",[a._v("这个收集器是一个单线程的收集器，单线程不仅仅说明它只会使用一个CPU或一条收集线程去完成垃圾收集工作，而且在它回收垃圾时，必须要暂停其他所有工作线程，直到它收集结束(STW)。")]),a._v(" "),s("p",[a._v("优点：简单高效，没有线程切换的开销")]),a._v(" "),s("p",[a._v("配置使用Serial回收器，年轻代使用Serial，老年代使用Serial Old")]),a._v(" "),s("blockquote",[s("p",[a._v("-XX:+UseSerialGC")])]),a._v(" "),s("h2",{attrs:{id:"parnew回收器-并行回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parnew回收器-并行回收"}},[a._v("#")]),a._v(" ParNew回收器：并行回收")]),a._v(" "),s("p",[a._v("ParNew收集器是Serial收集器的多线程版本，ParNew收集器在年轻代使用的是复制算法、并行回收、STW机制。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/ParNew&Serial%20Old.png",alt:"ParNew&Serial Old"}})]),a._v(" "),s("ul",[s("li",[a._v("对于新生代，回收次数频繁，使用并行方式高效。")]),a._v(" "),s("li",[a._v("对于老年代，可搭配Serial Old使用，回收次数少，使用串行方式节省资源。（CPU并行需要切换线程，串行可以省去切换线程的资源）")])]),a._v(" "),s("blockquote",[s("p",[a._v("-XX:+UseParNewGC\n-XX:ParallelGCThreads限制线程数量，默认开启和CPU数据相同的线程数。")])]),a._v(" "),s("h2",{attrs:{id:"parallel回收器-吞吐量优先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parallel回收器-吞吐量优先"}},[a._v("#")]),a._v(" Parallel回收器：吞吐量优先")]),a._v(" "),s("p",[a._v('HotSpot的年轻代中除了拥有ParNew收集器是基于并行回收的以外，Parallel Scavenge收集器同样也采用了复制算法、并行回收和"Stop the World"机制。')]),a._v(" "),s("p",[a._v("那么Parallel Scavenge收集器的出现是否多此一举？")]),a._v(" "),s("ul",[s("li",[a._v("和ParNew收集器不同，Parallel Scavenge收集器的目标则是达到一个可控制的吞吐量（Throughput），它也被称为吞吐量优先的垃圾收集器。")]),a._v(" "),s("li",[a._v("自适应调节策略也是Parallel Scavenge与ParNew一个重要区别，在JVM垃圾回收器运行的过程中，会根据当前运行的情况进行性能的监控，动态调整堆内存的分配情况，以适合达到最优的吞吐量或者低延时。")])]),a._v(" "),s("p",[a._v("高吞吐量则可以高效率地利用CPU时间，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的任务。因此，常见在服务器环境中使用。例如，那些执行批量处理、科学计算的应用程序。")]),a._v(" "),s("p",[a._v("Parallel收集器在JDK1.6时提供了用于执行老年代垃圾收集的Parallel old收集器，用来代替老年代的serial old收集器。")]),a._v(" "),s("p",[a._v("Parallel old收集器采用了标记-压缩算法，但同样也是基于并行回收和STW机制。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Parallel&Old.png",alt:"Parallel&Old"}})]),a._v(" "),s("p",[a._v("在程序吞吐量优先的场景下，Parallel Scavenge和Parallel Old收集器组合使用，在Server模式下的内存回收性能不错，JDK8中默认的收集器。")]),a._v(" "),s("p",[a._v("Parallel Scavenge回收器的参数设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 新生代中使用Parallel Scavenge\n-XX:+UseParallelGC \n\n// 老年代中使用Parallel Old，两个参数相互激活\n-XX:+UseParallelOldGC\n\n// 设置年轻代并行收集器的线程数\n-XX:+ParallelGCThreads\n\n// 设置垃圾收集器最大停顿时间（即STW的时间），单位毫秒\n-XX:MaxGCPauseMillis\n\n// 垃圾收集时间占总时间的比例\n-XX:GCTimeRatio\n\n// 设置Parallel scavenge收集器具有自适应调节策略\n// 在这种模式下，年轻代的大小、Eden和Survivor的比例、晋升老年代的对象年龄等参数会被自动调整，\n// 已达到在堆大小、吞吐量和停顿时间之间的平衡点。\n-XX:+UseAdaptivesizepplicy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h2",{attrs:{id:"cms回收器-低延时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cms回收器-低延时"}},[a._v("#")]),a._v(" CMS回收器：低延时")]),a._v(" "),s("p",[a._v("CMS（Concurrent-Mark-Sweep）收集器使用并发回收，标记-清除算法，并且也会STW，只是暂停的时间非常短，适合交互性较强的应用上。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/CMS.png",alt:"CMS"}})]),a._v(" "),s("p",[a._v("CMS垃圾收集的过程分为4个阶段")]),a._v(" "),s("ul",[s("li",[a._v("初始标记（Initial Mark）阶段：这个阶段的任务只是标记出GCRoots能直接关联的对象，因此这个耗时非常短，在标记过程中会出现STW。")]),a._v(" "),s("li",[a._v("并发标记（Concurrent Mark）阶段：从GCRoots直接关联的对象开始遍历出所有与GCRoots间接关联的对象，耗时较长但是不需要停止用户线程。")]),a._v(" "),s("li",[a._v("重新标记（Remark）阶段：在上个阶段中，程序的工作线程和垃圾收集线程同时运行或者交叉运行，因此为了修正并发标记期间，因用户线程继续运作而导致标记产生变动的那一部分对象的标记记录，这个阶段会STW")]),a._v(" "),s("li",[a._v("并发清除（Concurrent Sweep）阶段：该阶段清理删除掉标记阶段判断的已经死亡的对象，释放内存空间。因为使用的是标记-清除算法，不需要移动存活对象，因此可以和用户线程并发执行")])]),a._v(" "),s("p",[a._v("由于最耗时的并发标记和并发清除阶段都不需要停止用户线程，所以整体来说是低延时的。")]),a._v(" "),s("p",[a._v('另外在垃圾收集阶段用户线程没有中断，在CMS回收过程中，还应确保应用程序有足够的内存可用，因此当堆内存使用率达到某一阈值时，便要开始回收，要是在回收过程中预留的内存无法满足程序需求，就会出现"Concurrent Mode Failure"，这时候JVM将启动后备预案：临时启动Serial Old收集器来重新进行老年代的垃圾收集，而Serial Old是采用的是单线程、标记整理的方式回收垃圾，因此STW的时间较长。')]),a._v(" "),s("p",[a._v("CMS为什么不使用标记-整理算法？")]),a._v(" "),s("p",[a._v("在并发清理阶段，用户线程是和垃圾收集线程并发执行的，这个时候不能将用户线程正在使用的对象移动，否者就会出错。")]),a._v(" "),s("p",[a._v("优点")]),a._v(" "),s("ul",[s("li",[a._v("并发收集")]),a._v(" "),s("li",[a._v("低延时")])]),a._v(" "),s("p",[a._v("缺点")]),a._v(" "),s("ul",[s("li",[a._v("会产生内存碎片，在无法分配大对象的情况下，不得不提前触发FullGC")]),a._v(" "),s("li",[a._v("对 CPU 资源敏感，垃圾收集器会占用一部分线程导致应用程序变慢，导致总体吞吐量降低")]),a._v(" "),s("li",[a._v("CMS收集器无法处理浮动垃圾。在垃圾回收过程中，CMS无法及时处理新产生的垃圾，在并发标记阶段由于程序和垃圾收集线程是同时或者交叉运行的，那么并发标记阶段如果产生新的垃圾对象，在重新标记阶段CMS无法对这些对象打上标记，导致不能够及时回收，而要等到下一次GC才能够回收。")])]),a._v(" "),s("p",[a._v("参数设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 老年代使用CMS，新生代自动会配置为ParNew垃圾收集器\n-XX:+UserConcMarkSweepGC\n\n// 设置堆内存使用率的阈值，一旦达到该阈值，便开始进行回收。JDK5及以前默认是68%，JDK6及以上默认是92%\n-XX:CMSInitiatingoccupanyFraction \n\n// 用于指定在执行完Full GC后对内存空间进行压缩整理，以此避免内存碎片的产生。\n-XX：+UseCMSCompactAtFullCollection\n\n//  设置在执行多少次Ful1GC后对内存空间进行压缩整理。\n-XX:CMSFullGCsBeforecompaction\n\n// CMS默认启动的线程数是（ParallelGCThreads+3）/ 4，ParallelGCThreads是年轻代并行收集器的线程数。\n-XX:ParallelcMSThreads 设置CMS的线程数量。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v("小结")]),a._v(" "),s("ul",[s("li",[a._v("如果你想要最小化地使用内存和并行开销，请选Serial GC；")]),a._v(" "),s("li",[a._v("如果你想要最大化应用程序的吞吐量，请选Parallel GC；")]),a._v(" "),s("li",[a._v("如果你想要最小化GC的中断或停顿时间，请选CMS GC。")])]),a._v(" "),s("h2",{attrs:{id:"g1回收器-区域分代化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g1回收器-区域分代化"}},[a._v("#")]),a._v(" G1回收器：区域分代化")]),a._v(" "),s("p",[a._v("官方给G1设定的目标是在延迟可控的情况下获得尽可能的吞吐量。")]),a._v(" "),s("h3",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点")]),a._v(" "),s("p",[a._v("并行与并发")]),a._v(" "),s("ul",[s("li",[a._v("并行性：G1在回收期间，可以有多个GC线程同时工作，有效利用多核计算能力，此时用户线程STW")]),a._v(" "),s("li",[a._v("并发性：G1拥有与应用程序交替执行的能力，部分工作可以和应用程序同时执行，因此，不会在整个回收阶段发生完全阻塞应用程序的情况")])]),a._v(" "),s("p",[a._v("分代收集")]),a._v(" "),s("ul",[s("li",[a._v("将空间分为若干个Region，这些区域中包含了逻辑上的年轻代和老年代，且不要求整个Eden区、年轻代或者老年代是连续的，也不固定大小和数量")]),a._v(" "),s("li",[a._v("G1能够同时兼顾新生代和老年代")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/G1%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.png",alt:"G1内存结构"}})]),a._v(" "),s("p",[a._v("空间整合")]),a._v(" "),s("ul",[s("li",[a._v("G1将内存划分为一个个的Region，内存回收是以Region为单位的，Region之间采用的是"),s("strong",[a._v("复制算法")]),a._v("，但整体上可以看做是"),s("strong",[a._v("标记-整理算法")]),a._v("。")])]),a._v(" "),s("p",[a._v("可预测的停顿时间模型")]),a._v(" "),s("ul",[s("li",[a._v("能够让使用者明确指定在一个长度为M毫秒的时间片段内，消耗在垃圾收集上的时间不超过N毫秒")]),a._v(" "),s("li",[a._v("由于分区的原因，G1可以只选取部分区域进行内存回收，缩小了回收范围，对于全局停顿情况的发生也能得到较好的控制")]),a._v(" "),s("li",[a._v("G1跟踪各个Region里面的垃圾堆积的价值大小（回收所获得的空间大小以及回收所需时间的经验值），在后台维护一个优先列表，每次根据允许的收集时间，优先回收价值最大的Region，这能保证G1收集器在有限的时间内可以获得尽可能高的收集效率")]),a._v(" "),s("li",[a._v("相较于CMS，G1未必能够做到CMS在最好情况下的延时停顿，但在最差情况下好很多")])]),a._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("p",[a._v("在用户程序运行的过程中，G1无论是为了垃圾收集产生的内存占用还是程序运行是的额外执行负载都要比CMS高。")]),a._v(" "),s("p",[a._v("从经验上来看，在小内存应用上CMS的表现大概率会优于G1，而G1在大内存应用则能充分发挥其优势，平衡点在6-8G之间。")]),a._v(" "),s("h3",{attrs:{id:"参数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数设置"}},[a._v("#")]),a._v(" 参数设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-XX:+UseG1GC：手动指定使用G1垃圾收集器执行内存回收任务，JDK9及以后默认是G1\n\n-XX:G1HeapRegionSize：设置每个Region的大小。值是2的幂，范围是1MB到32MB之间，目标是根据最小的Java堆大小划分出约2048个区域。默认是堆内存的1/2000。\n\n-XX:MaxGCPauseMillis：设置期望达到的最大GC停顿时间指标（JVM会尽力实现，但不保证达到）。默认值是200ms，若设置得过小，用户线程不断运行产生的对象而占用的内存比垃圾回收器回收的要快，最终会导致堆空间满，这时候会触发Full GC，导致停顿时间过长\n\n-XX:+ParallelGcThread ：设置STW是GC线程数的值。最多设置为8\n\n-XX:ConcGCThreads： 设置并发标记的线程数。将n设置为并行垃圾回收线程数（ParallelGcThreads）的1/4左右。\n\n-XX:InitiatingHeapoccupancyPercent ：设置触发并发Gc周期的Java堆占用率阈值。超过此值，就触发GC。默认值是45\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h3",{attrs:{id:"g1收集器的常见操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器的常见操作步骤"}},[a._v("#")]),a._v(" G1收集器的常见操作步骤")]),a._v(" "),s("p",[a._v("G1的设计原则就是简化JVM性能调优，开发人员只需要简单的三步即可完成调优：")]),a._v(" "),s("ul",[s("li",[a._v("第一步：开启G1垃圾收集器")]),a._v(" "),s("li",[a._v("第二步：设置堆的最大内存")]),a._v(" "),s("li",[a._v("第三步：设置最大的停顿时间")])]),a._v(" "),s("p",[a._v("G1中提供了三种垃圾回收模式：YoungGC、Mixed GC和FullGC，在不同的条件下被触发。")]),a._v(" "),s("h3",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[a._v("#")]),a._v(" 适用场景")]),a._v(" "),s("p",[a._v("以低于0.5秒，G1通过每次只清理一部分而不是全部的Region的增量式清理来保证每次GC停顿时间不会过长。")]),a._v(" "),s("p",[a._v("G1回收器垃圾回收过程面向服务端应用，针对具有大内存、多处理器的机器，而在普通大小的堆中G1表现没有那么好。")]),a._v(" "),s("p",[a._v("最主要的应用是需要低GC延迟，并具有大堆的应用程序提供解决方案。如在堆大小约6GB或更大时，可预测的暂停时间可以低于0.5秒，通过每次只清理一部分而不是全部的Region的增量式清理来保证每次GC停顿时间不会过长。")]),a._v(" "),s("h3",{attrs:{id:"分区region"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分区region"}},[a._v("#")]),a._v(" 分区Region")]),a._v(" "),s("p",[a._v("使用G1收集器时，它将整个Java堆划分约2048个大小相同的独立Region块，每个Region块大小根据堆空间的实际大小而定，整体被控制在1MB到32MB之间。")]),a._v(" "),s("p",[a._v("一个Region有可能属于Eden、Survivor或者Old内存区域，每个Region采用指针碰撞来分配内存空间的。")]),a._v(" "),s("p",[a._v("G1还增加了一种新的内存区域，叫做Humongous内存区域，主要用于存储大对象，设置H区的原因主要是为了避免分配到老年代，如果它是一个短期存在的大对象就会对垃圾收集器造成负面影响，有时候为了能找到连续的H区，不得不启动FullGC。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/G1%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.png",alt:"G1内存分配"}})]),a._v(" "),s("h3",{attrs:{id:"g1回收器垃圾回收过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g1回收器垃圾回收过程"}},[a._v("#")]),a._v(" G1回收器垃圾回收过程")]),a._v(" "),s("p",[a._v("G1的垃圾回收过程主要包括以下三个步骤：")]),a._v(" "),s("ul",[s("li",[a._v("年轻代GC（Young GC）")]),a._v(" "),s("li",[a._v("老年代并发标记过程（Concurrent Marking）")]),a._v(" "),s("li",[a._v("混合回收（Mixed GC）")])]),a._v(" "),s("p",[a._v("（如果需要，单线程、独占式、高强度的FullGC还是继续存在的，它针对GC的评估失败提供了失败保护机制，即强力回收）")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/G1%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E8%BF%87%E7%A8%8B.png",alt:"G1垃圾回收过程"}})]),a._v(" "),s("p",[a._v("当年轻代的Eden区用尽时将开始年轻代回收过程，G1的年轻代收集阶段是一个"),s("strong",[a._v("并行的独占式收集器")]),a._v("（STW），在年轻代回收期，G1暂停所有应用程序线程，启动多线程执行年轻代回收，从年轻代区间移动存活对象到Survivor区间或者老年区间。")]),a._v(" "),s("p",[a._v("当堆内存使用达到一定值时（默认45%），开始老年代并发标记过程。")]),a._v(" "),s("p",[a._v("标记完成马上开始混合回收过程，对于一个混合回收期，G1从老年代移动存活对象到空闲区间，这些空闲区间也就成了老年代的一部分，G1的老年代回收器不需要回收所有老年代，一次只需要扫描/回收一小部分老年代的Region就可以，同时老年代Region是和年轻代一起被回收的。")]),a._v(" "),s("h3",{attrs:{id:"remembered-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remembered-set"}},[a._v("#")]),a._v(" Remembered Set")]),a._v(" "),s("p",[a._v("问题")]),a._v(" "),s("p",[a._v("一个Region中的对象被不同区域的Region中对象引用了，判断对象是否存活时，是否需要扫描整个Java堆才能保证准确？")]),a._v(" "),s("p",[a._v("在其他分代收集器中，也存在这样的问题（而G1更加突出），回收新生代的同时也不得不扫描老年代，如果新生代中的某一对象被老年代中的某一个对象引用了，那么这个对象显然是不能够被回收的")]),a._v(" "),s("p",[a._v("回收老年代时还需不需要担心被年轻代的对象所引用呢？在G1中，回收老年代的同时也进行年轻代的回收，因此不用担心。")]),a._v(" "),s("p",[a._v("解决方法")]),a._v(" "),s("p",[a._v("无论是G1还是其他分代收集器，JVM都是使用Remebered Set来避免全盘扫描的。")]),a._v(" "),s("p",[a._v("每个Region都有一个对于的Remembered Set，每次Reference类型数据写操作时，都会产生一个Write Barrier暂时中断操作，然后检查将要写入的引用指向的对象是否和该Reference类型数据在不同的Region（其他收集器则检查老年代对象是否引用了新生代中的对象），如果不同，通过cardTable把相关引用信息记录到引用指向对象所在Region对应的Remembered Set中，当进行垃圾收集时，在GC根结点的枚举范围加入Remembered Set，这样就不用全局扫描，提升效率。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Remembered%20Set.png",alt:"Remembered Set"}})]),a._v(" "),s("h3",{attrs:{id:"minor-gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minor-gc"}},[a._v("#")]),a._v(" Minor GC")]),a._v(" "),s("p",[a._v("当新生代占据了整个堆大小的60%，会触发Minor GC，使用复制算法，STW，把Eden中活的对象放进Survivor区。")]),a._v(" "),s("h3",{attrs:{id:"mixed-gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixed-gc"}},[a._v("#")]),a._v(" Mixed GC")]),a._v(" "),s("p",[a._v("当老年代占据堆内存的45%（默认）的Region时，会触发新生代+老年代一起回收的混合回收阶段，当空闲的Region大于整个堆的5%（默认）时，停止回收。")]),a._v(" "),s("h4",{attrs:{id:"初始标记阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始标记阶段"}},[a._v("#")]),a._v(" 初始标记阶段")]),a._v(" "),s("p",[a._v("该阶段仅仅只是标记GC Roots直接可达的对象。先停止系统程序的运行，然后对各个线程栈内存中的局部变量代表的GC Roots，以及方法区中类的静态变量代表的GC Roots，进行扫描，标记出来他们直接引用的那些对象")]),a._v(" "),s("h4",{attrs:{id:"并发标记阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发标记阶段"}},[a._v("#")]),a._v(" 并发标记阶段")]),a._v(" "),s("p",[a._v("这个阶段会运行系统程序的运行，同时进行GCRoots追踪，从GC Roots开始追踪所有的存活对象，并对这个过程对象的变化做记录，比如哪些对象失去了引用，哪些对象是新建的。")]),a._v(" "),s("h4",{attrs:{id:"最终标记阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终标记阶段"}},[a._v("#")]),a._v(" 最终标记阶段")]),a._v(" "),s("p",[a._v("这个阶段会进入STW，会根据并发标记阶段记录的那些对象，最终标记一下有哪些存活对象，有哪些是垃圾对象。")]),a._v(" "),s("h4",{attrs:{id:"混合回收阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合回收阶段"}},[a._v("#")]),a._v(" 混合回收阶段")]),a._v(" "),s("p",[a._v("基于复制算法，这个阶段会计算老年代中每个Region中的存活对象，存活对象占比，还有执行垃圾回收的预期性能和效率，接着STW，全力进行垃圾回收，此时会选择部分Region进行回收，因为必须让垃圾回收的停顿时间控制在我们指定的范围内。")]),a._v(" "),s("p",[a._v("这个阶段G1允许多次执行混合回收，也就是说先停止系统工作，执行回收，然后恢复系统运行，再停止，再回收...，默认多次回收次数是8次，可以通过"),s("code",[a._v("-XX:G1MixedGCCCountTarget")]),a._v("来设置。")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E6%80%BB%E7%BB%93.png",alt:"垃圾回收器总结"}})])])}),[],!1,null,null,null);e.default=t.exports}}]);