(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{583:function(v,_,t){"use strict";t.r(_);var a=t(4),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),t("ul",[t("li",[v._v("负责管理协调硬件、软件等计算机资源的一种系统软件")]),v._v(" "),t("li",[v._v("为上层用户、应用程序提供简单易用的服务")]),v._v(" "),t("li",[v._v("是一种系统软件")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5.png",alt:"操作系统概念"}})]),v._v(" "),t("h2",{attrs:{id:"功能和目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能和目标"}},[v._v("#")]),v._v(" 功能和目标")]),v._v(" "),t("h3",{attrs:{id:"作为资源的管理者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为资源的管理者"}},[v._v("#")]),v._v(" 作为资源的管理者")]),v._v(" "),t("p",[v._v("使用QQ和朋友视频聊天的过程")]),v._v(" "),t("ul",[t("li",[v._v("在文件夹中找到QQ安装的位置（文件管理）")]),v._v(" "),t("li",[v._v("打开QQ.exe，把程序相关数据放入内存（内存管理）")]),v._v(" "),t("li",[v._v("QQ程序正常运行，QQ进程被处理机调度（处理机管理）")]),v._v(" "),t("li",[v._v("开始和朋友视频聊天，需要将摄像头设备分配给进程（设备管理）")])]),v._v(" "),t("h3",{attrs:{id:"向上层提供服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向上层提供服务"}},[v._v("#")]),v._v(" 向上层提供服务")]),v._v(" "),t("p",[v._v("给普通用户")]),v._v(" "),t("ul",[t("li",[v._v("GUI用户图像界面")]),v._v(" "),t("li",[v._v("命令接口")])]),v._v(" "),t("p",[v._v("给软件/程序员")]),v._v(" "),t("ul",[t("li",[v._v("程序接口（系统调用）")])]),v._v(" "),t("h2",{attrs:{id:"特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[v._v("#")]),v._v(" 特征")]),v._v(" "),t("ul",[t("li",[v._v("并发性：指计算机系统中同时存在着多个运行着的程序。")])]),v._v(" "),t("blockquote",[t("p",[v._v("并发：指两个或多个进程在同一时间间隔发生\n并行：指两个或多个进程在同一时刻发生")])]),v._v(" "),t("ul",[t("li",[v._v("共享性：共享即资源共享，是指系统中的资源可供内存中多个并发执行的进程共同使用。")]),v._v(" "),t("li",[v._v("虚拟性：能够将物理资源在逻辑上进行扩充")])]),v._v(" "),t("blockquote",[t("p",[v._v("空分复用技术（如虚拟存储器技术）\n时分复用技术（如虚拟处理器）")])]),v._v(" "),t("ul",[t("li",[v._v("异步性：在多道程序环境下，多个程序并发执行，进程以不可预知的速度向前推进。")])]),v._v(" "),t("h2",{attrs:{id:"os运行机制和体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#os运行机制和体系结构"}},[v._v("#")]),v._v(" OS运行机制和体系结构")]),v._v(" "),t("p",[v._v("我们编写的代码最终需要编译成机器指令才能被CPU执行，但是这时有一个问题，就是有的指令“人畜无害”，比如加减乘除这些普通的运算指令。有的指令则需要很高的运行权限，如内存清零指令，如果用户程序可以使用这样的指令是很危险的。")]),v._v(" "),t("p",[v._v("因此我们把指令分为两种：")]),v._v(" "),t("ul",[t("li",[v._v("特权指令")]),v._v(" "),t("li",[v._v("非特权指令")])]),v._v(" "),t("p",[v._v("此时产生了新的问题，CPU是如何判断当前是否可以执行特权指令？")]),v._v(" "),t("p",[v._v("将处理器状态分为")]),v._v(" "),t("ul",[t("li",[v._v("用户态，此时CPU只能执行非特权指令")]),v._v(" "),t("li",[v._v("核心态，特权指令、非特权指令都可以执行")])]),v._v(" "),t("p",[v._v("由程序状态字寄存器（PSW）的标志位记录当前处理器状态。")]),v._v(" "),t("p",[v._v("将程序又分为两种")]),v._v(" "),t("ul",[t("li",[v._v("内核程序：操作系统的内核程序是系统的管理者，运行在核心态")]),v._v(" "),t("li",[v._v("应用程序：为了保证系统能够安全运行，应用程序运行在用户态")])]),v._v(" "),t("p",[v._v("操作系统的哪些功能应该由内核程序实现呢？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84.png",alt:"计算机系统层次结构"}})]),v._v(" "),t("p",[v._v("内核是计算机上配置的底层软件，是操作系统最基本、最核心的部分，操作系统围绕在内核上又进行了功能的扩充，比如给用户提供GUI界面，一些系统设置、任务管理器等等")]),v._v(" "),t("p",[v._v("实现操作系统内核功能的那些程序就是内核程序。")]),v._v(" "),t("p",[v._v("内核包括以下功能")]),v._v(" "),t("ul",[t("li",[v._v("时钟管理：实现计时功能")]),v._v(" "),t("li",[v._v("中断处理：负责实现中断机制")]),v._v(" "),t("li",[v._v("原语：是一种特殊的程序，这种程序运行具有原子性，即不可中断")]),v._v(" "),t("li",[v._v("对系统资源进行管理的功能：进程管理、存储器管理、设备管理等")])]),v._v(" "),t("h3",{attrs:{id:"用户态和内核态的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户态和内核态的转换"}},[v._v("#")]),v._v(" 用户态和内核态的转换")]),v._v(" "),t("p",[v._v("转换的方式有以下几种")]),v._v(" "),t("ul",[t("li",[v._v("系统调用")]),v._v(" "),t("li",[v._v("软件中断，如果当前进程运行在用户态，如果这个时候发生了异常事件，就会触发切换。例如：缺页异常。")]),v._v(" "),t("li",[v._v("外设中断，当外设完成用户的请求时，会向CPU发送中断信号。")])]),v._v(" "),t("p",[v._v("转换的过程")]),v._v(" "),t("ul",[t("li",[v._v("将用户态的进程执行上下文保存起来")]),v._v(" "),t("li",[v._v("通过中断向量表得到中断处理程序，运行中断处理程序")]),v._v(" "),t("li",[v._v("中断处理程序结束之后，将保存的信息重新写入栈，重新执行用户进程")])]),v._v(" "),t("h3",{attrs:{id:"体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[v._v("#")]),v._v(" 体系结构")]),v._v(" "),t("p",[v._v("大内核")]),v._v(" "),t("p",[v._v("以上内核就是大内核，将操作系统的主要功能都作为系统内核")]),v._v(" "),t("p",[v._v("优点：高性能")]),v._v(" "),t("p",[v._v("缺点：内核代码庞大，结构混乱，难以维护")]),v._v(" "),t("p",[v._v("微内核：")]),v._v(" "),t("p",[v._v("把进程管理、存储器管理、设备管理排除在内核之外")]),v._v(" "),t("p",[v._v("优点：内核功能少，结构清晰，方便维护")]),v._v(" "),t("p",[v._v("缺点：需要频繁地在核心态和用户态之间切换，性能低")]),v._v(" "),t("h2",{attrs:{id:"中断和异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断和异常"}},[v._v("#")]),v._v(" 中断和异常")]),v._v(" "),t("h3",{attrs:{id:"中断作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断作用"}},[v._v("#")]),v._v(" 中断作用")]),v._v(" "),t("p",[v._v("中断机制是实现程序并发的基础。程序运行时，如果给它的时间片到了，此时会产生中断，CPU从用户态转为内核态，去中断向量表中根据中断类型找到中断处理程序，中断处理程序会停止当前进程运行，然后选择合适的进程调度执行。")]),v._v(" "),t("p",[v._v("CPU 上会运行两种程序，一种是操作系统内核程序，一种是应用程序。“中断”会使CPU由用户态变为内核态，使操作系统重新夺回对CPU的控制权。")]),v._v(" "),t("p",[v._v("在合适的情况下，操作系统内核会把CPU的使用权主动让给应用程序(第二章进程管理相关内容)，“中断”是让操作系统内核夺回CPU使用权的唯一途径。如果没有“中断”机制，那么一旦应用程序上CPU运行，CPU就会一直运行这个应用程序。")]),v._v(" "),t("h3",{attrs:{id:"中断分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断分类"}},[v._v("#")]),v._v(" 中断分类")]),v._v(" "),t("p",[v._v("内中断（异常），与当前执行指令有关，中断信号来自CPU内部")]),v._v(" "),t("ul",[t("li",[v._v("陷阱、陷入（trap）：由陷入指令引发，是应用程序故意引发的（系统调用）")]),v._v(" "),t("li",[v._v("故障（fault）：由错误条件引起的，可能被内核程序修复，内核程序修复故障后会把CPU使用权还给应用程序，让它继续执行下去。如缺页中断。")]),v._v(" "),t("li",[v._v("终止（abort）：由致命错误引起，内核程序无法修复该错误，因此一般不再将CPU使用权还给引发终止的应用程序，而是直接终止该应用程序。如：整数除0、非法使用特权指令")])]),v._v(" "),t("p",[v._v("外中断，与当前指令无关，中断信号来自CPU外部，在每个指令周期的末尾，CPU都会检查是否有外中断信号需要处理")]),v._v(" "),t("ul",[t("li",[v._v("时钟中断")]),v._v(" "),t("li",[v._v("I/O中断请求")])]),v._v(" "),t("h3",{attrs:{id:"中断机制基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断机制基本原理"}},[v._v("#")]),v._v(" 中断机制基本原理")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E4%B8%AD%E6%96%AD%E6%9C%BA%E5%88%B6%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.png",alt:"中断机制基本原理"}})]),v._v(" "),t("p",[v._v("不同的中断信号，需要用不同的中断处理程序来处理。当CPU检测到中断信号后，会根据中断信号的类型去查询“中断向量表”，以此来找到相应的中断处理程序在内存中的存放位置。")]),v._v(" "),t("h2",{attrs:{id:"系统调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统调用"}},[v._v("#")]),v._v(" 系统调用")]),v._v(" "),t("p",[v._v("“系统调用”是操作系统提供给应用程序(程序员/编程人员)使用的接口，可以理解为一种可供应用程序调用的特殊函数，应用程序可以通过系统调用来请求获得操作系统内核的服务。")]),v._v(" "),t("h3",{attrs:{id:"系统调用和库函数的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统调用和库函数的区别"}},[v._v("#")]),v._v(" 系统调用和库函数的区别")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("维度")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("普通应用程序")]),v._v(" "),t("td",[v._v("可直接进行系统调用，也可使用库函数")])]),v._v(" "),t("tr",[t("td",[v._v("编程语言")]),v._v(" "),t("td",[v._v("向上提供库函数，有的库函数会将系统调用封装成库函数，以隐藏系统调用的一些细节，使程序员编程更加方便")])]),v._v(" "),t("tr",[t("td",[v._v("操作系统")]),v._v(" "),t("td",[v._v("向上提供系统调用，使得上层程序能够请求内核的服务")])])])]),v._v(" "),t("h3",{attrs:{id:"为什么需要系统调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要系统调用"}},[v._v("#")]),v._v(" 为什么需要系统调用？")]),v._v(" "),t("p",[v._v("前面提到为了保证系统的安全性，我们把CPU运行状态分为内核态和用户态，而对资源进行管理的程序叫内核程序。")]),v._v(" "),t("p",[v._v("操作系统的主要功能是为管理硬件资源和为应用程序开发人员提供良好的环境来使应用程序具有更好的兼容性，为了达到这个目的，内核提供一系列具备预定功能的多内核函数，通过一组称为**系统调用（system call)**的接口呈现给用户。系统调用把应用程序的请求传给内核，调用相应的的内核函数完成所需的处理，将处理结果返回给应用程序。")]),v._v(" "),t("h3",{attrs:{id:"什么功能需要用到系统调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么功能需要用到系统调用"}},[v._v("#")]),v._v(" 什么功能需要用到系统调用？")]),v._v(" "),t("p",[v._v("应用程序通过系统调用请求操作系统的服务。而系统中的各种共享资源都由操作系统内核统一掌管，因此凡是与共享资源有关的操作(如存储分配、I/O操作、文件管理等)，都必须通过系统调用的方式向操作系统内核提出服务请求，由操作系统内核代为完成。这样可以保证系统的稳定性和安全性，防止用户进行非法操作。")]),v._v(" "),t("h3",{attrs:{id:"系统调用过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统调用过程"}},[v._v("#")]),v._v(" 系统调用过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E8%BF%87%E7%A8%8B.png",alt:"系统调用过程"}})]),v._v(" "),t("p",[v._v("传递系统调用参数 -> 执行陷入指令(用户态) -> 执行相应的内请求核程序处理系统调用(核心态) -> 返回给应用程序\n注意")]),v._v(" "),t("ul",[t("li",[v._v("陷入指令是在用户态执行的，执行陷入指令之后立即引发一个内中断，使CPU进入核心态")]),v._v(" "),t("li",[v._v("发出系统调用请求是在用户态，而对系统调用的相应处理在核心态下进行")])])])}),[],!1,null,null,null);_.default=r.exports}}]);