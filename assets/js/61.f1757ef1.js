(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{433:function(s,t,a){"use strict";a.r(t);var v=a(1),_=Object(v.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在上篇中，我们基本对 RuoYi 最重要的菜单相关进行探究，其他业务的代码不再进行探究。本篇将从第三视角，使用第三方代码扫描工具等，对 RuoYi 项目的代码进行品评。")]),s._v(" "),t("h2",{attrs:{id:"coding-net"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coding-net"}},[s._v("#")]),s._v(" coding.net")]),s._v(" "),t("p",[s._v("我们首先使用 "),t("code",[s._v("coding.net")]),s._v(" 进行代码质量和代码问题扫描。我们从 gitee 上 fork 了 RuoYi 的项目，然后将代码切到了 "),t("code",[s._v("tag")]),s._v(" "),t("code",[s._v("v4.5.7")]),s._v("。然后在 "),t("code",[s._v("coding.net")]),s._v(" 上导入项目，并创建了扫描任务，先选择扫描项为“Java 基础规则”，扫描结果如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/1.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("可以看到，在 "),t("code",[s._v("coding.net")]),s._v(" 的质量评价中，RuoYi 项目的 "),t("code",[s._v("v4.5.7")]),s._v(" 版本，代码质量达到了 "),t("code",[s._v("99.3")]),s._v(" 分，得分还是不错的。然后里面扫描到错误问题 16 个，警告问题 152 个。我们看一下，这些问题大概是什么。")]),s._v(" "),t("p",[s._v("先看错误问题，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/2.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("从引入时间看，这些问题多是比较早就在项目中存在了，我们随机挑两个问题的描述，看看详情：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("应避免 throw 原始异常类型")]),s._v("，如下图：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/3.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("代码中可以详细看到，将异常捕获后，又再次以 "),t("code",[s._v("RuntimeException")]),s._v(" 包装后抛出。难怪会被提示是错误问题。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("不应将跳出语句放在循环的末尾")]),s._v("，如下图：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/4.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("代码中可以看到，一个循环，什么都没有做，直接 "),t("code",[s._v("return")]),s._v(" ，确实让人摸不着头脑。")]),s._v(" "),t("p",[s._v("其他问题都是类似的。其实这些问题算不上特别大的质量问题，只是代码经验问题。")]),s._v(" "),t("p",[s._v("顺便我们看一下 RuoYi 项目的代码行数及重复代码情况，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/5.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("代码行数有 15 万行，但重复率达到了 "),t("code",[s._v("1.37%")]),s._v("，也就是有快 2 万行代码都是重复，在这个代码体量下还是有点惊人。")]),s._v(" "),t("p",[s._v("接着，我们关闭基础规则，选择“Java 代码规范规则” ，然后再次执行扫描，结果如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/16.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("点击问题列表查看一下，大量都是 Java 的代码大括号风格问题，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/17.png",alt:"scan"}})]),s._v(" "),t("h2",{attrs:{id:"阿里巴巴代码规约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里巴巴代码规约"}},[s._v("#")]),s._v(" 阿里巴巴代码规约")]),s._v(" "),t("p",[s._v("接着，我们在 IDEA 中安装阿里巴巴 Java 代码规约的插件，使用该插件对 RuoYi v.4.5.7 进行扫描。")]),s._v(" "),t("p",[s._v("几个子项目的扫描情况如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/6.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/9.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/11.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/13.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/14.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/15.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("主要问题如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/7.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/8.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/10.png",alt:"scan"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/ruoyi/5/11.png",alt:"scan"}})]),s._v(" "),t("p",[s._v("从以上问题来看，由于规则扫描主要是静态扫描，可见项目整体的代码风格不是很好，所以导致发现的规范问题很多。")]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本篇用第三方工具进行了代码质量扫描，RuoYi 项目整体质量还是不错，比较大的问题还是整体代码不符合 Java 的语言风格导致很多静态代码扫描问题。")]),s._v(" "),t("p",[s._v("在我们的开发工作中，我们可以使用相关的工具对我们的代码质量进行规范，常用的就是阿里巴巴的 Java 代码规范以及 SonarQube。如果我们能坚持使用这些工具，我们自己项目的代码质量至少也在及格线以上。")]),s._v(" "),t("p",[s._v("关于 RuoYi（非前后端分离版本）的核心探秘学习，到此完结，后续将对类似框架展开学习。比心，❤。")])])}),[],!1,null,null,null);t.default=_.exports}}]);