(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{489:function(v,_,t){"use strict";t.r(_);var a=t(4),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"什么是操作系统？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是操作系统？"}},[v._v("#")]),v._v(" 什么是操作系统？")]),v._v(" "),t("p",[v._v("操作系统是管理计算机硬件和软件资源的程序，本质上是运行在计算机上的"),t("strong",[v._v("软件程序")]),v._v("，能够为用户提供一个系统交互的操作界面，操作系统分为内核和外壳，内核就是能够操作硬件的程序，外壳则是围绕着内核的应用程序。")]),v._v(" "),t("blockquote",[t("p",[v._v("内核负责管理系统的进程、内存、设备驱动程序、文件和网络系统等等，是连接应用程序的硬件的桥梁。")])]),v._v(" "),t("h2",{attrs:{id:"系统调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统调用"}},[v._v("#")]),v._v(" 系统调用")]),v._v(" "),t("p",[v._v("先了解用户态和系统态")]),v._v(" "),t("p",[v._v("根据进程访问资源的特点，可以把进程分为两个级别：")]),v._v(" "),t("ul",[t("li",[v._v("用户态：用户态运行的进程可以直接读取用户程序的数据。")]),v._v(" "),t("li",[v._v("系统态 ：可以简单的理解系统态运行的进程或程序几乎可以访问计算机的任何资源，不受限制。")])]),v._v(" "),t("p",[v._v("我们运行的程序基本都是运行在用户态的，如果我们要调用操作系统提供的系统态级别的子功能咋办？那就需要系统调用。")]),v._v(" "),t("p",[v._v("在我们的用户程序中，我们的程序是处于用户态的，不能够直接访问系统态级别的资源（如文件管理、进程控制、内存管理等），但是可以通过系统调用向操作系统提出服务请求，并由操作系统代为完成。")]),v._v(" "),t("p",[v._v("这些系统调用按功能大致可分为如下几类：")]),v._v(" "),t("ul",[t("li",[v._v("设备管理。完成设备的请求或释放，以及设备启动等功能。")]),v._v(" "),t("li",[v._v("文件管理。完成文件的读、写、创建及删除等功能。")]),v._v(" "),t("li",[v._v("进程控制。完成进程的创建、撤销、阻塞及唤醒等功能。")]),v._v(" "),t("li",[v._v("进程通信。完成进程之间的消息传递或信号传递等功能。")]),v._v(" "),t("li",[v._v("内存管理。完成内存的分配、回收以及获取作业占用内存区大小及地址等功能。")])]),v._v(" "),t("h2",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[v._v("#")]),v._v(" 进程")]),v._v(" "),t("h3",{attrs:{id:"进程实体-主存中的进程形态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程实体-主存中的进程形态"}},[v._v("#")]),v._v(" 进程实体/主存中的进程形态")]),v._v(" "),t("h4",{attrs:{id:"pcb（进程控制块）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pcb（进程控制块）"}},[v._v("#")]),v._v(" PCB（进程控制块）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("用于描述和控制进程运行的通用数据结构")])]),v._v(" "),t("li",[t("p",[v._v("记录进程当前状态和控制进程运行的全部信息")])]),v._v(" "),t("li",[t("p",[v._v("PCB使得进程是能够独立运行的基本单位")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E8%BF%9B%E7%A8%8B%E6%8E%A7%E5%88%B6%E5%9D%97.png",alt:"进程控制块"}})]),v._v(" "),t("ul",[t("li",[v._v("标识符：唯一标识一个进程，即进程ID")]),v._v(" "),t("li",[v._v("状态：标记进程的进程状态，如运行态、阻塞态")]),v._v(" "),t("li",[v._v("优先级：表示进程得到cpu的优先级")]),v._v(" "),t("li",[v._v("程序计数器：指向进程即将被执行的下一条指令的地址")]),v._v(" "),t("li",[v._v("上下文数据：进程执行时处理器存储的数据")]),v._v(" "),t("li",[v._v("内存指针：程序代码、进程数据相关指针")]),v._v(" "),t("li",[v._v("IO状态信息：被进程IO操作所占用的文件列表")]),v._v(" "),t("li",[v._v("记账信息：使用处理器时间、时钟数总和等")])]),v._v(" "),t("h3",{attrs:{id:"多进程并发产生的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程并发产生的问题"}},[v._v("#")]),v._v(" 多进程并发产生的问题")]),v._v(" "),t("ul",[t("li",[v._v("数据不一致/生产者消费者问题")]),v._v(" "),t("li",[v._v("死锁/哲学家进餐问题")])]),v._v(" "),t("h4",{attrs:{id:"数据不一致（生产者消费者问题）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据不一致（生产者消费者问题）"}},[v._v("#")]),v._v(" 数据不一致（生产者消费者问题）")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%94%9F%E4%BA%A7%E8%80%85%E6%B6%88%E8%B4%B9%E8%80%85.png",alt:"生产者消费者"}})]),v._v(" "),t("p",[v._v("多个生产者生产产品，放在内存缓冲区中，消费者可以从缓冲区中去数据进行消费，生产者生产产品的时候先将内存中的count读到寄存器中，然后count+1，如果此时消费者进行消费，消费者也会将count读入寄存器，并对count-1，之后写回到内存中，然而生产者此时也将它的寄存器的count写入到内存中，这个时候count为11，按理来说生产者生产了一件产品，消费者消费了一件产品，count应该保持不变。")]),v._v(" "),t("p",[v._v("为什么进程不能够直接修改内存中的count,而需要先读入到寄存器中?")]),v._v(" "),t("p",[v._v("因为cpu速度很快，操作内存的速度很慢，这两者速度不匹配，所以为了匹配上cpu的速度，就有了寄存器，寄存器更快但更小，使用了寄存器就能更上cpu的速度，但是也会产生多程序并发的问题。")]),v._v(" "),t("h4",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[v._v("#")]),v._v(" 解决方法")]),v._v(" "),t("ul",[t("li",[v._v("进程同步")]),v._v(" "),t("li",[v._v("临界资源，临界资源是共享资源，但是无法同时被多个进程访问的资源。")])]),v._v(" "),t("h4",{attrs:{id:"进程同步方法与原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程同步方法与原则"}},[v._v("#")]),v._v(" 进程同步方法与原则")]),v._v(" "),t("p",[v._v("方法")]),v._v(" "),t("ul",[t("li",[v._v("消息队列")]),v._v(" "),t("li",[v._v("共享内存")]),v._v(" "),t("li",[v._v("信号量")])]),v._v(" "),t("p",[v._v("原则")]),v._v(" "),t("ul",[t("li",[v._v("空闲让进：资源无占用，允许进程使用")]),v._v(" "),t("li",[v._v("忙则等待：资源被占用，请求进程等待")]),v._v(" "),t("li",[v._v("有限等待：保证有限的等待时间内能够使用资源")]),v._v(" "),t("li",[v._v("让权等待：等待时，进程需要让出cpu，即进程从运行态变为阻塞态")])]),v._v(" "),t("h4",{attrs:{id:"死锁（哲学家进餐问题）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁（哲学家进餐问题）"}},[v._v("#")]),v._v(" 死锁（哲学家进餐问题）")]),v._v(" "),t("p",[v._v("5个哲学家、5个筷子、只有拿到两双筷子才能吃饭并且放下筷子，5个哲学家就是进程，筷子就是资源，如果5个哲学家同时拿起了左边的筷子，那么5个哲学家就会一直等待右边的筷子，但是等不到，直到饿死，反映到进程就是进程处于死锁，一直占有资源而不释放。")]),v._v(" "),t("p",[v._v("如何解决死锁问题？")]),v._v(" "),t("ul",[t("li",[v._v("死锁预防")]),v._v(" "),t("li",[v._v("死锁避免")])]),v._v(" "),t("p",[v._v("产生死锁的4个必要条件")]),v._v(" "),t("ul",[t("li",[v._v("互斥条件：某资源只能由一个进程使用，其他进程需要使用只能等待")]),v._v(" "),t("li",[v._v("请求保持条件：进程至少保持一个资源，有提出新的资源请求，请求无法被满足，而该进程又不释放自己保持的资源")]),v._v(" "),t("li",[v._v("不可剥夺条件：进程保持的资源只能由自己释放，其他进程不能够剥夺")]),v._v(" "),t("li",[v._v("环路等待条件：发送死锁时，必然存在进程资源的环形链")])]),v._v(" "),t("p",[v._v("死锁预防")]),v._v(" "),t("p",[v._v("预防死锁的方法：破坏产生死锁的4个必要条件")]),v._v(" "),t("ul",[t("li",[v._v("破坏互斥条件")]),v._v(" "),t("li",[v._v("破坏请求保持条件：系统规定进程运行之前，一次性申请所有需要的资源，进程在运行期间不会提出资源请求。")]),v._v(" "),t("li",[v._v("破坏不可剥夺条件：当一个进程请求新的资源得不到满足时，必须释放占有的资源。")]),v._v(" "),t("li",[v._v("破坏环路等待条件：对可用资源线性排序，申请必须按照需要递增申请，线性申请不会形成环路。")])]),v._v(" "),t("p",[v._v("死锁避免：银行家算法")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%953.png",alt:"银行家算法3"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%952.png",alt:"银行家算法"}})]),v._v(" "),t("p",[v._v("A、B、C、D是资源，P1、P2、P3、P4是进程，有一个已分配资源表，记录每个进程已经被分配的资源数量，还有一个所需资源表，有进程总共需要资源数量，还有一个可分配资源表，记录系统还有的资源数量，用所需资源表减去已分配资源表，得到一个还需分配资源表，遍历这个表，如果某个进程所需的资源能够被满足，就分配资源给他，进程运行结束之后就将所占有的资源归还，如果最后所有的进程都能够正常终止，说明没有产生死锁，如果最后没有一个进程能够被满足，就说明产生了死锁。")]),v._v(" "),t("h3",{attrs:{id:"进程调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[v._v("#")]),v._v(" 进程调度")]),v._v(" "),t("p",[v._v("进程调度是指计算机通过决策决定哪个就绪进程可以获得cpu的使用权，进程切换要进行上下文切换，主要涉及两方面")]),v._v(" "),t("ul",[t("li",[v._v("保留旧进程的运行信息")]),v._v(" "),t("li",[v._v("选择新进程，准备运行环境并分配cpu")])]),v._v(" "),t("h4",{attrs:{id:"调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调度算法"}},[v._v("#")]),v._v(" 调度算法")]),v._v(" "),t("ul",[t("li",[v._v("先来先服务")]),v._v(" "),t("li",[v._v("短进程优先，优先选择就绪队列中估计运行时间最短的进程")]),v._v(" "),t("li",[v._v("高优先权优先，进程附带优先权，调度程序优先选择权重高的进程")]),v._v(" "),t("li",[v._v("时间片轮转，按照先来先服务的原则排列就绪进程，每次从队列头部取出待执行进程，分配一个时间片。")])]),v._v(" "),t("h3",{attrs:{id:"进程五状态模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程五状态模型"}},[v._v("#")]),v._v(" 进程五状态模型")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("创建状态(new)")]),v._v(" ：创建进程时拥有PCB但其他资源尚未就绪的状态，等其他资源装备好就会将进入就绪状态，也就是将进程插入到就绪队列中。")]),v._v(" "),t("li",[t("strong",[v._v("就绪状态(ready)")]),v._v(" ：进程已处于准备运行状态，即进程获得了除了处理器之外的一切所需资源，一旦得到处理器资源(处理器分配的时间片)即可运行。")]),v._v(" "),t("li",[t("strong",[v._v("运行状态(running)")]),v._v(" ：进程正在处理器上上运行(单核 CPU 下任意时刻只有一个进程处于运行状态)。")]),v._v(" "),t("li",[t("strong",[v._v("阻塞状态(waiting)")]),v._v(" ：又称为等待状态，进程正在等待某一事件而暂停运行如等待某资源为可用或等待 IO 操作完成。即使处理器空闲，该进程也不能运行。")]),v._v(" "),t("li",[t("strong",[v._v("结束状态(terminated)")]),v._v(" ：进程正在从系统中消失。可能是进程正常结束或其他原因中断退出运行。")])]),v._v(" "),t("blockquote",[t("p",[v._v("订正：下图中 running 状态被 interrupt 向 ready 状态转换的箭头方向反了。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/d38202593012b457debbcd74994c6292.png",alt:"process-state"}})]),v._v(" "),t("h3",{attrs:{id:"进程间通信ipc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信ipc"}},[v._v("#")]),v._v(" 进程间通信IPC")]),v._v(" "),t("p",[v._v("每个进程各自有不同的用户地址空间，任何一个进程的全局变量在另一个进程中都看不到，所以进程之间要交换数据必须通过内核，在内核中开辟一块缓冲区，进程1把数据从用户空间拷到内核缓冲区，进程2再从内核缓冲区把数据读走，内核提供的这种机制称为"),t("strong",[v._v("进程间通信（IPC，InterProcess Communication）")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/1281379-76c95f147203c797.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/222/format/webp",alt:"进程通信模型"}})]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("管道/匿名管道(Pipes)")]),v._v(" ：用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。")]),v._v(" "),t("li",[t("strong",[v._v("有名管道(Names Pipes)")]),v._v(" : 匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循"),t("strong",[v._v("先进先出(first in first out)")]),v._v("。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。")]),v._v(" "),t("li",[t("strong",[v._v("信号(Signal)")]),v._v(" ：是由某个进程产生的，并能够设置信号的传递对象（一般是进程的pid），然后交给操作系统，操作系统就能将信号传给对应的进程，比如用终端起了一个进程，可以用ctrl+c产生一个信号或者kill 该进程的pid，中断进程的执行。")]),v._v(" "),t("li",[t("strong",[v._v("消息队列(Message Queuing)")]),v._v(" ：消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显示地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。"),t("strong",[v._v("消息队列克服了信号承载信息量少，管道只能承载无格式字 节流以及缓冲区大小受限等缺。")])]),v._v(" "),t("li",[t("strong",[v._v("信号量(Semaphores)")]),v._v(" ：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。")]),v._v(" "),t("li",[t("strong",[v._v("共享内存(Shared memory)")]),v._v(" ：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。")]),v._v(" "),t("li",[t("strong",[v._v("套接字(Sockets)")]),v._v(" : 是一种通信机制，不仅可以实现本地单机进程的通信，还能够实现不同主机间的进程通信。Socket是应用层和传输层之间的桥梁。")])]),v._v(" "),t("h2",{attrs:{id:"线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[v._v("#")]),v._v(" 线程")]),v._v(" "),t("p",[v._v("线程运行状态/生命周期")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://camo.githubusercontent.com/bd21f0c6bf04fe410fa5397897cc47b9278ae5cb/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612545372542412542462545372541382538422545372539412538342545372538412542362545362538302538312e706e67",alt:"Java 线程的状态 "}})]),v._v(" "),t("p",[v._v("状态切换")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/java%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81%E5%8F%98%E8%BF%81.png",alt:"java线程状态变迁"}})]),v._v(" "),t("p",[v._v("线程创建之后它将处于 "),t("strong",[v._v("NEW（新建）")]),v._v(" 状态，调用 "),t("code",[v._v("start()")]),v._v(" 方法后开始运行，线程这时候处于 "),t("strong",[v._v("READY（可运行）")]),v._v(" 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 "),t("strong",[v._v("RUNNING（运行）")]),v._v(" 状态。")]),v._v(" "),t("p",[v._v("当线程执行 "),t("code",[v._v("wait()")]),v._v("方法之后，线程进入 "),t("strong",[v._v("WAITING（等待）")]),v._v(" 状态。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态，而 "),t("strong",[v._v("TIME_WAITING(超时等待)")]),v._v(" 状态相当于在等待状态的基础上增加了超时限制，比如通过 "),t("code",[v._v("sleep（long millis）")]),v._v("方法或 "),t("code",[v._v("wait（long millis）")]),v._v("方法可以将 Java 线程置于 TIMED WAITING 状态。当超时时间到达后 Java 线程将会返回到 RUNNABLE 状态。当线程调用同步方法时，在没有获取到锁的情况下，线程将会进入到 "),t("strong",[v._v("BLOCKED（阻塞）")]),v._v(" 状态。线程在执行 Runnable 的"),t("code",[v._v("run()")]),v._v("方法之后将会进入到 "),t("strong",[v._v("TERMINATED（终止）")]),v._v(" 状态。")]),v._v(" "),t("p",[v._v("线程死锁")]),v._v(" "),t("p",[v._v("线程死锁描述的是这样一种情况：多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。")]),v._v(" "),t("p",[v._v("如下图所示，线程 A 持有资源 2，线程 B 持有资源 1，他们同时都想申请对方的资源，所以这两个线程就会互相等待而进入死锁状态。")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://camo.githubusercontent.com/3903a4dc24008be52f72bad23498808b5a743c35/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d342f323031392d34254536254144254242254539253934253831312e706e67",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://camo.githubusercontent.com/3903a4dc24008be52f72bad23498808b5a743c35/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d342f323031392d34254536254144254242254539253934253831312e706e67",alt:"线程死锁示意图 "}}),t("OutboundLink")],1)]),v._v(" "),t("p",[v._v("线程同步\n多个线程并发执行时也会产生生产者和消费者、哲学家进餐问题。进程内的多线程也需要同步\n方法")]),v._v(" "),t("ul",[t("li",[v._v("互斥量")]),v._v(" "),t("li",[v._v("读写锁")]),v._v(" "),t("li",[v._v("自旋锁")]),v._v(" "),t("li",[v._v("条件变量")])]),v._v(" "),t("h2",{attrs:{id:"进程线程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程线程的区别"}},[v._v("#")]),v._v(" 进程线程的区别")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("根本区别：进程是资源分配的基本单位，线程是任务调度和执行的基本单位。")])]),v._v(" "),t("li",[t("p",[v._v("系统开销方面：前面说了进程是资源分配的基本单位，操作系统创建或结束进程时，系统都要为其分配或者回收资源，如内存空间、I/O设备等，所付出的开销大于创建或结束线程时的开销。类似地，在进行进程切换时，涉及当前执行进程上下文的保存以及新调度进程上下文的设置，而线程切换时只需保存和设置少量寄存器内容，开销很小。")])]),v._v(" "),t("li",[t("p",[v._v("调度方面：线程是任务调度和执行的基本单位，同一进程中，线程的切换不会引起进程的切换，不同进程的线程切换会引起进程的切换。")])])]),v._v(" "),t("p",[v._v("参考链接")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/c1015f5ffa74",target:"_blank",rel:"noopener noreferrer"}},[v._v("《进程间通信 IPC (InterProcess Communication)》"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[v._v("#")]),v._v(" 内存管理")]),v._v(" "),t("h3",{attrs:{id:"为什么要有逻辑地址？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有逻辑地址？"}},[v._v("#")]),v._v(" 为什么要有逻辑地址？")]),v._v(" "),t("p",[v._v("程序为什么不能直接操作物理地址，而是需要借助逻辑地址？因为程序是写死的，而进程是动态的，程序运行的时候无法知道可用的物理地址，所以必须做出逻辑地址与物理地址的映射。")]),v._v(" "),t("h3",{attrs:{id:"逻辑地址如何与物理地址映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑地址如何与物理地址映射"}},[v._v("#")]),v._v(" 逻辑地址如何与物理地址映射")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%861.png",alt:"内存管理1"}})]),v._v(" "),t("p",[v._v("将程序1直接映射到0-200的空间，程序2映射到200-300空间，这种方法看似简单高效，却存在两个重大缺点")]),v._v(" "),t("ul",[t("li",[v._v("无法预先估计程序运行时所占用的内存大小，如果事先预估最大的内存使用也会造成问题，就是在程序运行期间绝大多数时间其分配的内存存在一部分空闲空间没有被使用，这个空闲空间被称为内碎片。")]),v._v(" "),t("li",[v._v("如果程序1结束了，0-200的内存回收了，如果以后的程序占用内存都大于200，那么0-200这个空间会被长时间闲置，无法被分配出去，这个空间就称为外碎片。")])]),v._v(" "),t("h3",{attrs:{id:"页式管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页式管理"}},[v._v("#")]),v._v(" 页式管理")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%863.png",alt:"内存管理3"}})]),v._v(" "),t("p",[v._v("首先将程序逻辑内存和物理内存分为多个页")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%862.png",alt:"内存管理2"}})]),v._v(" "),t("p",[v._v("使用页表来表示程序逻辑内存到物理内存的映射，页表有两个重要的信息，一个是程序逻辑内存的页号，第二个是物理内存的帧(页)号")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%864.png",alt:"内存管理4"}})]),v._v(" "),t("p",[v._v("每个进程都维护有自己的页表，页表也存储在内存中。")]),v._v(" "),t("p",[v._v("补充")]),v._v(" "),t("ul",[t("li",[v._v("内存的一个地址里面“住”的是一个字节（Byte）的数据，一个字节等于8个bit位。")]),v._v(" "),t("li",[v._v("32位OS物理地址有2^32个，因而只能使用4GB的内存，因为32位机器一次所能操作的位数为32位，所以它能够管理的地址空间为0-2^32-1.")]),v._v(" "),t("li",[v._v("任何一个32位的程序可操作的逻辑地址是2^32个即4GB。")]),v._v(" "),t("li",[v._v("2、3点可以知道上面势必造成多个程序使用内存总和大于物理内存，此时会借助磁盘，将并不着急使用的内存先放入磁盘，页表对应指向的是磁盘。")])]),v._v(" "),t("p",[v._v("例子")]),v._v(" "),t("p",[v._v("机器：32位系统，256MB内存，页大小为4KB=12bit")]),v._v(" "),t("p",[v._v("程序：32为程序")]),v._v(" "),t("p",[v._v("​\t\t\t\t总位数\t\t页号\t 页内偏移")]),v._v(" "),t("p",[v._v("逻辑地址 32bit = 20bit + 12bit")]),v._v(" "),t("p",[v._v("物理地址 28bit = 16bit + 12bit")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%865.png",alt:"内存管理5"}})]),v._v(" "),t("p",[v._v("假设进程逻辑内存的地址是0x000011a3，因此对应页表中的页号为00001，页内偏移就是 1a3，假设它对于的物理内存的帧好为00f3, 它就去物理内存中找到00f3的页号，然后找到偏移 1a3的地址。")]),v._v(" "),t("p",[v._v("如果对应的页表中对应的帧号为磁盘，就会引发缺页中断，由用户态转到内核态将磁盘中的数据丢到内存中，如果内存满了，就会使用页面置换算法将内存中的帧替换出去，然后将磁盘的数据放入内存，并更新页表。")]),v._v(" "),t("p",[v._v("小结")]),v._v(" "),t("ul",[t("li",[v._v("分页使得每个程序都有很大的逻辑地址空间，通过磁盘映射和高效的页面置换算法，使得内存看起来“无限大”。")]),v._v(" "),t("li",[v._v("分页使不同的进程的内存隔离，保证了安全。")]),v._v(" "),t("li",[v._v("分页降低了内存的碎片问题")]),v._v(" "),t("li",[v._v("进程在读取内存的数据时，需要两次读取内存操作，第一是读取页表获得帧号，然后通过帧号找到内存的数据，这个时间有待优化，页表也占用较多的内存")])]),v._v(" "),t("p",[v._v("分页时间空间优化")]),v._v(" "),t("ul",[t("li",[v._v("时间优化：将最常访问的页表放到MMU（内存管理单元，集成在cpu中，存储内容少，但是访问速度快），这个就是快表，先查快表，miss再查页表")]),v._v(" "),t("li",[v._v("空间优化：多级页表")])]),v._v(" "),t("h3",{attrs:{id:"段式管理-程序内部的内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段式管理-程序内部的内存管理"}},[v._v("#")]),v._v(" 段式管理-程序内部的内存管理")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%867.png",alt:"内存管理7"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%866.png",alt:"内存管理6"}})]),v._v(" "),t("h3",{attrs:{id:"段页式管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段页式管理"}},[v._v("#")]),v._v(" 段页式管理")]),v._v(" "),t("h3",{attrs:{id:"页面置换算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面置换算法"}},[v._v("#")]),v._v(" 页面置换算法")]),v._v(" "),t("p",[v._v("操作系统发现要使用的页面不在内存时，就会发生缺页中断由用户态转为内核态去磁盘把相应的页面加载到内存，如果此时内存空间不够，就要通过页面置换算法将一个页面移除内存。")]),v._v(" "),t("ul",[t("li",[v._v("最佳页面置换算法（OPT）：淘汰以后最久不使用的页面，因为并不能预知页面在多长时间不被访问，因此这个算法不能够实现，一般用来衡量其他算法的办法。")]),v._v(" "),t("li",[v._v("先进先出页面置换算法（FIFO）：总是先淘汰最先进入内存的页面")]),v._v(" "),t("li",[v._v("最近最久未使用页面置换算法（LRU）：淘汰最近最久未使用的页面")]),v._v(" "),t("li",[v._v("最少使用页面页面置换算法（LFU）：淘汰一个当前最少使用的页面")])])])}),[],!1,null,null,null);_.default=r.exports}}]);