(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{644:function(s,t,a){"use strict";a.r(t);var e=a(29),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("ul",[a("li",[s._v("平常在做功能测试的时候，经常会遇到某个模块不稳定，偶然会出现一些bug，对于这种问题我们会针对此用例反复执行多次，最终复现出问题来")]),s._v(" "),a("li",[s._v("自动化运行用例时候，也会出现偶然的bug，可以针对单个用例，或者针对某个模块的用例重复执行多次")])]),s._v(" "),a("h2",{attrs:{id:"环境前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境前提"}},[s._v("#")]),s._v(" 环境前提")]),s._v(" "),a("ul",[a("li",[s._v("Python 2.7、3.4+或PyPy")]),s._v(" "),a("li",[s._v("py.test 2.8或更高版本")])]),s._v(" "),a("h2",{attrs:{id:"安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[s._v("#")]),s._v(" 安装插件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pytest-repeat -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[s._v("#")]),s._v(" 快速入门")]),s._v(" "),a("p",[s._v("结合之前讲到的失败重跑、输出html报告插件来敲命令行")]),s._v(" "),a("p",[s._v("两种方式皆可，等号或空格")]),s._v(" "),a("ul",[a("li",[s._v("count=2")]),s._v(" "),a("li",[s._v("count 2")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest --html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("report.html --self-contained-html  -s --reruns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" --count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 10fixture_request.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"重复测试直到失败-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复测试直到失败-重点"}},[s._v("#")]),s._v(" 重复测试直到失败（重点！）")]),s._v(" "),a("ul",[a("li",[s._v("如果需要验证偶现问题，可以一次又一次地运行相同的测试直到失败，这个插件将很有用")]),s._v(" "),a("li",[s._v("可以将pytest的 -x 选项与pytest-repeat结合使用，以强制测试运行程序在第一次失败时停止")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("py.test --count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" -x test_file.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"小栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小栗子"}},[s._v("#")]),s._v(" 小栗子")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n    flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" flag\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"执行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest -s --count "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" -x 13repeat.py　　\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"执行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行结果"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413135848048-1986596726.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"pytest-mark-repeat-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytest-mark-repeat-count"}},[s._v("#")]),s._v(" @pytest.mark.repeat(count)")]),s._v(" "),a("p",[s._v("如果要在代码中将某些测试用例标记为执行重复多次，可以使用 @pytest.mark.repeat(count)")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"执行命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-2"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest -s 13repeat.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"执行结果-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行结果-2"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413142259708-1248397004.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"repeat-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeat-scope"}},[s._v("#")]),s._v(" --repeat-scope")]),s._v(" "),a("p",[s._v("命令行参数")]),s._v(" "),a("p",[s._v("**作用：**可以覆盖默认的测试用例执行顺序，类似fixture的scope参数")]),s._v(" "),a("ul",[a("li",[s._v("function：默认，范围针对每个用例重复执行，再执行下一个用例")]),s._v(" "),a("li",[s._v("class：以class为用例集合单位，重复执行class里面的用例，再执行下一个")]),s._v(" "),a("li",[s._v("module：以模块为单位，重复执行模块里面的用例，再执行下一个")]),s._v(" "),a("li",[s._v("session：重复整个测试会话，即所有测试用例的执行一次，然后再执行第二次")])]),s._v(" "),a("h3",{attrs:{id:"案例一-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例一-class"}},[s._v("#")]),s._v(" 案例一：class")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test_repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行333"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test_repeat2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行444"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"执行命令-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-3"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest -s --count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --repeat-scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("class 13repeat.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"执行结果-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行结果-3"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413143418525-1712642726.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"案例二-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例二-module"}},[s._v("#")]),s._v(" 案例二：module")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行111"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行222"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test_repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_repeat3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试用例执行333"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"执行命令-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-4"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest -s --count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --repeat-scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("module 13repeat.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"执行结果-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行结果-4"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413143422428-1300950331.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"兼容性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性问题"}},[s._v("#")]),s._v(" 兼容性问题")]),s._v(" "),a("p",[s._v("pytest-repeat不能与unittest.TestCase测试类一起使用。无论--count设置多少，这些测试始终仅运行一次，并显示警告")]),s._v(" "),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12691240.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/poloyy/p/12691240.html"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=n.exports}}]);