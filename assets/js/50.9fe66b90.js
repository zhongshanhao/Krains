(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{502:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"计算机网络体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络体系结构"}},[v._v("#")]),v._v(" 计算机网络体系结构")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/0fa6c237-a909-4e2a-a771-2c5485cd8ce0.png",alt:"计算机网络体系结构"}})]),v._v(" "),t("h3",{attrs:{id:"五层协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五层协议"}},[v._v("#")]),v._v(" 五层协议")]),v._v(" "),t("ul",[t("li",[v._v("应用层："),t("strong",[v._v("为特定应用程序提供数据传输服务")]),v._v("，该层有HTTP、DNS等协议。数据传输的单位为报文。")]),v._v(" "),t("li",[v._v("传输层："),t("strong",[v._v("为进程提供通用数据传输服务")]),v._v("。该层主要涉及两种协议：传输控制协议TCP：该协议提供面向连接、可靠的数据传输服务，其数据传输单位是报文段，还有用户数据报协议UDP：它提供无连接的服务、它不保证数据传输的可靠性，其数据传输单位是用户数据报。")]),v._v(" "),t("li",[v._v("网络层："),t("strong",[v._v("网络层的任务就是选择合适的网间路由和交换结点， 确保数据及时传送。")]),v._v(" 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。网络层使用的是IP协议,数据传输的单位是IP数据报。")]),v._v(" "),t("li",[v._v("数据链路层：链路层将网络层交下来的IP数据报"),t("strong",[v._v("组装成帧")]),v._v("，并在两个相邻节点间传输。该层数据传输的单位是帧。")]),v._v(" "),t("li",[v._v("物理层："),t("strong",[v._v("实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异")]),v._v("。该层数据传输的单位是比特。")])]),v._v(" "),t("h3",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[v._v("#")]),v._v(" UDP")]),v._v(" "),t("p",[v._v("UDP是传输层的协议，它是一个无连接的协议，传输数据之前源端口和目的端口不建立连接，当它想传送数据时就简单的抓取来自应用程序的数据，并尽可能快的把它扔到网络上，由于这个特性，UDP不能保证数据传输的可靠性，但是它不需要建立连接，发送数据的速度较快，因此可以用在数据传输速度要求高，但对可靠性要求不高的情况下使用，如视频通信、实时通信。")]),v._v(" "),t("h3",{attrs:{id:"udp用户数据报格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp用户数据报格式"}},[v._v("#")]),v._v(" UDP用户数据报格式")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/d4c3a4a1-0846-46ec-9cc3-eaddfca71254.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("UDP传输数据的单位是用户数据报，用户数据报包括"),t("strong",[v._v("UDP首部字段")]),v._v("和"),t("strong",[v._v("UDP的数据部分")]),v._v("。")]),v._v(" "),t("p",[v._v("首部字段只有 8 个字节，包括"),t("strong",[v._v("源端口、目的端口、长度(指包括报头和数据部分在内的总字节数)、检验和。")])]),v._v(" "),t("p",[v._v("UDP协议使用报头中的检验和来保证数据的安全。校验值首先在数据发送方通过特殊的算法计算得出，在传递到接收方之后，还需要再重新计算。如果某个数据报在传输过程中被第三方篡改或者由于线路噪音等原因受到损坏，发送和接收方的校验计算值将不会相符，由此UDP协议可以检测是否出错。")]),v._v(" "),t("h3",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),t("p",[v._v("TCP 数据报格式")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/55dc4e84-573d-4c13-a765-52ed1dd251f9.png",alt:"img"}})]),v._v(" "),t("p",[v._v("TCP报文段包括"),t("strong",[v._v("TCP首部和TCP报文段数据部分")])]),v._v(" "),t("p",[v._v("TCP首部：")]),v._v(" "),t("ul",[t("li",[v._v("源端口")]),v._v(" "),t("li",[v._v("目的端口")]),v._v(" "),t("li",[t("strong",[v._v("序号")]),v._v("，用来对字节流进行编号的，例如序号为 301，表示第一个字节的编号为 301，如果携带的数据长度为 100 字节，那么下一个报文段的序号应为 401。")]),v._v(" "),t("li",[v._v("**确认号 **：期望收到的下一个报文段的序号。例如，服务端收到了客户端发送过来的报文，其序列号字段是501，而数据长度是200字节，这表明服务端正确的收到了客户端发送的到序号700为止的数据。因此，服务端期望收到客户端的下一个数据序号是701，于是服务端在发送给客户端的确认报文段中把确认号置为701；（若确认号 = N，代表直到序号 N-1 的所有数据都已正确收到。）")]),v._v(" "),t("li",[t("strong",[v._v("数据偏移")]),v._v(" ：指的是数据部分距离报文段起始处的偏移量，实际上指的是首部的长度。")]),v._v(" "),t("li",[t("strong",[v._v("确认 ACK")]),v._v(" ：当 ACK=1 时确认号字段有效，否则无效。TCP 规定，在连接建立后所有传送的报文段都必须把 ACK 置 1。")]),v._v(" "),t("li",[t("strong",[v._v("同步 SYN")]),v._v(" ：在连接建立时用来同步序号。当 SYN=1，ACK=0 时表示这是一个连接请求报文段。若对方同意建立连接，则响应报文中 SYN=1，ACK=1。")]),v._v(" "),t("li",[t("strong",[v._v("终止 FIN")]),v._v(" ：用来释放一个连接，当 FIN=1 时，表示此报文段的发送方的数据已发送完毕，并要求释放连接。")]),v._v(" "),t("li",[t("strong",[v._v("窗口")]),v._v(" ：窗口值作为接收方让发送方设置其发送窗口的依据。之所以要有这个限制，是因为接收方的数据缓存空间是有限的。")]),v._v(" "),t("li",[t("strong",[v._v("检验和")]),v._v(": 由发送端填充, 检验形式有CRC校验等. 如果接收端校验不通过, 则认为数据有问题. 此处的校验和不光包含TCP首部, 也包含TCP数据部分.")])]),v._v(" "),t("h3",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e92d0ebc-7d46-413b-aec1-34a39602f787.png",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("p",[v._v("首先服务端处于监听状态，等待客户端的连接请求。")])]),v._v(" "),t("li",[t("p",[v._v("客户端向服务端发送连接请求报文，这个报文中SYN=1，ACK=0，选择一个初始的序号 x。")])]),v._v(" "),t("li",[t("p",[v._v("服务端收到连接请求报文，如果同意建立连接，则向客户端发送连接确认报文，SYN=1，ACK=1，确认号为 x+1，同时也选择一个初始的序号 y。")])]),v._v(" "),t("li",[t("p",[v._v("客户端收到服务端的连接确认报文后，还要向服务端发出确认，ACK=1， 确认号为 y+1，序号为 x+1。")])]),v._v(" "),t("li",[t("p",[v._v("服务端收到客户端的确认后，连接建立。")]),v._v(" "),t("p",[v._v("ps：TCP规定，SYN报文段（SYN=1的报文段）不能携带数据，但需要消耗掉一个序号。")]),v._v(" "),t("p",[v._v("​\t\tACK报文段可以携带数据，但是如果不携带数据则不消耗序号。")])])]),v._v(" "),t("h3",{attrs:{id:"为什么要三次握手？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要三次握手？"}},[v._v("#")]),v._v(" 为什么要三次握手？")]),v._v(" "),t("p",[v._v("三次握手的目的是建立可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，而三次握手最主要的目的就是"),t("strong",[v._v("双方确认自己与对方的发送与接收是正常的。")])]),v._v(" "),t("p",[v._v("第一次握手成功之后：Client 什么都不能确认；Server 确认了对方发送正常，自己接收正常")]),v._v(" "),t("p",[v._v("第二次握手成功之后：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：对方发送正常，自己接收正常")]),v._v(" "),t("p",[v._v("第三次握手成功之后：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送、接收正常")]),v._v(" "),t("p",[v._v("所以三次握手就能确认双发收发功能都正常，缺一不可。")]),v._v(" "),t("p",[v._v("也有谢希仁《计算机网络》是这样写的：")]),v._v(" "),t("blockquote",[t("p",[v._v("一句话，主要防止已经失效的连接请求报文突然又传送到了服务器，从而产生错误。")]),v._v(" "),t("p",[v._v("如果使用的是两次握手建立连接，假设有这样一种场景，客户端发送了第一个请求连接并且没有丢失，只是因为在网络结点中滞留的时间太长了，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。此时此前滞留的那一次请求连接，网络通畅了到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。")]),v._v(" "),t("p",[v._v("如果采用的是三次握手，就算是那一次失效的报文传送过来了，服务端接受到了那条失效报文并且回复了确认报文，但是客户端不会再次发出确认。由于服务器收不到确认，就知道客户端并没有请求连接。")])]),v._v(" "),t("h3",{attrs:{id:"tcp-的四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的四次挥手"}},[v._v("#")]),v._v(" TCP 的四次挥手")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/f87afe72-c2df-4c12-ac03-9b8d581a8af8.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("1.客户端进程发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。")]),v._v(" "),t("p",[v._v("2.服务器收到连接释放报文，发出确认报文，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。")]),v._v(" "),t("p",[v._v("3.客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。\n服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。")]),v._v(" "),t("p",[v._v("4.客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗*∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。\n服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。")]),v._v(" "),t("p",[v._v("简易版")]),v._v(" "),t("ul",[t("li",[v._v("客户端发送连接释放报文，FIN=1，序号为u（等于前面已经传送过去的数据的最后一个字节的序号加1）。")]),v._v(" "),t("li",[v._v("服务端收到之后发出确认报文，ACK=1，序号为v，确认号为u+1，此时 TCP 属于半关闭状态，服务端 能向 客户端 发送数据但是 客户端 不能向 服务端 发送数据。")]),v._v(" "),t("li",[v._v("当服务端不再需要连接时，发送连接释放报文，FIN=1，确认号是u+1，序号为w（等于v+第二次挥手后服务器向客户端发送的数据的字节数）。")]),v._v(" "),t("li",[v._v("客户端 收到后发出确认报文，ACK=1，序号为u+1，确认号为w+1，等待 2 MSL（最大报文存活时间）后释放连接。")]),v._v(" "),t("li",[v._v("服务端 收到 客户端 的确认后释放连接。")])]),v._v(" "),t("h3",{attrs:{id:"为什么客户端最后还要等待2msl？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么客户端最后还要等待2msl？"}},[v._v("#")]),v._v(" 为什么客户端最后还要等待2MSL？")]),v._v(" "),t("p",[v._v("MSL（Maximum Segment Lifetime），TCP允许不同的实现可以设置不同的MSL值。")]),v._v(" "),t("p",[v._v("第一，保证客户端发送的最后一个ACK报文能够到达服务器，因为这个ACK报文可能丢失，站在服务器的角度看来，我已经发送了FIN+ACK报文请求断开了，客户端还没有给我回应，应该是我发送的请求断开报文它没有收到，于是服务器又会重新发送一次，而客户端就能在这个2MSL时间段内收到这个重传的报文，接着给出回应报文，并且会重启2MSL计时器。")]),v._v(" "),t("p",[v._v("第二，防止类似与“三次握手”中提到了的“已经失效的连接请求报文段”出现在本连接中。客户端发送完最后一个确认报文后，在这个2MSL时间中，就可以使本连接持续的时间内所产生的所有报文段都从网络中消失。这样新的连接中不会出现旧连接的请求报文。")]),v._v(" "),t("h3",{attrs:{id:"为什么要进行4次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行4次挥手"}},[v._v("#")]),v._v(" 为什么要进行4次挥手")]),v._v(" "),t("p",[v._v("而关闭连接时，服务器收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送，从而导致多了一次。")]),v._v(" "),t("p",[v._v("举个例子：A 和 B 打电话，通话即将结束后，A 说“我没啥要说的了”，B回答“我知道了”，但是 B 可能还会有要说的话，A 不能要求 B 跟着自己的节奏结束通话，于是 B 可能又巴拉巴拉说了一通，最后 B 说“我说完了”，A 回答“知道了”，这样通话才算结束。")]),v._v(" "),t("h3",{attrs:{id:"tcp-协议如何保证可靠传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议如何保证可靠传输"}},[v._v("#")]),v._v(" TCP 协议如何保证可靠传输")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("校验和：")]),v._v(" TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段，这个时候客户端没有收到确认报文就会再次发送这个报文段。")]),v._v(" "),t("li",[t("strong",[v._v("流量控制：")]),v._v(" 流量控制是为了控制发送方发送速率，保证接收方来得及接收。接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。（TCP 利用滑动窗口实现流量控制）")]),v._v(" "),t("li",[t("strong",[v._v("拥塞控制：")]),v._v(" 当网络拥塞时，减少数据的发送。TCP的拥塞控制采用了四种算法，即 "),t("strong",[v._v("慢开始")]),v._v(" 、 "),t("strong",[v._v("拥塞避免")]),v._v(" 、"),t("strong",[v._v("快重传")]),v._v(" 和 "),t("strong",[v._v("快恢复")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("ARQ协议：")]),v._v(" 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。")]),v._v(" "),t("li",[t("strong",[v._v("超时重传：")]),v._v(" 当 TCP 发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。")])]),v._v(" "),t("h3",{attrs:{id:"tcp和udp有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp有什么区别？"}},[v._v("#")]),v._v(" TCP和UDP有什么区别？")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("用户数据报协议UDP:")]),v._v(" 它提供无连接的、尽最大努力的数据传输服务；无拥塞控制；支持一对一、一对多、多对一、多对多的交互通信；")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("传输控制协议TCP:")]),v._v(" 提供面向连接、可靠的数据传输服务；有流量控制、拥塞控制；提供全双工通信，面向字节流；每条TCP连接只能一对一。")]),v._v(" "),t("p",[v._v("TCP的可靠体现在TCP在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制，在数据传完后，还会断开连接用来节约系统资源")]),v._v(" "),t("p",[v._v("确认：方式：校验和（报文首部字段）、ARQ协议（将数据分组发送，等待确认在发送下一组）")]),v._v(" "),t("p",[v._v("窗口：流量控制（通过窗口控制，窗口也是报文首部字段）")]),v._v(" "),t("p",[v._v("重传：超时重传")]),v._v(" "),t("p",[v._v("拥塞控制：慢开始、拥塞避免、快重传、快恢复")])])]),v._v(" "),t("h3",{attrs:{id:"在浏览器输入url地址，显示主页的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器输入url地址，显示主页的过程"}},[v._v("#")]),v._v(" 在浏览器输入url地址，显示主页的过程")]),v._v(" "),t("ol",[t("li",[v._v("浏览器查找通过dns得到域名的ip地址")]),v._v(" "),t("li",[v._v("浏览器与服务器通过3次握手建立tcp连接")]),v._v(" "),t("li",[v._v("浏览器向服务器发送http请求")]),v._v(" "),t("li",[v._v("服务器处理请求并返回http报文")]),v._v(" "),t("li",[v._v("浏览器解析渲染页面，连接结束")])]),v._v(" "),t("p",[v._v("###　各种协议与HTTP协议之间的关系")]),v._v(" "),t("p",[v._v("图片来源：《图解HTTP》")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/%E5%90%84%E7%A7%8D%E5%8D%8F%E8%AE%AE%E4%B8%8EHTTP%E5%8D%8F%E8%AE%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB.png",alt:"各种协议与HTTP协议之间的关系"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);