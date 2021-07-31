(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{594:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简单动态字符串-simple-dynamic-string-sds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单动态字符串-simple-dynamic-string-sds"}},[s._v("#")]),s._v(" 简单动态字符串（simple dynamic string，SDS）")]),s._v(" "),a("p",[s._v("Redis没有直接使用C语言传统的字符串表示（以空字符串结尾的字符数组，以下简称C字符串），而是自己构建了一种名为简单动态字符串的抽象类型，并将SDS用作Redis的默认字符串表示。")]),s._v(" "),a("p",[s._v("SDS的定义")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录buf数组中已使用字节的数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等于SDS所保存字符串的长度")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录buf数组中未使用字节的数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字节数组，用于保存字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("SDS相较于C字符串的好处")]),s._v(" "),a("p",[s._v("一、常数复杂度获取字符串长度")]),s._v(" "),a("p",[s._v("因为C字符串并不记录自身的长度信息，所以为了获取一个C字符串的长度，必须遍历整个字符串，直到遇到代表字符串结尾的空字符'\\0'为止，这个操作的时间复杂度是O(N)。")]),s._v(" "),a("p",[s._v("而SDS在len属性中记录了SDS本身的长度，所以获取一个SDS长度的复杂度仅为O(1)。")]),s._v(" "),a("p",[s._v("二、减少修改字符串时带来的内存重分配次数")]),s._v(" "),a("p",[s._v("因为C字符串并不记录自身的长度，所以对于一个包含了N个字符的C字符串来说，这个C字符串的底层实现总是一个N+1个字符长的数组（额外一个字符空间用于保存空字符），C语言以末尾'\\0'来隐式表示数组长度的做法导致每次增长或者缩短一个C字符串，程序都总要对保存这个C字符串的数组进行一次内存重分配的操作：")]),s._v(" "),a("ul",[a("li",[s._v("如果要增长字符串，程序需要先通过内存重分配来扩展底层数组的空间大小，如果没有这步就会导致缓冲区溢出")]),s._v(" "),a("li",[s._v("如果要缩短字符串操作，程序需要通过内存重分配来释放字符串不再使用的那部分空间，如果没有则会产生内存泄露")])]),s._v(" "),a("p",[s._v("内存重分配会涉及到系统调用，它是一个比较耗时的操作。")]),s._v(" "),a("p",[s._v("Redis作为数据库，经常被用于速度要求严苛、数据被频繁修改的场合，为了避免C字符串的这种缺陷，SDS通过未使用空间解除了字符串长度和底层数组长度之间的关联：在SDS中，buf数组可以包含未使用的字节，这个字节数由free记录。通过未使用空间，SDS实现了空间预分配和惰性空间释放两种优化策略。")]),s._v(" "),a("p",[s._v("空间预分配")]),s._v(" "),a("p",[s._v("空间预分配用于优化SDS的字符串增长操作：当SDS的API对一个SDS进行修改，并且需要对SDS进行空间扩展的时候，程序不仅会对SDS分配修改所必要的空间，还会为SDS分配额外的未使用的空间，其空间预分配的策略如下：")]),s._v(" "),a("ul",[a("li",[s._v("如果对SDS进行修改之后，SDS的长度小于1MB，那么程序分配和len属性同样大小的未使用空间，即free=len")]),s._v(" "),a("li",[s._v("如果对SDS进行修改之后，SDS的长度将大于等于1MB，那么程序只会分配1MB的未使用空间")])]),s._v(" "),a("p",[s._v("在扩展SDS空间之前，SDS API会先检查未使用空间是否足够，如果足够，API就会直接使用未使用空间，而无需执行内存重分配。通过这种预分配策略，SDS将连续增长N次字符串所需的内存重分配次数从必定N次降低为最多N次。")]),s._v(" "),a("p",[s._v("惰性空间释放")]),s._v(" "),a("p",[s._v("惰性空间释放用于优化SDS的字符串缩短操作：当SDS的API需要缩短SDS保存的字符串时，程序并不立即使用内存重分配来回收缩短后多出来的字节，而是使用free属性将这些字节的数量记录起来，并等待将来使用。")]),s._v(" "),a("p",[s._v("与此同时，SDS也提供了相应的API，让我们可以在有需要的时候，真正地释放SDS的未使用空间，所以不用担心惰性空间释放策略会操作内存浪费。")]),s._v(" "),a("p",[s._v("三、二进制安全")]),s._v(" "),a("p",[s._v("C字符串中的字符必须符合某种编码（比如ASCII），并且除了字符串的末尾之外，字符串里面不能包含空字符，否则最先被程序读入的空字符将被误认为是字符串结尾，这些现在使得C字符串只能保存文本数据，而不能保存像图片、音频、视频、压缩文件这样的二进制数据，因为这些数据中可能会出现空字符。")]),s._v(" "),a("p",[s._v("SDS不仅可以保存文本数据，还可以保存任意格式的二进制数据，因为SDS使用len属性的值而不是空字符来判断字符串是否结束。")]),s._v(" "),a("p",[s._v("四、兼容部分 C 字符串函数")]),s._v(" "),a("p",[s._v("虽然 SDS 的 API 都是二进制安全的，但它们一样遵循 C 字符串以空字符结尾的惯例：这些 API 总会将 SDS 保存的数据的末尾设置为空字符，并且总会在为 buf 数组分配空间时多分配一个字节来容纳这个空字符，这是为了让那些保存文本数据的 SDS 可以重用一部分<string.h> 库定义的函数。")]),s._v(" "),a("p",[s._v("总结")]),s._v(" "),a("p",[s._v("C字符串和SDS之间的区别总结")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("C字符串")]),s._v(" "),a("th",[s._v("SDS")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("获取字符串长度的复杂度为O(N)")]),s._v(" "),a("td",[s._v("获取字符串长度的复杂度为O(1)")])]),s._v(" "),a("tr",[a("td",[s._v("API是不安全的，可能会造成缓冲区溢出")]),s._v(" "),a("td",[s._v("API是安全的，不会造成缓冲区溢出")])]),s._v(" "),a("tr",[a("td",[s._v("修改字符串长度N次必然需要执行N次内存重分配")]),s._v(" "),a("td",[s._v("修改字符串长度N次最多需要执行N次内存重分配")])]),s._v(" "),a("tr",[a("td",[s._v("只能保存文本数据")]),s._v(" "),a("td",[s._v("可以保存文本或者二进制数据")])]),s._v(" "),a("tr",[a("td",[s._v("可以使用所有<string.h>库中的函数")]),s._v(" "),a("td",[s._v("可以使用一部分<string.h>库中的函数")])])])]),s._v(" "),a("h2",{attrs:{id:"链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[s._v("#")]),s._v(" 链表")]),s._v(" "),a("p",[s._v("列表键的底层实现就是一个链表。")]),s._v(" "),a("p",[s._v("每个链表结点使用一个adlist.h/listNode结构来表示：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("listNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前置结点")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("listNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后置结点")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("listNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结点的值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("Redis中还使用adlist.h/list来持有一条链表：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表头结点")]),s._v("\n    listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表尾结点")]),s._v("\n    listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链表所包含的结点数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结点值复制函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结点值释放函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结点值对比函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("dup、free和match成员则是用于实现多态链表所需的类型特定函数")]),s._v(" "),a("ul",[a("li",[s._v("dup函数用于复制链表结点所保存的值")]),s._v(" "),a("li",[s._v("free函数用于释放链表结点锁保存的值")]),s._v(" "),a("li",[s._v("match函数则用于对比链表结点所保存的值和另一个输入值是否相等")])]),s._v(" "),a("p",[s._v("下图是由一个list结构和三个listNode结构组成的链表")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/redis%E5%88%97%E8%A1%A8%E9%94%AE.png",alt:"redis列表键"}}),s._v(" "),a("h2",{attrs:{id:"字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典"}},[s._v("#")]),s._v(" 字典")]),s._v(" "),a("p",[s._v("Redis的数据库的底层实现是字典，对数据库的增、删、查、改操作也是构建在对字典的操作之上的。")]),s._v(" "),a("p",[s._v("例如，当我们执行命令")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('redis> set msg "hello world"\nok\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('在数据库中创建一个键为"msg"，值为"hello world"的键值对时，这个键值对就是保存在代表数据库的字典里面的。')]),s._v(" "),a("p",[s._v("除了用来表示数据库之外，字典还是哈希键的底层实现之一。")]),s._v(" "),a("h3",{attrs:{id:"字典的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典的实现"}},[s._v("#")]),s._v(" 字典的实现")]),s._v(" "),a("p",[s._v("redis的字典使用哈希表作为底层实现，一个哈希表里面可以有多个哈希表节点，而每个哈希表节点就保存了字典中的一个键值对。")]),s._v(" "),a("h4",{attrs:{id:"哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[s._v("#")]),s._v(" 哈希表")]),s._v(" "),a("p",[s._v("Redis字典所使用的哈希表由dict.h/dictht结构定义")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct dictht{\n    // 哈希表数组，数组中每个元素都是一个指向dictEntry结构的指针\n    dictEntry **table;\n    // 哈希表大小\n    unsigned long size;\n    // 哈希表大小掩码，用于计算索引值，总是等于size-1\n    unsigned long sizemask;\n    // 该哈希表已有节点数量\n    unsigned long used;\n}dictht;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"哈希表节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希表节点"}},[s._v("#")]),s._v(" 哈希表节点")]),s._v(" "),a("p",[s._v("哈希表节点使用dictEntry结构表示，每个dictEntry结构都保存着一个键值对：")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct dictEntry{\n    // 键\n    void *key;\n    // 值\n    union{\n        void *val;\n        uint64_tu64;\n        int64_ts64;\n    }v;\n    // 指向下个哈希表节点，形成链表\n    struct dictEntry *next;\n}dictEntry;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"字典-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典-2"}},[s._v("#")]),s._v(" 字典")]),s._v(" "),a("p",[s._v("Redis中的字典由dict.h/dict结构表示：")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct dict{\n    // 类型特定函数\n    dictType *type;\n    // 私有数据\n    void *privdate;\n    // 哈希表\n    dictht ht[2];\n    // rehash索引\n    // 当rehash不在进行时，值为-1\n    int rehashindex;\n}dict;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("type属性和privdata属性是针对不同类型的键值对，为创建多态字典而设置的：")]),s._v(" "),a("ul",[a("li",[s._v("type属性是一个指向dictType结构的指针，每个dictType结构保存了一簇用于操作特定类型键值对的函数，Redis会为用途不同的字典设置不同类型特定函数")]),s._v(" "),a("li",[s._v("而privdata属性则保存了需要传给那些类型特定函数的可选参数")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct dictType{\n    // 计算哈希值的函数\n    unsigned int (*hashFunction)(const void *key);\n    // 复制键的函数\n    void *(*keyDup)(void *privadata, const void *key);\n    // 复制值的函数\n    void *(*valDup)(void *privdata, const void *obj);\n    // 对比键的函数\n    int (*keyCompare)(void *privdata, const void *key1, const void *key2);\n    // 销毁键的函数\n    void (*keyDestructor)(void *privdata, void *key);\n    // 销毁值的函数\n    void (*valDestructor)(void *privdata, void *obj);\n}dictType;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("字典结构如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/redis%E5%AD%97%E5%85%B8.png",alt:"redis字典"}})]),s._v(" "),a("h3",{attrs:{id:"哈希算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法"}},[s._v("#")]),s._v(" 哈希算法")]),s._v(" "),a("p",[s._v("当要将一个新的键值对添加到字典里面时，程序需要先根据键值对的键计算出哈希值和索引值，然后再根据索引值，将包含新键值对的哈希表结点放到哈希表数组的指定索引上面")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hash = dict->type->hashFunction(key);\nindex = hash & dict->ht[x].sizemask;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"解决键冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决键冲突"}},[s._v("#")]),s._v(" 解决键冲突")]),s._v(" "),a("p",[s._v("当有两个或以上数量的键被分配到了哈希表数组的同一个索引上面时，我们称这些键发生了冲突。")]),s._v(" "),a("p",[s._v("Redis使用链地址法来解决键冲突，被分配到同一个索引上的多个结点可以用单向链表连接起来。为了速度考虑，程序总是将新结点添加到链表的表头位置。")]),s._v(" "),a("h3",{attrs:{id:"rehash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rehash"}},[s._v("#")]),s._v(" rehash")]),s._v(" "),a("p",[s._v("Redis对字典的哈希表执行rehash的步骤如下：")]),s._v(" "),a("ul",[a("li",[s._v("为字典的ht[1]哈希表分配空间\n"),a("ul",[a("li",[s._v("如果执行的是扩展操作，那么ht[1]的大小为第一个大于等于ht[0].used*2的2^n（2的n次方幂）")]),s._v(" "),a("li",[s._v("如果执行的是收缩操作，那么ht[1]的大小为第一个大于等于ht[0].used的2^n")])])]),s._v(" "),a("li",[s._v("将保存在ht[0]中的所有键值对rehash到ht[1]上面")]),s._v(" "),a("li",[s._v("当ht[0]包含的所有键值对都迁移到了ht[1]之后（ht[0]变为空表），释放ht[0]，将ht[1]设置为ht[0]，并在ht[1]新创建一个空白哈希表，为下一次rehash做准备")])]),s._v(" "),a("p",[s._v("哈希表扩展与收缩的时机")]),s._v(" "),a("p",[s._v("扩展时机")]),s._v(" "),a("ul",[a("li",[s._v("服务器目前没有在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于1")]),s._v(" "),a("li",[s._v("服务器目前正在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于5")])]),s._v(" "),a("p",[s._v("收缩")]),s._v(" "),a("ul",[a("li",[s._v("当哈希表的负载因子小于0.1时，程序自动开始对哈希表执行收缩操作")])]),s._v(" "),a("p",[s._v("其中哈希表的负载因子可以通过公式得出：")]),s._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("mi",[s._v("a")]),a("mi",[s._v("d")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("_")]),a("mi",[s._v("f")]),a("mi",[s._v("a")]),a("mi",[s._v("c")]),a("mi",[s._v("t")]),a("mi",[s._v("o")]),a("mi",[s._v("r")]),a("mo",[s._v("=")]),a("mi",[s._v("h")]),a("mi",[s._v("t")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(".")]),a("mi",[s._v("u")]),a("mi",[s._v("s")]),a("mi",[s._v("e")]),a("mi",[s._v("d")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("/")]),a("mi",[s._v("h")]),a("mi",[s._v("t")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(".")]),a("mi",[s._v("s")]),a("mi",[s._v("i")]),a("mi",[s._v("z")]),a("mi",[s._v("e")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("load\\_factor= ht[0].used/ht[0].size\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.00444em","vertical-align":"-0.31em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathdefault"},[s._v("o")]),a("span",{staticClass:"mord mathdefault"},[s._v("a")]),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord",staticStyle:{"margin-right":"0.02778em"}},[s._v("_")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathdefault"},[s._v("a")]),a("span",{staticClass:"mord mathdefault"},[s._v("c")]),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mord mathdefault"},[s._v("o")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("h")]),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mord"},[s._v(".")]),a("span",{staticClass:"mord mathdefault"},[s._v("u")]),a("span",{staticClass:"mord mathdefault"},[s._v("s")]),a("span",{staticClass:"mord mathdefault"},[s._v("e")]),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord"},[s._v("/")]),a("span",{staticClass:"mord mathdefault"},[s._v("h")]),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mord"},[s._v(".")]),a("span",{staticClass:"mord mathdefault"},[s._v("s")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.04398em"}},[s._v("z")]),a("span",{staticClass:"mord mathdefault"},[s._v("e")])])])])])]),s._v(" "),a("p",[s._v("根据BGSAVE命令或BGREWRITEAOF命令是否正在执行，服务器执行扩展操作所需的负载因子并不相同，这是因为在执行BGSAVE命令或BGREWRITEAOF命令过程中，Redis需要创建当前服务器进程的子进程，而大多数操作系统都采用写时复制（copy-on-write）技术来优化子进程的使用效率，所以在子进程存在期间，服务器会提高执行扩展操作所需的负载因子，从而尽可能地避免在子进程存在期间进行哈希表扩展操作，这可以避免不必要的内存写入操作，最大限度地节约内存。")]),s._v(" "),a("p",[s._v("渐进式rehash")]),s._v(" "),a("p",[s._v("详细步骤")]),s._v(" "),a("ul",[a("li",[s._v("为ht[1]分配空间，让字典同时持有ht[0]和ht[1]两个哈希表")]),s._v(" "),a("li",[s._v("在字典中维持一个索引计数器变量rehashidx，并将它的值设置为0，表示rehash工作正是开始")]),s._v(" "),a("li",[s._v("在rehash进行期间，每次对字典执行添加、删除、查找或者更新操作时，程序除了执行指定的操作以外，还会顺带将ht[0]哈希表在rehashidx索引上的所有键值对rehash到ht[1]，但rehash工作完成之后，程序将rehashidx属性的值增一")]),s._v(" "),a("li",[s._v("随着字典操作的不断执行，最终在某个时间点上，ht[0]的所有键值对都会被rehash至ht[1]，这时程序将rehashidx属性的值设为-1，表示rehash操作已完成")])]),s._v(" "),a("p",[s._v("渐进式rehash的好处在于它采取分而治之的方式，将rehash键值对所需的计算工作均摊到对字典的每个添加、删除、查找和更新操作上，从而避免了集中式rehash而带来的庞大计算量。")]),s._v(" "),a("p",[s._v("在渐进式rehash的过程中，字典会同时使用ht[0]和ht[1]两个哈希表，所以在渐进式rehash进行期间，字典的删除、查找、更新等操作会在两个哈希表上进行，例如要在字典上查找一个键的话，程序会现在ht[0]里面进行查找，如果没找到的话，就会继续到ht[1]里面进行查找。此外，新添加到字典的键值对一律会被保存到ht[1]里面。")]),s._v(" "),a("h2",{attrs:{id:"跳跃表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表"}},[s._v("#")]),s._v(" 跳跃表")]),s._v(" "),a("p",[s._v("Redis使用跳跃表作为有序集合键(zset)的底层实现，大部分情况下，跳跃表的效率可以和平衡树相媲美，并且因为跳跃表的实现比平衡树要来得更为简单，所以有不少程序都使用跳跃表来代替平衡树。")]),s._v(" "),a("p",[s._v("跳跃表支持平均O(logN)、最坏O(N)复杂度的结点查找，还可以通过顺序性操作来批量处理结点。")]),s._v(" "),a("p",[s._v("跳跃表的实现")]),s._v(" "),a("p",[s._v("redis.h/zskiplist结构用于保存跳跃表节点的相关信息")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct zskiplist{\n    // 表头节点和表尾节点\n    struct zskiplistNode *header, *tail;\n    // 表中节点的数量\n    unsigned long length;\n    // 表中层数最大的结点层数\n    int level;\n}zskiplist;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("redis.h/zskiplistNode结构表示跳跃表节点")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct zskiplistNode {\n    // 层\n    struct zskiplistLevel {\n        // 前进指针\n        struct skiplistNode *forward;\n        // 跨度，记录前进指针指向的结点与当前结点的距离\n        unsigned int span;\n    } level[];\n    // 后退指针\n    struct zskiplistNode *backward;\n    // 分值，结点按照分值从小到大排序\n    double score;\n    // 成员对象\n    robj *obj;\n} zskiplistNode;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("层")]),s._v(" "),a("p",[s._v("跳跃表节点的level数组可以包含多个元素，每个元素都包含一个指向其他节点的指针，程序可以通过这些层来加快访问其他节点的速度。每次创建一个新跳跃表节点的时候，程序都根据幂次定律（power law，越大的数出现的概率越小）随机生成一个介于1和32之间的值作为level数组的大小，这个大小就是层的“高度”。")]),s._v(" "),a("p",[s._v("分值和成员")]),s._v(" "),a("p",[s._v("节点的分值是一个double类型的浮点数，跳跃表中的所有节点都按分值从小到大来排序")]),s._v(" "),a("p",[s._v("节点的成员对象是一个指针，它指向一个字符串对象，而字符串对象则保存着一个SDS值。同一个跳跃表中，各个节点保存的成员对象必须是唯一的（如何保证唯一？用set？），但是多个节点保存的分值可以是相同的：分值相同的节点按照成员对象在字典序中的大小来进行排序。")]),s._v(" "),a("p",[s._v("跳跃表图示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/redis%E8%B7%B3%E8%B7%83%E8%A1%A8.png",alt:"redis跳跃表"}})]),s._v(" "),a("p",[s._v("跳跃表API")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("函数")]),s._v(" "),a("th",[s._v("作用")]),s._v(" "),a("th",[s._v("时间复杂度")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("zslInsert")]),s._v(" "),a("td",[s._v("将包含给定成员和分值的新结点添加到跳跃表")]),s._v(" "),a("td",[s._v("平均O(logN)，最坏O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("zslDelete")]),s._v(" "),a("td",[s._v("删除跳跃表中包含给定成员和分值的结点")]),s._v(" "),a("td",[s._v("平均O(logN)，最坏O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("zslGetRank")]),s._v(" "),a("td",[s._v("返回包含给定成员和分值的结点在跳跃表中的排位")]),s._v(" "),a("td",[s._v("平均O(logN)，最坏O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("zslDeleteRangeByScore")]),s._v(" "),a("td",[s._v("给定一个分值范围，删除跳跃表中所有在这个范围之内的结点")]),s._v(" "),a("td",[s._v("O(N)")])]),s._v(" "),a("tr",[a("td",[s._v("zslDeleteRangeByRank")]),s._v(" "),a("td",[s._v("给定一个排位范围，删除跳跃表中所有在这个范围之内的结点")]),s._v(" "),a("td",[s._v("O(N)")])])])]),s._v(" "),a("h2",{attrs:{id:"整数集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数集合"}},[s._v("#")]),s._v(" 整数集合")]),s._v(" "),a("p",[s._v("整数集合（intset）是集合键（set）的底层实现之一，当一个集合只包含整数值元素，并且这个集合的元素数量不多时，Redis就会使用整数集合作为集合键的底层实现。")]),s._v(" "),a("p",[s._v("整数集合的实现")]),s._v(" "),a("p",[s._v("每个intset.h/intset结构表示一个整数集合")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct intset{\n    // 编码方式\n    uint32_t encoding;\n    // 集合包含的元素数量\n    uint32_t length;\n    // 保存元素的数组\n    int8_t contents[];\n} intset;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("contents数组是整数集合的底层实现：整数集合的每个元素都是contents数组的一个数组项（item），各个项在数组中按值的大小从小到大有序地排列，并且数组中不包含任何重复项。")]),s._v(" "),a("p",[s._v("示例：encoding属性的值为INTSET_ENC_INT16，表示整数集合的底层实现为int16_t类型的数组，数组中每个整数的类型都是int16_t")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Redis%E6%95%B4%E6%95%B0%E9%9B%86%E5%90%88.png",alt:"Redis整数集合"}})]),s._v(" "),a("p",[s._v("升级")]),s._v(" "),a("p",[s._v("每当我们要将一个新元素添加到整数集合里面，并且新元素的类型比整数集合现有元素的类型都要长时，整数集合需要先进行升级，然后才能将新元素添加到整数集合里面。")]),s._v(" "),a("h2",{attrs:{id:"压缩列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩列表"}},[s._v("#")]),s._v(" 压缩列表")]),s._v(" "),a("p",[s._v("压缩列表是列表键和哈希键的底层实现之一，当一个列表键只包含少量列表键，并且每个列表项要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做列表键的底层实现。")]),s._v(" "),a("p",[s._v("另外，当一个哈希键只包含少量键值对，并且每个键值对的键和值要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做哈希键的底层实现。")]),s._v(" "),a("h2",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),a("p",[s._v("Redis使用对象来表示数据库中的键和值，每当我们在Redis的数据库中新建一个键值对时，我们至少会创建两个对象，一个对象用作键值对的键（键对象），另一个对象用于键值对的值（值对象）。对于Redis数据库保存的键值对来说，键总是一个字符串对象。")]),s._v(" "),a("p",[s._v("Redis中每个对象都由一个redisObject结构表示")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct redisObject{\n    // 类型\n    unsigned type;\n    // 编码\n    unsigned encoding;\n    // 指向底层实现数据结构的指针\n    void *ptr;\n    // ...\n}robj;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("type")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("类型常量")]),s._v(" "),a("th",[s._v("对象的名称")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("REDIS_STRING")]),s._v(" "),a("td",[s._v("字符串对象")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_LIST")]),s._v(" "),a("td",[s._v("列表对象")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_HASH")]),s._v(" "),a("td",[s._v("哈希对象")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_SET")]),s._v(" "),a("td",[s._v("集合对象")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ZSET")]),s._v(" "),a("td",[s._v("有序集合对象")])])])]),s._v(" "),a("p",[s._v("可以使用type命令查看数据库键对应的值对象的类型。")]),s._v(" "),a("p",[s._v("编码和底层实现")]),s._v(" "),a("p",[s._v("对象的ptr指针指向对象的底层实现数据结构，而这些数据结构由对象的encoding属性决定。")]),s._v(" "),a("p",[s._v("encoding记录了对象使用了什么数据结构作为对象的底层实现")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("编码常量")]),s._v(" "),a("th",[s._v("编码所对应的底层数据结构")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("REDIS_ENCODING_INT")]),s._v(" "),a("td",[s._v("long类型的整数")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_EMBSTR")]),s._v(" "),a("td",[s._v("embstr编码的简单动态字符串")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_RAW")]),s._v(" "),a("td",[s._v("简单动态字符串")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_HT")]),s._v(" "),a("td",[s._v("字典")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_LINKEDLIST")]),s._v(" "),a("td",[s._v("双端链表")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_ZIPLIST")]),s._v(" "),a("td",[s._v("压缩列表")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_INTSET")]),s._v(" "),a("td",[s._v("整数集合")])]),s._v(" "),a("tr",[a("td",[s._v("REDIS_ENCODING_SKIPLIST")]),s._v(" "),a("td",[s._v("跳跃表和字典")])])])]),s._v(" "),a("p",[s._v("为了节约内存，每种类型的对象都至少使用了两种不同的编码，注意不是同时使用，而是每次只能用一个编码。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Redis%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E5%92%8C%E7%BC%96%E7%A0%81%E7%9A%84%E5%AF%B9%E8%B1%A1.png",alt:"Redis不同类型和编码的对象"}})]),s._v(" "),a("p",[s._v("使用OBJECT ENCODING命令可以查看一个数据库键的值对象编码。")]),s._v(" "),a("h3",{attrs:{id:"字符串对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串对象"}},[s._v("#")]),s._v(" 字符串对象")]),s._v(" "),a("p",[s._v("字符串对象的编码可以是int、raw或者embstr。")]),s._v(" "),a("p",[s._v("如果一个字符串对象保存的是整数值，并且这个整数值可以用long类型来表示，那么字符串对象会将整数值保存在字符串对象结构的ptr属性里面（将void*转换成long），并将字符串对象的编码设置为int。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/Redis_int%E7%BC%96%E7%A0%81%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AF%B9%E8%B1%A1.png",alt:"Redis_int编码的字符串对象"}})]),s._v(" "),a("p",[s._v("如果字符串对象保存的是一个字符串值，并且这个字符串值的长度小于32字节，那么字符串对象将使用embstr编码的方式来保存这个字符串值。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/redis_embstr%E7%BC%96%E7%A0%81%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AF%B9%E8%B1%A1.png",alt:"redis_embstr编码的字符串对象"}})]),s._v(" "),a("p",[s._v("如果字符串对象保存的是一个字符串值，并且这个字符串值的长度大于32字节，那么字符串对象将使用一个简单动态字符串（SDS）来保存这个字符串值，并将对象的编码设置为raw。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/redis_raw%E7%BC%96%E7%A0%81%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AF%B9%E8%B1%A1.png",alt:"redis_raw编码的字符串对象"}})]),s._v(" "),a("p",[s._v("embstr编码与raw编码的区别")]),s._v(" "),a("p",[s._v("raw编码会调用两次内存分配函数来分别创建redisObject结构和sdshdr结构，而emstr编码则通过调用一次内存分配函数来分配一块连续的空间，空间中一次包含redisObject和sdshdr两个结构")]),s._v(" "),a("p",[s._v("embstr编码对比raw的优势")]),s._v(" "),a("ul",[a("li",[s._v("embstr编码将创建字符串对象所需的内存分配次数从raw编码的两次降低为一次。")]),s._v(" "),a("li",[s._v("释放embstr编码的字符串对象只需调用一次内存释放函数，而释放raw需要两次。")]),s._v(" "),a("li",[s._v("embstr编码的字符串对象的所有数据都保存在一块连续的内存里面，所以这种编码的字符串对象比起raw编码的字符串对象能够更好地利用缓存带来的优势（局部性原理）。")])]),s._v(" "),a("p",[s._v("编码的转换")]),s._v(" "),a("p",[s._v("对于int编码的字符串对象来说，如果我们向对象执行了一些命令，使得这个对象保存的不再是整数值，而是一个字符串值，那么字符串对象的编码将从int变为raw，例如append操作，不能转为embstr是因为它需要在redisObject尾部有空闲的空间，而实际上可能不存在。")]),s._v(" "),a("p",[s._v("Redis没有为embstr编码的字符串对象编写任何相应的修改程序，所以embstr编码的字符串对象实际上是只读的。当我们对embstr编码的字符串对象执行任何修改命令时，程序会先将对象的编码从embstr转换成raw，然后再执行修改命令。")])])}),[],!1,null,null,null);t.default=e.exports}}]);