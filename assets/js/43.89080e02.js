(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{414:function(t,e,s){"use strict";s.r(e);var i=s(1),r=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在之前的文章"),e("strong",[t._v("GitHub Pages")]),t._v("系列中，介绍了使用GitHub Pages搭建博客。但实际运行一段时间后发现，文章显示的时间是UTC时间，而不是北京时间。")]),t._v(" "),e("p",[t._v("显示效果如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/article/showzone.jpg",alt:"UTC时间"}})]),t._v(" "),e("p",[t._v("实际文章中的时间配置为东八区，北京时间。")]),t._v(" "),e("p",[t._v("如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/article/sourcezone.jpg",alt:"文章时间"}})]),t._v(" "),e("p",[t._v("检查模板可知，我们使用的是jekyll来编译网站，而jekyll使用了Liquid来进行日期格式化。然而liquid并没有直接配置时区的地方。liquid命令介绍："),e("a",{attrs:{href:"https://liquid.bootcss.com/filters/date/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Liquid"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/article/liquid.jpg",alt:"liquid日期"}})]),t._v(" "),e("p",[t._v("通过搜索jekyll相关资料得知，时区配置，是jekyll的属性配置，而不是Liquid格式化时间时进行。")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("_config.yml")]),t._v("文件中添加时区配置：")]),t._v(" "),e("p",[t._v("{% highlight shell %}\ntimezone: Asia/Shanghai\n{% endhighlight %}")]),t._v(" "),e("p",[t._v("如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/article/config.jpg",alt:"配置时区"}})]),t._v(" "),e("p",[t._v("如果你需要其他时区，配置其他时区即可。")]),t._v(" "),e("p",[t._v("按以上配置后，提交GitHub仓库编译后，显示的日期就是配置的北京时间了。")]),t._v(" "),e("p",[t._v("如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/article/modifyzone.jpg",alt:"显示北京时间"}})]),t._v(" "),e("p",[e("em",[t._v("题图来源 ："),e("a",{attrs:{href:"https://unsplash.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("unsplash"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);