(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{561:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"java特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java特性"}},[s._v("#")]),s._v(" Java特性")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("封装")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("是什么？")]),s._v(" "),a("p",[s._v("在Java中，一切皆对象。封装，就是把客观事物封装成抽象的类，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。")])]),s._v(" "),a("li",[a("p",[s._v("有什么好处？")]),s._v(" "),a("p",[s._v("我们将复杂的功能封装到一个类中，对外开放一个接口，我们在使用的时候不用管里面复杂的逻辑，直接调用即可完成功能。")])])])]),s._v(" "),a("li",[a("p",[s._v("继承")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("是什么？\n继承是一个对象获取另一个对象中属性的方法。")])]),s._v(" "),a("li",[a("p",[s._v("有什么好处？\n继承可以大幅减少冗余的代码，并且可基于父类的基础上扩展代码，增加功能，提高开发效率。")])])])]),s._v(" "),a("li",[a("p",[s._v("多态")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("是什么？\n多态就是同一个接口，使用不同的实例而执行不同操作。如用List接口引用了一个参数，调用get方法取决与其实际类型是ArrayList还是LinkedList。")])]),s._v(" "),a("li",[a("p",[s._v("有什么好处？")]),s._v(" "),a("p",[s._v("提高了代码的扩展性。")])])])])]),s._v(" "),a("h2",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[s._v("#")]),s._v(" 修饰符")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("final")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("作用在类上\n表示该类不可以被继承")])]),s._v(" "),a("li",[a("p",[s._v("作用在方法上\n表示该方法不可以被覆写")])]),s._v(" "),a("li",[a("p",[s._v("作用在字段上\n表示该字段不能被修改，对于基本类型，其值不能被修改，对于引用类型，表示不能在引用其他对象，但是可以修改引用对象本身。")])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("code",[s._v("static")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("作用在成员变量上\n被称为静态字段，静态字段只有一个共享的空间，在类的所有实例中共享静态字段。")])]),s._v(" "),a("li",[a("p",[s._v("作用在方法上\n被称为静态方法，静态方法能够在不创建实例的情况下通过类名直接调用，如"),a("code",[s._v("Math.max()")]),s._v("；\n静态方法不能调用非静态的方法和成员变量。")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("private")])]),s._v(" "),a("p",[s._v("私有访问修饰符，被声明为private的方法、变量和构造方法只能被所属类（其实例或子类也不能访问）访问，被private修饰的方法和变量的作用域只在其类内部（不能通过实例向外抛出），当然在该类的内部类也可以访问，注意类和接口不能声明为private。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("protected")])]),s._v(" "),a("p",[s._v("如果想要类中的变量或方法不被其他类访问但是可以被其子类访问，可以加protected。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("public")])]),s._v(" "),a("p",[s._v("与private相反，被声明为public的方法、变量、类和接口可以被任何其他类访问。")])])]),s._v(" "),a("h2",{attrs:{id:"抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[s._v("#")]),s._v(" 抽象类")]),s._v(" "),a("p",[s._v("如果把一个方法定义为"),a("code",[s._v("abstract")]),s._v("，表示这是一个抽象方法，本身没有实现任何方法语句，因为这个抽象方法本身是无法执行的，所以其所在的类无法被实例化，必须要在类上也声明为"),a("code",[s._v("abstract")]),s._v("。")]),s._v(" "),a("p",[s._v("无法实例化的抽象类有什么用？")]),s._v(" "),a("p",[s._v("抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译器就会报错，因此，抽象方法实际上相当于定义了“规范”。")]),s._v(" "),a("p",[s._v("面向抽象编程")]),s._v(" "),a("p",[s._v("当我们定义了抽象类"),a("code",[s._v("Person")]),s._v("，其中有一个抽象的"),a("code",[s._v("run()")]),s._v("方法，当我们实现具体的"),a("code",[s._v("Student")]),s._v("、"),a("code",[s._v("Teacher")]),s._v("子类的时候，我们可以通过抽象类"),a("code",[s._v("Person")]),s._v("类型区引用具体子类的实例")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Teacher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这种引用抽象类的好处在于，我们对其进行方法调用，并不关心Person类型变量的具体子类型：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不关心Person变量的具体子类型，在运行时能够根据它实际的子类型调用相应的方法")]),s._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("同样的代码，如果引用的是一个新的子类，我们仍然不关心具体类型：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同样不关心新的子类是如何实现run()方法的：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这种尽量引用高层类型，避免引用实际子类型的方式，称之为面向抽象编程。")]),s._v(" "),a("p",[s._v("面向抽象编程的本质就是：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("上层代码只定义规范（例如：abstract class Person）；")])]),s._v(" "),a("li",[a("p",[s._v("不需要子类就可以实现业务逻辑（正常编译）；")])]),s._v(" "),a("li",[a("p",[s._v("具体的业务逻辑由不同的子类实现，调用者并不关心。")])])]),s._v(" "),a("h2",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[s._v("#")]),s._v(" 接口")]),s._v(" "),a("p",[a("code",[s._v("interface")]),s._v("是比抽象类还要抽象的纯抽象接口，接口定义的所有方法默认都是"),a("code",[s._v("public abstract")]),s._v("的，所以在定义接口时可以省略，接口中的变量会被隐式指定为"),a("code",[s._v("public static final")]),s._v("。")]),s._v(" "),a("p",[s._v("从 Java 8 开始，接口也可以拥有默认的方法实现，这是因为不支持默认方法的接口的维护成本太高了。在 Java 8 之前，如果一个接口想要添加新的方法，那么要修改所有实现了该接口的类。")]),s._v(" "),a("p",[s._v("抽象类和接口的区别")]),s._v(" "),a("p",[s._v("语法层面")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("继承：一个类只能单继承一个抽象类，但可以实现多个接口")])]),s._v(" "),a("li",[a("p",[s._v("字段：抽象类可以定义各种类型的成员变量，而接口的成员变量只能是"),a("code",[s._v("public static final")]),s._v("类型的（常量）")])]),s._v(" "),a("li",[a("p",[s._v("方法：抽象类可以定义非抽象方法，接口可以定义default和static（JDK1.8后）方法（为了防止在接口中新增方法时影响其他已经实现了该接口的实现类报错[抽象方法必须被子类重写]而打的补丁）")])])]),s._v(" "),a("p",[s._v("设计层面")]),s._v(" "),a("ul",[a("li",[s._v("接口侧重功能设计，能够将具体实现与调用者隔离，降低模块间的耦合")]),s._v(" "),a("li",[s._v("抽象类侧重提升类的复用性，在原有的基础上预留扩展点供开发者灵活实现")])]),s._v(" "),a("h2",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[s._v("#")]),s._v(" 基本数据类型")]),s._v(" "),a("p",[s._v("Java中的几种基本数据类型是什么？对应的包装类型是什么？各自占用多少字节呢？\nJava中有8种基本数据类型，分别为：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("基本类型")]),s._v(" "),a("th",[s._v("位数")]),s._v(" "),a("th",[s._v("字节")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("int")]),s._v(" "),a("td",[s._v("32")]),s._v(" "),a("td",[s._v("4")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("short")]),s._v(" "),a("td",[s._v("16")]),s._v(" "),a("td",[s._v("2")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("long")]),s._v(" "),a("td",[s._v("64")]),s._v(" "),a("td",[s._v("8")]),s._v(" "),a("td",[s._v("0L")])]),s._v(" "),a("tr",[a("td",[s._v("byte")]),s._v(" "),a("td",[s._v("8")]),s._v(" "),a("td",[s._v("1")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("char")]),s._v(" "),a("td",[s._v("16")]),s._v(" "),a("td",[s._v("2")]),s._v(" "),a("td",[s._v("'u0000'")])]),s._v(" "),a("tr",[a("td",[s._v("float")]),s._v(" "),a("td",[s._v("32")]),s._v(" "),a("td",[s._v("4")]),s._v(" "),a("td",[s._v("0f")])]),s._v(" "),a("tr",[a("td",[s._v("double")]),s._v(" "),a("td",[s._v("64")]),s._v(" "),a("td",[s._v("8")]),s._v(" "),a("td",[s._v("0d")])]),s._v(" "),a("tr",[a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("1")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("p",[s._v("对于boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现，一般当做int变量来处理，占4个字节。逻辑上理解是占用 1位，但是实际中会考虑计算机高效存储因素。")]),s._v(" "),a("p",[s._v("Java中负数是如何存储的？")]),s._v(" "),a("p",[s._v("以-1为例，取其绝对值的原码，在取该原码的补码。")]),s._v(" "),a("p",[s._v("为何如此？")]),s._v(" "),a("p",[s._v("计算机中只有加法，所以计算减法的时候需要将减法传为加法。计算 a - b 就相当于 a + (-b)，对应的把他们的二进制相加就能够得到结果，正数用原码表示，而负数用其相反数原码的补码表示。")]),s._v(" "),a("p",[s._v("什么是包装类？")]),s._v(" "),a("p",[s._v("Java 设计当初就提供了 8 种 基本数据类型及对应的 8 种包装数据类型。Java中一切皆对象，包装类型正是为了解决基本数据类型无法面向对象编程所提供的。")]),s._v(" "),a("p",[s._v("什么情况下只能用包装类？")]),s._v(" "),a("ul",[a("li",[s._v("使用泛型的时候")]),s._v(" "),a("li",[s._v("成员变量中基本数据类型初始化为0，而包装类型为null，如果值初始化不允许是0，则可以使用包装类型")]),s._v(" "),a("li",[s._v("方法参数中可能接受到的是空值")])]),s._v(" "),a("p",[s._v("自动装箱")]),s._v(" "),a("p",[s._v("自动装箱即自动将基本数据类型转换成包装类型，实际上自动装箱调用的是"),a("code",[s._v("Integer.valueOf()")]),s._v("方法。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认缓存[-128, 127]的数，上界可以虚拟机参数-XX:AutoBoxCacheMax来配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("自动拆箱")]),s._v(" "),a("p",[s._v("自动拆箱即自动将包装类型转换成包装类型，即调用的是"),a("code",[s._v("intValue()")]),s._v("方法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("自动拆箱和自动装箱的坑")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" n1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" n2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" n3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" n4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true，自动装箱，n1和n2都是用的在方法区的常量缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" n4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不同的对象，比较的是引用地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printlb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true，先拆箱，再比较")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);