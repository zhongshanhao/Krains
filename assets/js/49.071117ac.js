(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{525:function(_,v,t){"use strict";t.r(v);var s=t(4),e=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[_._v("#")]),_._v(" 请求报文")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/HTTP_RequestMessageExample.png",alt:"img"}})]),_._v(" "),t("p",[_._v("请求报文由"),t("strong",[_._v("请求行")]),_._v("、"),t("strong",[_._v("请求头")]),_._v("和"),t("strong",[_._v("请求消息体")]),_._v("构成，请求行由请求方法、URI、HTTP版本组成，请求头包括了客户端向服务端发送的一些必要的信息比如使用的语言、报文主体大小等内容，请求消息体就是本次请求要传的数据。")]),_._v(" "),t("h2",{attrs:{id:"响应报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[_._v("#")]),_._v(" 响应报文")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/HTTP_ResponseMessageExample.png",alt:"img"}})]),_._v(" "),t("p",[_._v("响应报文由状态行、响应头和响应消息体组成，状态行由HTTP版本、状态码、原因短语构成，响应头包括了服务端向客户端发送的一些必要的信息比如报文主体大小、类型等信息。响应消息体就是本次响应携带的数据。")]),_._v(" "),t("h2",{attrs:{id:"请求方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[_._v("#")]),_._v(" 请求方法")]),_._v(" "),t("p",[_._v("GET：获取服务器资源的方法")]),_._v(" "),t("p",[_._v("POST：向服务器提交数据的方法")]),_._v(" "),t("p",[_._v("HEAD：获取响应消息头的方法，服务器不返回响应消息体，只返回响应消息头，主要用于验证URI的有效性及资源更新的日期时间等。")]),_._v(" "),t("p",[_._v("PUT：上传文件的方法")]),_._v(" "),t("p",[_._v("DELETE：删除文件的方法，按照URI删除指定的资源")]),_._v(" "),t("p",[_._v("OPTIONS：这个方法用来查询请求URI能够支持的方法")]),_._v(" "),t("p",[_._v("CONNECT：要求在与代理服务器通信时建立隧道，使用SSL和TLS协议把通信内容加密后经网络隧道传输。")]),_._v(" "),t("p",[_._v("POST和GET的区别？")]),_._v(" "),t("ul",[t("li",[_._v("使用目的不同：GET是从服务器上获取数据，POST是向服务器传送数据。")]),_._v(" "),t("li",[_._v("从HTTP报文看：GET参数通过url传递的，POST是放在请求体中传递的，原则上post肯定要比get安全，使用get时传输参数是在url上的，别人可以通过观察url或者查看历史记录得知你填写的参数信息，post的参数放在请求体中，但其实也不安全，可以通过抓包软件得到参数。")]),_._v(" "),t("li",[_._v("从运输层上看：GET比POST速度快，GET会在tcp第三次握手的时候将请求报文发送出去，而POST只是在TCP第三次握手的时候将请求消息头发送出去，客户端收到服务器返回状态码100后，才将数据放在请求体中发送给服务器。")]),_._v(" "),t("li",[_._v("从数据库层面看：GET是安全的和幂等的，POST不是安全的和幂等的。这里的安全的就是意味着该操作不会修改数据库中的数据，幂等的就是对数据库的一次操作和多次操作获得的结果是一致的。")])]),_._v(" "),t("h2",{attrs:{id:"响应状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码"}},[_._v("#")]),_._v(" 响应状态码")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("状态码")]),_._v(" "),t("th",[_._v("类别")]),_._v(" "),t("th",[_._v("含义")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("1XX")]),_._v(" "),t("td",[_._v("Informational（信息性状态码）")]),_._v(" "),t("td",[_._v("接收的请求正在处理")])]),_._v(" "),t("tr",[t("td",[_._v("2XX")]),_._v(" "),t("td",[_._v("Success（成功状态码）")]),_._v(" "),t("td",[_._v("请求正常处理完毕")])]),_._v(" "),t("tr",[t("td",[_._v("3XX")]),_._v(" "),t("td",[_._v("Redirection（重定向状态码）")]),_._v(" "),t("td",[_._v("需要进行附加操作以完成请求")])]),_._v(" "),t("tr",[t("td",[_._v("4XX")]),_._v(" "),t("td",[_._v("Client Error（客户端错误状态码）")]),_._v(" "),t("td",[_._v("服务器无法处理请求")])]),_._v(" "),t("tr",[t("td",[_._v("5XX")]),_._v(" "),t("td",[_._v("Server Error（服务器错误状态码）")]),_._v(" "),t("td",[_._v("服务器处理请求出错")])])])]),_._v(" "),t("h3",{attrs:{id:"常见的状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的状态码"}},[_._v("#")]),_._v(" 常见的状态码")]),_._v(" "),t("p",[_._v("200  OK")]),_._v(" "),t("p",[_._v("表示从客户端发来的请求在服务端被正常处理了")]),_._v(" "),t("p",[_._v("302 重定向")]),_._v(" "),t("p",[_._v("需要进行附加操作以完成请求")]),_._v(" "),t("blockquote",[t("p",[_._v("example：客户端发出请求删除帖子时，服务器处理请求之后，没有什么东西可以返回给客户端，此时用重定向让客户端再给服务器发送请求刷新页面去查询帖子列表页面，如果用转发会造成耦合（删除操作和查询操作没有关系）。重定向地址栏发生变化。")]),_._v(" "),t("p",[_._v("转发：一个请求需要服务器两个或以上controller协作完成，地址栏不发生变化。")]),_._v(" "),t("p",[_._v("example：/login(处理登录的请求) --\x3e /loginpage（获取登录页面的请求） ，登录认证失败时，用转发将认证失败信息发给loginpage")]),_._v(" "),t("p",[_._v("重定向和转发的区别？")]),_._v(" "),t("ul",[t("li",[_._v("重定向地址栏会发生变化， 转发不会；")]),_._v(" "),t("li",[_._v("重定向是两次请求，转发是一次；")]),_._v(" "),t("li",[_._v("重定向适用于两次请求没有相关性，转发适用于一次请求需要两个或以上的controller协作完成。")])])]),_._v(" "),t("p",[_._v("404 Not Found")]),_._v(" "),t("p",[_._v("服务器无法找到请求的资源")]),_._v(" "),t("p",[_._v("500 Internal Servel Error")]),_._v(" "),t("p",[_._v("表明服务器在执行请求时发生了错误。")]),_._v(" "),t("h2",{attrs:{id:"连接管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[_._v("#")]),_._v(" 连接管理")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/HTTP1_x_Connections.png",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"短连接与长连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短连接与长连接"}},[_._v("#")]),_._v(" 短连接与长连接")]),_._v(" "),t("p",[_._v("当浏览器访问一个包含多张图片的 HTML 页面时，除了请求访问的 HTML 页面资源，还会请求图片资源。如果每进行一次 HTTP 通信就要新建一个 TCP 连接，那么开销会很大。")]),_._v(" "),t("p",[_._v("长连接只需要建立一次 TCP 连接就能进行多次 HTTP 通信。")]),_._v(" "),t("ul",[t("li",[_._v("从 HTTP/1.1 开始默认是长连接的，如果要断开连接，需要由客户端或者服务器端提出断开，使用 "),t("code",[_._v("Connection : close")]),_._v("；")]),_._v(" "),t("li",[_._v("在 HTTP/1.1 之前默认是短连接的，如果需要使用长连接，则使用 "),t("code",[_._v("Connection : Keep-Alive")]),_._v("。")])]),_._v(" "),t("h2",{attrs:{id:"流水线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流水线"}},[_._v("#")]),_._v(" 流水线")]),_._v(" "),t("p",[_._v("默认情况下，HTTP 请求是按顺序发出的，下一个请求只有在当前请求收到响应之后才会被发出。由于受到网络延迟和带宽的限制，在下一个请求被发送到服务器之前，可能需要等待很长时间。")]),_._v(" "),t("p",[_._v("流水线是在同一条长连接上连续发出请求，而不用等待响应返回，这样可以减少延迟。")]),_._v(" "),t("h2",{attrs:{id:"会话管理：cookie和session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话管理：cookie和session"}},[_._v("#")]),_._v(" 会话管理：Cookie和Session")]),_._v(" "),t("p",[_._v("区别")]),_._v(" "),t("ul",[t("li",[_._v("Cookie存储在客户端，Session存储在服务端")]),_._v(" "),t("li",[_._v("Cookie不安全，Session安全")]),_._v(" "),t("li",[_._v("Cookie只能存String类型的数据，存储大小有限制，Session能够存任何类型的数据，并且存储大小没有限制")]),_._v(" "),t("li",[_._v("session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）")])]),_._v(" "),t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[_._v("#")]),_._v(" HTTPS")]),_._v(" "),t("p",[_._v("HTTP 有以下安全性问题：")]),_._v(" "),t("ul",[t("li",[_._v("使用明文进行通信，内容可能会被窃听；")]),_._v(" "),t("li",[_._v("不验证通信方的身份，通信方的身份有可能遭遇伪装；")]),_._v(" "),t("li",[_._v("无法证明报文的完整性，报文有可能遭篡改。")])]),_._v(" "),t("p",[_._v("HTTPS采用的加密方式")]),_._v(" "),t("p",[_._v("。。。。")])])}),[],!1,null,null,null);v.default=e.exports}}]);