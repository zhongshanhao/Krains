(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{586:function(s,r,t){"use strict";t.r(r);var e=t(4),a=Object(e.a)({},(function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("系统调用")]),s._v(" "),t("p",[s._v("fork系统调用执行过程")]),s._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"D:\\_temp\\网络图片\\853921-20201231231343930-160569876.png",alt:"853921-20201231231343930-160569876"}}),s._v(" "),t("p",[s._v("系统调用入口")]),s._v(" "),t("p",[s._v("将系统fork调用号加载到寄存器，用ecall指令由用户态"),t("strong",[s._v("陷入")]),s._v("到内核态，根据SYS_fork调用相应的中断处理函数，SYS_fork是一个数字，与内核系统fork的调用号一致")]),s._v(" "),t("p",[s._v("usys.S")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".global fork\nfork:\n li a7, SYS_fork\n ecall\n ret\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("trampoline.S")]),s._v(" "),t("p",[s._v("用来在内核态和用户态之间切换的代码，做了两件事")]),s._v(" "),t("ul",[t("li",[s._v("uservec：保存用户线程寄存器在TRAPFRAME中，有一些寄存器中保存了系统调用参数")]),s._v(" "),t("li",[s._v("userret：恢复状态")])]),s._v(" "),t("p",[s._v("然后到trap.c  中的usertrap，usertrap用来处理来自用户空间的中断、异常和系统调用，这也是用户获得机器资源的三种方式")]),s._v(" "),t("p",[s._v("syscall.c 根据系统调用号SYS_fork找到相应的处理函数")]),s._v(" "),t("p",[s._v("sysproc.c 中的sys_fork函数，这个程序相当于一个装饰器，将系统调用所需的参数从中断帧中取出，然后调用proc.c 中的fork函数去创建进程")])])}),[],!1,null,null,null);r.default=a.exports}}]);