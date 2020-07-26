(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{522:function(v,t,_){"use strict";_.r(t);var e=_(4),a=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是操作系统？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是操作系统？"}},[v._v("#")]),v._v(" 什么是操作系统？")]),v._v(" "),_("p",[v._v("操作系统是管理计算机硬件和软件资源的程序，本质上是运行在计算机上的"),_("strong",[v._v("软件程序")]),v._v("，能够为用户提供一个系统交互的操作界面，操作系统分为内核和外壳，内核就是能够操作硬件的程序，外壳则是围绕着内核的应用程序。")]),v._v(" "),_("blockquote",[_("p",[v._v("内核负责管理系统的进程、内存、设备驱动程序、文件和网络系统等等，是连接应用程序的硬件的桥梁。")])]),v._v(" "),_("h2",{attrs:{id:"系统调用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统调用"}},[v._v("#")]),v._v(" 系统调用")]),v._v(" "),_("p",[v._v("先了解用户态和系统态")]),v._v(" "),_("p",[v._v("根据进程访问资源的特点，可以把进程分为两个级别：")]),v._v(" "),_("ul",[_("li",[v._v("用户态：用户态运行的进程可以直接读取用户程序的数据。")]),v._v(" "),_("li",[v._v("系统态 ：可以简单的理解系统态运行的进程或程序几乎可以访问计算机的任何资源，不受限制。")])]),v._v(" "),_("p",[v._v("我们运行的程序基本都是运行在用户态的，如果我们要调用操作系统提供的系统态级别的子功能咋办？那就需要系统调用。")]),v._v(" "),_("p",[v._v("在我们的用户程序中，我们的程序是处于用户态的，不能够直接访问系统态级别的资源（如文件管理、进程控制、内存管理等），但是可以通过系统调用向操作系统提出服务请求，并由操作系统代为完成。")]),v._v(" "),_("p",[v._v("这些系统调用按功能大致可分为如下几类：")]),v._v(" "),_("ul",[_("li",[v._v("设备管理。完成设备的请求或释放，以及设备启动等功能。")]),v._v(" "),_("li",[v._v("文件管理。完成文件的读、写、创建及删除等功能。")]),v._v(" "),_("li",[v._v("进程控制。完成进程的创建、撤销、阻塞及唤醒等功能。")]),v._v(" "),_("li",[v._v("进程通信。完成进程之间的消息传递或信号传递等功能。")]),v._v(" "),_("li",[v._v("内存管理。完成内存的分配、回收以及获取作业占用内存区大小及地址等功能。")])]),v._v(" "),_("h2",{attrs:{id:"进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[v._v("#")]),v._v(" 进程")]),v._v(" "),_("p",[v._v("进程运行的状态")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("创建状态(new)")]),v._v(" ：创建进程时拥有PCB但其他资源尚未就绪的状态，等其他资源装备好就会将进入就绪状态，也就是将进程插入到就绪队列中。")]),v._v(" "),_("li",[_("strong",[v._v("就绪状态(ready)")]),v._v(" ：进程已处于准备运行状态，即进程获得了除了处理器之外的一切所需资源，一旦得到处理器资源(处理器分配的时间片)即可运行。")]),v._v(" "),_("li",[_("strong",[v._v("运行状态(running)")]),v._v(" ：进程正在处理器上上运行(单核 CPU 下任意时刻只有一个进程处于运行状态)。")]),v._v(" "),_("li",[_("strong",[v._v("阻塞状态(waiting)")]),v._v(" ：又称为等待状态，进程正在等待某一事件而暂停运行如等待某资源为可用或等待 IO 操作完成。即使处理器空闲，该进程也不能运行。")]),v._v(" "),_("li",[_("strong",[v._v("结束状态(terminated)")]),v._v(" ：进程正在从系统中消失。可能是进程正常结束或其他原因中断退出运行。")])]),v._v(" "),_("blockquote",[_("p",[v._v("订正：下图中 running 状态被 interrupt 向 ready 状态转换的箭头方向反了。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/d38202593012b457debbcd74994c6292.png",alt:"process-state"}})]),v._v(" "),_("p",[v._v("进程间通信IPC")]),v._v(" "),_("p",[v._v("概念")]),v._v(" "),_("p",[v._v("每个进程各自有不同的用户地址空间，任何一个进程的全局变量在另一个进程中都看不到，所以进程之间要交换数据必须通过内核，在内核中开辟一块缓冲区，进程1把数据从用户空间拷到内核缓冲区，进程2再从内核缓冲区把数据读走，内核提供的这种机制称为"),_("strong",[v._v("进程间通信（IPC，InterProcess Communication）")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/1281379-76c95f147203c797.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/222/format/webp",alt:"进程通信模型"}})]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("管道/匿名管道(Pipes)")]),v._v(" ：用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。")]),v._v(" "),_("li",[_("strong",[v._v("有名管道(Names Pipes)")]),v._v(" : 匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循"),_("strong",[v._v("先进先出(first in first out)")]),v._v("。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。")]),v._v(" "),_("li",[_("strong",[v._v("信号(Signal)")]),v._v(" ：是由某个进程产生的，并能够设置信号的传递对象（一般是进程的pid），然后交给操作系统，操作系统就能将信号传给对应的进程，比如用终端起了一个进程，可以用ctrl+c产生一个信号或者kill 该进程的pid，中断进程的执行。")]),v._v(" "),_("li",[_("strong",[v._v("消息队列(Message Queuing)")]),v._v(" ：消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显示地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。"),_("strong",[v._v("消息队列克服了信号承载信息量少，管道只能承载无格式字 节流以及缓冲区大小受限等缺。")])]),v._v(" "),_("li",[_("strong",[v._v("信号量(Semaphores)")]),v._v(" ：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。")]),v._v(" "),_("li",[_("strong",[v._v("共享内存(Shared memory)")]),v._v(" ：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。")]),v._v(" "),_("li",[_("strong",[v._v("套接字(Sockets)")]),v._v(" : 是一种通信机制，不仅可以实现本地单机进程的通信，还能够实现不同主机间的进程通信。Socket是应用层和传输层之间的桥梁。")])]),v._v(" "),_("h2",{attrs:{id:"线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[v._v("#")]),v._v(" 线程")]),v._v(" "),_("p",[v._v("线程运行状态/生命周期")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://camo.githubusercontent.com/bd21f0c6bf04fe410fa5397897cc47b9278ae5cb/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612545372542412542462545372541382538422545372539412538342545372538412542362545362538302538312e706e67",alt:"Java 线程的状态 "}})]),v._v(" "),_("p",[v._v("状态切换")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/hezzzzz/FigureBed/raw/master/img/java%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81%E5%8F%98%E8%BF%81.png",alt:"java线程状态变迁"}})]),v._v(" "),_("p",[v._v("线程创建之后它将处于 "),_("strong",[v._v("NEW（新建）")]),v._v(" 状态，调用 "),_("code",[v._v("start()")]),v._v(" 方法后开始运行，线程这时候处于 "),_("strong",[v._v("READY（可运行）")]),v._v(" 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 "),_("strong",[v._v("RUNNING（运行）")]),v._v(" 状态。")]),v._v(" "),_("p",[v._v("当线程执行 "),_("code",[v._v("wait()")]),v._v("方法之后，线程进入 "),_("strong",[v._v("WAITING（等待）")]),v._v(" 状态。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态，而 "),_("strong",[v._v("TIME_WAITING(超时等待)")]),v._v(" 状态相当于在等待状态的基础上增加了超时限制，比如通过 "),_("code",[v._v("sleep（long millis）")]),v._v("方法或 "),_("code",[v._v("wait（long millis）")]),v._v("方法可以将 Java 线程置于 TIMED WAITING 状态。当超时时间到达后 Java 线程将会返回到 RUNNABLE 状态。当线程调用同步方法时，在没有获取到锁的情况下，线程将会进入到 "),_("strong",[v._v("BLOCKED（阻塞）")]),v._v(" 状态。线程在执行 Runnable 的"),_("code",[v._v("run()")]),v._v("方法之后将会进入到 "),_("strong",[v._v("TERMINATED（终止）")]),v._v(" 状态。")]),v._v(" "),_("p",[v._v("线程死锁")]),v._v(" "),_("p",[v._v("线程死锁描述的是这样一种情况：多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。")]),v._v(" "),_("p",[v._v("如下图所示，线程 A 持有资源 2，线程 B 持有资源 1，他们同时都想申请对方的资源，所以这两个线程就会互相等待而进入死锁状态。")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://camo.githubusercontent.com/3903a4dc24008be52f72bad23498808b5a743c35/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d342f323031392d34254536254144254242254539253934253831312e706e67",target:"_blank",rel:"noopener noreferrer"}},[_("img",{attrs:{src:"https://camo.githubusercontent.com/3903a4dc24008be52f72bad23498808b5a743c35/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d342f323031392d34254536254144254242254539253934253831312e706e67",alt:"线程死锁示意图 "}}),_("OutboundLink")],1)]),v._v(" "),_("h2",{attrs:{id:"进程线程的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程线程的区别"}},[v._v("#")]),v._v(" 进程线程的区别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("根本区别：进程是资源分配的基本单位，线程是任务调度和执行的基本单位。")])]),v._v(" "),_("li",[_("p",[v._v("系统开销方面：前面说了进程是资源分配的基本单位，操作系统创建或结束进程时，系统都要为其分配或者回收资源，如内存空间、I/O设备等，所付出的开销大于创建或结束线程时的开销。类似地，在进行进程切换时，涉及当前执行进程上下文的保存以及新调度进程上下文的设置，而线程切换时只需保存和设置少量寄存器内容，开销很小。")])]),v._v(" "),_("li",[_("p",[v._v("调度方面：线程是任务调度和执行的基本单位，同一进程中，线程的切换不会引起进程的切换，不同进程的线程切换会引起进程的切换。")])])]),v._v(" "),_("p",[v._v("参考链接")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.jianshu.com/p/c1015f5ffa74",target:"_blank",rel:"noopener noreferrer"}},[v._v("《进程间通信 IPC (InterProcess Communication)》"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);