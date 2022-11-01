(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{678:function(e,s,a){"use strict";a.r(s);var t=a(29),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mysql查询今天、昨天、上周"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql查询今天、昨天、上周"}},[e._v("#")]),e._v(" mysql查询今天、昨天、上周")]),e._v(" "),a("p",[e._v("今天")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from 表名 where to_days(时间字段名) = to_days(now()); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("昨天")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 WHERE TO_DAYS( NOW( ) ) - TO_DAYS( 时间字段名) <= 1 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("7天")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(时间字段名)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("近30天")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(时间字段名) \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("本月")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 WHERE DATE_FORMAT( 时间字段名, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' ) \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("上一月")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 WHERE PERIOD_DIFF( date_format( now( ) , '%Y%m' ) , date_format( 时间字段名, '%Y%m' ) ) =1 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询本季度数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(now()); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询上季度数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from `ht_invoice_information` where QUARTER(create_date)=QUARTER(DATE_SUB(now(),interval 1 QUARTER)); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询本年数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from `ht_invoice_information` where YEAR(create_date)=YEAR(NOW()); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询上年数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from `ht_invoice_information` where year(create_date)=year(date_sub(now(),interval 1 year)); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询当前这周的数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now()); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询上周的数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now())-1; \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询当前月份的数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select name,submittime from enterprise  where date_format(submittime,'%Y-%m')=date_format(now(),'%Y-%m') \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查询距离当前现在6个月的数据")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select name,submittime from enterprise where submittime between date_sub(now(),interval 6 month) and now(); \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("补充")])]),e._v(" "),a("ul",[a("li",[e._v("将时间戳转换为日期")])]),e._v(" "),a("p",[e._v("​\t\tfrom_unixtime(time_stamp)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("将日期转换为时间戳")]),e._v(" "),a("p",[e._v("unix_timestamp(date)")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);