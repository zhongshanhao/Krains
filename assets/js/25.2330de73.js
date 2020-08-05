(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{526:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("h2",{attrs:{id:"题目链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/divisor-game/",target:"_blank",rel:"noopener noreferrer"}},[s._v("题目链接"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("博弈的基本思想就是做一个选择，这个选择让对方无法获胜，自己就赢了。")]),s._v(" "),a("p",[s._v("遇到这种题最好先自己列出前面几项，然后试着利用前面几项推出第n项。")]),s._v(" "),a("p",[s._v("用f(N)表示先手则输或赢，我们用T表示赢，F表示输。")]),s._v(" "),a("p",[s._v("N=1，先手输，f(1)=F")]),s._v(" "),a("p",[s._v("N=2，先手选1能让对手先手输，对方输，自己赢，f(2)=T")]),s._v(" "),a("p",[s._v("N=3，3因数只有1，只能选1，对方先手赢，自己输，f(3)=F")]),s._v(" "),a("p",[s._v("N=4，先手选1，有N=3的结论，对方输，自己赢，f(4)=T")]),s._v(" "),a("p",[s._v("...")]),s._v(" "),a("p",[s._v("我们可以发现，从1开始递推下去，")]),s._v(" "),a("ul",[a("li",[s._v("若N是偶数，那么先手者可以选择奇数因子，N(偶数)-奇数=奇数，此时N为奇数。因为奇数的因子只有奇数，后手者只能选择奇数因子，N(奇数)-奇数=偶数，此时N为偶数，如果先手者一直选择奇数因子，N最终会为1，而奇数是后手者开始选的，因此后手者输。")]),s._v(" "),a("li",[s._v("若N是奇数，先手者只能选择奇数的因子，N就为偶数，由前面结论可得，后手者赢，先手者输。")])]),s._v(" "),a("p",[s._v("可以假设**当N为奇数时，当前选择的人必输，为偶数时必赢。**下面是严格的数学证明：")]),s._v(" "),a("p",[a("strong",[s._v("用第二类数学归纳法证明假设是否成立")])]),s._v(" "),a("p",[s._v("当N=1,2时结论成立")]),s._v(" "),a("p",[s._v("假设N<=k时结论成立，证明N=k+1时结论成立")]),s._v(" "),a("ul",[a("li",[s._v("N是偶数，那么先手者可以选择奇数因子，N=N-奇数，此时N<=K，N为奇数(奇数-奇数=偶数)，由结论可知在N为奇数时选择的人输，因此先手者赢。")]),s._v(" "),a("li",[s._v("N是奇数，先手者只能选择奇数的因子，N=N-奇数，当前N<=k，N为偶数(奇数-奇数=偶数)，由结论可知后手者赢，先手者输。")])]),s._v(" "),a("p",[s._v("此时N=k+1时也满足结论：N为奇数时，先手者输，为偶数赢。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("divisorGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("N")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);