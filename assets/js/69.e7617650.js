(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{552:function(v,_,t){"use strict";t.r(_);var s=t(4),i=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("数据链路层的基本概念")]),v._v(" "),t("p",[v._v("数据链路层使用的信道主要有两种类型")]),v._v(" "),t("ul",[t("li",[v._v("点对点信道：这种信道使用一对一的点对点通信方式")]),v._v(" "),t("li",[v._v("广播信道：这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发送。")])]),v._v(" "),t("p",[v._v("链路与数据链路")]),v._v(" "),t("ul",[t("li",[v._v("链路：一条点到点的物理线路段，中间没有任何其他的交换结点")]),v._v(" "),t("li",[v._v("数据链路：除了物理线路外，还必须有通信协议来控制这些数据的传输，若把实现这些协议的硬件和软件加到链路上，这就构成了数据链路。现最常用的方法是使用适配器（即网卡）来实现这些协议的硬件和软件，一般的适配器都包括了数据链路层和物理层这两层功能。")])]),v._v(" "),t("p",[v._v("数据链路层的三个基本问题")]),v._v(" "),t("ul",[t("li",[v._v("封装成帧")]),v._v(" "),t("li",[v._v("透明传输")]),v._v(" "),t("li",[v._v("差错检测")])]),v._v(" "),t("p",[v._v("封装成帧")]),v._v(" "),t("p",[v._v("封装成帧就是在一段数据的前后分别添加首部和尾部，然后构成了一个帧，首部和尾部的一个重要作用就是进行帧定界。")]),v._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7.png",alt:"封装成帧"}}),v._v(" "),t("p",[v._v("作用")]),v._v(" "),t("ul",[t("li",[v._v("区分两个不同的帧")]),v._v(" "),t("li",[v._v("当只收到帧首部而没有收到帧尾时，可以判断该帧在传输时或者过程中出错了，应该丢弃该帧")])]),v._v(" "),t("p",[v._v("透明传输")]),v._v(" "),t("p",[v._v("在传输文本格式的数据时（字节为单位发送和接受），可以使用非字符标识作为帧首部和帧尾部，但是传输图片或者视频时就需要填充字节转义来实现透明传输。")]),v._v(" "),t("p",[v._v("在数据链路层透明传送数据表示无论什么样的比特组合的数据，都能够按照原样没有差错地通过这个数据链路层。")]),v._v(" "),t("p",[v._v("发送端的数据链路层在数据中出现控制字符“SOH”或“EOT”的前面插入一个转义字符“ESC”(其十六进制编码是1B)。")]),v._v(" "),t("p",[v._v("字节填充(byte stuffing)或字符填充(character stuffing)——接收端的数据链路层在将数据送往网络层之前删除插入的转义字符。如果转义字符也出现数据当中，那么应在转义字符前插入一个转义字符。当接收端收到连续的两个转义字符时，就删除其中前面的一个。")]),v._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%AD%97%E8%8A%82%E5%A1%AB%E5%85%85%E6%B3%95.png",alt:"字节填充法"}}),v._v(" "),t("p",[v._v("差错控制")]),v._v(" "),t("p",[v._v("传输过程中可能会产生比特差错：1 可能会变成 0 而 0 也可能变成 1。")]),v._v(" "),t("p",[v._v("循环冗余检验 CRC")]),v._v(" "),t("p",[v._v("冗余码的计算举例")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("现在 k = 6, M = 101001，M是待发送数据。\n设 n = 3, 除数 P = 1101，\n被除数是 2^n * M = 101001000。 \n模 2 运算的结果是：商 Q = 110101，\n           余数 R = 001。\n把余数 R 作为冗余码添加在数据 M 的后面发送出去。发送的数据是：2^n * M + R \n   即：101001001，共 (k + n) 位。\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br")])]),t("p",[v._v("检验，用接收到的数据除以P")]),v._v(" "),t("ul",[t("li",[v._v("若得出的余数R = 0，则判定这个帧没有差错，就接受")]),v._v(" "),t("li",[v._v("若余数不为0，则判定这个帧有差错，就丢弃")])]),v._v(" "),t("p",[v._v("并不一定保证准确。当选择的除数越长，检错的能力就越强。")]),v._v(" "),t("p",[v._v("点对点协议PPP")]),v._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/PPP%E5%8D%8F%E8%AE%AE.png",alt:"PPP协议"}}),v._v(" "),t("p",[v._v("互联网用户通常都要连接到某个ISP才能接入到互联网，PPP协议就是用户计算机和ISP进行通信时所使用的数据链路层协议。")]),v._v(" "),t("p",[v._v("广播信道")]),v._v(" "),t("p",[v._v("广播信道可以进行一对多的通信，局域网使用的就是广播信道。局域网具有广播功能，从一个站点可很方便地访问全网，局域网上的主机可共享连接在局域网上的各种硬件和软件资源，广播信道上使用的协议是CSMA/CD协议。")]),v._v(" "),t("p",[v._v("如果使用广播信道要点对点传输，那么帧里面的mac地址就要写具体哪一台主机的mac地址，如果广播通信则使用全F表示在局域网内部所有主机都要接受该帧。")]),v._v(" "),t("p",[v._v("CSMA/CD协议")]),v._v(" "),t("ul",[t("li",[v._v("多点接入：使用在总线性网络上，许多计算机以多点接入的方式连接在一根总线上。")]),v._v(" "),t("li",[v._v("载波监听：是指每一个站在发送数据之前先要检测一下总线上是否有其他计算机在发送数据，如果有，则暂时不要发送数据，以免发生碰撞。")]),v._v(" "),t("li",[v._v("碰撞检测：就是计算机边发送数据边检测信道上的信号电压大小。当几个站同时在总线上发送数据时，总线上的信号电压摆动值将会增大（互相叠加）。当一个站检测到的信号电压摆动值超过一定的门限值时，就认为总线上至少有两个站同时在发送数据，表明产生了碰撞。")])]),v._v(" "),t("p",[v._v("p45 https://www.bilibili.com/video/BV17p411f7ZZ?p=45")])])}),[],!1,null,null,null);_.default=i.exports}}]);