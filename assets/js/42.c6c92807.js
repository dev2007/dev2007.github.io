(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{415:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文介绍GitHub API基础及上传文件到仓库API，并应用API将GitHub作为图床")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/rest/overview/resources-in-the-rest-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub API官方页面"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"github-api版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-api版本"}},[t._v("#")]),t._v(" GitHub API版本")]),t._v(" "),a("p",[t._v("当前版本为"),a("code",[t._v("v3")]),t._v("，官方推荐在请求头中显示添加版本标识。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Accept: application/vnd.github.v3+json\n")])])]),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/version.jpg",alt:"api版本"}})]),t._v(" "),a("h2",{attrs:{id:"请求认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求认证"}},[t._v("#")]),t._v(" 请求认证")]),t._v(" "),a("ul",[a("li",[t._v("基础认证|Basic authentication")])]),t._v(" "),a("p",[t._v("shell示例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v(" https://api.github.com\n")])])]),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/auth.jpg",alt:"api认证"}})]),t._v(" "),a("ul",[a("li",[t._v("令牌认证|OAuth2 token (sent in a header)")])]),t._v(" "),a("p",[t._v("shell示例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: token OAUTH-TOKEN"')]),t._v(" https://api.github.com\n")])])]),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/token.jpg",alt:"api token"}})]),t._v(" "),a("h2",{attrs:{id:"主api-获取所有api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主api-获取所有api"}},[t._v("#")]),t._v(" 主API，获取所有API")]),t._v(" "),a("p",[a("code",[t._v("请求API：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET https://api.github.com\n")])])]),a("blockquote",[a("p",[t._v("这个API返回常见API")])]),t._v(" "),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/basicapi.jpg",alt:"basic api response"}})]),t._v(" "),a("h2",{attrs:{id:"公开仓库查询api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公开仓库查询api"}},[t._v("#")]),t._v(" 公开仓库查询API")]),t._v(" "),a("p",[a("code",[t._v("请求API:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET https://api.github.com/user/repos\n")])])]),a("p",[a("code",[t._v("header：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Accept")]),t._v(" "),a("td",[t._v("application/vnd.github.v3+json")])]),t._v(" "),a("tr",[a("td",[t._v("Authorization")]),t._v(" "),a("td",[t._v("token"),a("code",[t._v("空格")]),a("em",[t._v("oauth_token")])])])])]),t._v(" "),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/list_repo.jpg",alt:"list repo"}})]),t._v(" "),a("h2",{attrs:{id:"仓库创建api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库创建api"}},[t._v("#")]),t._v(" 仓库创建API")]),t._v(" "),a("p",[a("code",[t._v("请求API：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("POST https://api.github.com/user/repos\n")])])]),a("p",[a("code",[t._v("headers：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Accept : application/vnd.github.v3+json")])]),t._v(" "),a("li",[a("p",[t._v("Authorization : token"),a("code",[t._v("空格")]),a("em",[t._v("oauth_token")]),t._v("|")])])]),t._v(" "),a("p",[a("code",[t._v("请求体|Request body：")])]),t._v(" "),a("blockquote",[a("p",[t._v("name，代表仓库名，必须。其他的可选参数参看"),a("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#create-a-repository-for-the-authenticated-user",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imgs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/create_repo.jpg",alt:"create repo"}})]),t._v(" "),a("h2",{attrs:{id:"为仓库上传-更新文件api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为仓库上传-更新文件api"}},[t._v("#")]),t._v(" 为仓库上传/更新文件API")]),t._v(" "),a("p",[a("code",[t._v("请求API：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PUT https://api.github.com/repos/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/imgs/contents/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("user：仓库所属用户名")]),t._v(" "),a("li",[t._v("path：上传文件存放的路径，如果文件夹不存在，会自动创建")]),t._v(" "),a("li",[t._v("filename：上传的文件名称")])]),t._v(" "),a("p",[a("code",[t._v("请求体|Request body：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交说明"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base64编码的文件内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件的blob sha"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("content：文件内容的base64编码后的字符串")])]),t._v(" "),a("blockquote",[a("p",[t._v("sha：文件更新或删除时必填，先用GET接口查询文件信息，可在响应体中获取")])]),t._v(" "),a("p",[t._v("Postman示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/upload.jpg",alt:"upload file"}})]),t._v(" "),a("h2",{attrs:{id:"从仓库删除文件api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从仓库删除文件api"}},[t._v("#")]),t._v(" 从仓库删除文件API")]),t._v(" "),a("p",[a("code",[t._v("请求API：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("DELETE https://api.github.com/repos/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/imgs/contents/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("user：仓库所属用户名")]),t._v(" "),a("li",[t._v("path：上传文件存放的路径，如果文件夹不存在，会自动创建")]),t._v(" "),a("li",[t._v("filename：上传的文件名称")])]),t._v(" "),a("p",[a("code",[t._v("请求体|Request body：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交说明"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件的blob sha"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("sha：文件更新或删除时必填，先用GET接口查询文件信息，可在响应体中获取")])]),t._v(" "),a("h2",{attrs:{id:"token的生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token的生成"}},[t._v("#")]),t._v(" token的生成")]),t._v(" "),a("p",[t._v("token需要在GitHub网站上右上角"),a("code",[t._v("Settings")]),t._v("中去生成，生成后需要立即保存。")]),t._v(" "),a("ul",[a("li",[t._v("点击"),a("code",[t._v("Settings")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/setting.jpg",alt:"setting"}})]),t._v(" "),a("ul",[a("li",[t._v("点击"),a("code",[t._v("Developer settings")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/setting2.jpg",alt:"setting2"}})]),t._v(" "),a("ul",[a("li",[t._v("点击"),a("code",[t._v("Personal access tokens")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/setting3.jpg",alt:"setting3"}})]),t._v(" "),a("ul",[a("li",[t._v("点击"),a("code",[t._v("Generate new token")]),t._v("，生成token并记录")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/setting4.jpg",alt:"setting4"}})]),t._v(" "),a("h2",{attrs:{id:"仓库作为图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库作为图床"}},[t._v("#")]),t._v(" 仓库作为图床")]),t._v(" "),a("p",[t._v("仓库要想作为图床，图床的前提是文件内容能外链使用，需要将其作为GitHub Pages才能实现。")]),t._v(" "),a("p",[t._v("将仓库作为图床的整体操作步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("1 创建一个仓库，将添加一个index.html")])]),t._v(" "),a("p",[t._v("由于我们要将此仓库作为图床，所以虽不需要静态网站相关内容，但为了GitHub能将此仓库识别为GitHub Pages，还是至少需要一个index.html在仓库中。（当然，你也可以找寻一个静态网站模板放进仓库）")]),t._v(" "),a("p",[t._v("index.html示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width-device-width,initial-scale-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Images"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/index.jpg",alt:"repo index"}})]),t._v(" "),a("ul",[a("li",[t._v("2 将此仓库配置为GitHub Pages")])]),t._v(" "),a("p",[t._v("相关配置可以参看"),a("a",{attrs:{href:"/multi-project-github-pages"}},[t._v("多项目部署为同一个GitHub Pages")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/pages.jpg",alt:"pages"}})]),t._v(" "),a("p",[t._v("开启GitHub Pages成功后，当前仓库文件就可通过GitHub Pages地址访问，图中示例为"),a("code",[t._v("https://dev2007.github.io/imgs")])]),t._v(" "),a("ul",[a("li",[t._v("3 将图片上传到仓库中")])]),t._v(" "),a("blockquote",[a("p",[t._v("{仓库}/{路径}/{文件名}")])]),t._v(" "),a("p",[t._v("示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/testimg.jpg",alt:"repo img"}})]),t._v(" "),a("ul",[a("li",[t._v("4 获取图片链接，使用链接")])]),t._v(" "),a("blockquote",[a("p",[t._v("链接格式为：https://{Pages域名}/{仓库}/{路径}/{文件名}")])]),t._v(" "),a("p",[t._v("示例的地址为："),a("code",[t._v("https://dev2007.github.io/imgs/myfolder/panda.png")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dev2007.github.io/imgs/myfolder/panda.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例图床图片"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("示例如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/github/pagesimg.jpg",alt:"pages img"}})]),t._v(" "),a("ul",[a("li",[t._v("5 使用自定义域名，配置好后"),a("code",[t._v("Pages域名")]),t._v("换为自定义域名即可")])]),t._v(" "),a("p",[t._v("相关GitHub Pages配置域名，可参看"),a("a",{attrs:{href:"/create-github-pages-fifth"}},[t._v("用GitHub Pages搭建博客（五）")])]),t._v(" "),a("ul",[a("li",[t._v("6 CDN加速")])]),t._v(" "),a("p",[t._v("可以使用Vercel进行加速，可参看"),a("a",{attrs:{href:"/create-github-pages-sixth"}},[t._v("用GitHub Pages搭建博客（六）")])]),t._v(" "),a("p",[a("em",[t._v("题图来源 ："),a("a",{attrs:{href:"https://unsplash.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("unsplash"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);