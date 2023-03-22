(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{554:function(s,t,a){s.exports=a.p+"assets/img/20181024155633447.a1c743e0.png"},555:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2023-02-22_11-58-25.f4c4e137.png"},556:function(s,t,a){s.exports=a.p+"assets/img/20210311112106630.8f82b2a8.png"},557:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2023-02-22_14-14-31.d2319a8c.png"},671:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"首先使用navcat连接sql-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#首先使用navcat连接sql-server"}},[s._v("#")]),s._v(" 首先使用navcat连接SQL Server")]),s._v(" "),n("h3",{attrs:{id:"安装驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装驱动"}},[s._v("#")]),s._v(" 安装驱动")]),s._v(" "),n("p",[s._v("navcat本身不能连接SQL Server，但是navcat提供了连接的Sqlserver的驱动必须先安装驱动才可以使用navcat连接SQL Server。"),n("br"),s._v("\n在navicat目录下找到对应驱动，点击安装即可， 安装过程中设置为全部允许安装\n"),n("img",{attrs:{src:a(554),alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"测试连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试连接"}},[s._v("#")]),s._v(" 测试连接")]),s._v(" "),n("p",[s._v("然后去连接你的数据库就可以了"),n("br"),s._v(" "),n("img",{attrs:{src:a(555),alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"其他问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[s._v("#")]),s._v(" 其他问题")]),s._v(" "),n("p",[s._v("其他问题： Could not open a connection to SQL Server [53]"),n("br"),s._v("\n客户端是在尝试用named pipe方式访问数据库，需要用tcp的方式"),n("br"),s._v("\n先检查确认侦听的tcp端口，客户端上执行telnet ip port 确认连通性OK"),n("br"),s._v("\n客户端上CMD界面执行一下cliconfg，会弹出如下窗口把TCP/IP加到启用列表中，然后应用并确定。"),n("br"),s._v(" "),n("img",{attrs:{src:a(556),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"springboot连接sql-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot连接sql-server"}},[s._v("#")]),s._v(" springboot连接SQL Server")]),s._v(" "),n("h3",{attrs:{id:"_1-maven配置驱动连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven配置驱动连接"}},[s._v("#")]),s._v(" 1.maven配置驱动连接")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--   SqlServer 驱动 --\x3e")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.microsoft.sqlserver"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mssql-jdbc"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("8.2.1.jre11"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_2-jdbc连接数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdbc连接数据库"}},[s._v("#")]),s._v(" 2. jdbc连接数据库")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DriverManager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloWorld")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" driverName "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.microsoft.sqlserver.jdbc.SQLServerDriver"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" dbURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:sqlserver://localhost:1433;DatabaseName=Student"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据库名称")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userName "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sa"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据库账号")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userPwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据库密码")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("forName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("driverName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" dbConn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DriverManager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dbURL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" userName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" userPwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数据库连接成功!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printStackTrace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数据库连接失败!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"com-microsoft-sqlserver-jdbc-sqlserverexception-驱动程序无法通过使用安全套接字层-ssl-加密与-sql-server-建立-安全连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#com-microsoft-sqlserver-jdbc-sqlserverexception-驱动程序无法通过使用安全套接字层-ssl-加密与-sql-server-建立-安全连接"}},[s._v("#")]),s._v(" com.microsoft.sqlserver.jdbc.SQLServerException: 驱动程序无法通过使用安全套接字层(SSL)加密与 SQL Server 建立 安全连接")]),s._v(" "),n("h3",{attrs:{id:"_1-问题描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题描述"}},[s._v("#")]),s._v(" 1.问题描述：")]),s._v(" "),n("p",[s._v("在搭建完项目之后，然后使用vpn能连接上目标数据库，并没有发生错误。但是当将服务部署到服务器上之后就发生了如上的错误。")]),s._v(" "),n("h3",{attrs:{id:"_2-问题分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题分析"}},[s._v("#")]),s._v(" 2.问题分析")]),s._v(" "),n("p",[s._v("1.首先看问题描述，发现是驱动加密与SqlServer出现了问题。说明可能是SqlServer数据库驱动与对方的数据库版本不一致导致的。但是根据我实际操作在我本地使用该驱动并没有出现报错，部署到服务器上才出现报错，这说明并不是数据库驱动和数据库版本不一致导致的。"),n("br"),s._v("\n2.后面去百度发现SqlServer数据库驱动必须和jdk的版本对应上，然后我在本地的jdk和服务器上的jdk都是同样的1.8版本，但是具体的小版本不一样。这个问题排除。"),n("br"),s._v("\n3. 在分析这个报错，发现是TLS10这个协议无法向上兼容TLS12这个协议的问题。")]),s._v(" "),n("h3",{attrs:{id:"_3-问题确定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-问题确定"}},[s._v("#")]),s._v(" 3.问题确定")]),s._v(" "),n("p",[s._v("TLS10这个协议无法向上兼容TLS12这个协议。")]),s._v(" "),n("h3",{attrs:{id:"_4-问题解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-问题解决方案"}},[s._v("#")]),s._v(" 4.问题解决方案")]),s._v(" "),n("p",[s._v("注意这里是linux下的解决具体方案，在window下自己去找jdk\\jre\\lib\\security这个目录。"),n("br"),s._v("\n1.找到自己的jdk安装目录命令。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2.在java.security文档中搜索jdk.tls.disabledAlgorithms"),n("br"),s._v("\n删除标红的内容（TLSv1、TLSv1.1、3DES_EDE_CBC）"),n("br"),s._v(" "),n("img",{attrs:{src:a(557),alt:"img"}}),s._v("\n3.重启服务\n重启服务就解决报错了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);