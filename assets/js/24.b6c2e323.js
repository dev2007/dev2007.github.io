(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{352:function(t,s,e){},353:function(t,s,e){"use strict";e(352)},355:function(t,s,e){"use strict";e.r(s);var n={name:"PostMeta",computed:{thisIndex(){return this.$posts.indexOf(this.$page)},prevPost(){const t=this.thisIndex+1;return t>this.$posts.length-1?null:this.$posts[t]},nextPost(){const t=this.thisIndex-1;return t<0?null:this.$posts[t]}}},a=(e(353),e(1)),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"post-meta main-div"},[s("section",{staticClass:"post-date clearfix"},[t.$page.createdAt?s("span",{staticClass:"create-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.createdAt} : ${t.$page.createdAt}`)+"\n    ")]):t._e(),t._v(" "),t.$page.updatedAt?s("span",{staticClass:"update-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.updatedAt} : ${t.$page.updatedAt}`)+"\n    ")]):t._e()]),t._v(" "),s("section",{staticClass:"post-links"},[t.prevPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.prevPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.prevPost} : ${t.prevPost.title}`)+"\n    ")]):t._e(),t._v(" "),t.nextPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.nextPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.nextPost} : ${t.nextPost.title}`)+"\n    ")]):t._e()],1)])}),[],!1,null,"4e23451f",null);s.default=i.exports}}]);