(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{642:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是conftest-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是conftest-py"}},[t._v("#")]),t._v(" 什么是conftest.py")]),t._v(" "),a("p",[t._v("可以理解成一个专门存放fixture的配置文件")]),t._v(" "),a("h2",{attrs:{id:"实际开发场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际开发场景"}},[t._v("#")]),t._v(" 实际开发场景")]),t._v(" "),a("p",[t._v("多个测试用例文件（test_*.py）的所有用例都需要"),a("strong",[t._v("用登录功能来作为前置操作")]),t._v("，那就不能把登录功能写到某个用例文件中去了")]),t._v(" "),a("h2",{attrs:{id:"如何解决上述场景问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决上述场景问题"}},[t._v("#")]),t._v(" 如何解决上述场景问题？")]),t._v(" "),a("p",[t._v("conftest.py的出现，就是为了解决上述问题，单独管理一些全局的fixture")]),t._v(" "),a("h2",{attrs:{id:"conftest-py配置fixture注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest-py配置fixture注意事项"}},[t._v("#")]),t._v(" conftest.py配置fixture注意事项")]),t._v(" "),a("ul",[a("li",[t._v("pytest会默认读取conftest.py里面的所有fixture")]),t._v(" "),a("li",[t._v("conftest.py 文件名称是固定的，不能改动")]),t._v(" "),a("li",[t._v("conftest.py只对同一个package下的所有测试用例生效")]),t._v(" "),a("li",[t._v("不同目录可以有自己的conftest.py，一个项目中可以有多个conftest.py")]),t._v(" "),a("li",[t._v("测试用例文件中不需要手动import conftest.py，pytest会自动查找")])]),t._v(" "),a("h1",{attrs:{id:"实际项目中的小案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际项目中的小案例"}},[t._v("#")]),t._v(" 实际项目中的小案例")]),t._v(" "),a("p",[t._v("这是一个目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200408224205809-596157978.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_06conftest目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06conftest目录下"}},[t._v("#")]),t._v(" 06conftest目录下")]),t._v(" "),a("h3",{attrs:{id:"conftest-py代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest-py代码"}},[t._v("#")]),t._v(" conftest.py代码")]),t._v(" "),a("h3",{attrs:{id:"最顶层的conftest-一般写全局的fixture-在web-ui自动化中-可能会初始化driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最顶层的conftest-一般写全局的fixture-在web-ui自动化中-可能会初始化driver"}},[t._v("#")]),t._v(" 最顶层的conftest，一般写全局的fixture，在Web UI自动化中，可能会初始化driver")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"====登录功能，返回账号，token==="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testyy"')]),t._v("\n    token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npoi213bn4"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"====退出登录！！！===="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autouse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" login\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"== 每个用例都调用的外层fixture：打印用户token： ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' =="')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"test-1-py代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-1-py代码"}},[t._v("#")]),t._v(" test_1.py代码")]),t._v(" "),a("h3",{attrs:{id:"同级目录下的第一条测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同级目录下的第一条测试用例"}},[t._v("#")]),t._v(" 同级目录下的第一条测试用例")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_get_info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" login\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"基础用例：获取用户个人信息"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"用户名:')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", token:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_06-run-py代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06-run-py代码"}},[t._v("#")]),t._v(" 06_run.py代码")]),t._v(" "),a("h3",{attrs:{id:"运行06conftest目录下所有测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行06conftest目录下所有测试用例"}},[t._v("#")]),t._v(" 运行06conftest目录下所有测试用例")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../06conftest/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"test-51job目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-51job目录下"}},[t._v("#")]),t._v(" test_51job目录下")]),t._v(" "),a("h3",{attrs:{id:"conftest-py代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest-py代码-2"}},[t._v("#")]),t._v(" conftest.py代码")]),t._v(" "),a("h3",{attrs:{id:"配置一些针对51job这个网站的测试用例独有的fixture-譬如-打开51job网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置一些针对51job这个网站的测试用例独有的fixture-譬如-打开51job网站"}},[t._v("#")]),t._v(" 配置一些针对51job这个网站的测试用例独有的fixture，譬如：打开51job网站")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open_51")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" login\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"###用户 ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' 打开51job网站###"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"test-case1-py代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-case1-py代码"}},[t._v("#")]),t._v(" test_case1.py代码")]),t._v(" "),a("h3",{attrs:{id:"某个功能模块下的测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某个功能模块下的测试用例"}},[t._v("#")]),t._v(" 某个功能模块下的测试用例")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_case2_01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("open_51"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51job，列出所有职位用例"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_case2_02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("open_51"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51job，找出所有python岗位"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"test-toutiao目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-toutiao目录下"}},[t._v("#")]),t._v(" test_toutiao目录下")]),t._v(" "),a("h3",{attrs:{id:"test-case1-py代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-case1-py代码-2"}},[t._v("#")]),t._v(" test_case1.py代码")]),t._v(" "),a("p",[t._v("包没有__init__.py文件也没有conftest.py文件")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_no_fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"==没有__init__测试用例，我进入头条了=="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"test-weibo目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-weibo目录下"}},[t._v("#")]),t._v(" test_weibo目录下")]),t._v(" "),a("h3",{attrs:{id:"conftest-py代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest-py代码-3"}},[t._v("#")]),t._v(" conftest.py代码")]),t._v(" "),a("h3",{attrs:{id:"配置一些针对weibo这个网站的测试用例独有的fixture-譬如-打开weibo网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置一些针对weibo这个网站的测试用例独有的fixture-譬如-打开weibo网站"}},[t._v("#")]),t._v(" 配置一些针对weibo这个网站的测试用例独有的fixture，譬如：打开weibo网站")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif",alt:""}}),a("img",{attrs:{src:"https://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif",alt:""}})]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open_weibo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" login\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"&&& 用户 ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(' 返回微博首页 &&&"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"test-case1-py代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-case1-py代码-3"}},[t._v("#")]),t._v(" test_case1.py代码")]),t._v(" "),a("h3",{attrs:{id:"某个功能模块下的测试用例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某个功能模块下的测试用例-2"}},[t._v("#")]),t._v(" 某个功能模块下的测试用例")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestWeibo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_case1_01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" open_weibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查看微博热搜"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_case1_02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" open_weibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查看微博范冰冰"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"运行06-run-py的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行06-run-py的结果"}},[t._v("#")]),t._v(" 运行06_run.py的结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200408224906333-993246421.png",alt:""}})]),t._v(" "),a("p",[t._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12663601.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12663601.html"),a("OutboundLink")],1),t._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=e.exports}}]);