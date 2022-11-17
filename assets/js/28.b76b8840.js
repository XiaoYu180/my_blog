(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{571:function(t,s,a){t.exports=a.p+"assets/img/image-20220919094556635.b3ed7da4.png"},688:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("ATOMac是一个支持在mac上做自动化的python库，")]),t._v(" "),n("p",[t._v("GitHub地址如下：https://github.com/pyatom/pyatom")])]),t._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("我们公司有款产品的Mac客户端，其中偶发的bug甚多。所以需要写一个小脚本实现自动化操作，捕捉错误。")]),t._v(" "),n("p",[t._v("我平常 web 和 app 自动化做的居多，PC 端应用自动化没有涉猎过。说干就干，找了很多帖子，找到了一个关键词 "),n("code",[t._v("ATOMac")]),t._v(" 。同时也在github上找到了地址。但是文档真的好少啊！")]),t._v(" "),n("p",[n("img",{attrs:{src:a(571),alt:"image-20220919094556635"}})]),t._v(" "),n("h2",{attrs:{id:"安装依赖库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖库"}},[t._v("#")]),t._v(" 安装依赖库")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" easy_install atomac\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python3")]),t._v("\npip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git+https://github.com/pyatom/pyatom/\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),n("h3",{attrs:{id:"启动程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动程序"}},[t._v("#")]),t._v(" 启动程序")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" atomac\natomac"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("launchAppByBundleId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.apple.Automator'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("blockquote",[n("p",[t._v("查看bundleID的方法：打开应用内容 -> info.plist")])]),t._v(" "),n("h3",{attrs:{id:"获取window"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取window"}},[t._v("#")]),t._v(" 获取Window")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("automator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" atomac"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getAppRefByBundleId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.apple.Automator'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" automator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h3",{attrs:{id:"获取应用标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取应用标题"}},[t._v("#")]),t._v(" 获取应用标题")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AXTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"查看元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看元素"}},[t._v("#")]),t._v(" 查看元素")]),t._v(" "),n("p",[t._v("atomac支持获取和操作大部分的元素，可以使用 "),n("code",[t._v("xcode")]),t._v(" 提供的accessibility inspector快速查看各个元素")]),t._v(" "),n("blockquote",[n("p",[t._v("Accessibility Inspector：Xcode -> Open Developer Tools")])]),t._v(" "),n("p",[t._v("Atomac支持的元素类型有：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("textAreas\ntextFields\nbuttons\nwindows\nsheets\nstaticTexts\ngenericElements\ngroups\nradioButtons\npopUpButtons\nrows\nsliders\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("atomac所有的定位方法加上 "),n("code",[t._v("R")]),t._v(" 字符，就变成了一个搜索方法(可以添加额外的搜索条件)")]),t._v(" "),n("h3",{attrs:{id:"获取元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取元素"}},[t._v("#")]),t._v(" 获取元素")]),t._v(" "),n("p",[t._v("通过快照我们可以进行元素定位, 这里我们以关闭按钮为例")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("closeButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buttonsR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关闭'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("closeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"条件搜索元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件搜索元素"}},[t._v("#")]),t._v(" 条件搜索元素")]),t._v(" "),n("p",[t._v("atomac支持findFirstR方法，根据属性来进行元素搜索，例如")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("closeButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findFirstR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AXRole"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AXButton'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AXTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关闭'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("支持的属性可以在 "),n("code",[t._v("Accessibility inspector")]),t._v(" 中查看")]),t._v(" "),n("blockquote",[n("p",[t._v("findFirstR方法返回首个匹配的元素， 如果没有找到匹配的元素则返回空列表")]),t._v(" "),n("p",[t._v("findAllR使用方法相同，返回所以匹配的元素列表，没有匹配的元素则返回空列表")])]),t._v(" "),n("h3",{attrs:{id:"查看元素支持的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看元素支持的属性"}},[t._v("#")]),t._v(" 查看元素支持的属性")]),t._v(" "),n("p",[t._v("元素属性对应说明：ATOMac 库使用的元素属性均在其属性名（通过 Accessibility Inspector 查到）前面加 AX，且首字母大写，如下所示")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("ATOMac")]),t._v(" "),n("th",[t._v("Accessibility Inspector")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("AXRole")]),t._v(" "),n("td",[t._v("Role")])]),t._v(" "),n("tr",[n("td",[t._v("AXPosition")]),t._v(" "),n("td",[t._v("Position")])]),t._v(" "),n("tr",[n("td",[t._v("AXRoleDescription")]),t._v(" "),n("td",[t._v("Type")])]),t._v(" "),n("tr",[n("td",[t._v("AXValue")]),t._v(" "),n("td",[t._v("Value")])])])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("closeButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findFirstR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AXRole"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AXButton'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AXTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关闭'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("closeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getAttributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("输出")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("['AXRole', 'AXHelp', 'AXEnabled', 'AXWindow', 'AXSize', 'AXTitle', 'AXRoleDescription', 'AXTopLevelUIElement', 'AXFocused', 'AXParent', 'AXPosition', 'AXFrame', 'AXIdentifier']\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("查看属性值")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("closeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AXTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"查看元素支持的操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看元素支持的操作"}},[t._v("#")]),t._v(" 查看元素支持的操作")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("closeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getActions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("输出")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("['Press']\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"操作元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#操作元素"}},[t._v("#")]),t._v(" 操作元素")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("closeButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Press"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("任何支持的操作都可以这样调用。")]),t._v(" "),n("h3",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("options")]),t._v(" "),n("th",[t._v("useage")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("getAttributes()")]),t._v(" "),n("td",[t._v("获取元素所有属性")])]),t._v(" "),n("tr",[n("td",[t._v("getActions()")]),t._v(" "),n("td",[t._v("查看元素支持操作")])]),t._v(" "),n("tr",[n("td",[t._v("window.tripleClickMouse(x + width / 2, y + height / 2)"),n("br"),t._v("window.sendKeys('123')")]),t._v(" "),n("td",[t._v("键盘输入")])]),t._v(" "),n("tr",[n("td",[t._v("AXPosition")]),t._v(" "),n("td",[t._v("坐标")])]),t._v(" "),n("tr",[n("td",[t._v("window.clickMouseButtonLeft(x + width / 2, y + height / 2)")]),t._v(" "),n("td",[t._v("左键单击")])]),t._v(" "),n("tr",[n("td",[t._v("window.doubleClickMouse(x + width / 2, y + height / 2)")]),t._v(" "),n("td",[t._v("双击")])]),t._v(" "),n("tr",[n("td",[t._v("window.groups()[0]")]),t._v(" "),n("td",[t._v("定位")])])])]),t._v(" "),n("h3",{attrs:{id:"键盘修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#键盘修饰符"}},[t._v("#")]),t._v(" 键盘修饰符")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("sendKeys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RETURN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("key")]),t._v(" "),n("th",[t._v("键盘修饰符")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("TAB")]),t._v(" "),n("td",[n("code",[t._v("<tab>")])])]),t._v(" "),n("tr",[n("td",[t._v("RETURN")]),t._v(" "),n("td",[n("code",[t._v("<return>")])])]),t._v(" "),n("tr",[n("td",[t._v("SPACE")]),t._v(" "),n("td",[n("code",[t._v("<space>")])])]),t._v(" "),n("tr",[n("td",[t._v("ESCAPE")]),t._v(" "),n("td",[n("code",[t._v("<escape>")])])]),t._v(" "),n("tr",[n("td",[t._v("CAPS_LOCK")]),t._v(" "),n("td",[n("code",[t._v("<capslock>")])])]),t._v(" "),n("tr",[n("td",[t._v("DELETE")]),t._v(" "),n("td",[n("code",[t._v("<delete>")])])]),t._v(" "),n("tr",[n("td",[t._v("NUM_LOCK")]),t._v(" "),n("td",[n("code",[t._v("<num_lock>")])])]),t._v(" "),n("tr",[n("td",[t._v("SCROLL_LOCK")]),t._v(" "),n("td",[n("code",[t._v("<scroll_lock>")])])]),t._v(" "),n("tr",[n("td",[t._v("PAUSE")]),t._v(" "),n("td",[n("code",[t._v("<pause>")])])]),t._v(" "),n("tr",[n("td",[t._v("BACKSPACE")]),t._v(" "),n("td",[n("code",[t._v("<backspace>")])])]),t._v(" "),n("tr",[n("td",[t._v("INSERT")]),t._v(" "),n("td",[n("code",[t._v("<insert>")])])])])]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ul",[n("li",[t._v("https://www.cnblogs.com/freedomlidi/p/12431339.html")]),t._v(" "),n("li",[t._v("https://www.jianshu.com/p/0720dc246770")]),t._v(" "),n("li",[t._v("https://github.com/pyatom/pyatom")])])])}),[],!1,null,null,null);s.default=e.exports}}]);