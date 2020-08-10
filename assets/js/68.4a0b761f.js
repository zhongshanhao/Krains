(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{550:function(t,_,v){"use strict";v.r(_);var n=v(4),s=Object(n.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"局部性原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#局部性原理"}},[t._v("#")]),t._v(" 局部性原理")]),t._v(" "),v("p",[t._v("局部性原理表现在以下两个方面：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("时间局部性")]),t._v(" ：如果程序中的某条指令一旦执行，不久以后该指令可能再次执行；如果某数据被访问过，不久以后该数据可能再次被访问。产生时间局部性的典型原因，是由于在程序中存在着大量的循环操作。")]),t._v(" "),v("li",[v("strong",[t._v("空间局部性")]),t._v(" ：一旦程序访问了某个存储单元，在不久之后，其附近的存储单元也将被访问，即程序在一段时间内所访问的地址，可能集中在一定的范围之内，这是因为指令通常是顺序存放、顺序执行的，数据也一般是以向量、数组、表等形式簇聚存储的。")])]),t._v(" "),v("p",[t._v("在InnoDB中，数据会存储到磁盘上，在真正处理数据时需要先将数据加载到内存，表中读取某些记录时，InnoDB存储引擎不需要一条一条的把记录从磁盘上读出来，InnoDB采取的方式是：将数据划分为若干个页，以"),v("strong",[t._v("页作为磁盘和内存之间交互的基本单位")]),t._v("，InnoDB中页的大小一般为 16 KB，也就是说，当需要从磁盘中读数据时每一次最少将从磁盘中读取16KB的内容到内存中，每一次最少也会把内存中的16KB内容写到磁盘中。")]),t._v(" "),v("h2",{attrs:{id:"innodb数据页结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb数据页结构"}},[t._v("#")]),t._v(" InnoDb数据页结构")]),t._v(" "),v("p",[t._v("页是InnoDB管理存储空间的基本单位，一个页的大小默认是16KB")]),t._v(" "),v("h3",{attrs:{id:"页结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页结构"}},[t._v("#")]),t._v(" 页结构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/innodb%E9%A1%B5%E7%BB%93%E6%9E%84.png",alt:"innodb页结构"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("占用空间")]),t._v(" "),v("th",[t._v("简单描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("File Header（文件头部）")]),t._v(" "),v("td",[t._v("38字节")]),t._v(" "),v("td",[t._v("页的一些通用信息")])]),t._v(" "),v("tr",[v("td",[t._v("Page Header（页面头部）")]),t._v(" "),v("td",[t._v("56字节")]),t._v(" "),v("td",[t._v("数据页专有的一些信息")])]),t._v(" "),v("tr",[v("td",[t._v("Infimum + Supremum（最小记录和最大记录）")]),t._v(" "),v("td",[t._v("26字节")]),t._v(" "),v("td",[t._v("两个虚拟的行记录")])]),t._v(" "),v("tr",[v("td",[t._v("User Records（用户记录）")]),t._v(" "),v("td",[t._v("不确定")]),t._v(" "),v("td",[t._v("实际存储的行记录内容")])]),t._v(" "),v("tr",[v("td",[t._v("Free Space（空闲空间）")]),t._v(" "),v("td",[t._v("不确定")]),t._v(" "),v("td",[t._v("页中尚未使用的空间")])]),t._v(" "),v("tr",[v("td",[t._v("Page Directory（页面目录）")]),t._v(" "),v("td",[t._v("不确定")]),t._v(" "),v("td",[t._v("页中的某些记录的相对位置")])]),t._v(" "),v("tr",[v("td",[t._v("File Trailer（文件尾部）")]),t._v(" "),v("td",[t._v("8字节")]),t._v(" "),v("td",[t._v("校验页是否完整")])])])]),t._v(" "),v("h3",{attrs:{id:"innodb行格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb行格式"}},[t._v("#")]),t._v(" InnoDB行格式")]),t._v(" "),v("p",[t._v("一行记录可以以不同的格式存在InnoDB中,行格式分别是Compact、Redundant、Dynamic和Compressed行格\n式。\n我们可以在创建或修改表的语句中指定行格式:")]),t._v(" "),v("div",{staticClass:"language-mssql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("create table 表名（列的信息） row_format=行格式名称\nalter table 表名 row_format=行格式名称\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("Compact行格式")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/innodb%E4%B8%ADcompact%E8%A1%8C%E6%A0%BC%E5%BC%8F.png",alt:"innodb中compact行格式"}})]),t._v(" "),v("p",[t._v("记录的额外信息")]),t._v(" "),v("p",[t._v("这部分信息是服务器为了描述这条记录而不得不额外添加的一些信息，这些信息分3类，分别是:")]),t._v(" "),v("ul",[v("li",[t._v("变长字段长度列表")]),t._v(" "),v("li",[t._v("NULL值列表")]),t._v(" "),v("li",[t._v("记录头信息")])]),t._v(" "),v("p",[t._v("变长字段长度列表")]),t._v(" "),v("p",[t._v("MySQL支持一些变长的数据类型，比如VARCHAR(M)、VARBINARY(M)、TEXT类型，BLOB类型，这些数据类型\n修饰列称为变长字段，变长字段中存储多少字节的数据不是固定的，所以我们在存储真实数据的时候需要顺便把\n这些数据占用的字节数也存起来。在Compact行格式中，"),v("strong",[t._v("把所有变长字段的真实数据占用的字节长度都存放在记\n录的开头部位")]),t._v("，从而形成一个变长字段长度列表。")]),t._v(" "),v("blockquote",[v("p",[t._v("CHAR是一种固定长度的类型,VARCHAR则是一种可变长度的类型。\nVARCHAR(M),M代表最大能存多少个字符。( MySQL5.0.3以前是字节,以后就是字符)")])]),t._v(" "),v("p",[t._v("NULL值列表")]),t._v(" "),v("p",[t._v("Compact行格式会把可以为NULL的列统一管理起来,存一个标记为在NULL值列表中,如果表中没有允许存储\nNULL 的列,则 NULL值列表也不存在了。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("二进制位的值为1时,代表该列的值为NULL。")])]),t._v(" "),v("li",[v("p",[t._v("二进制位的值为0时,代表该列的值不为NULL。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("如有a,b,c 3个字段，若b为空，则列数据中没有存b，只存了a、c，如果没有这个NULL标志位，就无法判断哪个列对于哪个字段了这时候NULL值列表就为101。")])]),t._v(" "),v("p",[t._v("记录头信息")]),t._v(" "),v("p",[t._v("这是用于描述记录的记录头信息,它是由固定的5个字节组成。5个字节也就是40个二进制位,不同的位代表不同的意思,如图:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("大小（单位：bit）")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("预留位1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("没有使用")])]),t._v(" "),v("tr",[v("td",[t._v("预留位2")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("没有使用")])]),t._v(" "),v("tr",[v("td",[t._v("delete_mask")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("标志该记录是否被删除")])]),t._v(" "),v("tr",[v("td",[t._v("min_rec_mask")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("B+树的每层非叶子结点中的最小记录都会添加该标记")])]),t._v(" "),v("tr",[v("td",[t._v("n_owned")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("表示当前记录拥有的记录数")])]),t._v(" "),v("tr",[v("td",[t._v("heap_no")]),t._v(" "),v("td",[t._v("13")]),t._v(" "),v("td",[t._v("表示当前记录在记录堆的位置信息")])]),t._v(" "),v("tr",[v("td",[t._v("record_type")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("表示当前记录的类型，0表示普通记录，1表示B+树非叶子结点记录，2表示最小记录，3表示最大记录")])]),t._v(" "),v("tr",[v("td",[t._v("next_record")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[t._v("表示下一条记录的相对位置")])])])]),t._v(" "),v("p",[t._v("记录的真实数据")]),t._v(" "),v("p",[t._v("除了我们自己定义的列的数据以外，还有三个隐藏列：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("列名")]),t._v(" "),v("th",[t._v("是否必须")]),t._v(" "),v("th",[t._v("占用空间")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("row_id")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("6字节")]),t._v(" "),v("td",[t._v("行ID，唯一标识一条记录")])]),t._v(" "),v("tr",[v("td",[t._v("transaction_id")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("6字节")]),t._v(" "),v("td",[t._v("事务ID")])]),t._v(" "),v("tr",[v("td",[t._v("roll_pointer")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("7字节")]),t._v(" "),v("td",[t._v("回滚指针")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("实际上这几个列的真正名称其实是:DB_ROW_ID、DB_TRX_ID、DB_ROLL_PTR。")]),t._v(" "),v("p",[t._v("一个表没有手动定义主键,则会选取一个Unique键作为主键,如果连Unique键都没有定义的话,则会为表默认添加一个名为row_id的隐藏列作为主键,也会使用这个主键去创建默认索引。所以row_id是在没有自定义主键以及Unique键的情况下才会存在的。")])]),t._v(" "),v("p",[t._v("记录中的数据太多产生的溢出")]),t._v(" "),v("p",[t._v("一个页的大小一般是16KB,也就是16384字节,而一个VARCHAR(M)类型的列就最多可以存储65533个字节,这\n样就可能出现一个页存放不了一条记录。")]),t._v(" "),v("p",[t._v("在Compact和Reduntant行格式中,对于占用存储空间非常大的列,在记录的真实数据处只会存储该列的一部分\n数据,把剩余的数据分散存储在几个其他的页中,然后记录的真实数据处用20个字节存储指向这些页的地址(当\n然这20个字节中还包括这些分散在其他页面中的数据的占用的字节数),从而可以找到剩余数据所在的页。")]),t._v(" "),v("p",[t._v("Dynamic（默认使用的行格式）和Compressed行格式")]),t._v(" "),v("p",[t._v("这两种行格式类似于COMPACT行格式,只不过在处理行溢出数据时有点儿分歧,它们不会在记录的真实数据处\n存储一部分数据,而是把所有的数据都存储到其他页面中,只在记录的真实数据处存储其他页面的地址。另外,\nCompressed行格式会采用压缩算法对页面进行压缩。")]),t._v(" "),v("p",[t._v("数据的存储")]),t._v(" "),v("div",{staticClass:"language-mssql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("create table t1(\na int,\nb int,\nc int,\nd int,\ne varchar(20),\nprimary key (a)\n);\n\ninsert into t1 values(4,3,1,1,'d');\ninsert into t1 values(1,1,1,1,'1');\ninsert into t1 values(8,8,8,8,'h');\ninsert into t1 values(2,2,2,2,'b');\ninsert into t1 values(5,2,3,5,'e');\ninsert into t1 values(3,3,2,2,'c');\ninsert into t1 values(7,4,5,5,'g');\ninsert into t1 values(6,6,4,4,'f');\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br")])]),v("p",[v("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/mysql%E6%95%B0%E6%8D%AE%E8%A1%8C%E5%AD%98%E5%82%A8.png",alt:"mysql数据行存储"}})]),t._v(" "),v("p",[t._v("数据库中每一行数据存储在一个行格式中的列数据中，多个行放置在一个页中，取磁盘的数据时，会以页为单位将整个页放到内存中。")]),t._v(" "),v("p",[t._v("图中默认一个页最多能放4行数据，插入数据的时候会按照主键大小进行排序，比如插入a为4,1,8,2时，最终这四行数据会以"),v("strong",[t._v("链表")]),t._v("的形式按照1,2,4,8的顺序存放，页结构中有一个目录项，我们对行数据进行分组，图中以两个行数据为一组，将组头的主键放到目录项中，"),v("strong",[t._v("目录项是一个数组")]),t._v("，查询主键的时候可以使用二分法进行查询到对应组，再在组中遍历链表。")]),t._v(" "),v("p",[t._v("当一个页的数据满了的时候，会开辟另一个页，用来存放接下来的行数据，比如再次插入a为5这行数据时，会将8移动到新开辟的页中，5这行数据就放置在原来8的这个位置，当然插入数据的时候主键的顺序是乱序的话，需要进行频繁的移动和排序，这样效率比较低，因此建议设置主键自增长，这样插入数据的效率较高，同时也建议主键设置得比较小，因为主键会冗余的在目录页中存一份，并且如果主键设置得较大的话行数据就大了，页中放的行就少了，如果分多几个页的话会加深树的深度，查找的效率变低。")]),t._v(" "),v("p",[v("strong",[t._v("页与页之间也以指针连接，构成了一个双向链表。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/mysql%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A82.png",alt:"mysql数据存储2"}})]),t._v(" "),v("p",[t._v("最上面的是目录页，用来存储两个页的目录，它也拥有与下面两个页一样的结构，也会有目录项，行与行之间也会构成链表，只不过下面存的是真实的数据，上面存的是数据所在的位置。这就是简单的BTree+结构。")])])}),[],!1,null,null,null);_.default=s.exports}}]);