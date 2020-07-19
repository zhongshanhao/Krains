(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{490:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuepress加gitee-page部署博客网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress加gitee-page部署博客网站"}},[s._v("#")]),s._v(" vuepress加gitee page部署博客网站")]),s._v(" "),a("p",[s._v("准备：新建gitee、github仓库，命名my-blog，同时生成rsa，实验是否能够push成功。")]),s._v(" "),a("p",[s._v("利用vuepress构建博客")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 安装vuepress\nnpm install -g vuepress\n\n# 按照主题并初始化\nnpm install @vuepress-reco/theme-cli -g\ntheme-cli init my-blog\n\n# install\ncd my-blog\nnpm install\n\n# run 在本地预览效果\nnpm run dev\n\n# build 生成public文件夹，push该文件夹到gitee上，配置gitee page即可\nnpm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"使用github-action完成自动更新gitee-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用github-action完成自动更新gitee-page"}},[s._v("#")]),s._v(" 使用GitHub Action完成自动更新gitee page")]),s._v(" "),a("p",[s._v("从本地push到github，触发github action，然后自动同步到gitee，同时更新gitee page")]),s._v(" "),a("p",[s._v("参考链接")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/yanglbme/gitee-pages-action")])]),s._v(" "),a("h2",{attrs:{id:"一键部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键部署"}},[s._v("#")]),s._v(" 一键部署")]),s._v(" "),a("p",[s._v("在你博客主文件夹中新建一个脚本文件，deploy.sh")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" e\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r public/ git/\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git/public\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("使用如下命令执行")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bash ./deploy.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);