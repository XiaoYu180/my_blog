(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{671:function(s,a,t){"use strict";t.r(a);var e=t(29),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux用tcpdump抓包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux用tcpdump抓包"}},[s._v("#")]),s._v(" Linux用tcpdump抓包")]),s._v(" "),t("blockquote",[t("p",[s._v("网络数据包截获分析工具。支持针对网络层、协议、主机、网络或端口的过滤。并提供and、or、not等逻辑语句帮助去除无用的信息。")])]),s._v(" "),t("h3",{attrs:{id:"不指定任何参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不指定任何参数"}},[s._v("#")]),s._v(" 不指定任何参数")]),s._v(" "),t("p",[s._v("监听第一块网卡上经过的数据包。主机上可能有不止一块网卡，所以经常需要指定网卡。")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("tcpdump\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"监听特定网卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听特定网卡"}},[s._v("#")]),s._v(" 监听特定网卡")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("tcpdump "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i en0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"监听特定主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听特定主机"}},[s._v("#")]),s._v(" 监听特定主机")]),s._v(" "),t("p",[s._v("例子：监听本机跟主机"),t("code",[s._v("182.254.38.55")]),s._v("之间往来的通信包。")]),s._v(" "),t("p",[s._v("备注：出、入的包都会被监听。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.254")]),s._v(".38.55\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"特定来源、目标地址的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特定来源、目标地址的通信"}},[s._v("#")]),s._v(" 特定来源、目标地址的通信")]),s._v(" "),t("p",[s._v("特定来源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump src "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("特定目标地址")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump dst "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果不指定"),t("code",[s._v("src")]),s._v("跟"),t("code",[s._v("dst")]),s._v("，那么来源 或者目标 是hostname的通信都会被监听")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"特定端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特定端口"}},[s._v("#")]),s._v(" 特定端口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"监听tcp-udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听tcp-udp"}},[s._v("#")]),s._v(" 监听TCP/UDP")]),s._v(" "),t("p",[s._v("服务器上不同服务分别用了TCP、UDP作为传输层，假如只想监听TCP的数据包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump tcp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"来源主机-端口-tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#来源主机-端口-tcp"}},[s._v("#")]),s._v(" 来源主机+端口+TCP")]),s._v(" "),t("p",[s._v("监听来自主机"),t("code",[s._v("123.207.116.169")]),s._v("在端口"),t("code",[s._v("22")]),s._v("上的TCP数据包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump tcp port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" and src "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.207")]),s._v(".116.169\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"监听特定主机之间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听特定主机之间的通信"}},[s._v("#")]),s._v(" 监听特定主机之间的通信")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("tcpdump ip host 210"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("27"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("48"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1 and 210"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("27"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("48"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("210.27.48.1")]),s._v("除了和"),t("code",[s._v("210.27.48.2")]),s._v("之外的主机之间的通信")]),s._v(" "),t("div",{staticClass:"language-armasm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump ip host 210.27.48.1 and ! 210.27.48.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"稍微详细点的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#稍微详细点的例子"}},[s._v("#")]),s._v(" 稍微详细点的例子")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("tcpdump tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i eth1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s 0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c 100 and dst port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" 22 and src net 192"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("168"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0/24 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("(1)tcp: ip icmp arp rarp 和 tcp、udp、icmp这些选项等都要放到第一个参数的位置，用来过滤数据报的类型\n(2)-i eth1 : 只抓经过接口eth1的包\n(3)-t : 不显示时间戳\n(4)-s 0 : 抓取数据包时默认抓取长度为68字节。加上-S 0 后可以抓到完整的数据包\n(5)-c 100 : 只抓取100个数据包\n(6)dst port ! 22 : 不抓取目标端口是22的数据包\n(7)src net 192.168.1.0/24 : 数据包的源网络地址为192.168.1.0/24\n(8)-w ./target.cap : 保存成cap文件，方便用ethereal(即wireshark)分析")])]),s._v(" "),t("h3",{attrs:{id:"限制抓包的数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制抓包的数量"}},[s._v("#")]),s._v(" 限制抓包的数量")]),s._v(" "),t("p",[s._v("如下，抓到1000个包后，自动退出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"保存到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存到本地"}},[s._v("#")]),s._v(" 保存到本地")]),s._v(" "),t("p",[s._v("备注：tcpdump默认会将输出写到缓冲区，只有缓冲区内容达到一定的大小，或者tcpdump退出时，才会将输出写到本地磁盘")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tcpdump -n -vvv -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" -w /tmp/tcpdump_save.cap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也可以加上"),t("code",[s._v("-U")]),s._v("强制立即写到本地磁盘（一般不建议，性能相对较差）")])])}),[],!1,null,null,null);a.default=r.exports}}]);