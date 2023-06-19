(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{554:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2022-10-18_10-09-41.a952e75d.png"},672:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("里面不仅有安装教程和对一些中间件的配置问题等 还有数据库的一些问题")])]),s._v(" "),n("h2",{attrs:{id:"docker的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的安装"}},[s._v("#")]),s._v(" docker的安装")]),s._v(" "),n("p",[s._v("如果你是第一次安装需要注意")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc \nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("你需要设置镜像仓库为国内的仓库")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后安装docker引擎")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("启动docker并测试")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" systemctl start "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动docker")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker版本")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行hello-world")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"配置镜像加速"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像加速"}},[s._v("#")]),s._v(" 配置镜像加速")]),s._v(" "),n("p",[s._v("我们可以使用阿里云提供的加速 很简单直接登录自己的阿里云账号点击容器镜像服务找到镜像加速器直接黏贴他们提供的命令就可以了\n"),n("img",{attrs:{src:a(554),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"docker的常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的常用命令"}},[s._v("#")]),s._v(" docker的常用命令")]),s._v(" "),n("p",[s._v("基础命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemctl start "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动docker")]),s._v("\nsystemctl stop "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止docker")]),s._v("\nsystemctl restart "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启docker")]),s._v("\nsystemctl status "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker状态")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机启动docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" info "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker概要信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" --help "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看总文档帮助")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" 具体命令 --help "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看具体命令帮助文档")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("镜像命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出本地主机上的镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search 某个xx镜像的名字 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull 某个xx镜像的名字 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉取镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi 某个xx镜像的名字 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除某个镜像的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" system "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像/容器所占空间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi -f 某个xx镜像的名字 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制删除删除某个镜像的")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("容器命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it ubuntu /bin/bash "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动容器并返回一个交互窗口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wang ubuntu "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动容器并返回一个交互窗口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d mysql  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台运行容器并返回容器id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#罗列出所有正在运行的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#罗列出所有的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出的话容器直接停止")]),s._v("\nctrl+p+q "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出仍在运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start 容器id或容器名 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动已停止的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart 容器id或容器名 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 容器id或容器名 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 容器id或容器名 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制停止容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器id "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除停止的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 容器id "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制删除停止的容器")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id或容器名 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新进入已经启动的容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 容器名 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test.tar "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份容器为一个镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" test.tar "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - wang/ubuntu:8.0.0 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把一个tar压缩包导入为一个镜像")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("在ubuntu里装载东西提交成一个新的镜像并复用")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit -m"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add vim"')]),s._v(" -a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wang"')]),s._v("  容器id/容器名 wang/ubuntu:1.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装tomcat&&mysql")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name mytomcat8 billygoo/tomcat8-jdk8\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.简单版安装mysql 可以使用但是删除容器后数据库数据会丢失")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:8.0\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql8.0  -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root123 -d mysql:8.0 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动mysql 并设置root密码为root123")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.挂在数据卷的方式挂载mysql 删除容器后数据不会丢失")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --privileged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true -v /root/mysql/log:/var/log/mysql -v /root/mysql/data:/var/lib/mysql -v /root/mysql/cof:/etc/msyql/conf.d -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root123 --name mysql mysql:8.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入目录cof 创建my.cnf文件插入下面代码解决乱码问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("defaultcharacterset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncollation "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 general ci character "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("redis的安装启动")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis 容器数据卷的方式创建启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /app/redis\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);