(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{582:function(e,t,_){"use strict";_.r(t);var v=_(4),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("在linux操作系统中，对于一次IO访问，用户进程会通过系统调用告诉内核自己想读数据，此时从用户态切换到内核态，内核线程将数据写到内核空间，然后再从内核空间拷贝到应用程序的地址空间。根据同步和异步IO的区别，我们可以将一次IO访问分为两个阶段")]),e._v(" "),_("ul",[_("li",[e._v("等待数据准备好（等待）")]),e._v(" "),_("li",[e._v("将数据从内核空间拷贝到用户空间（拷贝）")])]),e._v(" "),_("p",[e._v("根据这两个阶段，Unix网络编程中产生了五种IO模型")]),e._v(" "),_("ul",[_("li",[e._v("阻塞 I/O（blocking IO）BIO")]),e._v(" "),_("li",[e._v("非阻塞 I/O（nonblocking IO）NIO")]),e._v(" "),_("li",[e._v("I/O 多路复用（ IO multiplexing）")]),e._v(" "),_("li",[e._v("信号驱动 I/O（ signal driven IO）")]),e._v(" "),_("li",[e._v("异步 I/O（asynchronous IO）AIO")])]),e._v(" "),_("h2",{attrs:{id:"阻塞io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#阻塞io"}},[e._v("#")]),e._v(" 阻塞IO")]),e._v(" "),_("p",[e._v("最传统的IO，在等待和拷贝两个阶段会进入阻塞")]),e._v(" "),_("p",[e._v("用户线程发出IO请求，通过"),_("code",[e._v("revefrom")]),e._v("系统调用像内核读取数据的请求，此时从用户态切换到内核态，用户线程阻塞，内核线程启动，等待数据准备好之后，将数据从内核空间复制到用户空间，然后唤醒用户线程，此时用户线程从阻塞态到等待态")]),e._v(" "),_("p",[_("img",{attrs:{src:"D:_temp%5C%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87%5C5108c314bdae4d18ea91c8dd2969ef0f.jpg-wh_600x-s_1540292916.jpg",alt:"5108c314bdae4d18ea91c8dd2969ef0f.jpg-wh_600x-s_1540292916"}})]),e._v(" "),_("p",[e._v("这种传统的IO模型会导致在用户线程在等待IO期间无法处理其他请求，可以使用多线程+BIO解决，但是有多少个Socket就会产生多少个线程，会造成过多的资源占用。")]),e._v(" "),_("h2",{attrs:{id:"非阻塞io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞io"}},[e._v("#")]),e._v(" 非阻塞IO")]),e._v(" "),_("img",{attrs:{src:"D:\\_temp\\网络图片\\92fd6efb11936b879561931f1e895f02.jpg-wh_600x-s_2030517755.jpg",alt:"92fd6efb11936b879561931f1e895f02.jpg-wh_600x-s_2030517755"}}),e._v(" "),_("p",[e._v("与BIO不同，用户线程在调用"),_("code",[e._v("revefrom")]),e._v("时不会进入阻塞，"),_("code",[e._v("revefrom")]),e._v("会立即返回一个错误，告诉用户线程当前还没有准备好数据，因此用户线程在得知后可以转而处理其他事情，但是为了读到数据，用户线程必须不断轮询调用"),_("code",[e._v("revefrom")]),e._v("来判断是否可以读，直到数据准备好，线程调用"),_("code",[e._v("revefrom")]),e._v("后会进入阻塞状态，直到内核线程将数据拷贝到用户空间。")]),e._v(" "),_("h2",{attrs:{id:"io多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#io多路复用"}},[e._v("#")]),e._v(" IO多路复用")]),e._v(" "),_("p",[_("img",{attrs:{src:"D:_temp%5C%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87%5CIO%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8.png",alt:"IO多路复用"}})]),e._v(" "),_("p",[_("code",[e._v("当用户进程调用了select，那么整个进程会被block")]),e._v("，而同时，kernel会“监视”所有select负责的socket，当任何一个socket中的数据准备好了，select就会返回。这个时候用户进程再调用read操作，将数据从kernel拷贝到用户进程。")]),e._v(" "),_("blockquote",[_("p",[e._v("所以，I/O 多路复用的特点是通过一种机制一个进程能同时等待多个文件描述符，而这些文件描述符（套接字描述符）其中的任意一个进入读就绪状态，select()函数就可以返回。")])]),e._v(" "),_("h2",{attrs:{id:"信号驱动io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信号驱动io"}},[e._v("#")]),e._v(" 信号驱动IO")]),e._v(" "),_("p",[e._v("在信号驱动IO模型中，当用户线程发起一个IO请求操作，会给对应的socket注册一个信号函数，然后用户线程会继续执行，当内核数据就绪时会发送一个信号给用户线程，用户线程接收到信号后，便在信号函数中调用IO读写操作"),_("code",[e._v("recvfrom")]),e._v("来进行实际的IO请求操作。")]),e._v(" "),_("p",[_("img",{attrs:{src:"D:_temp%5C%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87%5C65d1e77c0b548cba43d6443fc8bcaf69.jpg-wh_600x-s_1923680265.jpg",alt:"65d1e77c0b548cba43d6443fc8bcaf69.jpg-wh_600x-s_1923680265"}})]),e._v(" "),_("h2",{attrs:{id:"异步io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步io"}},[e._v("#")]),e._v(" 异步IO")]),e._v(" "),_("p",[e._v("前面四种IO模型实际上都属于同步IO，只有最后一种是真正的异步IO，因为无论是多路复用IO还是信号驱动模型，IO操作的第2个阶段都会引起用户线程阻塞，也就是内核进行数据拷贝的过程都会让用户线程阻塞。")]),e._v(" "),_("p",[e._v("异步IO不会在复制数据时阻塞用户线程，但这样可能会产生线程安全问题，所以使用异步IO在编码方面会比较复杂。")]),e._v(" "),_("p",[_("img",{attrs:{src:"D:_temp%5C%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87%5C71a71eda4f0d6715d07f0a75a129e09b.jpg",alt:"71a71eda4f0d6715d07f0a75a129e09b"}})]),e._v(" "),_("p",[_("a",{attrs:{href:"https://developer.51cto.com/art/202010/628344.htm?pc",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),_("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);