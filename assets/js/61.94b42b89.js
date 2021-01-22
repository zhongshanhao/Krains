(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{525:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[s._v("#")]),s._v(" vector")]),s._v(" "),t("p",[s._v("变长数组")]),s._v(" "),t("p",[s._v("定义")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vector<int> a;\t\t\t\t// 一维变长的数组\nvector<int > graph[10];\t// 一维定长的数组，每个数组元素都是变长的数组\nvector<vector<int> > graph;  // 两维都是变长的数组\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("push_back()/pop_back()/迭代")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vector<int> a;\n// 在末尾添加一个元素\na.push_back(1);\na.push_back(2);\na.push_back(3);\n// 移除最后一个元素\na.pop_back();\n// 遍历\nfor(int i = 0; i < a.size(); i++)\n    cout<< a[i] << endl;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("size()--获取vector元素个数")]),s._v(" "),t("p",[s._v("clear()--清空vector中所有元素")]),s._v(" "),t("p",[s._v("insert(it, x)--用来在vector的任意迭代器it处插入一个元素x")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("a.insert(a.begin()+1, 5); // 在位置1处插入元素5，将其后的元素依次往后移动一位\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("erase(it) -- 用来删除迭代器为it处的元素")]),s._v(" "),t("p",[s._v("erase(first, last) -- 用来删除[first, last)内的所有元素，first与last均为迭代器")]),s._v(" "),t("p",[s._v("图的存储")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("struct Node{\n    int v;\n    int w;\n    Node(int _v, int _w): v(_v), w(_w) { }\n}\n\n// 定义邻接表\nvector<Node> graph[N];\n// 加入一条边0->3，权重为4\ngraph[0].push_back(Node(3, 4));\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" Set")]),s._v(" "),t("p",[s._v("集合，是一个内部自动有序且不含重复元素的容器")]),s._v(" "),t("p",[s._v("insert(x) -- 将x插入set容器，并自动递增排序和去重")]),s._v(" "),t("p",[s._v("find(value) -- 返回set中对应值为value的迭代器")]),s._v(" "),t("p",[s._v("erase(it) -- 删除迭代器it所指向的元素")]),s._v(" "),t("p",[s._v("erase(value) -- 删除set中值为value的元素")]),s._v(" "),t("p",[s._v("erase(first, last) -- 可以删除一个区间内的所有元素")]),s._v(" "),t("p",[s._v("size() -- 用来获得set内元素的个数")]),s._v(" "),t("p",[s._v("clear() -- 用来清空set中所有元素")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('set<int> s;\ns.insert(3);\ns.insert(2);\ns.insert(4);\n// 遍历\nfor(auto &i : s)\n    cout<< i << " " << endl;\nset<int>::iterator it = s.find(68);\ncout<< *it << endl;\ns.erase(it);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" String")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('int main(){\n    string str = "abcd";\n    // 迭代方式一\n    for(int i = 0; i < str.length(); i++)\n        cout<< str[i] << " ";\n    // 迭代方式二\n    for(auto &c : str)\n        cout<< c << " ";\n    cout<< str;\n    printf("%s", str.c_str());\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("字符串拼接 +=")]),s._v(" "),t("p",[s._v("字典序比较 <，>，!=")]),s._v(" "),t("p",[s._v("insert(pos, string) -- 在pos号位置插入字符串string")]),s._v(" "),t("p",[s._v("insert(it, it2, it3) -- it为原字符串的欲插入位置，it2和it3为待插入字符串的首尾迭代器，用来表示串[it2, it3)将被插在it的位置上")]),s._v(" "),t("p",[s._v("erase(it) -- 删除迭代器it处的元素")]),s._v(" "),t("p",[s._v("erase(first, last) -- 删除区间[first, last)内的元素")]),s._v(" "),t("p",[s._v("erase(pos, length) -- 从pos为需要开始删除的起始位置，length为删除的字符个数")]),s._v(" "),t("p",[s._v("clear() -- 清空string中的数据")]),s._v(" "),t("p",[s._v("substr(pos, len) -- 返回从pos号位开始、长度为len的子串")]),s._v(" "),t("p",[s._v("find() -- str.find(str2)，当str2是str的子串时，返回其在str中第一次出现的位置，如果str2不是str的子串，那么返回string::npos")]),s._v(" "),t("p",[s._v("replace()")]),s._v(" "),t("p",[s._v("str.replace(pos, len, str2) 把str从pos号位开始、长度为len的子串替换为str2")]),s._v(" "),t("p",[s._v("str.replace(it1, it2, str2) 把str的迭代器[it1, it2)范围的子串替换为str2")]),s._v(" "),t("h2",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[s._v("#")]),s._v(" map")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("map<char, int> m;\nm['a'] = 0;\nm['c'] = 20;\nprintf(\"%d\", m['a']);\n\n// map的遍历\nfor(auto &it : m){\n    printf(\"key: %c value: %d\", it.first, it.second);\n    cout<<endl;\n}\n\n// 判断key是否在map中，如果不在则返回m.end()\nif(m.find('b') == m.end())\n    cout<< \"not exist\";\n\n// 删除key为'a'的键\nm.erase('a');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[s._v("#")]),s._v(" queue")]),s._v(" "),t("p",[s._v("先进先出的容器")]),s._v(" "),t("p",[s._v("push()入队")]),s._v(" "),t("p",[s._v("front()、back()分别获得队首元素和队尾元素")]),s._v(" "),t("p",[s._v("pop() 令队首元素出队，注意返回值为空")]),s._v(" "),t("p",[s._v("empty() 判断队列是否为空")]),s._v(" "),t("p",[s._v("size() 获得队列元素个数")]),s._v(" "),t("h2",{attrs:{id:"stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stack"}},[s._v("#")]),s._v(" stack")]),s._v(" "),t("p",[s._v("push() 将元素进栈")]),s._v(" "),t("p",[s._v("top() 获取栈顶元素")]),s._v(" "),t("p",[s._v("pop() 弹出栈顶元素")]),s._v(" "),t("p",[s._v("empty() 判断栈是否为空")]),s._v(" "),t("p",[s._v("size() 获取栈内元素个数")]),s._v(" "),t("h2",{attrs:{id:"pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pair"}},[s._v("#")]),s._v(" pair")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#include<map> //加此头文件\n\nint main(){\n    pair<int, int> p(1, 2);\n    printf("%d %d", p.first, p.second);\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("给TreeNode分配空间，并返回指向该内存空间的指针")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("TreeNode* root = new TreeNode(0);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);