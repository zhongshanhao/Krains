(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{500:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("h2",{attrs:{id:"题目链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/unique-binary-search-trees/",target:"_blank",rel:"noopener noreferrer"}},[s._v("题目链接"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[s._v("#")]),s._v(" 动态规划")]),s._v(" "),a("h3",{attrs:{id:"状态定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态定义"}},[s._v("#")]),s._v(" 状态定义")]),s._v(" "),a("p",[s._v("令dp[i]为i个结点所能构建的二叉搜索树的个数。")]),s._v(" "),a("h3",{attrs:{id:"状态转移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态转移"}},[s._v("#")]),s._v(" 状态转移")]),s._v(" "),a("p",[s._v("考虑"),a("code",[s._v("i")]),s._v("个结点时，可以选择m作为其头结点，m属于[1,i]，当其左子树结点个数为"),a("code",[s._v("j")]),s._v("时，除去其头结点，右子树结点个数为"),a("code",[s._v("i-j-1")]),s._v(",此时以m为头结点的树的个数为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("∗")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mi",[s._v("j")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i] * dp[i-j-1]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")])])])]),s._v(" ,也就是其左右子树能构建的二叉搜索树个数的乘积。")]),s._v(" "),a("p",[s._v("我们枚举所有可能的头结点m，将他们求和就能得到"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")])])])]),s._v("，因此得状态转移：")]),s._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("=")]),a("munderover",[a("mo",[s._v("∑")]),a("mrow",[a("mi",[s._v("j")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1),a("mrow",[a("mi",[s._v("j")]),a("mo",[s._v("=")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1)],1),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("j")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("∗")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mi",[s._v("j")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i] = \\sum_{j=0}^{j=i-1}dp[j]*dp[i-j-1]\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"3.2725540000000004em","vertical-align":"-1.4137769999999998em"}}),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.8587770000000006em"}},[a("span",{staticStyle:{top:"-1.872331em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mrel mtight"},[s._v("=")]),a("span",{staticClass:"mord mtight"},[s._v("0")])])])]),a("span",{staticStyle:{top:"-3.050005em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",[a("span",{staticClass:"mop op-symbol large-op"},[s._v("∑")])])]),a("span",{staticStyle:{top:"-4.347113em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mrel mtight"},[s._v("=")]),a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("−")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.4137769999999998em"}},[a("span")])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")])])])])])]),s._v(" "),a("h3",{attrs:{id:"初始状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始状态"}},[s._v("#")]),s._v(" 初始状态")]),s._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("=")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[0] = 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")])])])]),s._v(",即认为树为空时也算一颗树。")]),s._v(" "),a("p",[s._v("代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("numTrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"数学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学"}},[s._v("#")]),s._v(" 数学")]),s._v(" "),a("p",[s._v("上述推导的dp[n]在数学上是卡特兰数"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("C")]),a("mi",[s._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("C_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),s._v("，即n个节点的二叉搜索树的所有可能形态数为卡特兰数"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("C")]),a("mi",[s._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("C_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),s._v("为：")]),s._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("C")]),a("mn",[s._v("0")])],1),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mtext",[s._v("，")]),a("msub",[a("mi",[s._v("C")]),a("mi",[s._v("n")])],1),a("mo",[s._v("=")]),a("mfrac",[a("mrow",[a("mn",[s._v("2")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mn",[s._v("2")]),a("mi",[s._v("n")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("mrow",[a("mi",[s._v("n")]),a("mo",[s._v("+")]),a("mn",[s._v("2")])],1)],1),a("msub",[a("mi",[s._v("C")]),a("mrow",[a("mi",[s._v("n")]),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("C_0=1，\nC_{n}=\\frac{2(2n+1)}{n+2}C_{n-1}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("0")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("，")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.19633em","vertical-align":"-0.7693300000000001em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.427em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[s._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7693300000000001em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.301108em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")]),a("span",{staticClass:"mbin mtight"},[s._v("−")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}},[a("span")])])])])])])])])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("numTrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("实际上，n个不同的数入栈后的出栈的排列总数也是卡特兰数，跟上述二叉搜索树个数的推导其实是一样的，即每次固定一个出栈的数，即：栈内各个数的排列总数×已出栈的排列总数。")])])}),[],!1,null,null,null);t.default=e.exports}}]);