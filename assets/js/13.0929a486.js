(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{539:function(s,t,a){s.exports=a.p+"assets/img/image-20220607220030857.609bb137.png"},540:function(s,t,a){s.exports=a.p+"assets/img/image-20220607220150972.a11dc41f.png"},541:function(s,t,a){s.exports=a.p+"assets/img/image-20220607224848532.7a88a18a.png"},626:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"python实战接口自动化头条项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python实战接口自动化头条项目"}},[s._v("#")]),s._v(" python实战接口自动化头条项目")]),s._v(" "),n("blockquote",[n("p",[s._v("源码地址：")]),s._v(" "),n("p",[s._v("https://github.com/xiaorui16888/TouTiao_Interface_Test")])]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("这几天在巩固自己的知识，找到了一个"),n("code",[s._v("黑马程序员")]),s._v("的实战项目。对外开放了API接口文档（已失效），不过我费尽周折还是找到了新的接口，接口功能都是ok的。")]),s._v(" "),n("p",[s._v("我认为，做任何事情都要有一个流程。这样，做事情才会做到完美。当然"),n("code",[s._v("接口自动化")]),s._v("测试也有一套流程。")]),s._v(" "),n("h2",{attrs:{id:"接口自动化测试流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口自动化测试流程"}},[s._v("#")]),s._v(" 接口自动化测试流程")]),s._v(" "),n("p",[s._v("1.需求分析")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("- 请求（url，请求方法，参数）\n- 响应（状态码，响应数据）\n")])])]),n("p",[s._v("2.挑选需要做自动化的接口（计划时间，人员，接口复杂度）")]),s._v(" "),n("p",[s._v("​\t因为一个项目中，不一定所有的接口都需要做自动化测试；包括哪些人员适合、可以做接口自动化；包括接口之间的关联。")]),s._v(" "),n("p",[s._v("3.设计自动化测试用例（如果功能阶段设计过用例，可以直接拿过来使用即可）")]),s._v(" "),n("p",[s._v("4.搭建自动化测试环境")]),s._v(" "),n("p",[s._v("如：python--编写方便，上手快；")]),s._v(" "),n("p",[s._v("​\t\tpycharm--ide强大，功能多。")]),s._v(" "),n("p",[s._v("5.设计自动化执行框架（报告、参数化、用例执行框架）")]),s._v(" "),n("p",[s._v("6.编写代码")]),s._v(" "),n("p",[s._v("7.执行测试用例框架（unittest、pytest）")]),s._v(" "),n("p",[s._v("​\t这两种框架，我一般做"),n("code",[s._v("错误重跑")]),s._v("、"),n("code",[s._v("测试报告")]),s._v("、"),n("code",[s._v("执行顺序")]),s._v("等用的是"),n("code",[s._v("pytest")]),s._v("，这个框架功能配套的插件很多（如：allure）。而且生成的测试报告比起"),n("code",[s._v("HTMLTestRunner")]),s._v(" 也很美观。断言，一般用unittest，只需要类继承unittest.TestCase，就可以调用其中的断言函数。")]),s._v(" "),n("p",[s._v("8.生成测试报告（allure等）")]),s._v(" "),n("h2",{attrs:{id:"接口清单整理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口清单整理"}},[s._v("#")]),s._v(" 接口清单整理")]),s._v(" "),n("p",[n("strong",[s._v("请求：")])]),s._v(" "),n("p",[s._v("接口地址、请求方法、请求参数、请求头等")]),s._v(" "),n("p",[n("strong",[s._v("响应：")])]),s._v(" "),n("p",[s._v("响应状态码、响应数据")]),s._v(" "),n("h2",{attrs:{id:"用例设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用例设计"}},[s._v("#")]),s._v(" 用例设计")]),s._v(" "),n("h3",{attrs:{id:"单接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单接口"}},[s._v("#")]),s._v(" 单接口")]),s._v(" "),n("p",[n("strong",[s._v("模板：")])]),s._v(" "),n("p",[s._v("用例id、所属模块、接口名称、请求url、用例名称、请求方法、请求参数类型、请求参数、预期结果、实际结果、备注")]),s._v(" "),n("p",[n("strong",[s._v("注意：单接口颗粒度放的比较小（以测试数据为颗粒度）")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(539),alt:"image-20220607220030857"}})]),s._v(" "),n("h3",{attrs:{id:"多接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多接口"}},[s._v("#")]),s._v(" 多接口")]),s._v(" "),n("p",[n("strong",[s._v("模板：")])]),s._v(" "),n("p",[s._v("用例id、所属模块、接口名称、请求url、用例名称、请求方法、请求参数类型、请求参数、预期结果、实际结果、备注")]),s._v(" "),n("p",[n("strong",[s._v("注意：多个接口颗粒度为每个接口为基础，每个接口内所设计的数据可以通过参数化来解决。")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(540),alt:"image-20220607220150972"}})]),s._v(" "),n("h2",{attrs:{id:"接口自动化项目框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口自动化项目框架"}},[s._v("#")]),s._v(" 接口自动化项目框架")]),s._v(" "),n("h3",{attrs:{id:"目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),n("p",[s._v("1.接口对象层--api")]),s._v(" "),n("p",[s._v("2.用例执行业务层--case")]),s._v(" "),n("p",[s._v("3.数据驱动层--data")]),s._v(" "),n("p",[s._v("4.测试报告--report")]),s._v(" "),n("p",[s._v("5.工具层--封装公用的工具类")]),s._v(" "),n("p",[s._v("6.运行入口层--运行测试用例，生成测试报告")]),s._v(" "),n("p",[n("img",{attrs:{src:a(541),alt:"image-20220607224848532"}})]),s._v(" "),n("h3",{attrs:{id:"数据驱动问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动问题"}},[s._v("#")]),s._v(" 数据驱动问题")]),s._v(" "),n("p",[s._v("这里我是用json去存储接口数据的。如下代码：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"login_001"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://toutiao.itheima.net/v1_0/authorizations"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mobile"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"17612917750"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"246810"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"except_code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status_code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"login_002"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://toutiao.itheima.net/v1_0/authorizations"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mobile"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"17612917750"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"except_code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"验证码不正确"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status_code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("然后编写操作json工具类")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" base_path\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JsonUtil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filepath "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base_path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/data/{}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取json")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("read_json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filepath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用load方法加载文件流")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入Json")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("write_json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filepath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indent"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ensure_ascii"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("使用"),n("code",[s._v("参数化")]),s._v("动态获取参数数据，ddt、unpack。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" unittest\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" ddt "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ddt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unpack\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api_login "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ApiLogin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json_util "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" JsonUtil\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    json_datas "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JsonUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login_more.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    arrs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" json_data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" json_datas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("values"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        arrs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mobile'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'code'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expect_code'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                     json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status_code'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(arrs)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" arrs\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@unittest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skip")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"跳过"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@ddt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestLoginMore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unittest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TestCase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("get_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@unpack")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_login_more")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mobile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expect_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" status_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用登录方法")]),s._v("\n        resp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ApiLogin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api_post_login"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mobile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'查看响应结果：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 断言响应信息及状态码")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assertEqual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expect_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assertEqual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h3",{attrs:{id:"运行主入口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行主入口"}},[s._v("#")]),s._v(" 运行主入口")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pytest\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行测试套件")]),s._v("\n    pytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成临时报告数据，并清理之前生成的")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'allure generate ./temps -o ./report --clean'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token section"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("addopts")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("-vs --alluredir ./temps --clean-alluredir")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("testpaths")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("./case")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_files")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("test*")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_classes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Test*")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_functions")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("test*")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);