(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{562:function(s,t,n){s.exports=n.p+"assets/img/enable-successful.4f65f373.jpg"},563:function(s,t,n){s.exports=n.p+"assets/img/permissive-mode.a4990a0b.jpg"},564:function(s,t,n){s.exports=n.p+"assets/img/status-of-selinux.b5a61425.jpg"},565:function(s,t,n){s.exports=n.p+"assets/img/status-of-selinux-16637536963807.b5a61425.jpg"},679:function(s,t,n){"use strict";n.r(t);var e=n(29),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("SELinux是Linux内核中内置的强制性访问控制（MAC）强制程序，它限制了漏洞可能对系统造成威胁的单个服务的特权。没有SELinux的CentOS系统依赖其所有特权软件应用程序的配置，单个错误配置可能会损害整个系统。CentOS 7如何关闭SELinux？本文将为CentOS 7关闭SELinux命令，仅供大家参考。")]),s._v(" "),e("p",[e("strong",[s._v("一、为什么禁用SELinux？")])]),s._v(" "),e("p",[s._v("并非所有应用程序都支持SELinux。因此，SELinux可以在常规使用和安装软件包的过程中终止必要的过程。在这种情况下，我们建议您关闭此服务。")]),s._v(" "),e("p",[s._v("先决条件：")]),s._v(" "),e("p",[s._v("使用"),e("strong",[s._v("sudo")]),s._v("特权访问用户帐户")]),s._v(" "),e("p",[s._v("访问终端/命令行")]),s._v(" "),e("p",[s._v("基于RHEL的系统，例如CentOS 7")]),s._v(" "),e("p",[s._v("文本编辑器，例如nano或vim")]),s._v(" "),e("p",[e("strong",[s._v("二、在CentOS上关闭SELinux的步骤")])]),s._v(" "),e("p",[s._v("1、检查SELinux状态")]),s._v(" "),e("p",[s._v("默认情况下，CentOS和大多数其他基于RHEL的系统上启用SELinux服务。但是，您的系统可能并非如此。首先使用以下命令检查系统上SELinux的状态：")]),s._v(" "),e("div",{staticClass:"language-output line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sestatus \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("下面的示例输出表明SELinux已启用，状态显示服务处于强制模式。")]),s._v(" "),e("p",[e("img",{attrs:{src:n(562),alt:"检查SELinux状态"}})]),s._v(" "),e("p",[s._v("SELinux可能会阻止应用程序的正常运行。如果出现以下情况，该服务将拒绝访问：")]),s._v(" "),e("ul",[e("li",[s._v("文件标签错误。")]),s._v(" "),e("li",[s._v("不兼容的应用程序尝试访问禁止的文件。")]),s._v(" "),e("li",[s._v("服务在错误的安全策略下运行。")]),s._v(" "),e("li",[s._v("检测到入侵。")])]),s._v(" "),e("p",[s._v("如果您发现服务运行不正常，请检查SELinux日志文件，日志位于/var/log/audit/audit.log中，大多数常见的日志消息都标有“ AVC”。如果找不到任何日志，请尝试查看/ var / log / messages。如果auditd守护程序未运行，则系统在该文件中写入日志。")]),s._v(" "),e("p",[e("strong",[s._v("2、停用SELinux")])]),s._v(" "),e("p",[e("strong",[s._v("（1）、暂时停用SELinux")])]),s._v(" "),e("p",[s._v("要临时禁用SELinux，请在终端中键入以下命令：")]),s._v(" "),e("div",{staticClass:"language-output line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo setenforce 0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在sudo setenforce 0中，可以使用宽松的而不是0。")]),s._v(" "),e("p",[s._v("此命令将SELinux模式从目标更改为许可。")]),s._v(" "),e("p",[e("img",{attrs:{src:n(563),alt:"CentOS 7关闭SELinux命令"}})]),s._v(" "),e("p",[s._v("在许可模式下，服务处于活动状态并审核所有操作。但是，它不执行任何安全策略，系统记录AVC消息。")]),s._v(" "),e("p",[s._v("该更改仅在下一次重新启动之前有效。要永久关闭SELinux，请参阅本文的下一部分。")]),s._v(" "),e("p",[e("strong",[s._v("（2）、永久禁用SELinux")])]),s._v(" "),e("p",[s._v("要永久禁用该服务，请使用文本编辑器（例如vim或nano）并按照以下说明编辑/ etc / sysconfig / selinux文件。")]),s._v(" "),e("p",[s._v("打开/ etc / sysconfig / selinux文件，我们将使用vim。")]),s._v(" "),e("p",[s._v("输入以下命令以打开文件：")]),s._v(" "),e("div",{staticClass:"language-output line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo vi /etc/sysconfig/selinux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将SELINUX = enforcing指令更改为SELINUX = disabled。")]),s._v(" "),e("p",[e("img",{attrs:{src:n(564),alt:"CentOS 7关闭SELinux命令"}})]),s._v(" "),e("p",[s._v("保存编辑的文件。")]),s._v(" "),e("p",[e("strong",[s._v("3、重新启动CentOS以保存更改")])]),s._v(" "),e("p",[s._v("为了使更改生效，您需要使用以下命令重新引导系统：")]),s._v(" "),e("div",{staticClass:"language-output line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo shutdown -r now\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重新引导后，检查服务状态以确认SELinux已禁用。使用命令：")]),s._v(" "),e("div",{staticClass:"language-output line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sestatus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:n(565),alt:"CentOS 7关闭SELinux命令"}})]),s._v(" "),e("p",[s._v("如上图所示，状态应为禁用，系统将不会加载任何SELinux策略或写入任何AVC日志。")])])}),[],!1,null,null,null);t.default=i.exports}}]);