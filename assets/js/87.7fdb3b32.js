(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{657:function(a,s,e){"use strict";e.r(s);var t=e(29),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"先看看-allure-命令的帮助文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先看看-allure-命令的帮助文档"}},[a._v("#")]),a._v(" 先看看 allure 命令的帮助文档")]),a._v(" "),e("p",[a._v("cmd 敲")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("allure -h\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"allure-命令的语法格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allure-命令的语法格式"}},[a._v("#")]),a._v(" allure 命令的语法格式")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("allure [options] [command] [command options]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"options-列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-列表"}},[a._v("#")]),a._v(" options 列表")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  Options:\n    --help 命令行帮助文档\n    -q, --quiet\n      切换至安静模式\n      Default: false\n    -v, --verbose\n      切换至冗长模式\n      Default: false\n    --version\n      版本信息\n      Default: false\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h4",{attrs:{id:"command-列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-列表"}},[a._v("#")]),a._v(" command 列表")]),a._v(" "),e("ol",[e("li",[a._v("generate")]),a._v(" "),e("li",[a._v("serve")]),a._v(" "),e("li",[a._v("open")]),a._v(" "),e("li",[a._v("plugin")])]),a._v(" "),e("p",[a._v("这里只讲前三个常用的")]),a._v(" "),e("h2",{attrs:{id:"generate-命令行参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-命令行参数"}},[a._v("#")]),a._v(" generate 命令行参数")]),a._v(" "),e("h4",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),e("p",[a._v("生成 allure 的html 报告")]),a._v(" "),e("h4",{attrs:{id:"语法格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[a._v("#")]),a._v(" 语法格式")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("generate [options]  allure 结果目录\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pytest -sq --alluredir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ./allure\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"命令选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令选项"}},[a._v("#")]),a._v(" 命令选项")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028123446680-921838785.png",alt:""}})]),a._v(" "),e("p",[a._v("主要就是用  -c 、 -o  两个参数")]),a._v(" "),e("h2",{attrs:{id:"open-命令行参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-命令行参数"}},[a._v("#")]),a._v(" open 命令行参数")]),a._v(" "),e("h4",{attrs:{id:"作用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用-2"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),e("p",[a._v("打开生成的 allure 报告，就是打开 generate 命令生成的报告")]),a._v(" "),e("h4",{attrs:{id:"语法格式-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法格式-2"}},[a._v("#")]),a._v(" 语法格式")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("open [options] allure报告目录\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("**注：**allure 报告目录就是运行 allure generate 命令，-o 跟的那个目录")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("allure generate -o ./allure-report\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"命令选项-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令选项-2"}},[a._v("#")]),a._v(" 命令选项")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028141707575-281214400.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"serve-命令行参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serve-命令行参数"}},[a._v("#")]),a._v(" serve 命令行参数")]),a._v(" "),e("h4",{attrs:{id:"作用-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用-3"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),e("p",[a._v("启动 allure 服务，打开 allure 报告")]),a._v(" "),e("h4",{attrs:{id:"语法格式-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法格式-3"}},[a._v("#")]),a._v(" 语法格式")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("serve "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" allure 结果目录\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pytest -sq --alluredir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ./allure\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"命令选项-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令选项-3"}},[a._v("#")]),a._v(" 命令选项")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028142713421-258584445.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"浏览器打开-allure-报告的两种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开-allure-报告的两种方式"}},[a._v("#")]),a._v(" 浏览器打开 allure 报告的两种方式")]),a._v(" "),e("h3",{attrs:{id:"allure-serve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allure-serve"}},[a._v("#")]),a._v(" allure serve")]),a._v(" "),e("p",[a._v("标准写法")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 pytest，指定 allure 结果目录")]),a._v("\npytest -sq --alluredir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./allure\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 allure 报告")]),a._v("\nallure serve ./allure\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"allure-generate-allure-open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allure-generate-allure-open"}},[a._v("#")]),a._v(" allure generate + allure open")]),a._v(" "),e("p",[a._v("标准写法")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 pytest，指定 allure 结果目录")]),a._v("\npytest -sq --alluredir"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./allure\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成 allure 的 html 报告")]),a._v("\nallure generate -c -o ./allure-report ./allure\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 allure 报告")]),a._v("\nallure "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" ./allure-report\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("当然不写 -o 也可以")]),a._v(" "),e("h4",{attrs:{id:"看看-allure-report-的目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#看看-allure-report-的目录结构"}},[a._v("#")]),a._v(" 看看 allure-report 的目录结构")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028143452978-709464647.png",alt:""}})]),a._v(" "),e("ul",[e("li",[a._v("这种方式的目录会好看很多，不只是一堆 json 文件")]),a._v(" "),e("li",[a._v("而且直接打开 index.html 也是能看到 allure 报告的")])]),a._v(" "),e("p",[a._v("本文转自 "),e("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13890986.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/poloyy/p/13890986.html"),e("OutboundLink")],1),a._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=r.exports}}]);