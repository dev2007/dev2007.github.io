(window.webpackJsonp=window.webpackJsonp||[]).push([[5,22],{332:function(t,n,e){},333:function(t,n,e){"use strict";e.r(n);var s=e(13),a={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:(t,{props:{name:n,icon:e,size:a}})=>t("span",{class:"post-tag",attrs:{title:n}},[t(s.default,{class:"post-tag-icon",attrs:{name:e,size:a}}),t("span",{class:"post-tag-name"},[n])])},i=(e(334),e(1)),o=Object(i.a)(a,void 0,void 0,!1,null,null,null);n.default=o.exports},334:function(t,n,e){"use strict";e(332)},393:function(t,n,e){"use strict";e.r(n);var s={name:"Categories",components:{IconTag:e(333).default}},a=e(1),i=Object(a.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"categories"},[t("div",{staticClass:"main-div"},[t("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,(function(n){return t("RouterLink",{key:n.name,attrs:{to:n.path}},[t("IconTag",{attrs:{icon:"category",name:n.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=i.exports}}]);