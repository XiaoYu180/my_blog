(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{659:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("ul",[a("li",[s._v("平时写测试用例也会划分优先级")]),s._v(" "),a("li",[s._v("同样，allure 也提供用例级别，在 allure 报告可以清晰看到不同级别用例的缺陷数量")])]),s._v(" "),a("h2",{attrs:{id:"用例等级介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例等级介绍"}},[s._v("#")]),s._v(" 用例等级介绍")]),s._v(" "),a("h4",{attrs:{id:"allure-提供的枚举类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allure-提供的枚举类"}},[s._v("#")]),s._v(" allure 提供的枚举类")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028101707576-1311685517.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"等级介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等级介绍"}},[s._v("#")]),s._v(" 等级介绍")]),s._v(" "),a("ul",[a("li",[s._v("blocker：阻塞缺陷（功能未实现，无法下一步）")]),s._v(" "),a("li",[s._v("critical：严重缺陷（功能点缺失）")]),s._v(" "),a("li",[s._v("normal： 一般缺陷（边界情况，格式错误）")]),s._v(" "),a("li",[s._v("minor：次要缺陷（界面错误与ui需求不符）")]),s._v(" "),a("li",[s._v("trivial： 轻微缺陷（必须项无提示，或者提示不规范）")])]),s._v(" "),a("h2",{attrs:{id:"实际栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际栗子"}},[s._v("#")]),s._v(" 实际栗子")]),s._v(" "),a("h3",{attrs:{id:"测试代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试代码"}},[s._v("#")]),s._v(" 测试代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" allure\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_with_no_severity_label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity_level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TRIVIAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_with_trivial_severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity_level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NORMAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_with_normal_severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity_level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NORMAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestClassWithNormalSeverity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_inside_the_normal_severity_test_class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" 测试类优先级 normal；看看测试用例是否会自动继承优先级 """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity_level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CRITICAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_inside_the_normal_severity_test_class_with_overriding_critical_severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        测试类优先级 normal\n        测试用例优先级 critical\n        """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"normal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" normal 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test case 11111111"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"critical"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" critical 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test case 222222222"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blocker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" blocker 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test case 4444444"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" minor 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test case 11111111"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" 没标记 severity 的用例默认为 normal"""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test case 5555555555"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("h3",{attrs:{id:"allure-报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allure-报告"}},[s._v("#")]),s._v(" allure 报告")]),s._v(" "),a("h4",{attrs:{id:"测试用例详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试用例详情"}},[s._v("#")]),s._v(" 测试用例详情")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102517170-1478952294.png",alt:""}})]),s._v(" "),a("p",[s._v("多了个  severity 字段")]),s._v(" "),a("h4",{attrs:{id:"统计图表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计图表"}},[s._v("#")]),s._v(" 统计图表")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102539419-243158042.png",alt:""}})]),s._v(" "),a("p",[s._v("可以看到不同 severity 测试用例运行的统计数据")]),s._v(" "),a("h3",{attrs:{id:"必然测试失败的测试代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必然测试失败的测试代码"}},[s._v("#")]),s._v(" 必然测试失败的测试代码")]),s._v(" "),a("p",[s._v("将上面代码的三个测试用例故意让它测试失败")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"normal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" normal 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"critical"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" critical 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@allure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("severity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blocker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" blocker 级别测试用例 """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h4",{attrs:{id:"再来看看-allure-报告的统计图表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再来看看-allure-报告的统计图表"}},[s._v("#")]),s._v(" 再来看看 allure 报告的统计图表")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102738341-707019425.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("这里用的是中文报告，其实可以看到 severity 官方是翻译为优先级，但是如果自己去翻译软件翻译的话是严重程度，我个人更偏向于理解为优先级")]),s._v(" "),a("li",[s._v("会同时显示同一个优先级的失败、通过用例数，以及哪条用例是失败、通过的")])]),s._v(" "),a("h2",{attrs:{id:"命令行参数-allure-severities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数-allure-severities"}},[s._v("#")]),s._v(" 命令行参数 allure-severities")]),s._v(" "),a("p",[s._v("当然，也可以根据优先级选择需要运行的测试用例")]),s._v(" "),a("h4",{attrs:{id:"具体栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体栗子"}},[s._v("#")]),s._v(" 具体栗子")]),s._v(" "),a("p",[s._v("仍然是上面的代码，打开 cmd")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只运行 severity=blocker、critical 的测试用例")]),s._v("\npytest test_severity.py -sq --alluredir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./allure --allure-severities"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("blocker,critical\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写法二")]),s._v("\npytest test_severity.py -sq --alluredir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./allure --allure-severities blocker,critical\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"运行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[s._v("#")]),s._v(" 运行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028103226885-438391816.png",alt:""}})]),s._v(" "),a("p",[s._v("severi=blocker、critical 的测试用例就三条，可以看看上面的代码")]),s._v(" "),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13889635.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/poloyy/p/13889635.html"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=e.exports}}]);