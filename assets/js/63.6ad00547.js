(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{437:function(t,a,r){"use strict";r.r(a);var s=r(1),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文翻译自 "),a("a",{attrs:{href:"https://datamify.com/architecture/how-to-understand-monolithic-architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How To Understand Monolithic Architecture"),a("OutboundLink")],1),t._v("，作者 "),a("a",{attrs:{href:"https://datamify.com/author/vader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OLEKSII"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("单体架构是构建应用程序的一种传统方式。这种软件架构原则有利有弊。一方面，它可以带来快乐。另一方面，它也会让人失望。让我们回顾一下它在软件架构中的地位。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images-1318308994.cos.ap-chengdu.myqcloud.com/article/20231206170418.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"单体架构概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构概览"}},[t._v("#")]),t._v(" 单体架构概览")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images-1318308994.cos.ap-chengdu.myqcloud.com/article/20231206170524.png",alt:""}})]),t._v(" "),a("p",[t._v("典型的单体架构如上图所示。其主要特点是所有服务（用户服务、航班服务和计费服务）都位于一个单一的交付物（Spring Boot 的 jar 文件）中。这些服务紧密耦合（尽管它们的功能完全不同），并使用相同的数据库。")]),t._v(" "),a("p",[t._v("图片展示了目前最常用的方法。实际上，在单体架构中，用户界面部分可以与后备服务打包在一起。因此，用户界面、用户服务、航班服务和计费服务都位于同一个交付品中。")]),t._v(" "),a("p",[t._v("为便于扩展，可部署多个相同的交付单元。负载平衡器负责将请求路由到已部署的单体服务。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"单体架构的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构的优势"}},[t._v("#")]),t._v(" 单体架构的优势")]),t._v(" "),a("h3",{attrs:{id:"开发简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发简单"}},[t._v("#")]),t._v(" 开发简单")]),t._v(" "),a("p",[t._v("单体方法是构建应用程序的标准方式。无需额外知识。所有源代码都集中在一处，可快速理解。")]),t._v(" "),a("h3",{attrs:{id:"调试简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试简单"}},[t._v("#")]),t._v(" 调试简单")]),t._v(" "),a("p",[t._v("由于所有代码都集中在一处，因此调试过程非常简单。您可以轻松地按照请求的流程找到问题所在。")]),t._v(" "),a("h3",{attrs:{id:"测试简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试简单"}},[t._v("#")]),t._v(" 测试简单")]),t._v(" "),a("p",[t._v("您只需测试一个服务，没有任何依赖关系。一切通常都很清楚。")]),t._v(" "),a("h3",{attrs:{id:"部署简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署简单"}},[t._v("#")]),t._v(" 部署简单")]),t._v(" "),a("p",[t._v("只需部署一个部署单元（如 jar 文件）。没有任何依赖关系。在用户界面与后台代码打包的情况下，不会出现任何破坏性更改。所有内容都在一个地方存在和更改。")]),t._v(" "),a("h3",{attrs:{id:"应用程序演进简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用程序演进简单"}},[t._v("#")]),t._v(" 应用程序演进简单")]),t._v(" "),a("p",[t._v("从业务逻辑的角度来看，应用程序基本上没有任何限制。如果新功能需要某些数据，这些数据已经存在。")]),t._v(" "),a("h3",{attrs:{id:"横向关注点和定制只使用一次-交叉关注点只用一次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#横向关注点和定制只使用一次-交叉关注点只用一次"}},[t._v("#")]),t._v(" 横向关注点和定制只使用一次，交叉关注点只用一次")]),t._v(" "),a("p",[t._v("例如，安全、日志、异常处理、监控、选择和设置 tomcat 参数、设置数据源连接池等。")]),t._v(" "),a("h3",{attrs:{id:"简化新团队成员的入职培训"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简化新团队成员的入职培训"}},[t._v("#")]),t._v(" 简化新团队成员的入职培训")]),t._v(" "),a("p",[t._v("源代码位于一个地方。新团队成员可以轻松调试一些功能流程，熟悉应用程序。")]),t._v(" "),a("h3",{attrs:{id:"应用早期阶段成本低"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用早期阶段成本低"}},[t._v("#")]),t._v(" 应用早期阶段成本低")]),t._v(" "),a("p",[t._v("所有源代码都集中在一处，打包成一个单独的部署单元并进行部署。还有什么比这更容易的？既没有基础设施成本，也没有开发成本。")]),t._v(" "),a("p",[t._v("由于这些优势，单体架构通常用于应用程序开发的早期阶段。原因如下：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("应用程序的主要功能是盈利")]),t._v("。因此，必须快速实施一些 POC（概念验证）解决方案，以便在现实世界中验证应用程序。此外，为系统带来客户也很重要。将来还可以进行改进。")]),t._v(" "),a("li",[a("strong",[t._v("在开发的早期阶段，需求通常并不明确")]),t._v("。在需求不明确的情况下，很难创建有意义的架构。真正的客户可以在部分功能已经运行后再确定业务需求。")])]),t._v(" "),a("p",[t._v("当应用程序取得成功时，单体架构的问题就开始出现了。原因很简单：应用程序的增长。通常情况下，经过一段时间后，单体应用程序会因为以下原因而转变为另一种单体应用。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"单体架构的劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体架构的劣势"}},[t._v("#")]),t._v(" 单体架构的劣势")]),t._v(" "),a("h3",{attrs:{id:"开发速度慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发速度慢"}},[t._v("#")]),t._v(" 开发速度慢")]),t._v(" "),a("p",[t._v("最简单的缺点与 CI/CD 管道有关。想象一下包含大量服务的单体。该单体中的每个服务都包含测试，每个拉取请求都会执行测试。即使是源代码中的一个小改动，也需要等待很长时间（如 1 小时）才能使管道成功。如果管道因某种原因失败了，会发生什么？再次等待。所有服务都位于一个地方。团队规模很大。如果你的同事合并了他们的更改，会发生什么？重新构建/合并，然后再次等待。")]),t._v(" "),a("h3",{attrs:{id:"代码耦合度高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码耦合度高"}},[t._v("#")]),t._v(" 代码耦合度高")]),t._v(" "),a("p",[t._v("当然，您可以在版本库中保持清晰的服务结构。但是，实践证明，最终至少会有几个地方的代码是一团乱麻。因此，系统会变得更加难以理解，尤其是对于新团队成员来说。")]),t._v(" "),a("h3",{attrs:{id:"无法使用代码所有权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法使用代码所有权"}},[t._v("#")]),t._v(" 无法使用代码所有权")]),t._v(" "),a("p",[t._v("系统在不断扩大。合理的做法是由几个团队分工负责。例如，一个团队负责航班服务，另一个团队负责账单服务。但是，这些服务之间没有界限。一个团队可以影响另一个团队。")]),t._v(" "),a("h3",{attrs:{id:"测试变得更加困难"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试变得更加困难"}},[t._v("#")]),t._v(" 测试变得更加困难")]),t._v(" "),a("p",[t._v("即使是很小的改动也会对系统产生负面影响。因此，需要对整个单体服务进行回归。\n性能问题。如果出现性能问题，您可以扩展整个单体服务。但如何处理数据库呢？所有服务都使用单一数据库。您可以开始优化数据库查询或使用读取副本。但是，这类优化是有限制的。")]),t._v(" "),a("h3",{attrs:{id:"基础设施成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础设施成本"}},[t._v("#")]),t._v(" 基础设施成本")]),t._v(" "),a("p",[t._v("在出现性能问题时，应扩展整个单体服务。这会增加应用程序可操作性的成本。\n传统技术。想象一下，您的应用程序是用 Java 8 编写的。将包含多个服务的整个单体迁移到 Java 11 需要多少时间？如何处理需要引入新功能的任务？应用程序可能永远不会迁移。")]),t._v(" "),a("h3",{attrs:{id:"缺乏灵活性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺乏灵活性"}},[t._v("#")]),t._v(" 缺乏灵活性")]),t._v(" "),a("p",[t._v('使用 "单体架构 "时，您只能使用单体内部使用的技术。即使其他工具能更好地解决手头的问题，也无法使用。\n部署问题。即使是很小的改动，也需要重新部署整个单体。')]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("单体架构是小型应用程序的最佳选择，因为它可以快速开发，测试和调试简单，而且成本低。但是，当系统发展壮大时，它可能会成为业务的障碍，因此应发展成另一种形式。")])])}),[],!1,null,null,null);a.default=v.exports}}]);