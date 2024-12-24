(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{406:function(t,s,i){"use strict";i.r(s);var a=i(1),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本篇介绍GitHub Pages自定义域名")])]),t._v(" "),s("p",[t._v("在**用GitHub Pages搭建博客（二）**中介绍到，默认的GitHub Pages域名就是仓库地址，即：")]),t._v(" "),s("blockquote",[s("p",[t._v("账号名.github.io")])]),t._v(" "),s("p",[t._v("如果我们要使用自定义域名访问GitHub Pages网站，我们需要进行相应的配置。")]),t._v(" "),s("h1",{attrs:{id:"域名服务商的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名服务商的配置"}},[t._v("#")]),t._v(" 域名服务商的配置")]),t._v(" "),s("p",[t._v("具体操作可以在域名服务商的网站是查看，以通用方法进行讲解。假设我们的自定义域名为：")]),t._v(" "),s("blockquote",[s("p",[t._v("www.shiyueshuyi.xyz")])]),t._v(" "),s("p",[t._v("GitHub Pages域名为：")]),t._v(" "),s("blockquote",[s("p",[t._v("dev200709.github.io")])]),t._v(" "),s("p",[t._v("在域名服务商网站上，我们配置解析规格CNAME，将域名shiyueshuyi.xyz指向域名dev200709.github.io，示例如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain3.jpg",alt:"域名配置3"}})]),t._v(" "),s("p",[t._v("此处 "),s("strong",[t._v("@")]),t._v(" 代表所有子域名解析都到"),s("em",[t._v("dev200709.github.io")]),t._v("，如果我们只想把子域名解析到相应网站上，我们就填写子域名名称"),s("em",[t._v("test")]),t._v("，示例如下图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain4.jpg",alt:"域名配置4"}})]),t._v(" "),s("p",[t._v("通过这个配置，就将自定义域名"),s("em",[t._v("test.shiyueshuyi.xyz")]),t._v("指向了GitHub Pages域名，但此时域名还无法使用，需要进一步在GitHub上配置。")]),t._v(" "),s("h1",{attrs:{id:"github上配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github上配置"}},[t._v("#")]),t._v(" GitHub上配置")]),t._v(" "),s("p",[t._v("点击仓库的“Settings”页签，进入设置页面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain.jpg",alt:"域名配置1"}})]),t._v(" "),s("p",[t._v('在配置页面中，找到"GitHub Pages"配置项，里面可见“Custom domain”，在这里输入你的自定义域名'),s("em",[t._v("test.shiyueshuyi.xyz")]),t._v("即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain2.jpg",alt:"域名配置2"}})]),t._v(" "),s("p",[t._v("配置后，页面将刷新显示检测状态。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain5.jpg",alt:"域名配置5"}})]),t._v(" "),s("p",[t._v("如果域名解析正确，将显示如下信息“Your site is published at "),s("em",[t._v("自定义域名")]),t._v("”。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain6.jpg",alt:"域名配置6"}})]),t._v(" "),s("p",[t._v("同时，在下方的“Enforce Https”可以选择开启，开启后，对网站的访问将只通过https链接。")]),t._v(" "),s("p",[t._v("以上配置成功后，通过自定义域名就可以访问Pags网站。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/domain7.jpg",alt:"域名配置7"}})]),t._v(" "),s("p",[s("strong",[t._v("注意！注意！注意！")])]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"/create-github-pages-fourth"}},[t._v("用GitHub Pages搭建博客（四）")]),t._v("中提到_config.yml文件中常有一个属性为自定义域名。")]),t._v(" "),s("ul",[s("li",[t._v("url")])]),t._v(" "),s("blockquote",[s("p",[t._v("url 一般是网站部署后的域名，用于访问网页时正确定位资源路径，如果涉及到自定义域名，需要在此配置，才能正确访问。")])]),t._v(" "),s("p",[t._v("如果我们按此篇介绍配置域名后，发现网站访问页面异常，出现图片链接不正确、无法加载的情况，就要检查_config.yml文件，将自定义域名加入配置中，并通过Git工具提交更新即可。")]),t._v(" "),s("p",[s("em",[t._v("题图来源 ："),s("a",{attrs:{href:"https://unsplash.com/@doto",target:"_blank",rel:"noopener noreferrer"}},[t._v("unsplash @doto"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);