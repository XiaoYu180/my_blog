(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{726:function(s,a,t){"use strict";t.r(a);var e=t(29),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git分支管理-查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git分支管理-查看分支"}},[s._v("#")]),s._v(" Git分支管理-查看分支")]),s._v(" "),t("h3",{attrs:{id:"查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n  iss53\n* master  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带星号*表示当前所在分支")]),s._v("\n  testing\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("git branch")]),s._v(" 命令不只是可以创建与删除分支。 如果不加任何参数运行它，会得到当前所有分支的一个列表。")]),s._v(" "),t("h3",{attrs:{id:"查看每个分支的最后提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看每个分支的最后提交"}},[s._v("#")]),s._v(" 查看每个分支的最后提交")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n  iss53   93b412c fix javascript issue\n* master  7a98805 Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iss53'")]),s._v("\n  testing 782fd34 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"查看已-未-合并的分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看已-未-合并的分支"}},[s._v("#")]),s._v(" 查看已(未)合并的分支")]),s._v(" "),t("p",[t("code",[s._v("--merged")]),s._v(" 与 "),t("code",[s._v("--no-merged")]),s._v(" 这两个选项可以查看哪些分支已经合并或未合并到 "),t("strong",[s._v("当前")]),s._v(" 分支。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --merged "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已合并分支列表")]),s._v("\n  iss53\n* master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面列表中分支名字前没有 "),t("code",[s._v("*")]),s._v(" 号的分支通常可以使用 "),t("code",[s._v("git branch -d")]),s._v(" 删除掉；")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看未合并的分支列表")]),s._v("\n  testing\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("上面显示未合并的分支，尝试使用 "),t("code",[s._v("git branch -d")]),s._v(" 命令删除它时会失败：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d testing\nerror: The branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'testing'")]),s._v(" is not fully merged.\nIf you are sure you want to delete it, run "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -D testing'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("强制删除未合并的分支:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D testing\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看指定分支的已-未-合并的分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看指定分支的已-未-合并的分支"}},[s._v("#")]),s._v(" 查看指定分支的已(未)合并的分支")]),s._v(" "),t("p",[s._v("上面描述的选项 "),t("code",[s._v("--merged")]),s._v(" 和 "),t("code",[s._v("--no-merged")]),s._v(" 会在没有给定提交或分支名作为参数时， 分别列出已合并或未合并到 "),t("strong",[s._v("当前")]),s._v(" 分支的分支。")]),s._v(" "),t("p",[s._v("你总是可以提供一个附加的参数来查看其它分支的合并状态而不必检出它们。 例如，尚未合并到 "),t("code",[s._v("testing")]),s._v(" 分支的有哪些？")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged testing\n  topicA\n  featureB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);