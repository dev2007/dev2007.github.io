(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{369:function(_,v,t){_.exports=t.p+"assets/img/1.c0c8bf2f.png"},370:function(_,v,t){_.exports=t.p+"assets/img/2.8eabcbf1.png"},371:function(_,v,t){_.exports=t.p+"assets/img/3.06daef30.png"},372:function(_,v,t){_.exports=t.p+"assets/img/4.72ee08ff.png"},444:function(_,v,t){"use strict";t.r(v);var a=t(1),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("2024年5月，朋友 "),v("a",{attrs:{href:"https://www.dongfangzan.cn",target:"_blank",rel:"noopener noreferrer"}},[_._v("@东方赞"),v("OutboundLink")],1),_._v(" 得到了一批显卡，搭建了多套大模型，为了解决模型应用问题，他调研了当时比较火的一些应用，并重点使用和分析了 "),v("code",[_._v("Sider AI")]),_._v(" 和 "),v("code",[_._v("ChatBox")]),_._v("。")]),_._v(" "),v("p",[_._v("最后得出结论，目前没有一个应用能很好的满足：既能对接大模型，又能自定义模型提示词，还能流程化地解决问题。于是我们展望了一下这个需求，梳理出一个核心特性：让多个 AI 模型群聊，流程化、通力解决问题。")]),_._v(" "),v("h1",{attrs:{id:"开端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开端"}},[_._v("#")]),_._v(" 开端")]),_._v(" "),v("p",[_._v("于是在2024年6月5日，项目第一行初始化代码被提交。这是一个很好的开端。")]),_._v(" "),v("p",[_._v("技术选型上，我们选择 "),v("code",[_._v("tauri")]),_._v("，以实现开发跨平台应用；界面前端选用了 "),v("code",[_._v("Next.JS")]),_._v(",整个框架相对简洁，且 TypeScript 的形态适合我们这种长期开发后端的人进行前端开发；而界面样式上，我们秉承“先解决有无”的原则，选用了 "),v("code",[_._v("AntD")]),_._v("，它既有丰富的组件，又不与 "),v("code",[_._v("Next.JS")]),_._v(" 强耦合。")]),_._v(" "),v("p",[_._v("于是一鼓作气下，我们精神亢奋地天天撸代码。")]),_._v(" "),v("p",[_._v("工作分工上，我们一个人负责处理 Rust 的代码以及大模型相关的 API 封装，一个人负责前端界面开发。")]),_._v(" "),v("p",[_._v("就这样我们从6月初连续干到了8月底，除了周末稍微休息下，一直高强度地保持每天多次提交。")]),_._v(" "),v("h2",{attrs:{id:"成功了"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#成功了"}},[_._v("#")]),_._v(" 成功了")]),_._v(" "),v("p",[_._v("在8月底我们终于干出了一些成果。以下是一些软件截图：")]),_._v(" "),v("p",[v("img",{attrs:{src:t(369),alt:"image.png"}})]),_._v(" "),v("p",[v("img",{attrs:{src:t(370),alt:"image.png"}})]),_._v(" "),v("p",[_._v("我们还搭建了网站的雏形：")]),_._v(" "),v("p",[v("img",{attrs:{src:t(371),alt:"image.png"}})]),_._v(" "),v("p",[v("img",{attrs:{src:t(372),alt:"image.png"}})]),_._v(" "),v("p",[_._v("是不是一切看起来还是有模有样的？")]),_._v(" "),v("p",[_._v("我们实现了大模型的对接配置、AI 机器人管理、AI 机器人的聊天界面以及可以添加多个机器人群聊的功能。")]),_._v(" "),v("p",[_._v("特别是群聊功能，我们能在一个群聊当中，让多个机器人同时为你的问题提出解决文案，也可以通过"),v("code",[_._v("@")]),_._v("指定机器人解答你的问题，然后再 "),v("code",[_._v("@")]),_._v(" 另一个机器人接力处理问题。这确实是一个非常有亮点的点子。")]),_._v(" "),v("p",[_._v("不论是从实际的效果，还是点子本身上，我觉得我们都非常成功。这也是为什么在发布Beta版本前，我们就提前做好了网站，就等Beta版本发布后就更新到网站，让大家下载用起来。")]),_._v(" "),v("h2",{attrs:{id:"失败了"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#失败了"}},[_._v("#")]),_._v(" 失败了")]),_._v(" "),v("p",[_._v("做出来一个能用、能解决问题的产品，看着它最终运行起来，就像看着自己的孩子慢慢长大一样，是一件让人很有成就感的事。")]),_._v(" "),v("p",[_._v("然而同时，我们也发现，我们彻底地失败了！连“再而衰，三而竭”都没有，失败得彻头彻尾；连偃旗息鼓都没有，失败得无声无息。")]),_._v(" "),v("p",[_._v("因为我们发现我们再努力，也有团队和公司做得比你更好。而你，甚至这个时候连商业模式都还没有想清楚！")]),_._v(" "),v("p",[_._v("当我们在8月底再去使用其他的同类产品时，我们发现这些产品做得更好了！而我们此时才刚刚开始，这是多么地令人挫败。")]),_._v(" "),v("p",[_._v("这个时候一对比，我们就像丑小鸭见到白天鹅一样，自惭形秽。")]),_._v(" "),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),v("p",[_._v("事后，我们冷静了一段时间，像忘记了还有这个项目一样，即使它消耗了我们三个月的时间与精力。")]),_._v(" "),v("p",[_._v("后来，"),v("a",{attrs:{href:"https://www.dongfangzan.cn",target:"_blank",rel:"noopener noreferrer"}},[_._v("@东方赞"),v("OutboundLink")],1),_._v("与我分享了一下他与一些大佬的分享。")]),_._v(" "),v("p",[_._v("我们对失败原因的一句话总结：以获利为目的，但没有想清楚商业模型前盲目上马所导致。")]),_._v(" "),v("p",[_._v("展开来讲，我们的目的是为了通过开发应用来获取经济收入，但我们没有真实地去了解用户要解决的需求，仅仅完成了内部分析，并且我们也不了解这些用户会是否会为了解决需求而向你付费。")]),_._v(" "),v("p",[_._v("如果没有如何收获收益的前提，不论我们做得多好，最终都只是为爱发电。而另一方面，一些成熟团队或商业团队，他们本身有资金支持，他们是可以前期投入布局，后期缓慢收割的，但我们作为独立开发者是不行的。要么为爱发电，要么就要想清楚商业模型。")]),_._v(" "),v("p",[_._v("也许，有人要说，我也可以先做着，做到后面可能就有收益了。")]),_._v(" "),v("p",[_._v("如果我们要按这个思路走的话，心理预期就必须要做到："),v("strong",[_._v("坚持用爱发电")]),_._v("。否则一旦长期无法获得收益，你一定会气馁的。")]),_._v(" "),v("p",[_._v("与君共勉。")]),_._v(" "),v("p",[_._v("你是否也有类似的点子或经历呢，欢迎一起探讨。")])])}),[],!1,null,null,null);v.default=e.exports}}]);