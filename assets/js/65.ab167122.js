(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{490:function(v,_,t){"use strict";t.r(_);var a=t(4),i=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("垃圾收集分为两个阶段")]),v._v(" "),t("p",[v._v("标记阶段")]),v._v(" "),t("ul",[t("li",[v._v("引用计数算法")]),v._v(" "),t("li",[v._v("可达性分析算法")])]),v._v(" "),t("p",[v._v("清理阶段")]),v._v(" "),t("ul",[t("li",[v._v("标记-清理算法")]),v._v(" "),t("li",[v._v("复制算法")]),v._v(" "),t("li",[v._v("标记-整理算法")]),v._v(" "),t("li",[v._v("分代收集算法")]),v._v(" "),t("li",[v._v("增量收集算法")]),v._v(" "),t("li",[v._v("分区算法")])]),v._v(" "),t("h2",{attrs:{id:"标记阶段：判断对象是否存活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记阶段：判断对象是否存活"}},[v._v("#")]),v._v(" 标记阶段：判断对象是否存活")]),v._v(" "),t("h3",{attrs:{id:"引用计数算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[v._v("#")]),v._v(" 引用计数算法")]),v._v(" "),t("p",[v._v("每个对象保存一个整型的引用计数器，假设有一个对象A，如果别的对象引用了A，就让A对象的引用计数器加1，如果引用失效了，计数器减1，当计数器为0的时候，该对象就是垃圾。")]),v._v(" "),t("p",[v._v("优点：实现简单，垃圾对象便于辨识，判定效率高，回收没有延迟性。")]),v._v(" "),t("p",[v._v("缺点：无法处理循环引用的情况，如果一个循环链表，链表中每个结点的引用都至少是1，无法进行回收，从而造成内存泄露的问题。")]),v._v(" "),t("h3",{attrs:{id:"可达性分析算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[v._v("#")]),v._v(" 可达性分析算法")]),v._v(" "),t("p",[v._v("该算法可以有效地解决在引用计数算法中循环引用的问题，防止内存泄漏的发生。Java的垃圾收集器中使用的就是这种算法。")]),v._v(" "),t("p",[v._v("GCRoots根集合是一组活跃的对象引用。")]),v._v(" "),t("p",[v._v("GCRoots可以是哪些？")]),v._v(" "),t("ul",[t("li",[v._v("虚拟机栈中引用的对象，如各个线程被调用方法中使用到的参数、局部变量等")]),v._v(" "),t("li",[v._v("本地方法栈内引用的对象")]),v._v(" "),t("li",[v._v("方法区中类静态属性引用的对象，如Java类中引用类型的静态变量")]),v._v(" "),t("li",[v._v("方法区中常量引用的对象")]),v._v(" "),t("li",[v._v("所有被同步锁synchronized持有的对象")]),v._v(" "),t("li",[v._v("Java虚拟机内部的引用")]),v._v(" "),t("li",[v._v("反映Java虚拟机内部情况的JMXBean、JVMTI中注册的回调、本地代码缓存等")])]),v._v(" "),t("p",[v._v("算法原理")]),v._v(" "),t("ul",[t("li",[v._v("该算法是以根对象集合（GCRoots）为开始搜索，能够被根对象集合直接或者间接连接的对象是存活对象")]),v._v(" "),t("li",[v._v("如果目标对象没有直接或者间接连接到GCRoots，则该对象是不可达的，该对象已死亡，可以标记为垃圾")]),v._v(" "),t("li",[v._v("使用可达性分析算法后，内存中的存活对象都会被根对象集合直接或间接连接着，搜索所走过的路径称为引用链（Reference Chain）")])]),v._v(" "),t("p",[v._v("总结一句话就是除了堆空间外的一些结构，比如虚拟机栈、本地方法栈、方法区、字符串常量池等对堆空间进行引用的，都可以作为GCRoots进行可达性分析。")]),v._v(" "),t("p",[v._v("除了这些固定的GCRoots集合外，根据用户所选用的垃圾收集器以及当前回收内存区域的不同，还可以有其他对象“临时地”加入，共同构成完整的GCRoots集合。比如分代收集和局部回收（PartialGC）。")]),v._v(" "),t("p",[v._v("如果只针对Java堆中的某一块区域进行垃圾回收（比如只针对新生代），必须考虑的内存区域是虚拟机自己的实现细节，这个区域的对象完全有可能被堆中其他区域（如old区）的对象所引用，这时候就需要一并将关联的区域对象也加入GCRoots集合中考虑，才能保证可达性分析的准确性。")]),v._v(" "),t("p",[v._v("注意")]),v._v(" "),t("p",[v._v("如果要使用可达性分析算法来判断内存是否可回收，那么分析工作必须在一个能保障一致性的快照中进行。这点不满足的话分析结果的准确性就无法保证。这点也是导致GC进行时必须“stop The World”的一个重要原因，因为如果不停止用户线程，那么先前判断不是垃圾的对象在下一刻就有可能变成垃圾。")]),v._v(" "),t("p",[v._v("即使是号称（几乎）不会发生停顿的CMS收集器中，枚举根节点时也是必须要停顿的。")]),v._v(" "),t("p",[v._v("对象的finalization机制")]),v._v(" "),t("p",[v._v("Java语言提供了对象终止（finalization）机制来允许开发人员提供对象被销毁之前的自定义处理逻辑。当垃圾回收器发现没有引用指向一个对象，会在垃圾回收此对象之前，总会先调用这个对象的finalize()方法，该方法在Object中。")]),v._v(" "),t("p",[v._v("finalize() 方法允许在子类中被重写，用于在对象被回收时进行资源释放。通常在这个方法中进行一些资源释放和清理的工作，比如关闭文件、套接字和数据库连接等，finalize()方法最多只会被执行一次。")]),v._v(" "),t("p",[v._v("有了这个机制，要判断一个对象A是否可回收，至少要经历两次标记的过程：")]),v._v(" "),t("ul",[t("li",[v._v("如果对象A没有被GCRoots直接或者间接引用，那么进行第一次标记")]),v._v(" "),t("li",[v._v("筛选，判断A是否要执行finalize()方法\n"),t("ul",[t("li",[v._v("如果A没有重写或者已经被调用过了，那么将不会执行finalize()方法")]),v._v(" "),t("li",[v._v("如果重写了且没有调用过，就调用，稍后GC会进行第二次标记，如果对象A在finalize()方法中与GCRoots引用链上的任何一个对象建立了联系，那么在第二次标记的时候，A将被移出“即将回收”集合")])])])]),v._v(" "),t("h2",{attrs:{id:"清除阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除阶段"}},[v._v("#")]),v._v(" 清除阶段")]),v._v(" "),t("h3",{attrs:{id:"标记-清除算法（mark-sweep）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法（mark-sweep）"}},[v._v("#")]),v._v(" 标记-清除算法（Mark-Sweep）")]),v._v(" "),t("p",[v._v("执行过程")]),v._v(" "),t("p",[v._v("当堆中的有效内存空间被耗尽时，就会停止整个程序（Stop the world），然后进行两项工作：")]),v._v(" "),t("ul",[t("li",[v._v("标记：垃圾收集器从引用的根结点开始遍历，标记所有被引用的对象，一般是在对象头中记录为可达对象")]),v._v(" "),t("li",[v._v("清除：垃圾收集器对堆内存从头到尾进行线性遍历，如果发现某个对象在其头中没有标记为可达对象，就将其回收，回收的方式就是将它所在的地址放入"),t("strong",[v._v("空闲列表")]),v._v("中，表示当前区域是空闲的。")])]),v._v(" "),t("blockquote",[t("p",[v._v("两种内存分配方式\n内存规整：采用指针碰撞方式进行内存分配\n内存不规整：采用空闲列表分配\n内存规整与否取决与选择的垃圾收集器是否采用了整理压缩的的算法。")])]),v._v(" "),t("p",[v._v("缺点")]),v._v(" "),t("ul",[t("li",[v._v("在进行GC的时候需要STW")]),v._v(" "),t("li",[v._v("采用这种算法清理出来的内存是不连续的，存在内存碎片，而且还需要维护一个空闲列表")])]),v._v(" "),t("h3",{attrs:{id:"复制算法-（copying）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制算法-（copying）"}},[v._v("#")]),v._v(" 复制算法 （Copying）")]),v._v(" "),t("p",[v._v("将内存区域一分为二，每次只使用其中一块，在垃圾回收时将正在使用的内存中的存活对象复制到未被使用的内存块中，之后清除正在使用的内存块中的所有对象，交换两个内存的角色，完成垃圾回收")]),v._v(" "),t("p",[v._v("优点")]),v._v(" "),t("ul",[t("li",[v._v("没有标记过程，实现简单，运行高效")]),v._v(" "),t("li",[v._v("复制过去以后保证空间的连续性，不会产生内存碎片的问题")])]),v._v(" "),t("p",[v._v("缺点")]),v._v(" "),t("ul",[t("li",[v._v("需要两倍的内存空间")]),v._v(" "),t("li",[v._v("由于对象的地址改变了，相应的指向对象的引用也需要改变")]),v._v(" "),t("li",[v._v("如果每次系统中的存活对象很多，那么每次垃圾回收需要进行大量复制，效率低")]),v._v(" "),t("li",[v._v("对于G1这种分拆成为大量region的GC，复制而不是移动，意味着GC需要维护region之间对象引用关系，不管是内存占用或者时间开销也不小")])]),v._v(" "),t("h3",{attrs:{id:"标记-整理算法（mark-compact）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法（mark-compact）"}},[v._v("#")]),v._v(" 标记-整理算法（Mark-Compact）")]),v._v(" "),t("p",[v._v("执行过程")]),v._v(" "),t("ul",[t("li",[v._v("从GCRoots遍历并标记所有被引用的对象")]),v._v(" "),t("li",[v._v("将所有存活的对象压缩到内存的一端，按顺序排放。")])]),v._v(" "),t("p",[v._v("优点")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("消除了标记-清理算法中产生内存碎片的问题，在给新对象分配内存时，使用指针碰撞的方式分配")])]),v._v(" "),t("li",[t("p",[v._v("消除了复制算法中内存减半的代价")])])]),v._v(" "),t("p",[v._v("缺点")]),v._v(" "),t("ul",[t("li",[v._v("效率低于标记清理和复制算法")]),v._v(" "),t("li",[v._v("移动对象后，如果该对象被其他对象引用，还需调整引用的地址")]),v._v(" "),t("li",[v._v("移动过程中需要STW")])]),v._v(" "),t("p",[v._v("小结")]),v._v(" "),t("p",[v._v("实际上Hotspot虚拟机中堆内存划分为新生代和老年代，在新生代中又分为Eden区和From和To区，比例是8:1:1，在新生代中采用的就是复制算法，这正是考虑到新创建的对象有朝生夕死的特点，结合复制算法的优点，每次回收时Eden区存活的对象并不多，因此采用复制算法效率高。而在老年代中，老年代对象具有不易回收的特点，因此在老年代不宜采用复制算法，采用标记清理和标记整理或者两者混合的方式。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th"),v._v(" "),t("th",[v._v("标记-清除")]),v._v(" "),t("th",[v._v("复制")]),v._v(" "),t("th",[v._v("标记-整理")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[v._v("速率")])]),v._v(" "),t("td",[v._v("中等")]),v._v(" "),t("td",[v._v("最快")]),v._v(" "),t("td",[v._v("最慢")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("空间开销")])]),v._v(" "),t("td",[v._v("少（但会堆积碎片）")]),v._v(" "),t("td",[v._v("通常需要活对象的2倍空间（不堆积碎片）")]),v._v(" "),t("td",[v._v("少（不堆积碎片）")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("移动对象")])]),v._v(" "),t("td",[v._v("否")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("是")])])])]),v._v(" "),t("h3",{attrs:{id:"分代收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代收集算法"}},[v._v("#")]),v._v(" 分代收集算法")]),v._v(" "),t("p",[v._v("分代收集算法，是基于这样一个事实：不同的对象的生命周期是不一样的。因此，不同生命周期的对象可以采取不同的收集方式，以便提高回收效率。一般是把Java堆分为新生代和老年代，这样就可以根据各个年代的特点使用不同的回收算法，以提高垃圾回收的效率。")]),v._v(" "),t("p",[v._v("在HotSpot中，基于分代的概念，GC所使用的内存回收算法必须结合年轻代和老年代各自的特点。")]),v._v(" "),t("p",[v._v("年轻代（Young Gen）")]),v._v(" "),t("p",[v._v("年轻代特点：区域相对老年代较小，对象生命周期短、存活率低，回收频繁。")]),v._v(" "),t("p",[v._v("这种情况复制算法的回收整理，速度是最快的。复制算法的效率只和当前存活对象大小有关，因此很适用于年轻代的回收。而复制算法内存利用率不高的问题，通过hotspot中的两个survivor的设计得到缓解。")]),v._v(" "),t("p",[v._v("老年代（Tenured Gen）")]),v._v(" "),t("p",[v._v("老年代特点：区域较大，对象生命周期长、存活率高，但回收没有年轻代频繁。")]),v._v(" "),t("p",[v._v("这种情况存在大量存活率高的对象，复制算法明显变得不合适。一般是由标记-清除或者是标记-清除与标记-整理的混合实现。")]),v._v(" "),t("ul",[t("li",[v._v("Mark阶段的开销与存活对象的数量成正比。")]),v._v(" "),t("li",[v._v("Sweep阶段的开销与所管理区域的大小成正相关。")]),v._v(" "),t("li",[v._v("compact阶段的开销与存活对象的数据成正比。")])]),v._v(" "),t("p",[v._v("以HotSpot中的CMS回收器为例，CMS是基于Mark-Sweep实现的，对于对象的回收效率很高。而对于碎片问题，CMS采用基于Mark-Compact算法的Serial old回收器作为补偿措施：当内存回收不佳（碎片导致的Concurrent Mode Failure时），将采用serial old执行Full GC以达到对老年代内存的整理。")]),v._v(" "),t("h3",{attrs:{id:"增量收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增量收集算法"}},[v._v("#")]),v._v(" 增量收集算法")]),v._v(" "),t("p",[v._v("上述的算法中都存在一个问题，就是在垃圾回收的过程中，应用程序将处于一种STW的状态，在这个状态下，应用程序所有线程都会挂起，暂停一切正常的工作，等待垃圾回收的完成。如果垃圾回收的时间过程，应用程序被挂起很久，将严重影响用户体验。")]),v._v(" "),t("p",[v._v("可以让垃圾收集线程和应用程序线程交替执行，每次，垃圾收集线程只收集一小片区域的内存空间，接着切换到应用程序线程，如此反复，直到垃圾收集完成。")]),v._v(" "),t("p",[v._v("增量收集算法的基础仍然是传统的标记-清除和复制算法，增量收集算法通过对线程间冲突的妥善处理，允许垃圾收集线程以分阶段的方式完成标记、清理或者复制工作。")]),v._v(" "),t("p",[v._v("缺点")]),v._v(" "),t("p",[v._v("使用这种方式能够间断地执行应用程序代码，所以能够减少系统的停顿时间，但是，因为线程切换和上下文切换的消耗，会使垃圾回收的总体成本上升，造成系统的吞吐量下降。")]),v._v(" "),t("h4",{attrs:{id:"分区算法（g1）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区算法（g1）"}},[v._v("#")]),v._v(" 分区算法（G1）")]),v._v(" "),t("p",[v._v("一般来说，在相同条件下，堆空间越大，一次GC所需要的时间就越长，有关GC产生的停顿也越长。为了更好地控制GC产生的停顿时间，将一块大的内存区域分割成多个小块Region，根据目标的停顿时间，每次合理地回收若干个小区间，而不是整个堆空间，从而减少一次GC所产生的停顿。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%88%86%E5%8C%BA%E7%AE%97%E6%B3%95.png",alt:"分区算法"}})])])}),[],!1,null,null,null);_.default=i.exports}}]);