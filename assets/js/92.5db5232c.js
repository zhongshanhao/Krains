(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{495:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%AD%90%E7%B3%BB%E7%BB%9F.png",alt:"类加载子系统"}})]),s._v(" "),t("h2",{attrs:{id:"类加载器子系统作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器子系统作用"}},[s._v("#")]),s._v(" 类加载器子系统作用")]),s._v(" "),t("p",[s._v("类加载子系统(ClassLoader)只负责从文件系统或者网络中加载class文件，至于它是否可以运行，则由执行引擎(Execution Engine)决定。")]),s._v(" "),t("p",[s._v("加载的类信息存放于一块被称为方法区的内存空间。除了类的信息外，方法区中还会存放运行时常量池信息、字符串字面量、数字常量。")]),s._v(" "),t("h2",{attrs:{id:"类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程"}},[s._v("#")]),s._v(" 类加载过程")]),s._v(" "),t("p",[s._v("分为3个阶段：加载、链接、初始化阶段。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.png",alt:"类加载过程"}})]),s._v(" "),t("p",[s._v("class文件存在于本地硬盘中，可以理解为设计师画在纸上的模板，而最终这个模板在执行的时候要加载到JVM当中，并根据这个文件实例化出n个一模一样的实例。")]),s._v(" "),t("p",[s._v("如何将class文件加载入JVM，就是Class Loader的工作了，当然加载class文件到内存不仅仅是将它读入内存那么简单，分为3个阶段：加载、链接、初始化阶段。")]),s._v(" "),t("p",[s._v("Class Loader将class文件加载到JVM中，在内存中class文件被称为DNA元数据模板，放在方法区，Class Loader加载并初始化了一个该class的Class，用来实例化该class。")]),s._v(" "),t("h3",{attrs:{id:"加载阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载阶段"}},[s._v("#")]),s._v(" 加载阶段")]),s._v(" "),t("p",[s._v("通过一个类的全限定名获取定义此类的二进制字节流(.class文件)。")]),s._v(" "),t("p",[s._v("将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。")]),s._v(" "),t("p",[s._v("在内存中生成一个代表这个类的java.class.Class对象，作为方法区这个类的各种数据的访问入口。")]),s._v(" "),t("p",[s._v("加载class文件的方式：本地文件系统或者网络上获取，也可以运行是动态生成(动态代理技术)。")]),s._v(" "),t("h3",{attrs:{id:"链接阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接阶段"}},[s._v("#")]),s._v(" 链接阶段")]),s._v(" "),t("p",[s._v("链接又分为3个阶段：验证、准备、解析阶段。")]),s._v(" "),t("h4",{attrs:{id:"验证-verify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证-verify"}},[s._v("#")]),s._v(" 验证(Verify)")]),s._v(" "),t("p",[s._v("目的在于确保class文件的字节流中包含的信息符合当前虚拟机的要求，保证被加载类的正确性，不会危害虚拟机自身安全。")]),s._v(" "),t("p",[s._v("为防止字节码被人为修改或者恶意攻击，导致JVM运行崩溃，因此要有验证阶段。")]),s._v(" "),t("p",[s._v("主要包括四种验证：文件格式验证、元数据验证、字节码验证、符号引用验证。")]),s._v(" "),t("h4",{attrs:{id:"准备-prepare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-prepare"}},[s._v("#")]),s._v(" 准备(Prepare)")]),s._v(" "),t("p",[s._v("为类变量分配内存并且设置该类变量的默认初始值，即零值。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloApp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 准备阶段为0，在下个阶段，也就是初始化的时候才是1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("如果是final static 修饰的基本数据类型，则会在编译时生成ConstantValue，准备阶段根据ConstantValue赋值，而不是在类加载的初始化阶段。")]),s._v(" "),t("p",[s._v("这里不会为实例变量分配初始化，类变量会分配在方法区中，而实例变量是会随着对象一起分配到Java堆中。")]),s._v(" "),t("blockquote",[t("p",[s._v("类变量也叫静态变量，也就是在变量前加了static的变量；\n实例变量也叫对象变量，即没加static的变量；\n区别在于：\n类变量是所有对象共有，其中一个对象将它值改变，其他对象得到的就是改变后的结果；\n而实例变量则属对象私有，某一个对象将其值改变，不影响其他对象；")])]),s._v(" "),t("h4",{attrs:{id:"解析-resolve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-resolve"}},[s._v("#")]),s._v(" 解析(Resolve)")]),s._v(" "),t("p",[s._v("将常量池内的符号引用转换为直接引用的过程。")]),s._v(" "),t("p",[s._v("字面量")]),s._v(" "),t("p",[s._v("字面量(literal)是用于表达源代码中一个"),t("strong",[s._v("固定值")]),s._v("的表示法。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("把整数"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("赋值给"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("型变量i，整数"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("就是"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Java")]),s._v("字面量，\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("中的abc也是字面量。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("符号引用")]),s._v(" "),t("p",[s._v("符号引用以一组符号来描述所引用的目标，符号可以是任何形式的字面量。")]),s._v(" "),t("p",[s._v("在Java中，一个Java类将会编译成一个class文件，在编译时，Java类并不知道所引用类的实际内存地址（因为在我们写Java代码的时候使用的都是逻辑地址，在编译的时候才转化为实际物理地址），因此只能用符号引用来代替，所以在这个解析阶段，就要将符号引用转化为直接引用，这样才能够找到实际内存中的具体的对象。")]),s._v(" "),t("p",[s._v("在字节码文件中的常量池表（Constant Pool Table），就包括各种字面量和对类型、域和方法的符号引用")]),s._v(" "),t("p",[s._v("直接引用")]),s._v(" "),t("p",[s._v("直接引用说白了就是程序运行时可以定位到引用的东西(类、对象、 变量或者方法等)的内存地址。")]),s._v(" "),t("h3",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),t("p",[s._v("初始化阶段就是执行类构造器方法(clinit)的过程，不同于类自身的构造器(init)。")]),s._v(" "),t("p",[s._v("clinit()方法不需定义，它其实就是javac编译器自动收集类中的所有类变量的赋值动作和静态代码块中的语句合并而来，也就是说，当我们代码中包含static变量的时候，就会有clinit方法")]),s._v(" "),t("p",[s._v("JVM会保证子类的(clinit)执行前，父类的(clinit)已经执行完毕。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClinitTest")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Father")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Son")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Father")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Son")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("示例：从类加载的方面说，上述代码是如何运行的？")]),s._v(" "),t("p",[s._v("在执行ClinitTest类的main()方法时，需要将ClinitTest类加载入内存，"),t("strong",[s._v("Java类是运行时加载的，需要的时候才加载")]),s._v("，它的父类Object也在它之前加载进来，执行main()方法用到了Son类，因此又去加载Son类，因为Son类继承了Father类，所以Father类也要经历加载、链接、初始化的过程，最后所有需要用到的类都加载好了，程序就能正常执行，从而打印出了2。")]),s._v(" "),t("p",[s._v("虚拟机必须保证一个类的(clinit)方法在多线程下被同步加锁。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeadThreadTest")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t 线程t1开始"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeadThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t 线程t2开始"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeadThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeadThread")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t 初始化当前类"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("程序死锁，控制台输出如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("线程t1开始\n线程t2开始\n线程t2 初始化当前类\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("类DeadThread的只初始化一次，并且多个线程互斥访问。")]),s._v(" "),t("h2",{attrs:{id:"类加载器分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器分类"}},[s._v("#")]),s._v(" 类加载器分类")]),s._v(" "),t("p",[s._v("JVM支持两种类型的类加载器 。分别为引导类加载器（Bootstrap ClassLoader）和自定义类加载器（User-Defined ClassLoader）。")]),s._v(" "),t("p",[s._v("从概念上来讲，自定义类加载器一般指的是程序中由开发人员自定义的一类类加载器，但是Java虚拟机规范却没有这么定义，而是将所有派生于抽象类ClassLoader的类加载器都划分为自定义类加载器。")]),s._v(" "),t("p",[s._v("无论类加载器的类型如何划分，在程序中我们最常见的类加载器始终只有3个，如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.png",alt:"类加载器"}})]),s._v(" "),t("p",[s._v("这里的四者之间是包含关系，不是上层和下层，也不是子系统的继承关系。")]),s._v(" "),t("h3",{attrs:{id:"虚拟机自带的加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机自带的加载器"}},[s._v("#")]),s._v(" 虚拟机自带的加载器")]),s._v(" "),t("p",[s._v("启动类加载器：负责加载机器上安装的Java目录下的核心类，Java安装目录下有个"),t("code",[s._v("lib")]),s._v("文件存放了Java的核心库，JVM启动后，首先会依托"),t("code",[s._v("启动类加载器")]),s._v("去加载lib。")]),s._v(" "),t("p",[s._v("扩展类加载器：就是加载"),t("code",[s._v("lib/ext")]),s._v("目录下的class文件，和启动类加载器差不多，但它是启动类加载器的儿子。")]),s._v(" "),t("p",[s._v("应用程序类加载器：负责加载"),t("code",[s._v("ClassPath")]),s._v("环境变量指定路径中的类，就是把你写好的代码加载进内存。")]),s._v(" "),t("p",[s._v("自定义类加载器：自己写的类加载器，继承"),t("code",[s._v("ClassLoader")]),s._v("类，重写类加载方法")]),s._v(" "),t("h2",{attrs:{id:"双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[s._v("#")]),s._v(" 双亲委派机制")]),s._v(" "),t("p",[s._v("Java虚拟机对class文件采用的是按需加载的方式，也就是说当需要使用该类时才会将它的class文件加载到内存生成Class对象。在加载某")]),s._v(" "),t("p",[s._v("个类的class文件时，Java虚拟机采用的是双亲委派机制，即把请求交给父类处理，它是一种任务委派模式。")]),s._v(" "),t("h3",{attrs:{id:"工作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作方式"}},[s._v("#")]),s._v(" 工作方式")]),s._v(" "),t("ol",[t("li",[s._v("如果一个类加载器收到了类加载请求，它并不会自己先去加载，而是把这个请求委托给父类的加载器去执行；")]),s._v(" "),t("li",[s._v("如果父类的加载器还存在其父类加载器，则进一步向上委托，依次递归，请求最终到达顶层的启动类加载器；")]),s._v(" "),t("li",[s._v("如果父类加载器可以完成类加载任务，就成功返回，如果父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%9C%BA%E5%88%B6.png",alt:"双亲委派机制"}})]),s._v(" "),t("p",[s._v("例子：")]),s._v(" "),t("p",[s._v("当我们加载jdbc.jar 用于实现数据库连接的时候，首先我们需要知道的是 jdbc.jar是基于SPI接口进行实现的，在加载的时候进行双亲委派，最终从启动类加载器中加载 SPI核心类，SPI核心类只是一个接口，不同的数据库有不同的实现类，这些类都实现了SPI接口，加载了核心SPI接口，这时会进行反向委派，通过线程上下文类加载器进行实现类 jdbc.jar的加载。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%9C%BA%E5%88%B6%E4%B8%BE%E4%BE%8B.png",alt:"双亲委派机制举例"}})]),s._v(" "),t("p",[s._v("优势：")]),s._v(" "),t("ul",[t("li",[s._v("能够避免类的重复加载")]),s._v(" "),t("li",[s._v("自定义的类java.lang.String不会被启动类加载器加载，可以保护程序安全，防止核心API被随意篡改。")])]),s._v(" "),t("h3",{attrs:{id:"如何打破双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何打破双亲委派机制"}},[s._v("#")]),s._v(" 如何打破双亲委派机制")]),s._v(" "),t("p",[s._v("我们自定义类加载器，继承ClassLoader，如果想")]),s._v(" "),t("ul",[t("li",[s._v("打破：重写loadClass()方法")]),s._v(" "),t("li",[s._v("不打破：重写findClass()方法")])])])}),[],!1,null,null,null);a.default=e.exports}}]);