(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{606:function(_,v,t){"use strict";t.r(v);var a=t(4),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"主从同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从同步"}},[_._v("#")]),_._v(" 主从同步")]),_._v(" "),t("h3",{attrs:{id:"旧版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旧版复制"}},[_._v("#")]),_._v(" 旧版复制")]),_._v(" "),t("p",[_._v("旧版复制功能分为同步和命令传播两个操作")]),_._v(" "),t("p",[_._v("当从服务器执行 SLAVEOF 命令时，从服务器会执行以下两个操作")]),_._v(" "),t("p",[_._v("同步")]),_._v(" "),t("ul",[t("li",[_._v("从服务器向主服务器发送 SYNC 命令")]),_._v(" "),t("li",[_._v("收到 SYNC 命令的主服务器执行 BGSAVE 命令，在后台生成一个RDB文件，并使用一个缓冲区记录从现在开始执行的所有写命令")]),_._v(" "),t("li",[_._v("当主服务器的 BGSAVE 命令执行完毕，主服务器将会把 RDB 文件发送给从服务器，从服务器接受并载入这个RDB文件")]),_._v(" "),t("li",[_._v("最后主服务器将记录在缓冲区里面的所有写命令发送给从服务器，从服务器执行这些命令，将自己的数据库状态和主服务器保持一致")])]),_._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210721112716936.png",alt:"image-20210721112716936"}}),_._v(" "),t("p",[_._v("命令传播")]),_._v(" "),t("p",[_._v("在同步操作完成之后，主服务器会将自己执行的写命令操作，发送给从服务器执行")]),_._v(" "),t("p",[_._v("缺点")]),_._v(" "),t("ul",[t("li",[_._v("如果某一时刻从服务器只断开连接一小会，当从服务器再次连接时，还是直接发送SYNC进行同步操作，主服务器需要重新生成RDB给从服务器，造成资源的浪费")]),_._v(" "),t("li",[_._v("命名传播时数据发生丢失，主从服务器并没有检测数据丢失和重新发送数据的机制，因此会造成数据不一致的现象")])]),_._v(" "),t("h3",{attrs:{id:"新版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版复制"}},[_._v("#")]),_._v(" 新版复制")]),_._v(" "),t("p",[_._v("Redis 从2.8版本开始，使用PSYNC命令代替SYNC命名来执行复制时的同步操作。")]),_._v(" "),t("p",[_._v("PSYNC命名具有完整重同步和部分重同步两种模式。")]),_._v(" "),t("p",[_._v("工作过程")]),_._v(" "),t("p",[_._v("从服务器向主服务器发送PSYNC命令，由主服务器判断执行完整重同步还是部分重同步操作。")]),_._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210721113915671.png",alt:"image-20210721113915671"}}),_._v(" "),t("p",[_._v("实现")]),_._v(" "),t("ul",[t("li",[_._v("主服务器的复制积压缓冲区")]),_._v(" "),t("li",[_._v("主服务器和从服务器的复制偏移量")]),_._v(" "),t("li",[_._v("服务器运行ID")])]),_._v(" "),t("p",[_._v("复制积压缓冲区与复制偏移量")]),_._v(" "),t("p",[_._v("复制积压缓冲区是由主服务器维护的一个固定长度先进先出的队列，默认大小为1MB，主从服务器都会维护一个复制偏移量")]),_._v(" "),t("ul",[t("li",[_._v("当主服务器进行命令传播时，它不仅会将写命令发送给所有从服务器，还会将写命令入队到复制积压缓冲区")]),_._v(" "),t("li",[_._v("当从服务器重新连接上主服务器时，从服务器会通过PSYNC将自己的偏移量发送给主服务器，主服务器判断这个偏移量之后的数据还在复制积压缓冲区，那么执行部分重同步操作，否则执行完整重同步")])]),_._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210721115259354.png",alt:"image-20210721115259354"}}),_._v(" "),t("p",[_._v("复制缓存区大小设置 ：size = 2 * second * write_size_per_second")]),_._v(" "),t("ul",[t("li",[_._v("second是从服务器断线后重新连接上主服务器所需的平均时间")]),_._v(" "),t("li",[_._v("write_size_per_second是主服务器平均每秒接收到写命令的数据量")])]),_._v(" "),t("p",[_._v("服务器运行ID")]),_._v(" "),t("p",[_._v("运行ID在服务器启动时自动生成，由40个随机的十六进制字符组成。")]),_._v(" "),t("p",[_._v("它的作用是：为了判断从服务器重新连接上的还是之前的主服务器，从服务器需要将主服务器运行ID保存，当从服务器断开连接之后，会将保存的服务器运行ID发送给当前的主服务器，如果不同，则需要进行完全重同步。")]),_._v(" "),t("p",[_._v("心跳检测")]),_._v(" "),t("p",[_._v("在命令传播阶段，从服务器会默认以每秒一次的频率向主服务器发送自己的复制偏移量，有三个作用")]),_._v(" "),t("ul",[t("li",[_._v("检测主从服务器之间的网络状态")]),_._v(" "),t("li",[_._v("辅助实现min-slaves，主服务器会根据当前从服务数量和服务器lag（两心跳间隔）来防止主服务器在不安全的情况下执行写命令")]),_._v(" "),t("li",[_._v("检测命令丢失，从服务器发送自己的复制偏移量，主服务器比较自己的，将缺失的补发给从服务器")])]),_._v(" "),t("h2",{attrs:{id:"sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel"}},[_._v("#")]),_._v(" Sentinel")]),_._v(" "),t("p",[_._v("由一个或多个Sentinel实例组成的Sentinel系统可以监视任意多个主服务器，以及这些主服务器属下的所有从服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。")]),_._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210721160213399.png",alt:"image-20210721160213399"}}),_._v(" "),t("h3",{attrs:{id:"领头选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#领头选举"}},[_._v("#")]),_._v(" 领头选举")]),_._v(" "),t("p",[_._v("当一个主服务器被判断客观下线时，监视这个下线主服务器的各个Sentinel会进行协商，选举出一个领头Sentinel，并由领头的Sentinel对下线主服务器执行故障转移操作。")]),_._v(" "),t("p",[_._v("Redis选举领头Sentinel的方法是基于Raft的，当一个Sentinel发现主服务器下线时，会开始竞选领头。")]),_._v(" "),t("h3",{attrs:{id:"故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障转移"}},[_._v("#")]),_._v(" 故障转移")]),_._v(" "),t("p",[_._v("当产生领头之后，领头Sentinel将对已下线的主服务器执行故障转移操作，该操作有三个步骤：")]),_._v(" "),t("ul",[t("li",[_._v("在已下线主服务器属下的所有从服务器里挑选一个从服务器，将其转换成主服务器")]),_._v(" "),t("li",[_._v("让已下线主服务器属下的所有从服务器复制新的主服务器")]),_._v(" "),t("li",[_._v("将已下线主服务器在它上线后设置为新主服务器的从服务器")])]),_._v(" "),t("p",[_._v("如何挑选从服务器？")]),_._v(" "),t("p",[_._v("删除一些已经断线服务器、最近5秒内没有回复领头Sentinel的服务器、所有与已下线主服务器连接断开超过down-after-milliseconds*10的从服务器，针对剩下的服务器，根据从服务器的优先级、复制偏移量、服务器ID进行排序，选择第一个从服务器作为主服务器。")]),_._v(" "),t("h2",{attrs:{id:"集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[_._v("#")]),_._v(" 集群")])])}),[],!1,null,null,null);v.default=e.exports}}]);