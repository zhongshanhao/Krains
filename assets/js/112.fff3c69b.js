(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{596:function(v,n,s){"use strict";s.r(n);var _=s(4),a=Object(_.a)({},(function(){var v=this,n=v.$createElement,s=v._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("p",[v._v("图像围栏是我们提供给公安部门的安防产品，其服务有人体车非特征提取和检索，视频流图片流监控解析、布控报警等")]),v._v(" "),s("p",[v._v("大螺丝是我们的计算服务，一边对接工程一边对接算法，提供资源的分配和调度工作")]),v._v(" "),s("p",[v._v("我的任务就是我们在使用图像围栏的时候，需要给不同的服务配GPU卡，比如我给人脸特征抽取配8张卡，我们可以有1个实例配8卡，4实例每个配两卡策略，这4个实例分配到不同的机器上，不同分配策略不一样，它们有不同的QPS、内存和CPU消耗，这其实跟服务有关系，有些服务偏向于IO密集型，有些偏向计算密集型，计算密集型的服务均分到不同的机器上能够充分利用CPU资源，而IO密集型的服务应该尽量起1个实例，分在一台机器上会好些。")]),v._v(" "),s("p",[v._v("所以，我的任务就是我们在给各个服务配好GPU卡之后，考量整体的服务给出一个每一个服务的实例数与它的GPU卡数。")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("当然，首先第一步就是判断每一个服务是计算密集型还是IO密集型的，这需要通过业务逻辑和性能测试两个方面来做判断")])]),v._v(" "),s("li",[s("p",[v._v("我们将所有的服务归好类，我们要综合所有服务得到每一个服务的分配策略")]),v._v(" "),s("ul",[s("li",[v._v("其实就是在集群资源有限的情况下，要尽可能让计算密集型的服务分配到多台机子上，而IO密集的尽量在更少的机器上")])]),v._v(" "),s("p",[v._v("其实这个问题有点像背包问题，我们有多个机器，每台机器有GPU资源，就好像有多个背包，背包就是机器，容量就是GPU资源，对于不同的服务，不同的装法能够产生不同的价值，然后怎么装能够使得价值最大化。")]),v._v(" "),s("p",[v._v("但是我最后的解决方案其实并没有用背包的方法来解决，而是使用暴力枚举的方式做的，主要有两点考虑")]),v._v(" "),s("ul",[s("li",[v._v("一是考虑到我们集群的资源是有限的，一个集群上的机器就十几台，使用动态规划的话主要是它有一些最优子结构，可以优化时间复杂度，但我们数据量是很小的，没有必要")]),v._v(" "),s("li",[v._v("二是为代码的可维护性、易读性考虑，写一个简单易懂的代码对自己或者后来者都是一种解脱吧")])]),v._v(" "),s("p",[v._v("我想的方法就是对于一个服务，枚举它所有可能的划分方法，比如当前服务配了8卡，当前集群有4台机器，那么我们就可以4个实例两张卡，2个实例张卡，1个实例八张卡，对于所有服务我们都这么做，然后我们将每一个服务都抽出一个划分方案出来，组合起来就得到一种所有服务的调度方案，我们可以将这些服务的划分方案一一组合，就能够得到所有的调度方案，对于每一个调度方案，怎么去区分它们是好是坏呢?")]),v._v(" "),s("p",[v._v("我们主要是基于一个点：让IO密集型服务尽可能在少的机器上运行，计算密集的服务尽可能平分到多台机器上，以充分利用CPU资源")]),v._v(" "),s("p",[v._v("所以我对每一个调度方案进行打分，")]),v._v(" "),s("ul",[s("li",[v._v("对于IO密集型的服务，它的分数是p/k，p是卡数，k是实例数，就说k越小它的分数就越大，")]),v._v(" "),s("li",[v._v("对于计算密集型的服务，它的分数是p*k/n，p是卡数，k是实例数，n是机器数，就是说k越大，它的分数越大。")])]),v._v(" "),s("p",[v._v("给所有的调度方案打分之后，按照从大到小排序，分数越高其实就越符合我们的刚才基于的点")]),v._v(" "),s("p",[v._v("但其实并不是每一个调度方案都能够被大螺丝调度的，有些调度方案是不合理的，就比如说我们有2台4卡的机器，如果2个服务配4卡，一个服务的调度方案为1机器4卡，另一个服务2机器2卡，那么这样的调度方案是不合理的。")]),v._v(" "),s("p",[v._v("所以我需要使用一种方法去验证一种调度方案是否合理，我使用一种贪心的策略，去每次先放需求GPU卡多的到当前还剩GPU最多的机器上，如果有GPU卡分配不到任何一台机器上，那么就换下一个策略，如果能够分配完，就选择该种调度策略")])])]),v._v(" "),s("p",[v._v("如何保证螺丝能够按照你想要的方式调度？")]),v._v(" "),s("p",[v._v("我们的服务是部署在k8s上的，这就要说到k8s调度器的工作方式了")]),v._v(" "),s("ul",[s("li",[v._v("预选过程，过滤掉不满足条件的节点，如资源不满足的节点、与pod指定的label不匹配的节点等")]),v._v(" "),s("li",[v._v("优选过程，对通过的节点按照优先级排序，如按照CPU和内存的使用率来给权重")])]),v._v(" "),s("p",[v._v("如何让某个pod运行到指定机器上？")]),v._v(" "),s("p",[v._v("先给节点打标签")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("kubectl label nodes node02 key=face-1vn\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br")])]),s("p",[v._v("在pod上指定"),s("code",[v._v("nodeSelector")])]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: busybox-pod\n  name: test-busybox\nspec:\n  containers:\n    image: busybox\n    name: test-busybox\n  nodeSelector:\n    key: face-1vn\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br"),s("span",{staticClass:"line-number"},[v._v("4")]),s("br"),s("span",{staticClass:"line-number"},[v._v("5")]),s("br"),s("span",{staticClass:"line-number"},[v._v("6")]),s("br"),s("span",{staticClass:"line-number"},[v._v("7")]),s("br"),s("span",{staticClass:"line-number"},[v._v("8")]),s("br"),s("span",{staticClass:"line-number"},[v._v("9")]),s("br"),s("span",{staticClass:"line-number"},[v._v("10")]),s("br"),s("span",{staticClass:"line-number"},[v._v("11")]),s("br"),s("span",{staticClass:"line-number"},[v._v("12")]),s("br")])]),s("p",[v._v("多机器部署，利用pod反亲和性")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: face-1vn\n  labels:\n    app: face-1vn\nspec:\n  replicas: 3\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n      affinity:\n        podAntiAffinity:\t# 反亲和性\n          requiredDuringSchedulingIgnoredDuringExecution:  # 硬策略\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - face-1vn\n            topologyKey: kubernetes.io/hostname\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br"),s("span",{staticClass:"line-number"},[v._v("4")]),s("br"),s("span",{staticClass:"line-number"},[v._v("5")]),s("br"),s("span",{staticClass:"line-number"},[v._v("6")]),s("br"),s("span",{staticClass:"line-number"},[v._v("7")]),s("br"),s("span",{staticClass:"line-number"},[v._v("8")]),s("br"),s("span",{staticClass:"line-number"},[v._v("9")]),s("br"),s("span",{staticClass:"line-number"},[v._v("10")]),s("br"),s("span",{staticClass:"line-number"},[v._v("11")]),s("br"),s("span",{staticClass:"line-number"},[v._v("12")]),s("br"),s("span",{staticClass:"line-number"},[v._v("13")]),s("br"),s("span",{staticClass:"line-number"},[v._v("14")]),s("br"),s("span",{staticClass:"line-number"},[v._v("15")]),s("br"),s("span",{staticClass:"line-number"},[v._v("16")]),s("br"),s("span",{staticClass:"line-number"},[v._v("17")]),s("br"),s("span",{staticClass:"line-number"},[v._v("18")]),s("br"),s("span",{staticClass:"line-number"},[v._v("19")]),s("br"),s("span",{staticClass:"line-number"},[v._v("20")]),s("br"),s("span",{staticClass:"line-number"},[v._v("21")]),s("br"),s("span",{staticClass:"line-number"},[v._v("22")]),s("br")])]),s("p",[v._v("针对配卡问题我也做了测试，一方面是功能测试，另一个是性能测试，功能测试主要测试配卡策略能不能够正常工作，能不能正确调度到集群，性能测试主要考虑两个点")]),v._v(" "),s("ul",[s("li",[v._v("一个是如何测试能够得到较为准确的负载，该负载应该与服务所能承载的真实负载接近")]),v._v(" "),s("li",[v._v("第二个是面对很多不同的服务，如何设计一套通用的测试框架以尽可能提高代码的可复用性、维护性、扩展性")])]),v._v(" "),s("p",[v._v("实现，编写一个测试基类，有")]),v._v(" "),s("ul",[s("li",[v._v("线程安全的计数器")]),v._v(" "),s("li",[v._v("产生恒定QPS的压力控制器，内部使用一个线程安全的队列，往队列中按照恒定的QPS打数据，主任务从队列中取到数据才能发送请求，没有取到数据则等待")]),v._v(" "),s("li",[v._v("活性检查和qps统计")]),v._v(" "),s("li",[v._v("主任务，不同的服务有不同的逻辑")])]),v._v(" "),s("p",[v._v("如果在某个qps内，在一段时间内，检测错误率不大于1%，且压力控制队列数据恒定，就说该服务能够承担这个QPS的压力")]),v._v(" "),s("p",[v._v("测试")]),v._v(" "),s("p",[v._v("对照实验")]),v._v(" "),s("ul",[s("li",[v._v("所有服务统统分配1*n，1卡多实例")]),v._v(" "),s("li",[v._v("所有服务统统1实例，多卡1实例")]),v._v(" "),s("li",[v._v("我的分配方法")])]),v._v(" "),s("p",[v._v("对比1卡多实例，有着更高的qps且有更低的cpu内存消耗")]),v._v(" "),s("p",[v._v("对比多卡1实例，内存cpu消耗稍微高一些，但是qps更高")]),v._v(" "),s("p",[v._v("问题？")]),v._v(" "),s("p",[v._v("加分点")]),v._v(" "),s("p",[v._v("可以扩展的点？k8s调度器原理")]),v._v(" "),s("p",[v._v("默认调度器")]),v._v(" "),s("ul",[s("li",[v._v("预选阶段")]),v._v(" "),s("li",[v._v("优选阶段")])]),v._v(" "),s("p",[v._v("开发调度器插件")]),v._v(" "),s("p",[v._v("大螺丝是我们的计算服务，底层封装cv算法，向上给工程提供算子，工程通过组合算子完成特定的功能，\n大螺丝还是我们的调度服务，我们生成k8s .yaml文件，描述好所需资源如所需的算子、GPU、CPU资源、实例数等，大螺丝帮助我们把服务起起来\n我的工作就是用户给不同的服务配GPU卡，我考量所有的服务给出一个较优的配卡方案，这个配卡方案就是每个服务起几个实例，每个实例分配多少GPU资源，因为不同的服务类型不一样，有些服务类型是IO密集型的，有些服务是计算密集型的，例如人脸1vN比对尽可能放在一台机器上会比较好，人脸特征提取平分放在不同电脑上能够充分利用各个机器的CPU资源。\n当然根据业务需求有几个难点，")]),v._v(" "),s("ol",[s("li",[v._v("就是刚才说的不同的服务有的起1个实例比较好，有的起多个实例平分GPU资源较好")]),v._v(" "),s("li",[v._v("多个服务拆分完成之后，需要验证方案是否能够被调度到目前的集群上")])]),v._v(" "),s("p",[v._v("// 模型设计\n// 不同的机器有不同的显卡数，需要简单可配置的方式来说明机器有多少张卡")]),v._v(" "),s("p",[v._v("我们目前有两种类型的显卡，一种是T4、一种是P4，这两种卡都是有8张卡")]),v._v(" "),s("p",[v._v("综合所有服务的需求：")]),v._v(" "),s("p",[v._v("对于服务a，分配策略为machine，需求p1")]),v._v(" "),s("p",[v._v("对于服务b，分配策略为service，需求p2，")]),v._v(" "),s("p",[v._v("对于服务c......")]),v._v(" "),s("p",[v._v("对于某一服务，尝试所有的划分方案")]),v._v(" "),s("p",[v._v("即p1 = 8 * a8，...， 2 * a2,  1 * a1，如对于8×a8，表示a8台机器上8卡，比如8卡4机器，可以划分为1 * 8，2 * 4，4 * 2  ，4 * 2就表示划分4个实例，每个实例分两张卡")]),v._v(" "),s("p",[v._v("p2 = 1 *  b1, 2 * b2, ... , 8 * b8，")]),v._v(" "),s("p",[v._v(".....")]),v._v(" "),s("p",[v._v("为所有服务选取一种策略，如[8×a8, 1×b1，.......,]，这是一种分配策略")]),v._v(" "),s("p",[v._v("对于某种分配策略，计算分数：")]),v._v(" "),s("p",[v._v("score = service + machine")]),v._v(" "),s("p",[v._v("service = p *  k/n，k<=n，p是分配的总卡数，k是被切分的实例数，n是机器数")]),v._v(" "),s("p",[v._v("machine = p/k，p是分配的总卡数，k是被切分的实例数")]),v._v(" "),s("p",[v._v("将这些划分方案一一组合起来，得到很多种分配方案，对每种分配方案打分，按照分数从大到小排序，分数越高，越符合分配策略，即machine尽可能集中在某些机器，service尽可能多的平均在多台机器，从大到小验证当前方案是否能够合理调度到当前集群上，如果遇到一个符合的方案，则当前方案为最优的方案")]),v._v(" "),s("p",[v._v("验证方案使用贪心策略，按照卡数从大到小排序，优先给卡数大的分配资源，如果该方案不能分配资源，则尝试下一方案，直到有方案能够被分配所有资源")]),v._v(" "),s("p",[v._v("如何能够使集群按照所需要的方式调度实例？\nk8s亲和性设置，给node打label")]),v._v(" "),s("p",[v._v("性能测试")]),v._v(" "),s("ul",[s("li",[v._v("如何测试能够得到较为准确的负载，该负载应该与服务所能承载的真实负载接近")]),v._v(" "),s("li",[v._v("面对很多不同的服务，如何设计一套通用的测试框架以尽可能提高代码的可复用性、维护性、扩展性")])]),v._v(" "),s("p",[v._v("实现")]),v._v(" "),s("ul",[s("li",[v._v("主任务")]),v._v(" "),s("li",[v._v("线程安全的计数器")]),v._v(" "),s("li",[v._v("产生恒定QPS的压力控制器，内部使用一个线程安全的队列，往队列中按照恒定的QPS打数据，主任务从队列中取到数据才能发送请求，没有取到数据则等待")]),v._v(" "),s("li",[v._v("活性检查和qps统计")])]),v._v(" "),s("p",[v._v("如果在某个qps内，在一段时间内，检测错误率不大于1%，且压力控制队列数据恒定，就说该服务能够承担这个QPS的压力")]),v._v(" "),s("p",[v._v("测试")]),v._v(" "),s("p",[v._v("对照实验")]),v._v(" "),s("ul",[s("li",[v._v("所有服务统统分配1*n，1卡多实例")]),v._v(" "),s("li",[v._v("所有服务统统1实例，多卡1实例")]),v._v(" "),s("li",[v._v("我的分配方法")])]),v._v(" "),s("p",[v._v("对比1卡多实例，有着更高的qps且有更低的cpu内存消耗")]),v._v(" "),s("p",[v._v("对比多卡1实例，内存cpu消耗稍微高一些，但是qps更高")])])}),[],!1,null,null,null);n.default=a.exports}}]);