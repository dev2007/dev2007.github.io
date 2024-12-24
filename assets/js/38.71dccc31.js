(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{408:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本篇介绍GitHub Pages的一些杂项")])]),t._v(" "),s("h1",{attrs:{id:"disqus和gitalk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disqus和gitalk"}},[t._v("#")]),t._v(" Disqus和Gitalk")]),t._v(" "),s("p",[t._v("GitHub Pages搭建的博客，有时我们想要看到别人的留言。但鉴于GitHub Pages是一个静态站，不涉及动态站可用的数据存储，所以其本身是无法开发留言系统的。这个时候，第三方的留言系统就是一个比较好的选择。")]),t._v(" "),s("p",[t._v("很多Jekyll主题中都开发了留言模块，而他们一般使用的是Disqus，由于国内的网络环境，Disqus基本是不可用的。所以我们需要选择其他留言组件。")]),t._v(" "),s("p",[t._v("Gitalk是基于Git仓库的issues实现的，使用issues来存储用户留言，利用GitHub API来读取issues进行留言操作。")]),t._v(" "),s("p",[t._v("如果要使用Gitalk，按照"),s("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitalk"),s("OutboundLink")],1),t._v("官方教程配置即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/gitalk.jpg",alt:"gitalk"}})]),t._v(" "),s("ul",[s("li",[t._v("我们先创建一个git仓库用于专门保存评论的issues")]),t._v(" "),s("li",[t._v("在用户设置中为gittalk添加OAuth Apps，如下图所示：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/gitalk1.jpg",alt:"gitalk1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/gitalk2.jpg",alt:"gitalk2"}})]),t._v(" "),s("p",[t._v("如上图所示，名称任意填写，"),s("code",[t._v("Homepage URL")]),t._v("需要注意，如果用于本地调试，可以填写本地的地址，如："),s("code",[t._v("http://localhost:8181")]),t._v("这种，如果是发布后使用，请正确填写发布后的域名，如："),s("code",[t._v("http://blog.shiyueshuyi.xyz")]),t._v("。")]),t._v(" "),s("p",[t._v("需要注意的是Gitalk的配置属性中的id，由于Gitalk使用id作为Git仓库的issues label，而GitHub要求此值不得大于50。所以，直接使用url地址"),s("em",[t._v("location.pathname")]),t._v("作为id值，很大可能会超长，导致留言加载异常。")]),t._v(" "),s("p",[t._v("有一种解决方法是引入一个md5算法的js，用md5加密location.pathname，以解决id的唯一和长度要小于50的限制。")]),t._v(" "),s("blockquote",[s("p",[t._v("示例如下,我们引用一个md5的js库，然后将gitalk要使用的id使用md5函数加密。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gitalk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gitalk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clientID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'47e4a50d3acdd19c0a4c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clientSecret")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cfaeaedf2c3e16553b9e4f049422815d0888beda'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("repo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitalk-comment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("owner")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev2007'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("admin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev2007'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MD5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("distractionFreeMode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h1",{attrs:{id:"js库的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js库的使用"}},[t._v("#")]),t._v(" js库的使用")]),t._v(" "),s("p",[t._v("一般来讲，我们使用js有两种方式，一是本地网站中带有相应js的源文件，引用即可使用。二是使用互联网上专门的CDN服务提供的js文件。")]),t._v(" "),s("p",[t._v("第二种方式，我们常用"),s("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDELIVR"),s("OutboundLink")],1),t._v("。在这个网站上，我们搜索想要用的js库，然后获取dist的发布路径，引用到网站页面中即可使用。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/githubpages/js.jpg",alt:"js"}})]),t._v(" "),s("p",[s("em",[t._v("题图来源 ："),s("a",{attrs:{href:"https://unsplash.com/@doto",target:"_blank",rel:"noopener noreferrer"}},[t._v("unsplash @doto"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);