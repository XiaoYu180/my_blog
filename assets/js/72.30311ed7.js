(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{640:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("pytest配置文件可以改变pytest的运行方式，它是一个固定的文件pytest.ini文件，读取配置信息，按指定的方式去运行")]),s._v(" "),a("h2",{attrs:{id:"非test文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非test文件"}},[s._v("#")]),s._v(" 非test文件")]),s._v(" "),a("p",[s._v("pytest里面有些文件是非test文件")]),s._v(" "),a("ul",[a("li",[s._v("pytest.ini：pytest的主配置文件，可以改变pytest的默认行为")]),s._v(" "),a("li",[s._v("conftest.py：测试用例的一些fixture配置")]),s._v(" "),a("li",[a("strong",[s._v("init")]),s._v(".py：识别该文件夹为python的package包")])]),s._v(" "),a("h2",{attrs:{id:"查看pytest-ini的配置选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pytest-ini的配置选项"}},[s._v("#")]),s._v(" 查看pytest.ini的配置选项")]),s._v(" "),a("p",[s._v("cmd执行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest --help\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("找到这部分内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ini-options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the first pytest.ini"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("tox.ini"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("setup.cfg "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" found:\n\n  markers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("linelist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   markers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" functions\n  empty_parameter_set_mark "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default marker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" empty parametersets\n  norecursedirs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": directory patterns to avoid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" recursion\n  testpaths "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":     directories to search "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tests when no files or directories are given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line.\n  usefixtures "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   list of default fixtures to be used with this project\n  python_files "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  glob-style "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" patterns "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Python "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" module discovery\n  python_classes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        prefixes or glob names "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Python "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" class discovery\n  python_functions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        prefixes or glob names "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Python "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" and method discovery\n  disable_test_id_escaping_and_forfeit_all_rights_to_community_support "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        disable string escape non-ascii characters, might cause unwanted side effects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use at your own\n                        risk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console_output_style "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        console output: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classic"')]),s._v(", or with additional progress information "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"progress"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("percentage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  xfail_strict "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  default "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the strict parameter of xfail markers when not given explicitly "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: False"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  enable_assertion_pass_hook "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Enables the pytest_assertion_pass hook.Make sure to delete any previously generated pyc cache\n                        files.\n  junit_suite_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Test suite name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" JUnit report\n  junit_logging "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Write captured log messages to JUnit report: one of no"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("system-out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("system-err"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("out-err"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all\n  junit_log_passing_tests "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Capture log information "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" passing tests to JUnit report:\n  junit_duration_report "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Duration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" to report: one of total"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("call\n  junit_family "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Emit XML "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" schema: one of legacy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xunit1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xunit2\n  doctest_optionflags "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        option flags "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" doctests\n  doctest_encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        encoding used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" doctest files\n  cache_dir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   cache directory path.\n  filterwarnings "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("linelist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Each line specifies a pattern "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" warnings.filterwarnings. Processed after -W/--pythonwarnings.\n  log_print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":     default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --no-print-logs\n  log_level "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-level\n  log_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-format\n  log_date_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-date-format\n  log_cli "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" log display during "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("also known as "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live logging"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  log_cli_level "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-cli-level\n  log_cli_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-cli-format\n  log_cli_date_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-cli-date-format\n  log_file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":    default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-file\n  log_file_level "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-file-level\n  log_file_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-file-format\n  log_file_date_format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-file-date-format\n  log_auto_indent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        default value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --log-auto-indent\n  faulthandler_timeout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        Dump the traceback of all threads "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" takes "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than TIMEOUT seconds to finish. Not\n                        available on Windows.\n  addopts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":       extra "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line options\n  minversion "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  minimally required pytest version\n  rsyncdirs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pathlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": list of "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" paths to be rsynced "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" remote distributed testing.\n  rsyncignore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pathlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        list of "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" glob-style paths to be ignored "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" rsyncing.\n  looponfailroots "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pathlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n                        directories to check "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" changes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br")])]),a("h2",{attrs:{id:"pytest-ini应该放哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytest-ini应该放哪里"}},[s._v("#")]),s._v(" pytest.ini应该放哪里？")]),s._v(" "),a("p",[s._v("就放在项目根目录下 ，不要乱放，不要乱起其他名字")]),s._v(" "),a("p",[a("strong",[s._v("接下来讲下常用的配置项")])]),s._v(" "),a("h2",{attrs:{id:"marks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marks"}},[s._v("#")]),s._v(" marks")]),s._v(" "),a("p",[s._v("**作用：**测试用例中添加了 @pytest.mark.webtest 装饰器，如果不添加marks选项的话，就会报warnings")]),s._v(" "),a("p",[s._v("**格式：**list列表类型")]),s._v(" "),a("p",[a("strong",[s._v("写法：")])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("markers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n    weibo: this is weibo page\n    toutiao: toutiao\n    xinlang: xinlang\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"xfail-strict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xfail-strict"}},[s._v("#")]),s._v(" xfail_strict")]),s._v(" "),a("p",[s._v("**作用：**设置xfail_strict = True可以让那些标记为@pytest.mark.xfail但实际通过显示XPASS的测试用例被报告为失败")]),s._v(" "),a("p",[s._v("**格式：**True 、False（默认），1、0")]),s._v(" "),a("p",[a("strong",[s._v("写法：")])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mark标记说明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("markers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n    weibo: this is weibo page\n    toutiao: toutiao\n    xinlang: xinlang\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("xfail_strict")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("True")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("具体代码栗子")])]),s._v(" "),a("p",[s._v("未设置 xfail_strict = True 时，测试结果显示XPASS")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@pytest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xfail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test_case1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" b  \n  \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("collecting ... collected 1 item")]),s._v(" "),a("p",[s._v("02断言异常.py::test_case1 XPASS [100%]")]),s._v(" "),a("p",[s._v("============================= 1 xpassed in 0.02s ==============================")]),s._v(" "),a("p",[s._v("已设置 xfail_strict = True 时，测试结果显示failed")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("collecting ... collected 1 item\n\n02断言异常.py::test_case1 FAILED                                         [100%]\n02断言异常.py:54 (test_case1)\n[XPASS(strict)] \n\n================================== FAILURES ===================================\n_________________________________ test_case1 __________________________________\n[XPASS(strict)] \n=========================== short test summary info ===========================\nFAILED 02断言异常.py::test_case1\n============================== 1 failed in 0.02s ==============================\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"addopts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addopts"}},[s._v("#")]),s._v(" "),a("strong",[s._v("addopts")])]),s._v(" "),a("p",[s._v("**作用：**addopts参数可以更改默认命令行选项，这个当我们在cmd输入一堆指令去执行用例的时候，就可以用该参数代替了，省去重复性的敲命令工作")]),s._v(" "),a("p",[s._v("**比如：**想测试完生成报告，失败重跑两次，一共运行两次，通过分布式去测试，如果在cmd中写的话，命令会很长")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pytest -v --rerun"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("report.html --self-contained-html -n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("每次都这样敲不太现实，addopts就可以完美解决这个问题")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mark")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("markers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n    weibo: this is weibo page\n    toutiao: toutiao\n    xinlang: xinlang\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("xfail_strict")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("True")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令行参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("addopts")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("-v --reruns=1 --count=2 --html=reports.html --self-contained-html -n=auto")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("strong",[s._v("加了addopts之后，我们在cmd中只需要敲pytest就可以生效了！！")])]),s._v(" "),a("h2",{attrs:{id:"log-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-cli"}},[s._v("#")]),s._v(" log_cli")]),s._v(" "),a("p",[s._v("**作用：**控制台实时输出日志")]),s._v(" "),a("p",[s._v("**格式：**log_cli=True 或False（默认），或者log_cli=1 或 0")]),s._v(" "),a("h3",{attrs:{id:"log-cli-0的运行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-cli-0的运行结果"}},[s._v("#")]),s._v(" log_cli=0的运行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415100511883-1706958706.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"log-cli-1的运行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-cli-1的运行结果"}},[s._v("#")]),s._v(" log_cli=1的运行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415100540480-1964956329.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),a("p",[s._v("很明显，加了log_cli=1之后，可以清晰看到哪个package下的哪个module下的哪个测试用例是否passed还是failed；")]),s._v(" "),a("p",[a("strong",[s._v("所以平时测试代码是否有问题的情况下推荐加！！！但如果拿去批量跑测试用例的话不建议加，谁知道会不会影响运行性能呢？")])]),s._v(" "),a("h2",{attrs:{id:"norecursedirs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#norecursedirs"}},[s._v("#")]),s._v(" norecursedirs")]),s._v(" "),a("p",[a("strong",[s._v("作用："),a("strong",[s._v("pytest 收集测试用例时，会递归遍历所有子目录，包括某些你明知道没必要遍历的目录，遇到这种情况，可以使用 norecursedirs 参数简化 pytest 的搜索工作")]),s._v("【还是挺有用的！！！】")])]),s._v(" "),a("p",[a("strong",[s._v("默认设置：")]),s._v(" norecursedirs = .* build dist CVS _darcs {arch} *.egg")]),s._v(" "),a("p",[s._v("**正确写法：**多个路径用空格隔开")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("norecursedirs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v(".* build dist CVS _darcs {arch} *.egg venv src resources log report util")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"更改测试用例收集规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改测试用例收集规则"}},[s._v("#")]),s._v(" 更改测试用例收集规则")]),s._v(" "),a("p",[s._v("pytest默认的测试用例收集规则")]),s._v(" "),a("ul",[a("li",[s._v("文件名以 test_*.py 文件和 *_test.py")]),s._v(" "),a("li",[s._v("以  test_ 开头的函数")]),s._v(" "),a("li",[s._v("以  Test 开头的类，不能包含 "),a("strong",[s._v("init")]),s._v(" 方法")]),s._v(" "),a("li",[s._v("以  test_ 开头的类里面的方法")])]),s._v(" "),a("p",[s._v("我们是可以修改或者添加这个用例收集规则的；当然啦，是建议在原有的规则上添加的，如下配置")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("pytest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("test_*  *_test  test*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_classes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Test*   test*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("python_functions")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("test_*  test*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("本文转自 "),a("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12702294.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/poloyy/p/12702294.html"),a("OutboundLink")],1),s._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=e.exports}}]);