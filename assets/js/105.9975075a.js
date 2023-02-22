(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{685:function(s,n,a){"use strict";a.r(n);var t=a(29),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-centos7-下nginx安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-centos7-下nginx安装"}},[s._v("#")]),s._v(" Linux(CentOS7)下Nginx安装")]),s._v(" "),a("h2",{attrs:{id:"一、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[s._v("#")]),s._v(" 一、准备工作")]),s._v(" "),a("p",[a("strong",[s._v("版本说明：")])]),s._v(" "),a("ul",[a("li",[s._v("Linux版本：CentOS 7 64位")]),s._v(" "),a("li",[s._v("Nginx版本：nginx-1.20.0")])]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装文件"}},[s._v("#")]),s._v(" 1. 下载安装文件")]),s._v(" "),a("p",[s._v("采用源码包方式安装，当然使用 yum 方式安装也可以，此处使用源码包安装。")]),s._v(" "),a("p",[s._v("进入目录(个人习惯/usr/local)，下载安装文件，如果云服务器下载速度过慢也可本地下载后上传。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.20.0.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-安装nginx所需要的依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装nginx所需要的依赖"}},[s._v("#")]),s._v(" 2. 安装Nginx所需要的依赖")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装gcc、gcc-c++")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装pcre 、zilb")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pcre*\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib*\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装openssl(若需要支持 https 协议)")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"二、安装及配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装及配置nginx"}},[s._v("#")]),s._v(" 二、安装及配置Nginx")]),s._v(" "),a("h3",{attrs:{id:"_1-安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装nginx"}},[s._v("#")]),s._v(" 1. 安装Nginx")]),s._v(" "),a("p",[s._v("1、解压安装包。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.20.0.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、为编译安装做准备，进入解压目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.20.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、为编译安装做准备。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_ssl_module --with-http_stub_status_module --with-pcre\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注:")]),s._v(" --prefix：设置安装路径。 --with-http_stub_status_module：支持nginx状态查询。 --with-http_ssl_module：支持https。 --with-pcre：为了支持rewrite重写功能，必须制定pcre。")]),s._v(" "),a("p",[s._v("4、编译安装。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、指定配置文件启动 Nginx。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在浏览器访问 ip，看到如下信息则安装成功。")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Welcome to nginx!\nIf you see this page, the nginx web server is successfully installed and working. Further configuration is required.\n\nFor online documentation and support please refer to nginx.org.\nCommercial support is available at nginx.com.\n\nThank you for using nginx.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-一些命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-一些命令"}},[s._v("#")]),s._v(" 2. 一些命令")]),s._v(" "),a("p",[s._v("修改自己的配置之后，验证配置是否正确，重启 Nginx 命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证配置是否正确")]),s._v("\n./nginx -t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果看到如下内容, 那么配置正确, 可以重启Nginx")]),s._v("\nnginx: the configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/local/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启Nginx, 之后就可以通过域名访问了, 哈哈")]),s._v("\n./nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3-nginx开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-nginx开机自启"}},[s._v("#")]),s._v(" 3. Nginx开机自启")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 新建文件\nvim /lib/systemd/system/nginx.service\n\n# 添加内容\n[Unit]\nDescription=nginx.server\nAfter=network.target\n\n[Service]\nType=forking\nPIDFILE=/var/run/nginx.pid\nExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\nExecRepload=/bin/kill -s HUP $MAINPID\nExecStop=/bin/kill -s QUIT $MAINPID\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("然后使用 "),a("code",[s._v("systemctl enable nginx.service")]),s._v(" 开启 nginx 开机自启，重启 CentOS 查看效果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nginx服务")]),s._v("\nsystemctl start nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止nginx服务")]),s._v("\nsystemctl stop nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启nginx服务")]),s._v("\nsystemctl restart nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx服务当前状态")]),s._v("\nsystemctl status nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置nginx服务开机自启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止nginx服务开机自启动")]),s._v("\nsystemctl disable nginx.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("hr"),s._v(" "),a("p",[s._v("顺便记录下配置反向代理")]),s._v(" "),a("p",[s._v("我们可以通过 "),a("strong",[s._v("proxy_pass")]),s._v(" 来配置，找到nginx配置文件 nginx.conf")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;\n    server_name  localhost;# 服务器地址或绑定域名\n\n    location / { # 访问80端口后的所有路径都转发到 proxy_pass 配置的ip中\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n           proxy_pass https://192.168.1.205; \n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("修改完配置文件，需要重启nginx")])])])}),[],!1,null,null,null);n.default=e.exports}}]);