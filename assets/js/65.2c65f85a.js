(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{501:function(v,_,t){"use strict";t.r(_);var e=t(4),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("p",[v._v("运输层为应用进程提供了端到端的通信服务，但不同的网络应用的应用进程之间，还需要有不同的通信规则，因此在运输层协议之上，还需要有应用层协议。")]),v._v(" "),t("p",[v._v("每个应用层协议都是为了解决某一类应用问题，而问题的解决又必须通过位于不同主机中的多个应用进程之间的通信和协同工作来完成。应用进程之间的这种通信必须遵循严格的规则，应用层的具体内容就是精确定义这些通信规则：")]),v._v(" "),t("ul",[t("li",[v._v("应用进程交换的报文类型，如请求报文和响应报文")]),v._v(" "),t("li",[v._v("各种报文类型的语法，如报文中各个字段及其详细描述")]),v._v(" "),t("li",[v._v("字段的语义，即包含在字段中的信息的含义")]),v._v(" "),t("li",[v._v("进程何时、如何发送报文，以及对报文进行响应的规则")])]),v._v(" "),t("h2",{attrs:{id:"域名系统dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名系统dns"}},[v._v("#")]),v._v(" 域名系统DNS")]),v._v(" "),t("p",[v._v("用户与互联网上某台主机通信时，必须要知道对方的IP地址，但是用户很难记住长达32位的二进制主机地址，所以一般通过一个域名与IP绑定在一起，用户便于记住域名，域名系统DNS能够把互联网上的主机名字转换为IP地址。")]),v._v(" "),t("h3",{attrs:{id:"域名服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名服务器"}},[v._v("#")]),v._v(" 域名服务器")]),v._v(" "),t("p",[v._v("一个域名服务器所负责管辖的范围叫做区，保证一个区中的所有节点必须是能够连通的，每个区设置相应的权限域名服务器，用来保存该区中所有主机的域名到IP地址的映射。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/DNS%E5%88%92%E5%88%86%E5%8C%BA.png",alt:"DNS划分区"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/DNS%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8.png",alt:"DNS域名服务器"}})]),v._v(" "),t("ul",[t("li",[v._v("根域名服务器：根域名服务器是最高层次的域名服务器，所有的根域名服务器都知道所有的顶级域名服务器的域名和IP地址。")]),v._v(" "),t("li",[v._v("顶级域名服务器：这些域名服务器负责管理在该顶级域名服务器注册的所有二级域名")]),v._v(" "),t("li",[v._v("权限域名服务器：每个区都设置相应的权限域名服务器，用来保存该区中所有主机的域名到IP地址的映射。")]),v._v(" "),t("li",[v._v("本地域名服务器：本地域名服务器里用户较近，一般不超过几个路由器的距离，当一台主机发出DNS查询请求时，这个查询请求报文首先就发送给本地域名服务器")])]),v._v(" "),t("h3",{attrs:{id:"域名解析过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名解析过程"}},[v._v("#")]),v._v(" 域名解析过程")]),v._v(" "),t("p",[v._v("主机向本地域名服务器的查询一般都是采用递归查询。递归查询就是：")]),v._v(" "),t("ul",[t("li",[v._v("若本地域名服务器不知道被查询域名的IP地址，那么本地域名就以DNS客户的身份，向其他根域名服务器继续发出查询请求报文，而不是让该主机自己进行下一步查询。")]),v._v(" "),t("li",[v._v("递归查询返回的查询结果要么是所要查询的IP地址，要么是报错，表示无法查询到所需的IP地址")])]),v._v(" "),t("p",[v._v("本地域名服务器向根域名服务器的查询通常是采用迭代查询，也可以使用递归查询，迭代查询是这样的（注意与递归查询的区别）：")]),v._v(" "),t("ul",[t("li",[v._v("当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的IP地址，要么告诉本地域名服务器下一步应该向哪个域名服务器进行查询，然后让本地域名服务器进行后续的查询（而不是像递归查询一样替本地域名服务器进行后续的查询）")]),v._v(" "),t("li",[v._v("根域名服务器一般给出顶级域名服务器的IP地址，本地域名服务器再向顶级域名服务器查询，顶级域名服务要么给出下一步应该向哪个权限域名服务器进行查询")]),v._v(" "),t("li",[v._v("本地域名服务器就这样进行迭代查询，最后知道了要解析的域名的IP地址，就将这个结果返回给主机。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/DNS%E6%9F%A5%E8%AF%A2.png",alt:"DNS查询"}})]),v._v(" "),t("p",[v._v("假定域名为m.xyz.com的主机想知道另一台主机y.abc.com的IP地址，所要经历的一般步骤如下")]),v._v(" "),t("ol",[t("li",[v._v("主机m.xyz.com先向其本地域名服务器dns.xyz.com进行递归查询")]),v._v(" "),t("li",[v._v("本地域名服务器采取迭代查询，它先向一个根域名服务器查询")]),v._v(" "),t("li",[v._v("根域名服务器告诉本地域名服务器，下一次应查询的顶级域名服务器dns.com的IP地址")]),v._v(" "),t("li",[v._v("本地域名服务器向顶级域名服务器dns.com进行查询")]),v._v(" "),t("li",[v._v("顶级域名服务器dns.com告诉本地域名服务器，下一次应查询的权限域名服务器dns.abc.com的IP地址")]),v._v(" "),t("li",[v._v("本地域名服务器向权限域名服务器dns.abc.com进行查询")]),v._v(" "),t("li",[v._v("权限域名服务器dns.abc.com告诉本地域名服务器，所查询的主机的IP地址")]),v._v(" "),t("li",[v._v("本地域名服务器最后把查询结果告诉主机m.xyz.com")])]),v._v(" "),t("p",[v._v("为了提高DNS查询效率，在域名服务器中广泛地使用了高速缓存，用来存放最近查询过的域名以及从何处获得域名映射信息的记录。如不久前已经有用户查询过域名为y.abc.com的IP地址，那么本地域名服务器直接把高速缓存中存放使得上次查询结果（即y.abc.com的IP地址）告诉用户，本地域名服务器也可能保留有顶级域名dns.com的IP地址，那么本地域名服务器可以不用向根域名服务器请求，而是直接向顶级域名服务查询。")]),v._v(" "),t("p",[v._v("由于名字到地址的绑定并不经常改变，为保持高速缓存中的内容正确，域名服务器应为每项内容设置计时器并处理超过合理时间的项。")]),v._v(" "),t("h2",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[v._v("#")]),v._v(" HTTP")]),v._v(" "),t("h3",{attrs:{id:"请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[v._v("#")]),v._v(" 请求报文")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/HTTP_RequestMessageExample.png",alt:"img"}})]),v._v(" "),t("p",[v._v("请求报文由"),t("strong",[v._v("请求行")]),v._v("、"),t("strong",[v._v("请求头")]),v._v("和"),t("strong",[v._v("请求消息体")]),v._v("构成，请求行由请求方法、URI、HTTP版本组成，请求头包括了客户端向服务端发送的一些必要的信息比如使用的语言、报文主体大小等内容，请求消息体就是本次请求要传的数据。")]),v._v(" "),t("h3",{attrs:{id:"响应报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[v._v("#")]),v._v(" 响应报文")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/HTTP_ResponseMessageExample.png",alt:"img"}})]),v._v(" "),t("p",[v._v("响应报文由状态行、响应头和响应消息体组成，状态行由HTTP版本、状态码、原因短语构成，响应头包括了服务端向客户端发送的一些必要的信息比如报文主体大小、类型等信息。响应消息体就是本次响应携带的数据。")]),v._v(" "),t("h3",{attrs:{id:"请求方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[v._v("#")]),v._v(" 请求方法")]),v._v(" "),t("p",[v._v("GET：获取服务器资源的方法")]),v._v(" "),t("p",[v._v("POST：向服务器提交数据的方法")]),v._v(" "),t("p",[v._v("HEAD：获取响应消息头的方法，服务器不返回响应消息体，只返回响应消息头，主要用于验证URI的有效性及资源更新的日期时间等。")]),v._v(" "),t("p",[v._v("PUT：上传文件的方法")]),v._v(" "),t("p",[v._v("DELETE：删除文件的方法，按照URI删除指定的资源")]),v._v(" "),t("p",[v._v("OPTIONS：这个方法用来查询请求URI能够支持的方法")]),v._v(" "),t("p",[v._v("CONNECT：要求在与代理服务器通信时建立隧道，使用SSL和TLS协议把通信内容加密后经网络隧道传输。")]),v._v(" "),t("p",[v._v("POST和GET的区别？")]),v._v(" "),t("ul",[t("li",[v._v("使用目的不同：GET是从服务器上获取数据，POST是向服务器传送数据。")]),v._v(" "),t("li",[v._v("从HTTP报文看：GET参数通过url传递的，POST是放在请求体中传递的，原则上post肯定要比get安全，使用get时传输参数是在url上的，别人可以通过观察url或者查看历史记录得知你填写的参数信息，post的参数放在请求体中，但其实也不安全，可以通过抓包软件得到参数。")]),v._v(" "),t("li",[v._v("从运输层上看：GET比POST速度快，GET会在tcp第三次握手的时候将请求报文发送出去，而POST只是在TCP第三次握手的时候将请求消息头发送出去，客户端收到服务器返回状态码100后，才将数据放在请求体中发送给服务器。")]),v._v(" "),t("li",[v._v("从数据库层面看：GET是安全的和幂等的，POST不是安全的和幂等的。这里的安全的就是意味着该操作不会修改数据库中的数据，幂等的就是对数据库的一次操作和多次操作获得的结果是一致的。")])]),v._v(" "),t("h3",{attrs:{id:"响应状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码"}},[v._v("#")]),v._v(" 响应状态码")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("状态码")]),v._v(" "),t("th",[v._v("类别")]),v._v(" "),t("th",[v._v("含义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1XX")]),v._v(" "),t("td",[v._v("Informational（信息性状态码）")]),v._v(" "),t("td",[v._v("接收的请求正在处理")])]),v._v(" "),t("tr",[t("td",[v._v("2XX")]),v._v(" "),t("td",[v._v("Success（成功状态码）")]),v._v(" "),t("td",[v._v("请求正常处理完毕")])]),v._v(" "),t("tr",[t("td",[v._v("3XX")]),v._v(" "),t("td",[v._v("Redirection（重定向状态码）")]),v._v(" "),t("td",[v._v("需要进行附加操作以完成请求")])]),v._v(" "),t("tr",[t("td",[v._v("4XX")]),v._v(" "),t("td",[v._v("Client Error（客户端错误状态码）")]),v._v(" "),t("td",[v._v("服务器无法处理请求")])]),v._v(" "),t("tr",[t("td",[v._v("5XX")]),v._v(" "),t("td",[v._v("Server Error（服务器错误状态码）")]),v._v(" "),t("td",[v._v("服务器处理请求出错")])])])]),v._v(" "),t("h4",{attrs:{id:"常见的状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的状态码"}},[v._v("#")]),v._v(" 常见的状态码")]),v._v(" "),t("p",[v._v("100\tContinue")]),v._v(" "),t("p",[v._v("继续，客户端应继续其请求")]),v._v(" "),t("p",[v._v("200  OK")]),v._v(" "),t("p",[v._v("表示从客户端发来的请求在服务端被正常处理了")]),v._v(" "),t("p",[v._v("302 重定向")]),v._v(" "),t("p",[v._v("需要进行附加操作以完成请求")]),v._v(" "),t("blockquote",[t("p",[v._v("example：客户端发出请求删除帖子时，服务器处理请求之后，没有什么东西可以返回给客户端，此时用重定向让客户端再给服务器发送请求刷新页面去查询帖子列表页面，如果用转发会造成耦合（删除操作和查询操作没有关系）。重定向地址栏发生变化。")]),v._v(" "),t("p",[v._v("转发：一个请求需要服务器两个或以上controller协作完成，地址栏不发生变化。")]),v._v(" "),t("p",[v._v("example：/login(处理登录的请求) --\x3e /loginpage（获取登录页面的请求） ，登录认证失败时，用转发将认证失败信息发给loginpage")]),v._v(" "),t("p",[v._v("重定向和转发的区别？")]),v._v(" "),t("ul",[t("li",[v._v("重定向地址栏会发生变化， 转发不会；")]),v._v(" "),t("li",[v._v("重定向是两次请求，转发是一次；")]),v._v(" "),t("li",[v._v("重定向适用于两次请求没有相关性，转发适用于一次请求需要两个或以上的controller协作完成。")])])]),v._v(" "),t("p",[v._v("404 Not Found")]),v._v(" "),t("p",[v._v("服务器无法找到请求的资源")]),v._v(" "),t("p",[v._v("500 Internal Servel Error")]),v._v(" "),t("p",[v._v("表明服务器在执行请求时发生了错误。")]),v._v(" "),t("h3",{attrs:{id:"会话管理：cookie和session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话管理：cookie和session"}},[v._v("#")]),v._v(" 会话管理：Cookie和Session")]),v._v(" "),t("p",[v._v("区别")]),v._v(" "),t("ul",[t("li",[v._v("Cookie存储在客户端，Session存储在服务端")]),v._v(" "),t("li",[v._v("Cookie不安全，Session安全")]),v._v(" "),t("li",[v._v("Cookie只能存String类型的数据，存储大小有限制，Session能够存任何类型的数据，并且存储大小没有限制")]),v._v(" "),t("li",[v._v("session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id，服务端拿到sessionId把它拼接到url上，然后服务器在从这个url上获取sessionId）")])]),v._v(" "),t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),t("p",[v._v("HTTP采用明文传输数据，不能够保证数据的安全传输，因此为了保证安全，有了HTTPS，HTTPS是HTTP的扩展。")]),v._v(" "),t("h3",{attrs:{id:"加密算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[v._v("#")]),v._v(" 加密算法")]),v._v(" "),t("p",[v._v("HTTPS解决数据传输安全问题的方案就是使用加密算法，使用的是对称加密和非对称加密的混合使用。")]),v._v(" "),t("h4",{attrs:{id:"对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[v._v("#")]),v._v(" 对称加密")]),v._v(" "),t("p",[v._v("对称加密，顾名思义就是加密和解密都是使用同一个秘钥。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E4%BC%A0%E8%BE%93%E8%BF%87%E7%A8%8B.png",alt:"对称加密数据传输过程"}})]),v._v(" "),t("p",[v._v("客户端使用密钥加密，服务端拿到加密的数据后使用密钥进行解密")]),v._v(" "),t("p",[v._v("优点：计算量小、加密速度快、加密效率高，适合加密比较大的数据")]),v._v(" "),t("p",[v._v("缺点：通信双方需要使用相同的密钥，也就无法避免密钥的传输，而密钥在传输过程中无法保证不被截获，因此对称加密的安全性得不到保证。")]),v._v(" "),t("p",[v._v("既然双方要使用相同的密钥，那就必然要在传输数据之前先由一方把密钥传给另一方，那么在此过程中密钥就很有可能被截获，那么加密的数据也会被破解，那如何确保密钥在传输的过程中的安全性呢？这就要用到非对称加密的。")]),v._v(" "),t("h4",{attrs:{id:"非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[v._v("#")]),v._v(" 非对称加密")]),v._v(" "),t("p",[v._v("非对称加密，顾名思义，就是加密和解密需要使用两个不同的密钥：公钥（public key）和私钥（private key）。公钥和私钥是一对，一般使用公钥对数据数据进行加密，只有用对应的私钥进行解密。")]),v._v(" "),t("p",[v._v("非对称加密算法实现机密信息交换的基本过程是：甲方生成一对密钥并将其中的一把作为公钥对外公开，得到该公钥的乙方使用公钥对机密信息进行加密后再发送给甲方，甲方在用自己保存的私钥对加密后的信息进行解密。常用的非对称加密算法是RSA算法。")]),v._v(" "),t("p",[v._v("优点：加密的时候只需要将公钥传输给对方，对方用公钥加密。然后将密文发回来，通过私钥进行解密，私钥不需要通过网络传输，安全性很高。")]),v._v(" "),t("p",[v._v("缺点：计算量很大，加密和解密速度相比对称加密慢得多")]),v._v(" "),t("p",[v._v("由于非对称加密的强安全性，可以用它完美解决对称加密的密钥泄露问题，效果如图")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%861.png",alt:"非对称加密1"}})]),v._v(" "),t("ul",[t("li",[v._v("客户端发送请求")]),v._v(" "),t("li",[v._v("服务器将公钥返回给客户端")]),v._v(" "),t("li",[v._v("客户端生成对称密钥KEY，并使用公钥对对称密钥KEY进行加密")]),v._v(" "),t("li",[v._v("客户端将加密后的KEY发送给服务器")]),v._v(" "),t("li",[v._v("服务器使用私钥解密获得对称密钥KEY")]),v._v(" "),t("li",[v._v("此后，通信双方都拥有了对称密钥，双方使用对称加密进行通信")])]),v._v(" "),t("p",[v._v("HTTPS使用混合加密的方式，将两种加密方式的优点结合在一起，即安全又高效。主要的思路就是将对称密钥通过非对称加密安全发送给客户端，通信双方拥有了对称密钥，然后使用对称加密的方式进行通信。")]),v._v(" "),t("h3",{attrs:{id:"https原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https原理"}},[v._v("#")]),v._v(" HTTPS原理")]),v._v(" "),t("p",[v._v("HTTPS并非独立的通信协议，而是对HTTP的扩展，保证了通信安全。")]),v._v(" "),t("p",[v._v("在上述的过程中，还存在一个问题，那就是无法证明公开密钥本身就是货真价实的公开密钥。比如，正准备和某台服务器建立公开密钥加密方式下的通信时，如何证明收到的公开密钥就是服务器发送过来的公开密钥，有可能在密钥的传输过程中，真正公开的密钥已经被攻击者替换掉了。")]),v._v(" "),t("blockquote",[t("p",[v._v("中间人攻击：服务器将公钥发送给客户端的过程中，公钥有可能会被第三方拦截并替换，然后这个第三方就可以冒充服务器与客户端进行通信")])]),v._v(" "),t("p",[v._v("为了解决上述问题，可以使用由数字证书认证机构颁发的数字证书")]),v._v(" "),t("p",[v._v("采用HTTPS协议的服务器必须要有一套CA数字证书，证书需要由专门的数字证书认证机构通过严格的审核颁发的。颁发证书的同时会产生一个私钥和公钥，私钥由服务器自己保存，不可泄露，而公钥则是附在证书的信息中，接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，一旦验证通过，客户端便可明确两件事:")]),v._v(" "),t("ul",[t("li",[v._v("认证服务器的公开密钥的是真实有效的数字证书认证机构。")]),v._v(" "),t("li",[v._v("服务器的公开密钥是值得信赖的。")])]),v._v(" "),t("p",[v._v("HTTPS的整个通信过程可以分为两大阶段")]),v._v(" "),t("ul",[t("li",[v._v("证书验证")]),v._v(" "),t("li",[v._v("数据传输阶段\n"),t("ul",[t("li",[v._v("非对称加密")]),v._v(" "),t("li",[v._v("对称加密")])])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/HTTPS%E5%8E%9F%E7%90%86.png",alt:"HTTPS原理"}})]),v._v(" "),t("ul",[t("li",[v._v("客户端请求HTTPS网址，然后连接到server的443端口")]),v._v(" "),t("li",[v._v("服务器响应客户端请求，将CA数字证书发送给客户端")]),v._v(" "),t("li",[v._v("客户端解析证书并对其进行验证，如果证书已经过期或者不是由可信机构颁布，就会向用户提供一个安全警告，如果证书没有问题，那么就从证书中取出公钥，客户端生成一个随机码KEY，用公钥将其加密")]),v._v(" "),t("li",[v._v("客户端将加密后的随机码KEY发送给服务器，作为后面对称加密的密钥")]),v._v(" "),t("li",[v._v("服务器在收到随机码KEY之后会使用私钥将其解密，现在通信双方都持有对称加密的密钥，接下来就使用对称加密进行通信")])]),v._v(" "),t("h3",{attrs:{id:"ssl-tls工作原理和详细握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls工作原理和详细握手过程"}},[v._v("#")]),v._v(" SSL/TLS工作原理和详细握手过程")]),v._v(" "),t("p",[v._v("HTTPS 并非是应用层的一种新协议。只是 HTTP 通信接口部分用SSL(Secure Socket Layer)和 TLS(Transport Layer Security)协议代替而已。")]),v._v(" "),t("p",[v._v("通常，HTTP 直接和 TCP 通信。当使用 SSL 时，则演变成先和 SSL 通，再由 SSL 和 TCP 通信了。简言之，所谓 HTTPS，其实就是身披SSL 协议这层外壳的 HTTP。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/HTTPS.png",alt:"HTTPS"}})]),v._v(" "),t("p",[v._v("在采用 SSL 后，HTTP 就拥有了 HTTPS 的加密、证书和完整性保护这些功能。SSL 是独立于 HTTP 的协议，所以不光是 HTTP 协议，其他运行在应用层的 SMTP 和 Telnet 等协议均可配合 SSL 协议使用。可以说 SSL 是当今世界上应用最为广泛的网络安全技术。")]),v._v(" "),t("p",[v._v("TLS握手是启动HTTPS通信的过程，类似与TCP建立连接时的三次握手，在TLS握手的过程中，通信双方交换信息以相互验证，相互确认，并确立它们所要使用的加密算法以及会话密钥（用于对称加密的密钥）。")]),v._v(" "),t("p",[v._v("TLS握手的目的是建立安全连接，主要是下面一些工作")]),v._v(" "),t("ul",[t("li",[v._v("商定双方通信所使用的TLS版本")]),v._v(" "),t("li",[v._v("确定双方所要使用的密码组合")]),v._v(" "),t("li",[v._v("客户端通过服务器的公钥和数字证书上的数字签名验证服务端的身份")]),v._v(" "),t("li",[v._v("生成会话密钥，该密钥将用于握手结束后的对称加密")])]),v._v(" "),t("h4",{attrs:{id:"tls握手详细过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tls握手详细过程"}},[v._v("#")]),v._v(" TLS握手详细过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/TLS%E6%8F%A1%E6%89%8B.png",alt:"TLS握手"}})]),v._v(" "),t("ol",[t("li",[t("p",[v._v('"client hello"消息：客户端通过发送"client hello"消息向服务器发起握手请求，该消息包含了客户端所支持的TLS版本和密码组合以供服务器进行选择，还有一个"client random"随机字符串')])]),v._v(" "),t("li",[t("p",[v._v('"server hello"消息：服务器发送"server hello"消息对客户端进行回应，该消息包含了数字证书，服务器选择的密码组合和"server random"随机字符串')])]),v._v(" "),t("li",[t("p",[v._v("验证：客户端对服务器发来的证书进行验证，确保对方的合法身份")])]),v._v(" "),t("li",[t("p",[v._v('"premaster secret"字符串：客户端向服务器发送另一个随机字符串"premaster secret"，这个字符串是经过服务器的公钥加密过的，只有对应的私钥才能解密')])]),v._v(" "),t("li",[t("p",[v._v('使用私钥：服务器使用私钥解密"premaster secret"')])]),v._v(" "),t("li",[t("p",[v._v("生成共享密钥：客户端和服务端均使用client random，server random和premaster secret，并通过相同的算法生成相同的共享密钥KEY")])]),v._v(" "),t("li",[t("p",[v._v('客户端发送经过共享密钥KEY加密过的"finished"信号')])]),v._v(" "),t("li",[t("p",[v._v('服务器发送经过共享密钥KEY加密过的"finished"信号')])]),v._v(" "),t("li",[t("p",[v._v("握手完成，双方使用对称加密进行通信")])])]),v._v(" "),t("h4",{attrs:{id:"https的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https的缺点"}},[v._v("#")]),v._v(" HTTPS的缺点")]),v._v(" "),t("ul",[t("li",[v._v("HTTPS比HTTP需要更多的服务器资源，导致成本的升高")]),v._v(" "),t("li",[v._v("HTTPS并不能保证绝对安全，在服务器劫持下也几乎不起作用")])]),v._v(" "),t("h2",{attrs:{id:"http1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[v._v("#")]),v._v(" HTTP1.1")]),v._v(" "),t("h3",{attrs:{id:"连接管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[v._v("#")]),v._v(" 连接管理")]),v._v(" "),t("p",[v._v("HTTP/1.x里有很多种模型")]),v._v(" "),t("ul",[t("li",[v._v("短连接")]),v._v(" "),t("li",[v._v("长连接")]),v._v(" "),t("li",[v._v("HTTP流水线")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/HTTP%E8%BF%9E%E6%8E%A5%E7%AE%A1%E7%90%86.png",alt:"HTTP连接管理"}})]),v._v(" "),t("h3",{attrs:{id:"短连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短连接"}},[v._v("#")]),v._v(" 短连接")]),v._v(" "),t("p",[v._v("HTTP1.0的默认模型是短连接，就是客户端每发送一次请求都需要建立一次TCP连接，经历三次握手和四次挥手，比较耗费时间。")]),v._v(" "),t("p",[v._v("协议头：Connection头决定当前的事务完成后，是否会关闭连接。")]),v._v(" "),t("blockquote",[t("p",[v._v("Connection:keep-alive\t// 长连接，网络连接是持久的，不会关闭")]),v._v(" "),t("p",[v._v("Connection:close\t\t\t\t// 短连接，一次请求就关闭")])]),v._v(" "),t("h3",{attrs:{id:"长连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[v._v("#")]),v._v(" 长连接")]),v._v(" "),t("p",[v._v("为了解决短连接频繁建立连接的开销问题，提出了长连接。一个长连接会保持一段时间，重复用于发送一系列请求，节省了新建TCP连接握手的时间。这个连接不会一直保留，连接在空闲一段时间后会被关闭，服务器可以使用Keep-Alive协议头来指定一个最小的连接保持时间。")]),v._v(" "),t("p",[v._v("对比短连接的优势")]),v._v(" "),t("ul",[t("li",[v._v("节省了TCP连接握手的时间")]),v._v(" "),t("li",[v._v("重用已对目标服务器打开的空闲持久连接，可以避免缓慢的连接建立阶段，TCP连接打开时，为了降低网络拥塞，会启动慢开始阶段，这个时候数据传输的速率较慢，重用已经打开一段时间的TCP连接可以保持数据的传输速率。")])]),v._v(" "),t("p",[v._v("协议头Keep-Alive，允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数")]),v._v(" "),t("blockquote",[t("p",[v._v("Connection: Keep-Alive\t\t\t\t\t\t\t// Keep-Alive协议头需要Connection指定为Keep-Alive才有意义")]),v._v(" "),t("p",[v._v("Keep-Alive: timeout=5, max=1000")]),v._v(" "),t("p",[v._v("timeout：指定了一个空闲连接需要保持打开状态的最小时长（单位秒）")]),v._v(" "),t("p",[v._v("max：在连接关闭之前，在此连接可以发送的请求的最大值")])]),v._v(" "),t("p",[v._v("缺点：在空闲状态下还会消耗服务器资源，在重负载时，可能会遭受DoS attacks攻击。")]),v._v(" "),t("blockquote",[t("p",[v._v("DoS是Denial of Service的简称，即拒绝服务，造成DoS的攻击行为被称为DoS攻击，其目的是使计算机或网络无法提供正常的服务。")])]),v._v(" "),t("h3",{attrs:{id:"流水线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流水线"}},[v._v("#")]),v._v(" 流水线")]),v._v(" "),t("p",[v._v("默认情况下，HTTP请求是按顺序发出的。下一个请求只有在当前请求收到应答过后才会被发出。由于会受到网络延迟和带宽的限制，在下一个请求被发送到服务器之前，可能需要等待很长时间。")]),v._v(" "),t("p",[v._v("流水线是在同一条长连接上发出连续的请求，而不用等待应答返回，这样可以避免连接延迟。理论上讲，性能还会因为两个 HTTP 请求有可能被打包到一个 TCP 消息包中而得到提升。就算 HTTP 请求不断的继续，尺寸会增加，但设置 TCP 的 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Maximum_segment_size",target:"_blank",rel:"noopener noreferrer"}},[v._v("MSS"),t("OutboundLink")],1),v._v("(Maximum Segment Size) 选项，仍然足够包含一系列简单的请求。")]),v._v(" "),t("p",[v._v("缺点：现代浏览器默认的是长连接，因为HTTP管道化本身可能会导致队头阻塞的问题，因此现代浏览器默认都关闭了流水线。")]),v._v(" "),t("p",[v._v("限制")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("流水线要求服务端按照请求发送的顺序返回响应（TCP保证请求的顺序），因为HTTP请求和响应并没有序号标识，不能够将乱序的响应和请求对应起来，这就会导致队头阻塞问题")]),v._v(" "),t("blockquote",[t("p",[v._v("队头阻塞：如果某个响应的处理时间很长，相当于被阻塞住了，那么它后面的响应也不能够返回给客户端，从而导致后续的所有响应都阻塞了。（长连接也会出现队头阻塞现象）")]),v._v(" "),t("p",[v._v("TCP也有队头阻塞现象：TCP中如果一个报文段在发送过程中丢失，导致其后续报文段将一直不能够向上层应用交付数据，直到丢失的报文段被重新发送到接收端。")])])]),v._v(" "),t("li",[t("p",[v._v("当客户端使用流水线需要保留未收到响应的请求，当连接意外中断时，需要重新发送这部分请求。需要重新发送的请求需要是幂等的。")]),v._v(" "),t("blockquote",[t("p",[v._v("幂等的：一个HTTP方法是幂等的，指的是同样的请求被执行一次与连续执行多次的效果是一样的，同时也不会改变服务器的状态。换句话就是说幂等方法不应该具有副作用。GET、HEAD、PUT、DELETE等方法都是幂等的，而POST方法不是。")])])])]),v._v(" "),t("p",[v._v("分析出现队头阻塞现象的原因")]),v._v(" "),t("ul",[t("li",[v._v("独立的消息都在一个链路上传输，也就是有一个队列，比如TCP只有一个流，多个HTTP请求共用一个TCP连接")]),v._v(" "),t("li",[v._v("队列上传输的数据有严格的顺序约束，比如TCP要求数据严格按照序号顺序排序，如果中间某个序号数据没到，是不能够把数据向上层应用交付的，HTTP流水线也要求响应严格按照请求顺序返回")])]),v._v(" "),t("p",[v._v("如何解决队头阻塞现象？")]),v._v(" "),t("ul",[t("li",[v._v("开启多个TCP连接可以缓解头阻塞问题，但是不能彻底解决")]),v._v(" "),t("li",[v._v("域名分片，可以建立更多的TCP连接")]),v._v(" "),t("li",[v._v("使用HTTP2.0")])]),v._v(" "),t("h3",{attrs:{id:"优化请求速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化请求速度"}},[v._v("#")]),v._v(" 优化请求速度")]),v._v(" "),t("p",[v._v("域名分片")]),v._v(" "),t("p",[v._v("在HTTP1.X中，浏览器最多可以为每个域名建立6条连接，实现并发请求。")]),v._v(" "),t("p",[v._v("如果服务器端想要更快速的响应网站或应用程序的应答，可以让客户端建立更多的连接。那么可以使用域名分片技术增加连接数。")]),v._v(" "),t("p",[v._v("假设网站的域名是：www.example.com，我们可以把网站的域名拆分成好几个域名：www1.example.com、www2.example.com、www3.example.com，所有这些域名都指向同一台服务器，浏览器会同时为每个域名建立6条连接，这样就有3*6=18个连接。")]),v._v(" "),t("h2",{attrs:{id:"http2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2-0"}},[v._v("#")]),v._v(" HTTP2.0")]),v._v(" "),t("p",[v._v("HTTP2.0中，客户端向某个域名的服务器请求页面的过程中，只会创建一条TCP连接。")]),v._v(" "),t("p",[v._v("使用单一连接的优点")]),v._v(" "),t("ul",[t("li",[v._v("减少TCP握手次数，HTTP1.x中一般会创建好几条TCP请求，每条TCP连接都需要握手")]),v._v(" "),t("li",[v._v("吞吐量高，HTTP1.x中每条连接一开始都需要慢启动，而HTTP2使用一条长连接可以保持一个较快的速率收发数据")])]),v._v(" "),t("p",[v._v("帧")]),v._v(" "),t("p",[v._v("HTTP2是基于帧的协议，采用分帧是为了将重要信息都封装起来，让协议的解析方可以轻松阅读、解析并还原信息。帧是HTTP2中数据传输的最小单位。")]),v._v(" "),t("p",[v._v("二进制帧层与多路复用")]),v._v(" "),t("p",[v._v("HTTP2中报文二进制帧将被分为头部帧（Header Frame）和数据帧（Data Frame）")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/http2%E5%B8%A7.png",alt:"http2帧"}})]),v._v(" "),t("p",[v._v("在HTTP2中，所有数据的传输可以分为连接（Connection）、流（Stream）和帧（Frame）三个层次，与HTTP1.1中采用的并行连接不同，HTTP2在客户端和服务器的整个会话都会复用一条连接，在这个连接中一组完整的请求、响应被称为流。流中的每段数据（头部、数据段）被称为帧。")]),v._v(" "),t("p",[v._v("多路复用")]),v._v(" "),t("p",[v._v("我们把HTTP1.x的每个请求都当作一个流，那么多个请求化成多个流，请求响应数据切成多个帧，不同流（不同请求）中的帧可以交错发送给对方，每个帧上都有一个stream identifier的字段标明这一帧属于哪个流，然后在对方接收时，根据stream identity拼接每个流的所有帧组成一整块数据，这就是HTTP2中的多路复用。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/HTTP2%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8.png",alt:"HTTP2多路复用"}})]),v._v(" "),t("p",[v._v("头部压缩")]),v._v(" "),t("p",[v._v("HTTP/1.x会在请求和响应中重复地携带不常改变的、冗长的头部数据，给网络带来不必要地负担。HTTP/2除了将ASCII明文转化为二进制帧以提高网络传输的有效性外，还提出了一种专门针对报文头部数据进行压缩的方案——Hpack。其主要思想是，通过重用当前连接中之前发送请求中的头部，仅发送新加或更改的头部信息，以降低报文中头部字段大小。头部压缩的过程如下图所示：")]),v._v(" "),t("ul",[t("li",[v._v("连接会维护一个查找表，该查找表中给出了62个常用字段及默认值")]),v._v(" "),t("li",[v._v("在第一次请求时，会首先查看查找表中对应字段的值是否为本次请求携带的值，如果不是则更改这个查找表，同时增加查找表中没有的字段。在查找表中将所有头部添加完成后才根据查找表中对头部进行压缩并发送请求。")]),v._v(" "),t("li",[v._v("在接下来的每次请求中（当前连接），报文中的压缩数据仅包含查找表中被修改的字段，鉴于一个连接中很多请求中大部分字段携带的值都是不常变化的，此举可以大大降低头部传输所需的网络资源")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Krains/FigureBed/raw/master/img/%E5%A4%B4%E9%83%A8%E5%8E%8B%E7%BC%A9.png",alt:"头部压缩"}})]),v._v(" "),t("p",[v._v("对比HTTP1.1的优势")]),v._v(" "),t("ul",[t("li",[v._v("多路复用")]),v._v(" "),t("li",[v._v("头部压缩")])]),v._v(" "),t("p",[v._v("参考链接")]),v._v(" "),t("p",[v._v("[1]. https://segmentfault.com/a/1190000021494676")]),v._v(" "),t("p",[v._v("[2]. https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x")]),v._v(" "),t("p",[v._v("[3]. https://juejin.im/post/6844903853985366023")]),v._v(" "),t("p",[v._v("[4]. https://juejin.im/post/6844903503983280141#heading-7")]),v._v(" "),t("p",[v._v("[5]. https://juejin.im/post/6844903503983280141")])])}),[],!1,null,null,null);_.default=a.exports}}]);