(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{640:function(s,t,a){"use strict";a.r(t);var n=a(29),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"用例执行状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例执行状态"}},[s._v("#")]),s._v(" 用例执行状态")]),s._v(" "),a("p",[s._v("用例执行完成后，每条用例都有自己的状态，常见的状态有")]),s._v(" "),a("ul",[a("li",[s._v("passed：测试通过")]),s._v(" "),a("li",[s._v("failed：断言失败")]),s._v(" "),a("li",[s._v("error：用例本身写的质量不行，本身代码报错（譬如：fixture不存在，fixture里面有报错）")]),s._v(" "),a("li",[s._v("xfail：预期失败，加了 @pytest.mark.xfail()")])]),s._v(" "),a("h2",{attrs:{id:"error的栗子一-参数不存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error的栗子一-参数不存在"}},[s._v("#")]),s._v(" error的栗子一：参数不存在")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"获取用户名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl123"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"为啥是error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是error"}},[s._v("#")]),s._v(" 为啥是error")]),s._v(" "),a("p",[s._v("pwd参数并不存在，所以用例执行error")]),s._v(" "),a("h2",{attrs:{id:"error的栗子二-fixture有错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error的栗子二-fixture有错"}},[s._v("#")]),s._v(" error的栗子二：fixture有错")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"获取用户名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl123"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"为啥是error-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是error-2"}},[s._v("#")]),s._v(" 为啥是error？")]),s._v(" "),a("ul",[a("li",[s._v("fixture里面断言失败，所以fixture会报错；")]),s._v(" "),a("li",[s._v("因为test_1调用了错误的fixture，所以error表示用例有问题")])]),s._v(" "),a("h2",{attrs:{id:"failed的栗子一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failed的栗子一"}},[s._v("#")]),s._v(" failed的栗子一")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"获取密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" pwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yygirl123"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"为啥是failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是failed"}},[s._v("#")]),s._v(" 为啥是failed")]),s._v(" "),a("p",[s._v("因为fixture返回的变量断言失败")]),s._v(" "),a("h2",{attrs:{id:"failed的栗子二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failed的栗子二"}},[s._v("#")]),s._v(" failed的栗子二")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fixture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"获取密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"polo"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" NameError\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" pwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"polo"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"为啥是failed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是failed-2"}},[s._v("#")]),s._v(" 为啥是failed")]),s._v(" "),a("p",[s._v("因为用例执行期间抛出了异常")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("测试用例的代码有异常，包括主动抛出异常或代码有异常，都算failed")]),s._v(" "),a("li",[s._v("当测试用例调用的fixture有异常，或传入的参数有异常的时候，都算error")]),s._v(" "),a("li",[s._v("如果一份测试报告中，error的测试用例数量越多，说明测试用例质量越差")])]),s._v(" "),a("h2",{attrs:{id:"xfail的栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xfail的栗子"}},[s._v("#")]),s._v(" xfail的栗子")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 断言装饰器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xfail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("raises"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ZeroDivisionError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"为啥是xfail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是xfail"}},[s._v("#")]),s._v(" 为啥是xfail")]),s._v(" "),a("p",[s._v("代码有异常，且和raised的异常类匹配，所以是xfail**（算测试通过的一种，表示符合期望捕捉到的异常）**，并不算failed")]),s._v(" "),a("p",[s._v("如果和raised的异常类不匹配，则是failed")]),s._v(" "),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12653187.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/poloyy/p/12653187.html"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=r.exports}}]);