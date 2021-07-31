(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{629:function(e,a,t){"use strict";t.r(a);var s=t(4),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"zab分布式一致性协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zab分布式一致性协议"}},[e._v("#")]),e._v(" ZAB分布式一致性协议")]),e._v(" "),t("p",[e._v("ZAB 协议是为分布式协调服务ZooKeeper专门设计的一种支持崩溃恢复的一致性协议。基于该协议，ZooKeeper 实现了一种主从模式的系统架构来保持集群中各个副本之间的数据一致性。ZAB协议中分为两种模式：")]),e._v(" "),t("p",[e._v("（1）消息广播模式：把数据更新到所有的Follower")]),e._v(" "),t("p",[e._v("（2）崩溃恢复模式：Leader发生崩溃时，如何恢复")]),e._v(" "),t("h2",{attrs:{id:"消息广播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息广播"}},[e._v("#")]),e._v(" 消息广播")]),e._v(" "),t("p",[e._v("ZAB协议的消息广播过程使用的是一个原子广播协议，类似于一个二阶段提交过程")]),e._v(" "),t("ul",[t("li",[e._v("将Propose复制到Follower")]),e._v(" "),t("li",[e._v("Follower返回ACK")]),e._v(" "),t("li",[e._v("Leader收到半数以上的Follower返回之后，Commit事务，同时给Follower发出Commit请求")])]),e._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210325213343339.png",alt:"image-20210325213343339"}}),e._v(" "),t("p",[e._v("但是，这样简化了的二阶段提交模型下，还是会出现由Leader服务器崩溃退出而带来的数据不一致问题，在ZAB中，使用了崩溃恢复模式来解决问题。")]),e._v(" "),t("p",[e._v("ZAB消息广播协议保证消息接受与发送的顺序性")]),e._v(" "),t("ul",[t("li",[e._v("消息广播协议是基于有FIFO特性的TCP协议来进行网络通信的")]),e._v(" "),t("li",[e._v("Leader服务器会为每个事务请求生成对应的Proposal，同时分配一个全局单调递增的唯一ID，即ZXID，Leader服务器会为每一个Follower服务器各自分配一个单独的队列，将需要广播的事务Proposal依次放入这些队列中，采用FIFO的策略发送消息")])]),e._v(" "),t("p",[e._v("与2PC的不同")]),e._v(" "),t("ul",[t("li",[e._v("为每一个事务维护一个递增的ZXID，保证事务执行的先后顺序")]),e._v(" "),t("li",[e._v("Leader收到半数提交即可完成commit，同时为每个follower分配一个消息队列，解决同步阻塞问题")]),e._v(" "),t("li",[e._v("通过崩溃恢复解决2PC单点问题")])]),e._v(" "),t("h2",{attrs:{id:"崩溃恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#崩溃恢复"}},[e._v("#")]),e._v(" 崩溃恢复")]),e._v(" "),t("p",[e._v("ZAB协议规定了如果一个事务Proposal在一台机器上被处理成功，那么应该在所有的机器上都被处理成功，哪怕机器出现故障。在崩溃恢复过程中，可能会出现两个数据不一致性的隐患及针对这些情况ZAB协议所需要保证的特性")]),e._v(" "),t("p",[e._v("ZAB协议需要确保那些已经在Leader服务器上提交的事务最终被所有服务器都提交")]),e._v(" "),t("blockquote",[t("p",[e._v("假设一个事务在Leader服务器上被提交了，并且已经得到过半Follower服务器的Ack反馈，但是在它将Commit消息发送给所有Follower机器之前，Leader服务器挂了。针对这种情况，ZAB协议需要确保事务Proposal最终能够在所有服务器上都被提交成功，否者将出现不一致，")]),e._v(" "),t("p",[e._v("疑问：如果Leader还没有对P1得到过半的服务器反馈，此时Leader崩溃了，当前P1已经在其他服务器上，但是并未提交，那么当前P1该怎么办？")])]),e._v(" "),t("p",[e._v("ZAB协议需要确保丢弃那些只在Leader服务器上被提出的事务")]),e._v(" "),t("blockquote",[t("p",[e._v("假设初始的Leader服务器Server1在提出了一个事务Proposal3之后就崩溃退出了，从而导致集群中的其他服务器都没有收到这个事务Proposal。于是，当Server1恢复过来再次加入到集群中的时候，ZAB协议需要确保丢弃Proposal3这个事务")])]),e._v(" "),t("p",[e._v("以上两个案例，决定了ZAB协议必须设计这样一个Leader选举算法")]),e._v(" "),t("blockquote",[t("p",[e._v("能够确保提交已经被Leader提交的事务Proposal，同时丢弃已经被跳过的事务Proposal")])]),e._v(" "),t("p",[e._v("针对这个要求，如果让Leader选举算法能够保证新选举出来的Leader服务器拥有集群中所有机器最高编号（即ZXID最大）的事务Proposal，那么就可以保证这个新选举出来的Leader一定具有所有已经提交的提案。")]),e._v(" "),t("p",[e._v("这样就解决了上述两个问题")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("拥有最大ZXID的服务器，这个服务器一定具有所有已经在Leader提交的提案")])]),e._v(" "),t("li",[t("p",[e._v("而当新Leader服务器产生，服务器会将ZXID高32为加一，将低32为置0，上一个Leader服务器恢复，会根据新Leader上的数据回滚和同步数据")])])]),e._v(" "),t("p",[e._v("ZXID，高32位表示Leader的epoch，低32位表示Proposal编号，每新产生一个Leader会将ZXID中的epoch加1，将Proposal编号置0。")]),e._v(" "),t("h2",{attrs:{id:"数据同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据同步"}},[e._v("#")]),e._v(" 数据同步")]),e._v(" "),t("p",[e._v("完成Leader选举之后，在正式开始工作（即接受客户端的请求）之前，Leader服务器会确认事务日志中的所有Proposal是否已经被集群中过半的机器提交了，如果没有，执行数据同步过程。")]),e._v(" "),t("p",[e._v("Leader服务器会为每一个Follower服务器都准备一个队列，并将那些没有被各Follower服务器同步的事务以Proposal消息的形式逐个发送给Follower服务器，并在每一个Proposal后面紧接着再发送一个Commit消息，表示该事务已经被提交。")]),e._v(" "),t("h2",{attrs:{id:"leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leader选举"}},[e._v("#")]),e._v(" Leader选举")]),e._v(" "),t("p",[e._v("myid，用来唯一标识一台Zookeeper集群中的机器")]),e._v(" "),t("p",[e._v("ZXID，事务ID，用来唯一标识一次服务器状态的变更")]),e._v(" "),t("p",[e._v("当Zookeeper集群中的一台服务器出现以下两种情况之一时，就会开始Leader选举，进入LOOKING状态")]),e._v(" "),t("ul",[t("li",[e._v("服务器初始化启动")]),e._v(" "),t("li",[e._v("服务器运行期间无法和Leader保持连接")])]),e._v(" "),t("p",[e._v("当一台机器进入Leader选举流程时，当前集群也可能会处于以下两种状态")]),e._v(" "),t("ul",[t("li",[e._v("集群中本来就已经存在一个Leader")]),e._v(" "),t("li",[e._v("集群中确实不存在Leader")])]),e._v(" "),t("p",[e._v("第一种情况时集群中某一台机器启动较晚，它启动的时候已经有Leader了，那么当该机器尝试去选举Leader时，会被告知当前服务器的Leader信息，对于该机器来说，仅仅需要和Leader机器建立起连接，并进行状态同步即可。")]),e._v(" "),t("p",[e._v("当集群中不存在Leader时，Leader是如何选举出来的呢？")]),e._v(" "),t("p",[e._v("开始第一次投票")]),e._v(" "),t("p",[e._v("当一台机器处于LOOGING状态时，开始第一次投票，每台机器都是将自己作为被推举的对象来进行投票，其发送的投票信息有myid和ZXID")]),e._v(" "),t("p",[e._v("变更投票")]),e._v(" "),t("p",[e._v("每台机器能发出自己投票，也能接受到来自集群中其他机器的投票，每台机器都会根据一定规则，来处理其他机器的投票，主要有以下情况")]),e._v(" "),t("ul",[t("li",[e._v("如果接收到的ZXID比自己的大，则接受当前收到的投票，并将该投票发送出去")]),e._v(" "),t("li",[e._v("如果自己的大，就坚持自己的投票，不做任何变更")]),e._v(" "),t("li",[e._v("如果接收到的ZXID相等，那就比较两者的myid，如果接受的myid大于自己的id，就认可该投票，并再次将该投票发送出去")]),e._v(" "),t("li",[e._v("如果接收到的ZXID相等，且接受的myid小于自己的id，坚持自己投票，不做变更")])]),e._v(" "),t("p",[e._v("确认Leader")]),e._v(" "),t("p",[e._v("经过这第二次投票后，集群中的每台机器都会再次收到其他机器的投票，然后开始统计投票，如果一台机器收到了超过半数的相同的投票，那么这个投票对于的myid机器即为Leader")]),e._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210326134813419.png",alt:"image-20210326134813419"}}),e._v(" "),t("h2",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[e._v("#")]),e._v(" 应用场景")]),e._v(" "),t("h3",{attrs:{id:"数据发布-订阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据发布-订阅"}},[e._v("#")]),e._v(" 数据发布/订阅")]),e._v(" "),t("p",[e._v("即所谓的配置中心，就是发布者将数据发布到Zookeeper的一个或一系列节点上，供订阅者进行数据订阅，进行达到动态获取数据的目的，实现配置信息的集中式管理和数据的动态更新。")]),e._v(" "),t("p",[e._v("以一个“数据库切换”的场景说明Zookeeper是如何实现配置管理的")]),e._v(" "),t("p",[e._v("配置存储")]),e._v(" "),t("p",[e._v("我们需要将初始化配置存储到Zookeeper的一个数据节点，例如")]),e._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210326110305447.png",alt:"image-20210326110305447"}}),e._v(" "),t("p",[e._v("将配置信息写入该节点，如：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 数据库配置\ndbcp.driverClassName=com.mysql.jdbc.Driver\n....\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("配置获取")]),e._v(" "),t("p",[e._v("集群中每台机器在启动时，首先会从Zookeeper配置节点上读取数据库信息，客户端还需在该配置节点上注册一个数据变更的Watcher监听，一旦发生节点数据变更，所有订阅的客户端都能获取到数据变更通知，拉取最新的数据。")]),e._v(" "),t("p",[e._v("配置变更")]),e._v(" "),t("p",[e._v("在系统运行过程中，如果我们需要修改配置信息，可以对Zookeeper上的数据节点的内容进行更新，Zookeeper能够将数据变更的通知发送到各个客户端，客户端接收到变更通知，将重新进行数据的获取。")]),e._v(" "),t("h3",{attrs:{id:"分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),t("h4",{attrs:{id:"排他锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排他锁"}},[e._v("#")]),e._v(" 排他锁")]),e._v(" "),t("p",[e._v("排他锁，又称写锁或独占锁，如果事务T对数据对象O加上了排他锁，那么在整个加锁期间，只允许T对O进行读取和更新，直到T释放了排他锁。")]),e._v(" "),t("p",[e._v("获取锁过程")]),e._v(" "),t("p",[e._v("使用Zookeeper上的一个数据节点表示一个排他锁，在获取排他锁时，所有的客户端都会试图通过调用create()接口在 /exclusive_lock 节点下创建临时子结点 /exclusive_lock/lock，Zookeeper会保证在所有客户端中，只有一个客户端能够创建成功，谁创建成功了谁就获得了该锁，同时所有没有获得到锁的客户端就需要到 /exclusive_lock 结点上注册一个子节点变更的Watcher监听，以便实时监听lock结点的变更情况。")]),e._v(" "),t("p",[e._v("释放锁")]),e._v(" "),t("p",[e._v("/exclusive_lock/lock 是一个临时结点，在以下两种情况下，都有可能释放锁")]),e._v(" "),t("ul",[t("li",[e._v("获得锁的客户端发生了宕机，那么Zookeeper上的这个临时就会被移除")]),e._v(" "),t("li",[e._v("正常执行完业务逻辑后，客户端就会主动将自己创建的临时结点删除")])]),e._v(" "),t("p",[e._v("当lock结点被移除，Zookeeper都会通知所有在/exclusive_lock结点上注册了子节点变更Wacher监听的客户端。这些客户端在接收到通知后，再次重新发起分布式锁获取。")]),e._v(" "),t("h4",{attrs:{id:"共享锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享锁"}},[e._v("#")]),e._v(" 共享锁")]),e._v(" "),t("p",[e._v("共享锁，又称为读锁")]),e._v(" "),t("h2",{attrs:{id:"数据模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[e._v("#")]),e._v(" 数据模型")]),e._v(" "),t("p",[e._v("ZNode是Zookeeper中数据的最小单元，每个ZNode上都可以保存数据，同时还可以挂载子节点，因此构成了一个层次化的命名空间，称之为树。")]),e._v(" "),t("h3",{attrs:{id:"节点类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点类型"}},[e._v("#")]),e._v(" 节点类型")]),e._v(" "),t("ul",[t("li",[e._v("持久节点")]),e._v(" "),t("li",[e._v("持久顺序节点，在创建节点的时候给节点名加上数字后缀，这个数字是递增的")]),e._v(" "),t("li",[e._v("临时节点，临时节点的生命周期是和客户端的会话绑定在一起的，如果客户端会话失效，那么这个节点就会被自动清理")]),e._v(" "),t("li",[e._v("临时顺序节点")])]),e._v(" "),t("p",[e._v("可以使用get命令获取一个数据节点的数据内容和状态信息")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ss\t\t\t\t\t\t\t\t\t\t\t\t// 数据内容\ncZxid = 0x100000003\t\t\t\t\t\t\t\t// 创建该数据节点时的事务id\nctime = Sun Mar 21 10:45:35 CST 2021\t\t\t\nmZxid = 0x200000002\t\t\t\t\t\t\t\t// 最后一次被更新时的事务id\nmtime = Fri Mar 26 16:31:09 CST 2021\npZxid = 0x100000003\t\t\t\t\t\t\t\t// 子节点列表最后一次被修改时的事务ID，子内容变更不会影响\ncversion = 0\ndataVersion = 1\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 2\nnumChildren = 0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\zsh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210326181613813.png",alt:"image-20210326181613813"}}),e._v(" "),t("h3",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[e._v("#")]),e._v(" 版本")]),e._v(" "),t("p",[e._v("结点的版本来保证分布式数据原子性操作")]),e._v(" "),t("p",[e._v("有三个版本信息version、cversion、aversion")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("version "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" setDataRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" currentVersion "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" nodeRecord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("stat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("version "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" version "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" currentVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("throw")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("KeeperException"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BadVersionException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" currentVersion "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("在zookeeper中，version属性正是用来实现乐观锁机制的“写入检验”的，从上面的执行逻辑中，可以看出，在进行一次setDataRequest请求处理时，首先进行了版本检查：Zookeeper会冲setDAtaRequest请求中获取到当前请求的版本version，同时从数据记录nodeRecord中获取到当前服务器上最新的版本currentVersion，如果两个版本不匹配，则不进行写操作。")]),e._v(" "),t("h3",{attrs:{id:"watcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[e._v("#")]),e._v(" Watcher")]),e._v(" "),t("p",[e._v("https://blog.csdn.net/u013468915/article/details/80955110")]),e._v(" "),t("ul",[t("li",[e._v("统一命名服务")]),e._v(" "),t("li",[e._v("统一配置管理")]),e._v(" "),t("li",[e._v("统一集群管理")]),e._v(" "),t("li",[e._v("服务器动态上下线")]),e._v(" "),t("li",[e._v("软负载均衡")])]),e._v(" "),t("p",[e._v("监听器原理")]),e._v(" "),t("p",[e._v("选举机制")])])}),[],!1,null,null,null);a.default=r.exports}}]);