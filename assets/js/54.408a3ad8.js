(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{617:function(a,e,s){"use strict";s.r(e);var t=s(29),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"win11右键默认显示更多选项-修改注册表方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#win11右键默认显示更多选项-修改注册表方式"}},[a._v("#")]),a._v(" win11右键默认显示更多选项--修改注册表方式")]),a._v(" "),s("p",[a._v("自从电脑系统更新到win11后，发现右键后，部分功能操作都被折叠了，很不方便。本来点击一次，非得点击两次。")]),a._v(" "),s("p",[a._v("百度看了几个帖子，都多多少少有些问题。终于找到了如下这种方法，操作起来很简单。只需要一行命令。")]),a._v(" "),s("p",[a._v("打开"),s("code",[a._v("cmd窗口")]),a._v("，输入")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("reg.exe "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32"')]),a._v(" /f /ve\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后，重启电脑即可。")]),a._v(" "),s("p",[a._v("如果想恢复win11默认的折叠模式，输入如下命令，重启即可。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("reg.exe delete "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32"')]),a._v(" /va /f\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("水了一篇文章~哈哈。对我这种喜欢"),s("code",[a._v("简单")]),a._v("的人，更愿意全部显示。毕竟能减少用户的点击操作，可以提高用户的办公效率。")])])}),[],!1,null,null,null);e.default=n.exports}}]);