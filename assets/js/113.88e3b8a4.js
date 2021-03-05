(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{596:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("git")]),s._v(" "),t("p",[s._v("一 创建git仓库")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建SSH Key")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ ssh-keygen -t rsa -C "youremail@example.com"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在.ssh目录下有id_rsa和id_rsa.pub两个文件。")])]),s._v(" "),t("li",[t("p",[s._v("在github上将id_rsa.pub公钥添加到SSH Keys中")])]),s._v(" "),t("li",[t("p",[s._v("在本地上创建一个git仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("关联远程库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git remote add origin git@github.com:zhongshanhao/learngit.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("origin是远程仓库的名字，关联远程库后就可以在本地管理git仓库了，这里的仓库是learngit。")])])]),s._v(" "),t("p",[s._v("二 向开源社区贡献自己的代码")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在github上fork项目源代码到自己的远程仓库")])]),s._v(" "),t("li",[t("p",[s._v("在本地clone仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone git@github.com:zhongshanhao/tidb.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("添加远程仓库分支upstream，该分支是项目源代码所在的地方，不是自己克隆的远程仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git remote add upstream https://github.com/pingcap/tidb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("拓展")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git remote -v          # 查看远程仓库配置\ngit fetch upstream   # 将远程仓库的所有更新取回本地\ngit log upstream/master    # 查看远程仓库master分支对应的commit记录\ngit merge upstream/master  # 将远程仓库master与本地分支合并\ngit log --pretty=oneline --graph \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在开发之前先同步远程仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git fetch upstream\ngit merge upstream/master\n\n#  或者\ngit pull upstream master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("然后在本地仓库创建分支进行开发")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout -b my_branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("完成代码开发后，将分支推送到远程仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git push origin my_branch:my_branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在github上选择my_branch分支，点击new pull request创建新的PR")])]),s._v(" "),t("li",[t("p",[s._v("等待pr完成，可以删除该分支")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch -d my_branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("命令拓展")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("暂存工作现场")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git log upstream/master    # 查看upstream/master分支最新的commit\n\n# 当当前工作没有提交到本地仓库时，可以将工作现场存储起来\ngit stash\ngit stash list \t\t\t\t# 查看暂存区列表\ngit stash pop\t\t\t # 恢复工作现场，删除暂存区内容\ngit stash apply stash@{0}   # 恢复指定暂存区，且不删除该暂存区内容\ngit stash drop \t\t\t # 删除暂存区内容\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("merge出现冲突")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git status  #定位冲突文件\n#修改文件解决冲突\ngit add .\ngit commit -m "solve conflict"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("p",[s._v("rebase")]),s._v(" "),t("p",[s._v("变基操作，将my_branch分支变基，即将该分支的分叉出改为最新的master头结点处")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout my_branch\ngit rebase master\ngit push origin my_branch:my_branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("变基出现冲突时")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git rebase master  #出现冲突\n#解决冲突\ngit add .\ngit rebase --continue #继续变基\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("git push出现冲突时")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git fetch origin   #拉取远程分支\ngit merge origin/my_branch   #合并对应分支，合并冲突在另外解决\n\n#若有冲突,定位文件,修改文件,提交修改\ngit status  \ngit add .\ngit commit -m "fix conflict"\n\n#最后push\ngit push origin my_branch:my_branch\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])])])]),s._v(" "),t("p",[s._v("图解")]),s._v(" "),t("p",[s._v("workspace：工作目录")]),s._v(" "),t("p",[s._v("index：暂存区")]),s._v(" "),t("p",[s._v("Repository：本地仓库")]),s._v(" "),t("p",[s._v("remote：远程仓库")]),s._v(" "),t("img",{attrs:{src:"http://kmknkk.oss-cn-beijing.aliyuncs.com/image/git.jpg",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190311173112758.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0ppb2hvX2NoZW4=,size_16,color_FFFFFF,t_70"}})])}),[],!1,null,null,null);a.default=n.exports}}]);