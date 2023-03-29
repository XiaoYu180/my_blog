(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{663:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("ul",[a("li",[t._v("使用 pytest-xdist 分布式插件可以加快运行，充分利用机器多核 CPU 的优势")]),t._v(" "),a("li",[t._v("将常用功能放到 fixture，可以提高复用性和维护性")]),t._v(" "),a("li",[t._v("做接口自动化测试的时候，通常我们会将登录接口放到 fixture 里面，并且 scope 会设置为 session，让他全局只运行一次")]),t._v(" "),a("li",[t._v("但是当使用 pytest-xdist 的时候，scope=session 的 fixture 无法保证只运行一次，官方也通报了这一问题")])]),t._v(" "),a("h3",{attrs:{id:"官方描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方描述"}},[t._v("#")]),t._v(" 官方描述")]),t._v(" "),a("ul",[a("li",[t._v("pytest-xdist 的设计使每个工作进程将执行自己的测试集合并执行所有测试子集，这意味着在不同的测试过程中，要求高级范围的 fixture（如：session）将会被多次执行，这超出了预期，在某些情况下可能是不希望的")]),t._v(" "),a("li",[t._v("尽管 pytest-xdist 没有内置支持来确保  scope=session 的fixture 仅执行一次，但是可以通过使用锁定文件进行进程间通信来实现")])]),t._v(" "),a("h3",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" "),a("strong",[t._v("前置知识")])]),t._v(" "),a("p",[t._v("pytest-xdist 分布式插件使用详细教程")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12694861.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12694861.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("pytest-xdist 分布式插件原理")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12703290.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12703290.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("fixture 的使用详细教程")]),t._v(" "),a("p",[t._v("[https://www.cnblogs.com/poloyy/p/12642602.html")]),t._v(" "),a("p",[t._v("](https://www.cnblogs.com/poloyy/p/12642602.html)")]),t._v(" "),a("p",[t._v("官方文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pypi.org/project/pytest-xdist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pypi.org/project/pytest-xdist/"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"官方解决办法-直接套用就行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方解决办法-直接套用就行"}},[t._v("#")]),t._v(" 官方解决办法（直接套用就行）")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" filelock "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FileLock\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("session_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_path_factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" worker_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" worker_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# not executing in with multiple workers, just produce the data and let")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pytest's fixture caching do its job")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" produce_expensive_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get the temp directory shared by all workers")]),t._v("\n    root_tmp_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp_path_factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getbasetemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent\n\n    fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root_tmp_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" FileLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".lock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" produce_expensive_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("ul",[a("li",[t._v("若某个 scope = session 的 fixture 需要确保只运行一次的话，可以用上面的方法，直接套用，然后改需要改的部分即可（这个后面详细讲解）")]),t._v(" "),a("li",[t._v("**官方原话：**这项技术可能并非在每种情况下都适用，但对于许多情况下，它应该是一个起点，在这种情况下，对于 scope = session 的fixture 只执行一次很重要")])]),t._v(" "),a("h3",{attrs:{id:"后续栗子的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续栗子的代码"}},[t._v("#")]),t._v(" 后续栗子的代码")]),t._v(" "),a("h4",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("xdist+fixture(文件夹)\n│  tmp(存放 allure 数据文件夹)\n│  conftest.py\n│  test_1.py\n│  test_2.py\n│  test_3.py\n│ __init__.py │ \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"test-1-py-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-1-py-代码"}},[t._v("#")]),t._v(" test_1.py 代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os 环境变量"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1 测试用例"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"test-2-py-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-2-py-代码"}},[t._v("#")]),t._v(" test_2.py 代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os 环境变量"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2 测试用例"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"test-3-py-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-3-py-代码"}},[t._v("#")]),t._v(" test_3.py 代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os 环境变量"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test3 测试用例"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"未解决情况下的栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未解决情况下的栗子"}},[t._v("#")]),t._v(" 未解决情况下的栗子")]),t._v(" "),a("h4",{attrs:{id:"conftest-py-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest-py-代码"}},[t._v("#")]),t._v(" conftest.py 代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fixture:请求登录接口，获取token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" token\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h4",{attrs:{id:"运行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行命令"}},[t._v("#")]),t._v(" 运行命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pytest -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" --alluredir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tmp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"运行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427134350042-1768610126.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427140826071-500401647.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427140653644-1240102773.png",alt:""}})]),t._v(" "),a("p",[t._v("scope=session 的 fixture 很明显执行了三次，三个进程下的三个测试用例得到的数据不一样，明显不会是我们想要的结果")]),t._v(" "),a("h3",{attrs:{id:"使用官方解决方法的栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用官方解决方法的栗子"}},[t._v("#")]),t._v(" 使用官方解决方法的栗子")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" filelock "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FileLock\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_path_factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" worker_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是单机运行 则运行这里的代码块【不可删除、修改】")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" worker_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        【自定义代码块】\n        这里就写你要本身应该要做的操作，比如：登录请求、新增数据、清空数据库历史数据等等\n        """')]),t._v("\n        token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fixture:请求登录接口，获取token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果测试用例有需要，可以返回对应的数据，比如 token")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" token\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是分布式运行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取所有子节点共享的临时目录，无需修改【不可删除、修改】")]),t._v("\n    root_tmp_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp_path_factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getbasetemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【不可删除、修改】")]),t._v("\n    fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root_tmp_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【不可删除、修改】")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" FileLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".lock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【不可删除、修改】")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存文件中读取数据，像登录操作的话就是 token 【不可删除、修改】")]),t._v("\n            token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"读取缓存文件，token 是')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' "')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n            【自定义代码块】\n            跟上面 if 的代码块一样就行\n            """')]),t._v("\n            token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fixture:请求登录接口，获取token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 【不可删除、修改】")]),t._v("\n            fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"首次执行，token 是')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' "')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最好将后续需要保留的数据存在某个地方，比如这里是 os 的环境变量")]),t._v("\n        os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" token\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br")])]),a("h4",{attrs:{id:"运行命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行命令-2"}},[t._v("#")]),t._v(" 运行命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pytest -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" --alluredir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tmp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"运行结果-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行结果-2"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427141650057-1487697756.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427141651681-1885202360.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427141653748-341544631.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到 fixture 只执行了一次，不同进程下的测试用例共享一个数据 token")]),t._v(" "),a("h4",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("ul",[a("li",[t._v("读取缓存文件并不是每个测试用例都会读，它是按照进程来读取的")]),t._v(" "),a("li",[t._v("比如 -n 3 指定三个进程运行，那么有一个进程会执行一次 fixture（随机），另外两个进程会各读一次缓存")]),t._v(" "),a("li",[t._v("假设每个进程有很多个用例，那也只是读一次缓存文件，而不会读多次缓存文件")]),t._v(" "),a("li",[t._v("所以最好要将从缓存文件读出来的数据保存在特定的地方，比如上面代码的 os.environ 可以将数据保存在环境变量中")])]),t._v(" "),a("h3",{attrs:{id:"两个进程跑三个测试用例文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个进程跑三个测试用例文件"}},[t._v("#")]),t._v(" 两个进程跑三个测试用例文件")]),t._v(" "),a("p",[t._v("还是上面栗子的代码")]),t._v(" "),a("h4",{attrs:{id:"运行命令-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行命令-3"}},[t._v("#")]),t._v(" 运行命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pytest -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --alluredir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tmp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"运行结果-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行结果-3"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427142557376-2026173760.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427142559084-757826451.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202104/1896874-20210427142600609-1993208809.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到 test_3 的测试用例就没有读缓存文件了，每个进程只会读一次缓存文件，记住哦！")]),t._v(" "),a("p",[t._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/14708825.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/14708825.html"),a("OutboundLink")],1),t._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=e.exports}}]);