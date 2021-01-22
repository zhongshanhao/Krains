(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{494:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"对象的创建方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的创建方式"}},[s._v("#")]),s._v(" 对象的创建方式")]),s._v(" "),a("ul",[a("li",[s._v("new：这是最常见的方式，也有new对象的变形操作，如单例类中调用getInstance的静态类方法，XXXFactory的静态方法")]),s._v(" "),a("li",[s._v("Class的newInstance方法：在JDK9里面被标记为过时的方法，因为只能调用空参构造器")]),s._v(" "),a("li",[s._v("Constructor的newInstance(XXX)：反射的方式，可以调用空参的，或者带参的构造器")]),s._v(" "),a("li",[s._v("使用clone()：不调用任何的构造器，要求当前的类需要实现Cloneable接口中的clone接口")]),s._v(" "),a("li",[s._v("使用序列化：序列化一般用于Socket的网络传输")])]),s._v(" "),a("h2",{attrs:{id:"创建对象的六个步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的六个步骤"}},[s._v("#")]),s._v(" 创建对象的六个步骤")]),s._v(" "),a("p",[a("strong",[s._v("判断对象对应的类是否已被加载、链接、初始化")])]),s._v(" "),a("p",[s._v("虚拟机遇到一条new指令，首先去检查这个指令的参数能否在Metaspace的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已经被加载，解析和初始化。（即判断类元信息是否存在）。如果没有，那么在双亲委派模式下，使用当前类加载器以ClassLoader + 包名 + 类名为key进行查找对应的 .class文件，如果没有找到文件，则抛出ClassNotFoundException异常，如果找到，则进行类加载，并生成对应的Class对象。")]),s._v(" "),a("p",[a("strong",[s._v("为对象分配内存")])]),s._v(" "),a("p",[s._v("首先计算对象占用空间的大小，接着在堆中划分一块内存给新对象。如果实例成员变量是引用变量，仅分配引用变量空间即可，即4个字节大小。")]),s._v(" "),a("p",[s._v("在分配时")]),s._v(" "),a("p",[s._v("如果内存是规整的：指针碰撞")]),s._v(" "),a("p",[s._v("如果内存是规整的，那么虚拟机采用的是指针碰撞法来为对象分配内存。内存规整的意思就是所有用过的内存在一边，空闲的内存放另一边，中间放着一个指针作为分界点的指示器，分配内存就仅仅把指针指向空闲那边挪动一段与对象大小相等的距离罢了。如果垃圾收集器选择的是Serial，ParNew这种基于压缩的算法，这种垃圾收集器不会产生内存碎片，因此虚拟机采用这种方式。")]),s._v(" "),a("p",[s._v("如果内存是不规整的：空闲列表(Free List)分配")]),s._v(" "),a("p",[s._v("如果内存不是规整的，已使用的内存和未使用的内存相互交错，那么虚拟机将采用的是空闲列表来为对象分配内存。虚拟机维护了一个列表，记录哪些内存块是可用的，在分配的时候从列表中找到一块足够大的空间划分给对象实例，并更新列表。")]),s._v(" "),a("p",[s._v("虚拟机遇到一条new指令，首先去检查这个指令的参数能否在Metaspace的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已经被加载，解析和初始化。（即判断类元信息是否存在）。如果没有，那么在双亲委派模式下，使用当前类加载器以ClassLoader + 包名 + 类名为key进行查找对应的 .class文件，如果没有找到文件，则抛出ClassNotFoundException异常，如果找到，则进行类加载，并生成对应的Class对象。选择哪种分配方式由Java堆是否规整决定，而Java堆是否规整又由所采用的垃圾收集器是否带有压缩整理功能决定。")]),s._v(" "),a("p",[s._v("给对象分配内存时需要处理并发安全问题，因为在多线程环境下多个线程可能拿到的是同一个指针，JVM有两种方式保证：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("采用CAS配上失败重试保证更新的原子性，就是将缓存中拿到的指针和主存中的指针对比，如果相等则成功，如果失败继续拿到新指针去尝试分配空间")])]),s._v(" "),a("li",[a("p",[s._v("为每个线程分配TLAB（Thread Local Allocation Buffer），在本地线程缓冲区分配对象是线程安全的")])])]),s._v(" "),a("p",[a("strong",[s._v("初始化分配到的空间")])]),s._v(" "),a("p",[s._v("对实例变量设置默认值")]),s._v(" "),a("p",[a("strong",[s._v("设置对象的对象头")])]),s._v(" "),a("p",[s._v("将对象的所属类（即类的元数据信息）、对象的HashCode值和对象的GC信息、锁信息等数据存储在对象的对象头中。")]),s._v(" "),a("p",[s._v("以32位虚拟机为例，如果对象是非数组类型，那么则用2字宽存储对象头，如果是数组，则用3字存储。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("长度")]),s._v(" "),a("th",[s._v("内容")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("32bit")]),s._v(" "),a("td",[s._v("Mark Word")]),s._v(" "),a("td",[s._v("存储对象的hashCode或锁信息等")])]),s._v(" "),a("tr",[a("td",[s._v("32bit")]),s._v(" "),a("td",[s._v("Class Metadata Address")]),s._v(" "),a("td",[s._v("存储到对象类型数据的指针")])]),s._v(" "),a("tr",[a("td",[s._v("32bit")]),s._v(" "),a("td",[s._v("Array length")]),s._v(" "),a("td",[s._v("数组长度（如果当前对象是数组）")])])])]),s._v(" "),a("p",[s._v("在对象的运行期间，Mark Word存储的数据会随着锁标志位的变化而变化")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%AF%B9%E8%B1%A1%E5%A4%B4Mark%20Word.png",alt:"对象头Mark Word"}})]),s._v(" "),a("p",[s._v("64位")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/64%E4%BD%8DMarkWord.png",alt:"64位MarkWord"}})]),s._v(" "),a("p",[a("strong",[s._v("执行init方法进行初始化")])]),s._v(" "),a("p",[s._v("初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的首地址赋值给引用变量。字节码角度来看就是执行init方法，init方法包括显式赋值，代码块赋值，构造器赋值。")]),s._v(" "),a("h2",{attrs:{id:"对象的内存布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的内存布局"}},[s._v("#")]),s._v(" 对象的内存布局")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80.png",alt:"对象的内存布局"}})]),s._v(" "),a("p",[s._v("例子")]),s._v(" "),a("p",[s._v("Customer对象")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Customer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Account")]),s._v(" acct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jdk7后字符串常量池放在堆中")]),s._v("\n        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"匿名客户"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Customer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        acct "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomerTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这个线程的局部变量表中，放有args，cust")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Customer")]),s._v(" cust "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Customer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%AF%B9%E8%B1%A1%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%802.png",alt:"对象内存布局2"}})]),s._v(" "),a("h2",{attrs:{id:"对象的两种定位方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的两种定位方式"}},[s._v("#")]),s._v(" 对象的两种定位方式")]),s._v(" "),a("p",[s._v("句柄访问")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%8F%A5%E6%9F%84%E8%AE%BF%E9%97%AE.png",alt:"句柄访问"}})]),s._v(" "),a("p",[s._v("缺点：需要额外维护一个句柄池，占用额外空间，并且对象定位时需要先找到句柄池中的到对象实例数据的指针，然后在找到具体的对象实例，需要两步操作，效率比较低。")]),s._v(" "),a("p",[s._v("优点：局部变量表中引用存储了稳定的句柄地址，对象被移动（垃圾收集是移动对象很普遍）时只需改变句柄中实例数据指针即可，引用本身不需要修改。")]),s._v(" "),a("p",[s._v("直接指针方式(HotSpot采用)")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E7%9B%B4%E6%8E%A5%E6%8C%87%E9%92%88.png",alt:"直接指针"}})]),s._v(" "),a("p",[s._v("缺点：局部变量表的引用在对象被移动时需要修改。")]),s._v(" "),a("p",[s._v("优点：不用维护一个句柄池，直接就能通过指针一次找到对象")])])}),[],!1,null,null,null);t.default=e.exports}}]);