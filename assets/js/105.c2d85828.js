(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{679:function(t,r,o){"use strict";o.r(r);var e=o(29),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"实战教程篇"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#实战教程篇"}},[t._v("#")]),t._v(" 实战教程篇")]),t._v(" "),o("h4",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),o("ul",[o("li",[t._v("这边就不教大家怎么用 pytest 写项目了哦，下面有系列文章能帮助你快速入门 Pytest + Allure")]),t._v(" "),o("li",[t._v("这一篇教程主要是教如何从 0 到 1 搭建自动化测试的持续集成环境")])]),t._v(" "),o("h3",{attrs:{id:"四步走"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四步走"}},[t._v("#")]),t._v(" 四步走")]),t._v(" "),o("p",[t._v("使用 Jenkins 镜像创建容器，并搭建 Python + Pytest +Allure 的自动化测试环境")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13954637.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13954637.html"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("在 Jenkins 容器上的搭建持续集成环境和完成自动化测试")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13955641.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13955641.html"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("搭建 Gitlab 容器并上传本地项目代码")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13969756.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13969756.html"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("结合 Jenkins + Gitlab 完成自动化测试的持续集成实战")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13971134.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13971134.html"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"基础知识篇"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基础知识篇"}},[t._v("#")]),t._v(" 基础知识篇")]),t._v(" "),o("h3",{attrs:{id:"什么是持续集成"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#什么是持续集成"}},[t._v("#")]),t._v(" 什么是持续集成？")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13996319.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13996319.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"docker-相关基础知识"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-相关基础知识"}},[t._v("#")]),t._v(" Docker 相关基础知识")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1870863.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1870863.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"pytest-allure-相关基础知识"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pytest-allure-相关基础知识"}},[t._v("#")]),t._v(" Pytest + Allure 相关基础知识")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1690628.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1690628.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"jenkins-相关基础知识"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-相关基础知识"}},[t._v("#")]),t._v(" Jenkins 相关基础知识")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1645399.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1645399.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"虚拟机安装以及配置相关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机安装以及配置相关"}},[t._v("#")]),t._v(" 虚拟机安装以及配置相关")]),t._v(" "),o("p",[t._v("包含安装 centos7、8 虚拟机、设置静态 ip 等")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1703784.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1703784.html"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"解决方案篇"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决方案篇"}},[t._v("#")]),t._v(" 解决方案篇")]),t._v(" "),o("h3",{attrs:{id:"linux-常见问题解决方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-常见问题解决方案"}},[t._v("#")]),t._v(" Linux 常见问题解决方案")]),t._v(" "),o("ul",[o("li",[t._v("防火墙相关，对外开放接口："),o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12213297.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12213297.html"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("配置环境变量："),o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12187148.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12187148.html"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("配置阿里云 yum 源："),o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12186756.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12186756.html"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"docker-常见问题解决方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-常见问题解决方案"}},[t._v("#")]),t._v(" Docker 常见问题解决方案")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1870864.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1870864.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"jenkins-常见问题解决方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-常见问题解决方案"}},[t._v("#")]),t._v(" Jenkins 常见问题解决方案")]),t._v(" "),o("p",[t._v("包含忘记密码、发送邮箱失败等")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1753984.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1753984.html"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"git-常见问解决方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-常见问解决方案"}},[t._v("#")]),t._v(" git 常见问解决方案")]),t._v(" "),o("p",[t._v("包含push 失败、webhook 配置失败等")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/category/1870905.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/category/1870905.html"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("本文转自 "),o("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/13918275.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/13918275.html"),o("OutboundLink")],1),t._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);r.default=a.exports}}]);