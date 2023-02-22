(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{502:function(s,e,a){s.exports=a.p+"assets/img/image-20220516005116348.daad39ba.png"},503:function(s,e,a){s.exports=a.p+"assets/img/image-20220516005759936.8eb5cf5a.png"},504:function(s,e,a){s.exports=a.p+"assets/img/image-20220516004724707.d5652e81.png"},505:function(s,e,a){s.exports=a.p+"assets/img/image-20220516004847439.f57da024.png"},506:function(s,e,a){s.exports=a.p+"assets/img/image-20220516010343826.fd1d76c5.png"},507:function(s,e,a){s.exports=a.p+"assets/img/image-20220516010620492.382a7b82.png"},508:function(s,e,a){s.exports=a.p+"assets/img/image-20220516020757640.96735f31.png"},509:function(s,e,a){s.exports=a.p+"assets/img/image-20220516021101243.a5e3269e.png"},510:function(s,e,a){s.exports=a.p+"assets/img/image-20220516022944330.0cc1bae4.png"},511:function(s,e,a){s.exports=a.p+"assets/img/image-20220516023109847.03487868.png"},512:function(s,e,a){s.exports=a.p+"assets/img/image-20220516025330933.bce808e3.png"},513:function(s,e,a){s.exports=a.p+"assets/img/image-20220516025523649.892560fe.png"},628:function(s,e,a){"use strict";a.r(e);var t=a(29),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"自动化jenkins集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化jenkins集成"}},[s._v("#")]),s._v(" 自动化Jenkins集成")]),s._v(" "),t("h2",{attrs:{id:"什么是-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jenkins"}},[s._v("#")]),s._v(" 什么是 Jenkins？")]),s._v(" "),t("p",[s._v("Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。")]),s._v(" "),t("p",[s._v("中文网站：https://www.jenkins.io/zh/")]),s._v(" "),t("p",[s._v("文档手册：https://www.jenkins.io/zh/doc/")]),s._v(" "),t("h2",{attrs:{id:"ci-cd-又是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-又是什么"}},[s._v("#")]),s._v(" CI & CD 又是什么？")]),s._v(" "),t("p",[s._v("CI：Continuous Integration，持续集成。在CI环境中，开发人员将会频繁地向主干提交代码。这些新提交的代码在最终合并到主干前，需要经过编译和自动化测试流进行验证。通过自动化测试可以提早拿到回归测试的结果，避免将一些问题提交到交付生产中。")]),s._v(" "),t("p",[s._v("CD：Continuous Deployment，持续部署。在CD环境中，通过自动化的构建、测试和部署循环来快速交付高质量的产品。某种程度上代表了一个开发团队工程化的程度，任何修改通过了所有已有的工作流就会直接和客户见面。持续部署是一个很优秀的方式，可以加速与客户的反馈循环，但是会给团队带来压力，因为不再有“发布日”了。开发人员可以专注于构建软件，他们看到他们的修改在他们完成工作后几分钟就上线了。")]),s._v(" "),t("p",[s._v("另外还有一个 CD：Continuous delivery，持续交付。它可以让软件产品的产出过程在一个短周期内完成，以保证软件可以稳定、持续的保持在随时可以释出的状况。它的目标在于让软件的建置、测试与释出变得更快以及更频繁。这种方式可以减少软件开发的成本与时间，减少风险。")]),s._v(" "),t("p",[s._v("现在很多公司都有做持续集成，Jenkins就是一个持续集成的工具，开源的，基于 JAVA语言的。")]),s._v(" "),t("h2",{attrs:{id:"jenkins-持续交付工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-持续交付工作流程"}},[s._v("#")]),s._v(" Jenkins 持续交付工作流程")]),s._v(" "),t("p",[t("img",{attrs:{src:a(502),alt:"image-20220516005116348"}})]),s._v(" "),t("p",[s._v("1、开发者向 GitLab 或者 Gitee 或者 GitHub 提交代码。")]),s._v(" "),t("p",[s._v("2、GitLab 使用 WebHook 通知 Jenkins 有代码更新。\n3、Jenkins 从节点拉取代码，并打包生成镜像。\n4、Jenkins 在从节点上使用生成的镜像运行测试用例。\n5、如果测试通过，将镜像推送到镜像仓库中。\n6、Jenkins 在应用服务器上更新部署。\n7、Jenkins 将构建过程的报告以邮件的方式通知相关人员。")]),s._v(" "),t("p",[s._v("从开发人员向代码库提交代码之后，整个流程都是自动进行的。如果中间哪个环节出现错误，将会中止流程的执行，并将结果通知相关人员。提交的代码不但要包括应用程序，还应该包括构建镜像的脚本、测试用例的脚本和部署的编排脚本等。")]),s._v(" "),t("p",[s._v("其中，各个步骤的操作可以使用插件或直接在命令行中使用各种工具来完成。\n例如，拉取项目代码将会用到 Git 插件，项目的打包将使用 Maven 工具来实现，生成镜像和应用部署将直接通过命令行来使用 Docker-compose 工具，而集成测试也将通过命令行来执行由 Selenium、JMeter 等工具生成的脚本。")]),s._v(" "),t("h2",{attrs:{id:"部署jenkins环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署jenkins环境"}},[s._v("#")]),s._v(" 部署jenkins环境")]),s._v(" "),t("p",[s._v("1.首先你需要安装jdk")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jenkins\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat/jenkins-2.347-1.1.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下载完毕后就自动安装了")]),s._v(" "),t("p",[t("img",{attrs:{src:a(503),alt:"image-20220516005759936"}})]),s._v(" "),t("p",[s._v("安装后，先别启动。")]),s._v(" "),t("p",[s._v("首先修改端口号，否则默认的8080端口，可能会与其他应用起冲突。")]),s._v(" "),t("p",[s._v("再修改运行用户，")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改"),t("code",[s._v("JENKINS_USER")]),s._v("的值为root")]),s._v(" "),t("p",[s._v("然后就可以启动jenkins了")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("​\t查看运行状态")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl status jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("设置jenkins开机自启")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后通过ip:端口后，就可以打开jenkins了")]),s._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("h3",{attrs:{id:"端口号修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口号修改"}},[s._v("#")]),s._v(" 端口号修改")]),s._v(" "),t("p",[s._v("按照网上的方案：“修改/etc/sysconfig/jenkins中的JENKINS_PORT”即可，可是这样并没有一点用。")]),s._v(" "),t("p",[s._v("当你重启jenkins后，端口号还是用的默认的。")]),s._v(" "),t("p",[s._v("我也很纳闷，为什么一篇错误的文章居然被一群人反复的抄？不累吗？")]),s._v(" "),t("p",[s._v("正确解决方法如下：")]),s._v(" "),t("p",[s._v("1.首先你启动jenkins后，查看jenkins的运行状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(504),alt:"image-20220516004724707"}})]),s._v(" "),t("p",[s._v("直接去这个文件中，修改端口号")]),s._v(" "),t("p",[t("img",{attrs:{src:a(505),alt:"image-20220516004847439"}})]),s._v(" "),t("p",[s._v("我平常更喜欢可视化的操作，因为快捷方便。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl daemon-reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后重启就ok了。")]),s._v(" "),t("h3",{attrs:{id:"卡在启动页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡在启动页"}},[s._v("#")]),s._v(" 卡在启动页")]),s._v(" "),t("p",[t("img",{attrs:{src:a(506),alt:"image-20220516010343826"}})]),s._v(" "),t("p",[s._v("这些国外的软件，网络还是不够友好，所以需要换源解决。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/jenkins/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改"),t("code",[s._v("hudson.model.UpdateCenter.xml")]),s._v("文件，")]),s._v(" "),t("p",[t("code",[s._v("url")]),s._v("的值修改为"),t("code",[s._v("https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(507),alt:"image-20220516010620492"}})]),s._v(" "),t("p",[s._v("然后重启即可")]),s._v(" "),t("h3",{attrs:{id:"安装插件-版本兼容问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件-版本兼容问题"}},[s._v("#")]),s._v(" 安装插件，版本兼容问题")]),s._v(" "),t("p",[s._v("安装一些插件的时候，提示jenkins版本低于x.x.x。于是，我用了建议的版本。顺便记录一下，下载地址。")]),s._v(" "),t("p",[s._v("https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat/")]),s._v(" "),t("h3",{attrs:{id:"发送html报告显示不全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送html报告显示不全"}},[s._v("#")]),s._v(" 发送HTML报告显示不全")]),s._v(" "),t("p",[t("img",{attrs:{src:a(508),alt:"image-20220516020757640"}})]),s._v(" "),t("p",[s._v("先安装"),t("code",[s._v("Groovy")]),s._v("插件，在增加构建步骤里添加："),t("code",[s._v("Execute system Groovy script")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(509),alt:"image-20220516021101243"}})]),s._v(" "),t("p",[s._v("配置脚本命令行")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hudson.model.DirectoryBrowserSupport.CSP"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"script-src 'unsafe-inline'\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后去bulid now，你会发现报错")]),s._v(" "),t("p",[t("img",{attrs:{src:a(510),alt:"image-20220516022944330"}})]),s._v(" "),t("p",[s._v("还需要去设置（"),t("code",[s._v("Manage Jenkins->Global Tool Configuration")]),s._v("）里面配置"),t("code",[s._v("Groovy")]),s._v("，")]),s._v(" "),t("p",[t("img",{attrs:{src:a(511),alt:"image-20220516023109847"}})]),s._v(" "),t("p",[s._v("在项目配置中，选择"),t("code",[s._v("Groovy")]),s._v("的版本，就ok了。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(512),alt:"image-20220516025330933"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(513),alt:"image-20220516025523649"}})]),s._v(" "),t("h3",{attrs:{id:"最新版jenkins-设置邮件提醒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最新版jenkins-设置邮件提醒"}},[s._v("#")]),s._v(" 最新版jenkins-设置邮件提醒")]),s._v(" "),t("p",[s._v("参考文章：https://blog.csdn.net/weixin_42297382/article/details/122776307")])])}),[],!1,null,null,null);e.default=n.exports}}]);