(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{574:function(s,t,a){s.exports=a.p+"assets/img/image-20220609213331113.f6f88c12.png"},575:function(s,t,a){s.exports=a.p+"assets/img/image-20220609213509262.9908ac6c.png"},576:function(s,t,a){s.exports=a.p+"assets/img/image-20220609213630625.0334cc9a.png"},577:function(s,t,a){s.exports=a.p+"assets/img/image-20220609213902894.4c53cc31.png"},578:function(s,t,a){s.exports=a.p+"assets/img/image-20220609214149393.62d606ca.png"},579:function(s,t,a){s.exports=a.p+"assets/img/image-20220609214734310.e6dc2e41.png"},580:function(s,t,a){s.exports=a.p+"assets/img/image-20220609221052173.9548827b.png"},581:function(s,t,a){s.exports=a.p+"assets/img/image-20220609221402175.18973506.png"},694:function(s,t,a){"use strict";a.r(t);var e=a(29),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"【安全】记又一次入侵黑产平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【安全】记又一次入侵黑产平台"}},[s._v("#")]),s._v(" 【安全】记又一次入侵黑产平台")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("已经记不清又多少次入侵黑产平台了，替天行道！")]),s._v(" "),e("p",[s._v("很多人认为入侵很难，的确也难。给程序找漏洞本来就是一个漫长的过程。想要找漏洞，就得懂的开发程序，会分析代码。这样你就能站在程序的肩膀上，去挖掘其中可能存在漏洞的地方。")]),s._v(" "),e("h2",{attrs:{id:"知识普及"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知识普及"}},[s._v("#")]),s._v(" 知识普及")]),s._v(" "),e("p",[s._v("程序最基础的漏洞有：")]),s._v(" "),e("ol",[e("li",[s._v("xss注入")]),s._v(" "),e("li",[s._v("参数注入")]),s._v(" "),e("li",[s._v("sql注入")]),s._v(" "),e("li",[s._v("文件木马注入")])]),s._v(" "),e("p",[e("strong",[s._v("xss注入：")])]),s._v(" "),e("p",[s._v("一般用于表单的提交，定向收集管理端、用户端的cookie等信息。然后把收集到cookie注入到浏览器中，接下来你就是以一个用户or管理员的身份去操作这个平台，无需登录他的账号。")]),s._v(" "),e("p",[s._v("但是这种注入方式，如果服务端做了session、token、ip白名单等校验，就丧失了它的作用。但是用来进行"),e("code",[s._v("刷量")]),s._v("，还是有一定作用的。")]),s._v(" "),e("p",[e("strong",[s._v("参数注入：")])]),s._v(" "),e("p",[s._v("程序提交数据的时候，都会产生数据包。通过修改里面的参数，模拟发送请求。这种方式，可以绕过前端的校验。但是如果后端做了校验，那还是一样无解。")]),s._v(" "),e("p",[e("strong",[s._v("sql注入：")])]),s._v(" "),e("p",[s._v("sql注入的语法，大家可以通过百度去了解学习。也是通过修改参数，对数据库中的数据进行增删改查。")]),s._v(" "),e("p",[s._v("具体情况，取决于请求接口的功能。如接口仅用于查询"),e("code",[s._v("用户甲")]),s._v("的消费记录。但是我们通过sql注入，也许可以查出平台所有用户的消费记录。")]),s._v(" "),e("p",[e("strong",[s._v("文件木马注入：")])]),s._v(" "),e("p",[s._v("最常见的如：")]),s._v(" "),e("p",[s._v("一句话木马（图片木马）：通过修改图片中的信息，植入恶意代码。使用菜刀等工具，可以入侵系统服务器。")]),s._v(" "),e("p",[s._v("程序文件木马：比如入侵的平台是php系统，我们上传php木马程序。然后通过访问回显的文件存储地址，就可以实现对系统服务器的控制。")]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"故事的开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故事的开始"}},[s._v("#")]),s._v(" 故事的开始")]),s._v(" "),e("p",[s._v("这次我入侵的是特别有名的虚拟投资诈骗平台。借用"),e("code",[s._v("挖Kuang")]),s._v("的名义，骗取用户投资。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(574),alt:"image-20220609213331113"}})]),s._v(" "),e("p",[s._v("这个系统，我研究了一会。感觉除了"),e("code",[s._v("聊天")]),s._v("模块，并没有其他入口通知平台的玩家远离诈骗。索性就从聊天模块挖漏洞。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(575),alt:"image-20220609213509262"}})]),s._v(" "),e("p",[s._v("一个群聊-聊天室，一个好友列表-官方客服。")]),s._v(" "),e("p",[s._v("通过私聊作用不大，所以从聊天室入手。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(576),alt:"image-20220609213630625"}})]),s._v(" "),e("p",[s._v("因为一些词语比较敏感，所以我打了马赛克。")]),s._v(" "),e("p",[s._v("平台是"),e("code",[s._v("全体禁言的")]),s._v("，所以我们是没有办法发言的。")]),s._v(" "),e("h2",{attrs:{id:"代码的分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码的分析"}},[s._v("#")]),s._v(" 代码的分析")]),s._v(" "),e("p",[s._v("所以，先分析~")]),s._v(" "),e("p",[e("img",{attrs:{src:a(577),alt:"image-20220609213902894"}})]),s._v(" "),e("p",[s._v("聊天的数据包是基于 "),e("code",[s._v("WebSocket")]),s._v("协议。")]),s._v(" "),e("p",[s._v("我再查看源代码，")]),s._v(" "),e("p",[e("img",{attrs:{src:a(578),alt:"image-20220609214149393"}})]),s._v(" "),e("p",[e("code",[s._v("禁言")]),s._v(" 、 "),e("code",[s._v("删除消息")]),s._v("、"),e("code",[s._v("私信")]),s._v(" 等功能都是基于 "),e("code",[s._v("WebSocket")]),s._v(" 实现通信的。")]),s._v(" "),e("p",[s._v("更何况，这前端的源码中已经帮我们把发送参数的格式罗列好了。直接干就行了。")]),s._v(" "),e("p",[s._v("先创建一个WebSocket对象")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建WebSocket对象")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ws "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WebSocket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wss://xxx.xxx.com/ws/chatRoom/1534826274126684161"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这里的代码：连接 "),e("code",[s._v("1534826274126684161")]),s._v(" 聊天室")]),s._v(" "),e("p",[s._v("因为系统是禁言状态，我发现用自己的uid发送消息，是无法发送的。说明后端做了校验。")]),s._v(" "),e("p",[s._v("所以我们需要拿到一个管理员的uid，但是这个系统是没有办法查看群员列表的。多亏历史聊天记录中有携带管理员的uid。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(579),alt:"image-20220609214734310"}})]),s._v(" "),e("p",[s._v("然后我通过分析代码，找到了解除禁言的请求参数内容。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("ws"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("fromUser")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1534480623966617602'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("message")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hasImg")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"forbidAllReject"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("type")]),s._v(" ：代表消息事件的类型--解除禁言")]),s._v(" "),e("p",[e("code",[s._v("fromUser")]),s._v(" ：发送消息的用户uid。")]),s._v(" "),e("p",[s._v("在控制台执行该代码后，禁言直接就被关闭了。只能说明，后端并没有做登录用户权限的校验。")]),s._v(" "),e("p",[s._v("我接着找到 "),e("code",[s._v("发送文字消息")]),s._v(" 的请求参数内容。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("ws"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("fromUser")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1534480623966617602'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("message")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'本平台为诈骗平台，请大家远离诈骗！'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hasImg")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'msg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我觉得发送文字不够过瘾，接着我又在代码中查找 "),e("code",[s._v("发送图片消息")]),s._v(" 的参数内容。可是没找到~ 紧接着，我直接拿管理员的账号发送了一张图片，抓到了图片消息的数据包。")]),s._v(" "),e("p",[s._v("步骤：先上传一张图片到平台，然后发送图片消息。")]),s._v(" "),e("p",[s._v("因为浏览器的控制台上传图片并不方便。我使用 "),e("code",[s._v("Postman")]),s._v(" 实现文件上传。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(580),alt:"image-20220609221052173"}})]),s._v(" "),e("p",[s._v("拿到响应数据中的图片地址，然后就可以发送图片消息。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("ws"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"fromUser"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1534480623966617602"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/img/20220609/ececfd9853e24ff387b1aae66ae964fb.jpg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"hasImg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[s._v("#")]),s._v(" 效果图")]),s._v(" "),e("p",[e("img",{attrs:{src:a(581),alt:"image-20220609221402175"}})]),s._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),e("p",[s._v("技术是一把刀，看你如何去使用它。")]),s._v(" "),e("p",[s._v("远离诈骗，不做韭菜！")])])}),[],!1,null,null,null);t.default=r.exports}}]);