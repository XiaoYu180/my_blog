(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{564:function(s,e,a){s.exports=a.p+"assets/img/image-20220713110807533.052cbf5f.png"},681:function(s,e,a){"use strict";a.r(e);var t=a(29),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos安装后的配置工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos安装后的配置工作"}},[s._v("#")]),s._v(" centos安装后的配置工作")]),s._v(" "),t("h2",{attrs:{id:"修改网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改网络配置"}},[s._v("#")]),s._v(" 修改网络配置")]),s._v(" "),t("p",[s._v("在配置网络之前，我们需要知道centos的网卡名称")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(564),alt:"image-20220713110807533"}})]),s._v(" "),t("p",[s._v("修改网卡配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens160\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("（1）bootproto=static")]),s._v(" "),t("p",[s._v("（2）onboot=yes")]),s._v(" "),t("p",[s._v("（3）在最后加上几行，IP地址、子网掩码、网关、dns服务器")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IPADDR=192.168.1.194\nNETMASK=255.255.255.0\nGATEWAY=192.168.1.254\nDNS1=114.114.114.114\nDNS2=8.8.8.8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("（4）重启网络服务")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("systemctl restart network\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"更新yum源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新yum源"}},[s._v("#")]),s._v(" 更新yum源")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("先安装 "),t("code",[s._v("wget")])])]),s._v(" "),t("li",[t("p",[s._v("备份原来的yum源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /etc/yum.repos.d\nls\nmv CentOS-Base.repo CentOS-Base.repo_bak\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("设置源为阿里云")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("阿里云yum源：http://mirrors.aliyun.com/repo/Centos-7.repo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\nyum clean all\nyum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);