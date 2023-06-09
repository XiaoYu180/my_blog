(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{566:function(s,a,n){s.exports=n.p+"assets/img/image-20220801191952476.bafb3635.png"},567:function(s,a,n){s.exports=n.p+"assets/img/image-20220803193928149.296a4a6c.png"},684:function(s,a,n){"use strict";n.r(a);var t=n(29),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("OpenLDAP是一款轻量级目录访问协议(Lightweight Directory Access Protocol,LDAP)，属于开源集中账号管理架构的实现，支持众多系统版本。")])]),s._v(" "),t("p",[s._v("本文采用docker容器的方式安装运行openldap镜像。使用docker安装方式配置简单，易用等特点。")]),s._v(" "),t("h2",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker依赖包")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置国内阿里云镜像仓库，解决镜像下载慢的问题。")]),s._v("\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo   \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker-ce服务")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker命令")]),s._v("\nsystemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到开机启动项")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"拉取openldap与phpldapadmin镜像到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取openldap与phpldapadmin镜像到本地"}},[s._v("#")]),s._v(" 拉取openldap与phpldapadmin镜像到本地")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull osixia/openldap\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull osixia/phpldapadmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"运行镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像"}},[s._v("#")]),s._v(" 运行镜像")]),s._v(" "),t("h3",{attrs:{id:"通过docker-run命令运行openldap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过docker-run命令运行openldap"}},[s._v("#")]),s._v(" 通过docker run命令运行openldap")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("389")]),s._v(":389 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("636")]),s._v(":636 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name myldap_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--network bridge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--hostname codesweet.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_ORGANISATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"codesweet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_DOMAIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"codesweet.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_ADMIN_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--volume /path/to/certificates:/container/service/slapd/assets/certs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_TLS_CRT_FILENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ldap.crt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_TLS_KEY_FILENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ldap.key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_TLS_CA_CRT_FILENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ca.crt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--detach osixia/openldap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("blockquote",[t("p",[s._v("注释如下:\n-p 389:389 \\ TCP/IP访问端口\n-p 636:636 \\ SSL连接端口\n–name myldap_name 容器名称为myldap_name\n–network bridge 连接默认的bridge网络\n–hostname openldap-host 设置容器主机名称为 openldap-host\n–env LDAP_ORGANISATION=“example” 配置LDAP组织名称\n–env LDAP_DOMAIN=“example.com” 配置LDAP域名\n–env LDAP_ADMIN_PASSWORD=“123456” 配置LDAP密码")])]),s._v(" "),t("h3",{attrs:{id:"通过docker-run命令运行osixia-phpldapadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过docker-run命令运行osixia-phpldapadmin"}},[s._v("#")]),s._v(" 通过docker run命令运行osixia/phpldapadmin")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--privileged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8989")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name myldapadmin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PHPLDAPADMIN_HTTPS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PHPLDAPADMIN_LDAP_HOSTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.205 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--detach osixia/phpldapadmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("blockquote",[t("p",[s._v("注释如下:\n-d 分离模式启动容器\n–privileged 特权模式启动(使用该参数，container内的root拥有真正的root权限。否则，container内的root只是外部的一个普通用户权限。)\n–env PHPLDAPADMIN_HTTPS=false 禁用HTTPS\n–env PHPLDAPADMIN_LDAP_HOSTS =172.16.109.91 配置openLDAP的IP或者域名，我安装ldap机器IP就是172.16.109.91。")])]),s._v(" "),t("p",[s._v("通过访问phpldapadmin管理地址 http://192.168.1.205:8989 进行登录与管理，登陆界面如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:n(566),alt:"image-20220801191952476"}})]),s._v(" "),t("p",[s._v("点击login登录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Login DN：cn=admin,dc=codesweet.com,dc=com\nPassword：123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以配合"),t("code",[s._v("LDAP Admin")]),s._v(" 工具管理LDAP。")]),s._v(" "),t("h2",{attrs:{id:"疑难杂症"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#疑难杂症"}},[s._v("#")]),s._v(" 疑难杂症")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/osixia/docker-openldap#use-your-own-certificate",target:"_blank",rel:"noopener noreferrer"}},[s._v("仓库地址"),t("OutboundLink")],1)]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("我发现了一个很坑的问题！")]),s._v(" "),t("p",[s._v("用镜像里面自动生成的TLS证书，会出现 "),t("code",[s._v("/etc/my_init.d/slapd failed with status 80")]),s._v(" 这样的问题。这问题足足搞了我两天...")]),s._v(" "),t("p",[s._v("经大佬和issues指点，使用 "),t("code",[s._v("gnutls")]),s._v("生成证书，才解决了这个问题。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(567),alt:"image-20220803193928149"}})]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pages/102a52/"}},[s._v("上述生成证书方法")])],1),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("一些ldap常用的命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ldapwhoami -H ldap://localhost -x -ZZ   \n\t\nldapsearch -x -D "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=admin,dc=codesweet,dc=com"')]),s._v(" -H ldaps://localhost -W -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dc=codesweet;dc=com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);