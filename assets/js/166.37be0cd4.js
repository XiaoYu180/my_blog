(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{750:function(s,a,t){"use strict";t.r(a);var e=t(29),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git工具-查看修订版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git工具-查看修订版本"}},[s._v("#")]),s._v(" Git工具-查看修订版本")]),s._v(" "),t("p",[s._v("Git 能够以多种方式来指定单个提交、一组提交、或者一定范围内的提交。 了解它们并不是必需的，但是了解一下总没坏处。")]),s._v(" "),t("p",[s._v("修订版本指的是："),t("strong",[s._v("提交")])]),s._v(" "),t("h2",{attrs:{id:"单个修订版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单个修订版本"}},[s._v("#")]),s._v(" 单个修订版本")]),s._v(" "),t("p",[s._v("你可以通过任意一个提交的 40 个字符的完整 SHA-1 散列值来指定它， 不过还有很多更人性化的方式来做同样的事情。本节将会介绍获取单个提交的多种方法。")]),s._v(" "),t("h2",{attrs:{id:"简短的-sha-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简短的-sha-1"}},[s._v("#")]),s._v(" 简短的 SHA-1")]),s._v(" "),t("p",[s._v("Git 十分智能，你只需要提供 SHA-1 的前几个字符就可以获得对应的那次提交， 当然你提供的 SHA-1 字符数量"),t("strong",[s._v("不得少于 4 个")]),s._v("，并且没有歧义——也就是说， 当前对象数据库中没有其它对象以这段 SHA-1 开头。")]),s._v(" "),t("p",[s._v("例如，要查看你知道其中添加了某个功能的提交，首先运行 "),t("code",[s._v("git log")]),s._v(" 命令来定位该提交：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\ncommit 734713bc047d87bf7eac9674765ae793478c50d3\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri Jan "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":32:33 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v(" -0800\n\n    fixed refs handling, added gc auto, updated tests\n\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nMerge: 1c002dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 35cfb2b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":08:43 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0800\n\n    Merge commit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'phedders/rdocs'")]),s._v("\n\ncommit 1c002dd4b536e7479fe34593e72e6c6c1819e53b\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":58:32 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0800\n\n    added some blame and merge stuff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"查看给定sha-1值的提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看给定sha-1值的提交"}},[s._v("#")]),s._v(" 查看给定SHA-1值的提交")]),s._v(" "),t("p",[s._v("在本例中，假设你想要的提交其 SHA-1 以 "),t("code",[s._v("1c002dd....")]),s._v(" 开头， 那么你可以用如下几种 "),t("code",[s._v("git show")]),s._v(" 的变体来检视该提交（假设简短的版本没有歧义）：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show 1c002dd4b536e7479fe34593e72e6c6c1819e53b\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show 1c002dd4b536e7479f\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show 1c002d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Git 可以为 SHA-1 值生成出简短且唯一的缩写。 如果你在 "),t("code",[s._v("git log")]),s._v(" 后加上 "),t("code",[s._v("--abbrev-commit")]),s._v(" 参数，输出结果里就会显示简短且唯一的值； 默认使用七个字符，不过有时为了避免 SHA-1 的歧义，会增加字符数：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --abbrev-commit --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\nca82a6d changed the version number\n085bb3b removed unnecessary "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" code\na11bef0 first commit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("通常 8 到 10 个字符就已经足够在一个项目中避免 SHA-1 的歧义。 例如，到 2019 年 2 月为止，Linux 内核这个相当大的 Git 项目， 其对象数据库中有超过 875,000 个提交，包含七百万个对象，也只需要前 12 个字符就能保证唯一性。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Note")]),s._v(" "),t("th",[s._v("关于 SHA-1 的简短说明许多人觉得他们的仓库里有可能出现两个不同的对象其 SHA-1 值相同。 然后呢？如果你真的向仓库里提交了一个对象，它跟之前的某个 "),t("strong",[s._v("不同")]),s._v(" 对象的 SHA-1 值相同， Git 会发现该对象的散列值已经存在于仓库里了，于是就会认为该对象被写入，然后直接使用它。 如果之后你想检出那个对象时，你将得到先前那个对象的数据。但是这种情况发生的概率十分渺小。 SHA-1 摘要长度是 20 字节，也就是 160 位。 2^80 个随机哈希对象才有 50% 的概率出现一次冲突 （计算冲突机率的公式是 "),t("code",[s._v("p = (n(n-1)/2) * (1/2^160))")]),s._v(" ）。 2^80 是 1.2 x 10^24，也就是一亿亿亿，这是地球上沙粒总数的 1200 倍。举例说一下怎样才能产生一次 SHA-1 冲突。 如果地球上 65 亿个人类都在编程，每人每秒都在产生等价于整个 Linux 内核历史（650 万个 Git 对象）的代码， 并将之提交到一个巨大的 Git 仓库里面，这样持续两年的时间才会产生足够的对象， 使其拥有 50% 的概率产生一次 SHA-1 对象冲突， 这比你编程团队的成员同一个晚上在互不相干的意外中被狼袭击并杀死的机率还要小。")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td")])])]),s._v(" "),t("h2",{attrs:{id:"分支引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支引用"}},[s._v("#")]),s._v(" 分支引用")]),s._v(" "),t("p",[s._v("引用特定提交的一种直接方法是，若它是一个分支的顶端的提交， 那么可以在任何需要引用该提交的 Git 命令中直接使用该分支的名称。")]),s._v(" "),t("h3",{attrs:{id:"查看最后一次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看最后一次提交"}},[s._v("#")]),s._v(" 查看最后一次提交")]),s._v(" "),t("p",[s._v("例如，你想要查看一个分支的最后一次提交的对象，假设 "),t("code",[s._v("topic1")]),s._v(" 分支指向提交 "),t("code",[s._v("ca82a6d...")]),s._v(" ， 那么以下的命令是等价的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show ca82a6dff817ec66f44342007202690a93763949\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show topic1  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# topic1是分支名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果你想知道某个分支指向哪个特定的 SHA-1，或者想看任何一个例子中被简写的 SHA-1， 你可以使用一个叫做 "),t("code",[s._v("rev-parse")]),s._v(" 的 Git 探测工具。 你可以在 "),t("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 内部原理"),t("OutboundLink")],1),s._v(" 中查看更多关于探测工具的信息。 简单来说，"),t("code",[s._v("rev-parse")]),s._v(" 是为了底层操作而不是日常操作设计的。 不过，有时你想看 Git 现在到底处于什么状态时，它可能会很有用。 你可以在你的分支上执行 "),t("code",[s._v("rev-parse")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse topic1\nca82a6dff817ec66f44342007202690a93763949\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"引用日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用日志"}},[s._v("#")]),s._v(" 引用日志")]),s._v(" "),t("h3",{attrs:{id:"head的指向历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head的指向历史"}},[s._v("#")]),s._v(" HEAD的指向历史")]),s._v(" "),t("p",[s._v("当你在工作时， Git 会在后台保存一个引用日志（reflog）， 引用日志记录了最近几个月你的 HEAD 和分支引用所指向的历史。")]),s._v(" "),t("p",[s._v("你可以使用 "),t("code",[s._v("git reflog")]),s._v(" 来查看引用日志")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n734713b HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: fixed refs handling, added gc auto, updated\nd921970 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": merge phedders/rdocs: Merge made by the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recursive'")]),s._v(" strategy.\n1c002dd HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: added some blame and merge stuff\n1c36188 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("squash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": updating HEAD\n95df984 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a combination of two commits.")]),s._v("\n1c36188 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("squash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": updating HEAD\n7e05da5 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pick"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": updating HEAD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("每当你的 HEAD 所指向的位置发生了变化，Git 就会将这个信息存储到引用日志这个历史记录里。 你也可以通过 reflog 数据来获取之前的提交历史。 如果你想查看仓库中 HEAD 在五次前的所指向的提交，你可以使用 "),t("code",[s._v("@{n}")]),s._v(" 来引用 reflog 中输出的提交记录。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你同样可以使用这个语法来查看某个分支在一定时间前的位置。 例如，查看你的 "),t("code",[s._v("master")]),s._v(" 分支在昨天的时候指向了哪个提交，你可以输入")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show master@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("yesterday"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("就会显示昨天 "),t("code",[s._v("master")]),s._v(" 分支的顶端指向了哪个提交。 这个方法只对还在你引用日志里的数据有用，所以不能用来查好几个月之前的提交。")]),s._v(" "),t("p",[s._v("可以运行 "),t("code",[s._v("git log -g")]),s._v(" 来查看类似于 "),t("code",[s._v("git log")]),s._v(" 输出格式的引用日志信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -g master\ncommit 734713bc047d87bf7eac9674765ae793478c50d3\nReflog: master@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nReflog message: commit: fixed refs handling, added gc auto, updated\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri Jan "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":32:33 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v(" -0800\n\n    fixed refs handling, added gc auto, updated tests\n\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nReflog: master@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nReflog message: merge phedders/rdocs: Merge made by recursive.\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":08:43 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0800\n\n    Merge commit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'phedders/rdocs'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("值得注意的是，"),t("strong",[s._v("引用日志只存在于本地仓库，它只是一个记录你在 自己 的仓库里做过什么的日志")]),s._v("。 其他人拷贝的仓库里的引用日志不会和你的相同，而你新克隆一个仓库的时候，引用日志是空的，因为你在仓库里还没有操作。 "),t("code",[s._v("git show HEAD@{2.months.ago}")]),s._v(" 这条命令只有在你克隆了一个项目至少两个月时才会显示匹配的提交—— 如果你刚刚克隆了仓库，那么它将不会有任何结果返回。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Tip")]),s._v(" "),t("th",[s._v("将引用日志想作 Git 版的 shell 历史记录如果你有 UNIX 或者 Linux 的背景，不妨将引用日志想作 Git 版的 shell 历史记录， 重点在于仅与你和你的会话相关，而与他人无关。")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td")])])]),s._v(" "),t("h2",{attrs:{id:"祖先引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#祖先引用"}},[s._v("#")]),s._v(" 祖先引用")]),s._v(" "),t("p",[s._v("祖先引用是另一种指明一个提交的方式。 如果你在引用的尾部加上一个 "),t("code",[s._v("^")]),s._v("（脱字符）， Git 会将其解析为该引用的上一个提交。 假设你的提交历史是：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%h %s'")]),s._v(" --graph\n* 734713b fixed refs handling, added gc auto, updated tests\n*   d921970 Merge commit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'phedders/rdocs'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 35cfb2b Some rdoc changes\n* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 1c002dd added some blame and merge stuff\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/\n* 1c36188 ignore *.gem\n* 9b29157 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" open3_detach to gemspec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("你可以使用 "),t("code",[s._v("HEAD^")]),s._v(" 来查看上一个提交，也就是 “"),t("strong",[s._v("HEAD 的父提交")]),s._v("”：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD^\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nMerge: 1c002dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 35cfb2b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":08:43 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0800\n\n    Merge commit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'phedders/rdocs'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("Note")]),s._v(" "),t("th",[s._v("在 Windows 上转义脱字符在 Windows 的 "),t("code",[s._v("cmd.exe")]),s._v(" 中，"),t("code",[s._v("^")]),s._v(" 是一个特殊字符，因此需要区别对待。 你可以双写它或者将提交引用放在引号中："),t("code",[s._v('$ git show HEAD^ # 在 Windows 上无法工作 $ git show HEAD^^ # 可以 $ git show "HEAD^" # 可以')])])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td")])])]),s._v(" "),t("p",[s._v("你也可以在 "),t("code",[s._v("^")]),s._v(" 后面添加一个数字来指明想要 "),t("strong",[s._v("哪一个")]),s._v(" 父提交——例如 "),t("code",[s._v("d921970^2")]),s._v(" 代表 “d921970 的第二父提交” 这个语法只适用于合并的提交，因为合并提交会有多个父提交。 合并提交的第一父提交是你合并时所在分支（通常为 "),t("code",[s._v("master")]),s._v("），而第二父提交是你所合并的分支（例如 "),t("code",[s._v("topic")]),s._v("）：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show d921970^\ncommit 1c002dd4b536e7479fe34593e72e6c6c1819e53b\nAuthor: Scott Chacon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Thu Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":58:32 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0800\n\n    added some blame and merge stuff\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show d921970^2\ncommit 35cfb2b795a55793d7cc56a6cc2060b4bb732548\nAuthor: Paul Hedderly "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("paul+git@mjr.org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Wed Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":22:03 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" +0000\n\n    Some rdoc changes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("另一种指明祖先提交的方法是 "),t("code",[s._v("~")]),s._v("（波浪号）。 同样是指向第一父提交，因此 "),t("code",[s._v("HEAD~")]),s._v(" 和 "),t("code",[s._v("HEAD^")]),s._v(" 是等价的。 而区别在于你在后面加数字的时候。 "),t("code",[s._v("HEAD~2")]),s._v(" 代表“第一父提交的第一父提交”，也就是“祖父提交”——Git 会根据你指定的次数获取对应的第一父提交。 例如，在之前的列出的提交历史中，"),t("code",[s._v("HEAD~3")]),s._v(" 就是")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD~3\ncommit 1c3618887afb5fbcbea25b7c013f4e2114448b8d\nAuthor: Tom Preston-Werner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tom@mojombo.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":47:59 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0500\n\n    ignore *.gem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("也可以写成 "),t("code",[s._v("HEAD~~~")]),s._v("，也是第一父提交的第一父提交的第一父提交：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD~~~\ncommit 1c3618887afb5fbcbea25b7c013f4e2114448b8d\nAuthor: Tom Preston-Werner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tom@mojombo.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":47:59 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v(" -0500\n\n    ignore *.gem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("你也可以组合使用这两个语法——你可以通过 "),t("code",[s._v("HEAD~3^2")]),s._v(" 来取得之前引用的第二父提交（假设它是一个合并提交）。")]),s._v(" "),t("h2",{attrs:{id:"提交区间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交区间"}},[s._v("#")]),s._v(" 提交区间")]),s._v(" "),t("p",[s._v("你已经学会如何单次的提交，现在来看看如何指明一定区间的提交。 当你有很多分支时，这对管理你的分支时十分有用， 你可以用提交区间来解决“这个分支还有哪些提交尚未合并到主分支？”的问题")]),s._v(" "),t("h3",{attrs:{id:"双点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双点"}},[s._v("#")]),s._v(" 双点")]),s._v(" "),t("p",[s._v("最常用的指明提交区间语法是双点。 这种语法可以让 Git 选出在一个分支中而不在另一个分支中的提交。 例如，你有如下的提交历史 "),t("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/double_dot",target:"_blank",rel:"noopener noreferrer"}},[s._v("Example history for range selection."),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/double-dot.png",alt:"Example history for range selection."}})]),s._v(" "),t("p",[s._v("Figure 137. Example history for range selection.")]),s._v(" "),t("p",[s._v("你想要查看 experiment 分支中还有哪些提交尚未被合并入 master 分支。 你可以使用 "),t("code",[s._v("master..experiment")]),s._v(" 来让 Git 显示这些提交。也就是“在 experiment 分支中而不在 master 分支中的提交”。 为了使例子简单明了，我使用了示意图中提交对象的字母来代替真实日志的输出，所以会显示：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("experiment\nD\nC\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("反过来，如果你想查看在 "),t("code",[s._v("master")]),s._v(" 分支中而不在 "),t("code",[s._v("experiment")]),s._v(" 分支中的提交，你只要交换分支名即可。 "),t("code",[s._v("experiment..master")]),s._v(" 会显示在 "),t("code",[s._v("master")]),s._v(" 分支中而不在 "),t("code",[s._v("experiment")]),s._v(" 分支中的提交：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log experiment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("master\nF\nE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"查看即将推送到远端的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看即将推送到远端的内容"}},[s._v("#")]),s._v(" 查看即将推送到远端的内容")]),s._v(" "),t("p",[s._v("这可以让你保持 "),t("code",[s._v("experiment")]),s._v(" 分支跟随最新的进度以及查看你即将合并的内容。 另一个常用的场景是查看你即将推送到远端的内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log origin/master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("HEAD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令会输出在你当前分支中而不在远程 "),t("code",[s._v("origin")]),s._v(" 中的提交。 如果你执行 "),t("code",[s._v("git push")]),s._v(" 并且你的当前分支正在跟踪 "),t("code",[s._v("origin/master")]),s._v("，由 "),t("code",[s._v("git log origin/master..HEAD")]),s._v(" 所输出的提交就是会被传输到远端服务器的提交。如果你留空了其中的一边， Git 会默认为 "),t("code",[s._v("HEAD")]),s._v("。 例如， "),t("code",[s._v("git log origin/master..")]),s._v(" 将会输出与之前例子相同的结果 —— Git 使用 HEAD 来代替留空的一边。")]),s._v(" "),t("h3",{attrs:{id:"多点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多点"}},[s._v("#")]),s._v(" 多点")]),s._v(" "),t("p",[s._v("双点语法很好用，但有时候你可能需要两个以上的分支才能确定你所需要的修订， 比如查看哪些提交是被包含在某些分支中的一个，但是不在你当前的分支上。 Git 允许你在任意引用前加上 "),t("code",[s._v("^")]),s._v(" 字符或者 "),t("code",[s._v("--not")]),s._v(" 来指明你不希望提交被包含其中的分支。 因此下列三个命令是等价的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log refA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("refB\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log ^refA refB\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log refB --not refA\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个语法很好用，因为你可以在查询中指定超过两个的引用，这是双点语法无法实现的。 比如，你想查看所有被 "),t("code",[s._v("refA")]),s._v(" 或 "),t("code",[s._v("refB")]),s._v(" 包含的但是不被 "),t("code",[s._v("refC")]),s._v(" 包含的提交，你可以使用以下任意一个命令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log refA refB ^refC\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log refA refB --not refC\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这就构成了一个十分强大的修订查询系统，你可以通过它来查看你的分支里包含了哪些东西。")]),s._v(" "),t("h3",{attrs:{id:"三点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三点"}},[s._v("#")]),s._v(" 三点")]),s._v(" "),t("p",[s._v("最后一种主要的区间选择语法是三点，这个语法可以选择出被两个引用 "),t("strong",[s._v("之一")]),s._v(" 包含但又不被两者同时包含的提交。 再看看之前双点例子中的提交历史。 如果你想看 "),t("code",[s._v("master")]),s._v(" 或者 "),t("code",[s._v("experiment")]),s._v(" 中包含的但不是两者共有的提交，你可以执行：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".experiment\nF\nE\nD\nC\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这和通常 "),t("code",[s._v("log")]),s._v(" 按日期排序的输出一样，仅仅给出了4个提交的信息。")]),s._v(" "),t("p",[s._v("这种情形下，"),t("code",[s._v("log")]),s._v(" 命令的一个常用参数是 "),t("code",[s._v("--left-right")]),s._v("，它会显示每个提交到底处于哪一侧的分支。 这会让输出数据更加清晰。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --left-right master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".experiment\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" F\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" E\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" D\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" C\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("有了这些工具，你就可以十分方便地查看你 Git 仓库中的提交。")])])}),[],!1,null,null,null);a.default=n.exports}}]);