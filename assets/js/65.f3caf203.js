(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{439:function(v,_,a){"use strict";a.r(_);var t=a(1),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("本文翻译自 "),_("a",{attrs:{href:"https://datamify.com/architecture/how-to-understand-twelve-factor-methodology-in-spring-boot-applications/",target:"_blank",rel:"noopener noreferrer"}},[v._v("How To Understand Twelve-Factor Methodology In Spring Boot Applications"),_("OutboundLink")],1),v._v("，作者 "),_("a",{attrs:{href:"https://datamify.com/author/vader/",target:"_blank",rel:"noopener noreferrer"}},[v._v("OLEKSII"),_("OutboundLink")],1)])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbae8349fdfe4544982a985af017b372~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=750&h=424&s=106979&e=png&b=ffffff",alt:""}})]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("十二要素应用程序是构建现代可扩展应用程序架构所需的一系列原则。本篇文章将从 "),_("code",[v._v("Spring Boot")]),v._v(" 应用的角度回顾这些原则。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"一、代码库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、代码库"}},[v._v("#")]),v._v(" 一、代码库")]),v._v(" "),_("p",[v._v("应用程序在版本控制系统（如 "),_("code",[v._v("Git")]),v._v("）中进行跟踪。")]),v._v(" "),_("p",[v._v("代码库和应用程序之间是一对一的关系。因此，每个 "),_("code",[v._v("Spring Boot")]),v._v(" 应用程序都有自己的代码库。这些应用程序构成了一个分布式系统。多个部署（如测试、阶段、生产等）的代码是相同的。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"二、依赖关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、依赖关系"}},[v._v("#")]),v._v(" 二、依赖关系")]),v._v(" "),_("p",[v._v("在十二要素应用程序中，系统依赖关系是明确声明的。")]),v._v(" "),_("p",[v._v("在 Spring Boot 中，可以使用 "),_("code",[v._v("Maven")]),v._v(" 或 "),_("code",[v._v("Gradle")]),v._v(" 来实现这些目的。这些工具可用于指定所需的应用程序依赖关系。此外，跨依赖关系可能存在的问题也得到了解决。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"三、配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、配置"}},[v._v("#")]),v._v(" 三、配置")]),v._v(" "),_("p",[v._v("如前所述，每个应用程序只有一个代码库。但是，相同的代码会用于多个部署。因此，这些部署需要一些配置功能。\n在 "),_("code",[v._v("Spring Boot")]),v._v(" 中，属性可以用来解决这个问题。属性可以通过多种方式指定。例如，可以在 "),_("code",[v._v("application.yml")]),v._v(" 文件中指定默认值。在环境变量的帮助下，每个部署都可以覆盖所需的属性。更多详情可参阅 "),_("code",[v._v("Spring Boot")]),v._v(" 的文档。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"四、-备份服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、-备份服务"}},[v._v("#")]),v._v(" 四、 备份服务")]),v._v(" "),_("p",[v._v("每个应用程序都可以使用多个外部或第三方服务。")]),v._v(" "),_("p",[v._v("可以是数据库（如 "),_("code",[v._v("MySQL")]),v._v("）、消息代理（如 "),_("code",[v._v("Kafka")]),v._v("）、第三方 API 等。每个服务都应像资源一样运行。这意味着，你的代码应同时在 "),_("code",[v._v("Docker")]),v._v(" 中的 "),_("code",[v._v("MySQL")]),v._v(" 和 "),_("code",[v._v("AWS")]),v._v(" 中的 "),_("code",[v._v("MySQL")]),v._v(" 上运行，而无需做任何更改。")]),v._v(" "),_("p",[v._v("在 "),_("code",[v._v("Spring Boot")]),v._v(" 中，可以通过 "),_("code",[v._v("Spring Boot")]),v._v(" 属性、特殊接口和类（如 "),_("code",[v._v("Spring Data Repository")]),v._v("）来实现。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"五、构建、发布、运行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、构建、发布、运行"}},[v._v("#")]),v._v(" 五、构建、发布、运行")]),v._v(" "),_("p",[v._v("十二要素方法需要三个不同的阶段，才能将源代码转化为运行中的应用程序。")]),v._v(" "),_("h3",{attrs:{id:"构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[v._v("#")]),v._v(" 构建")]),v._v(" "),_("p",[v._v("首先，将源代码转化为可执行文件。可以使用 "),_("code",[v._v("Maven")]),v._v(" 或 "),_("code",[v._v("Gradle")]),v._v(" 来构建目标 jar 文件。")]),v._v(" "),_("h3",{attrs:{id:"发布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[v._v("#")]),v._v(" 发布")]),v._v(" "),_("p",[v._v("第二步，将可执行文件与特定配置相结合。例如，可以创建一个 "),_("code",[v._v("Docker")]),v._v(" 镜像，将 jar 文件与所需配置相结合。")]),v._v(" "),_("h3",{attrs:{id:"运行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[v._v("#")]),v._v(" 运行")]),v._v(" "),_("p",[v._v("在这一步中，可以创建一个 "),_("code",[v._v("Docker")]),v._v(" 容器，根据上一步的映像运行应用程序。这意味着，在必要时，我们可以在不同版本的应用程序之间快速切换。如果当前版本有一些错误，可以使用之前的 "),_("code",[v._v("Docker")]),v._v(" 镜像来运行应用程序。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"六、程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、程序"}},[v._v("#")]),v._v(" 六、程序")]),v._v(" "),_("p",[v._v("十二要素应用程序是无状态的，不共享任何数据。不过，数据可以保存在数据库等有状态备份服务中。")]),v._v(" "),_("p",[v._v("让我们来看一个例子。想象一下，我们有一个带有 "),_("code",[v._v("MySQL")]),v._v(" 数据库的应用程序。对数据库的某些请求速度很慢。因此，我们使用了内存中的 "),_("code",[v._v("Caffeine")]),v._v(" 缓存。数据更新时，缓存会失效。只有一个节点部署时，一切正常。")]),v._v(" "),_("p",[v._v("一段时间后，系统负载不断增加。我们希望通过添加第二个节点来扩展我们的应用程序。缓存位于每个节点上。因此，用户在两次后续请求中看到的结果是不同的。用户更新了记录。第一个节点会使其内存缓存失效。一方面，用户可以看到新数据。用户再次读取数据。第二个节点（拥有旧缓存）会以旧数据做出响应。")]),v._v(" "),_("p",[v._v("为了克服这个问题，应用程序是无状态的。这种缓存可以位于分布式缓存中，如 "),_("code",[v._v("Redis")]),v._v("。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"七、端口绑定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、端口绑定"}},[v._v("#")]),v._v(" 七、端口绑定")]),v._v(" "),_("p",[v._v("在以前使用的典型 Java 应用程序中，可执行文件以 war 文件的形式出现。该文件在 "),_("code",[v._v("Tomcat")]),v._v(" 等容器中执行。")]),v._v(" "),_("p",[v._v("在十二要素应用程序中，可执行文件是独立的。"),_("code",[v._v("Spring Boot")]),v._v(" 应用程序内部依赖于 "),_("code",[v._v("Tomcat")]),v._v("。因此，jar 是自包含的，运行应用程序只需要一个 java 环境。唯一需要指定的是应用程序应使用的目标端口。这可以通过配置属性完成。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"八、并发性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、并发性"}},[v._v("#")]),v._v(" 八、并发性")]),v._v(" "),_("p",[v._v("十二要素应用程序是为扩展而设计的。Java 应用程序作为与 JVM 绑定的单个进程运行。为了扩展 Spring Boot 应用程序，必须启动一个新实例。在 "),_("strong",[v._v("五、构建、发布、运行")]),v._v("一节中，"),_("code",[v._v("Docker")]),v._v(" 容器被描述为运行 Spring Boot 应用程序的一种方式。因此，为了扩展，可以使用 "),_("code",[v._v("Kubernetes")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"九、可处置性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#九、可处置性"}},[v._v("#")]),v._v(" 九、可处置性")]),v._v(" "),_("p",[v._v("十二要素应用程序应具有快速启动和优雅关闭的特点。")]),v._v(" "),_("p",[v._v("这意味着，同一应用程序的实例可以随时启动或停止。这不应影响应用程序。为了实现这一点，当应用程序实例停止时，该实例应停止监听传入请求，完成对所有当前请求的处理，并优雅地停止。")]),v._v(" "),_("p",[v._v("在 "),_("code",[v._v("Spring Boot")]),v._v(" 中，这可以通过应用程序事件来实现。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"十、开发-生产比价"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十、开发-生产比价"}},[v._v("#")]),v._v(" 十、开发/生产比价")]),v._v(" "),_("p",[v._v("在典型的应用程序开发流程中，开发与生产之间存在很大差距。应用程序是在本地环境中开发的，开发人员不参与部署过程，开发人员可以使用与生产不同的工具。")]),v._v(" "),_("p",[v._v("十二要素应用程序是为持续部署而设计的，目的就是尽量缩小这种差距。"),_("code",[v._v("Spring Boot")]),v._v(" 和 "),_("code",[v._v("Docker")]),v._v(" 使之成为可能。开发人员可以使用与生产环境中相同的工具快速编写应用程序。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"十一、日志日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十一、日志日志"}},[v._v("#")]),v._v(" 十一、日志日志")]),v._v(" "),_("p",[v._v("日志是软件应用程序的重要组成部分，可提供运行应用程序的可见性。")]),v._v(" "),_("p",[v._v("在十二要素应用程序中，日志被写入标准输出。执行环境应负责处理日志。"),_("code",[v._v("Fluentd")]),v._v(" 可用于收集此类日志，并将其淡入日志索引工具。"),_("code",[v._v("Elasticseach")]),v._v(" 和 "),_("code",[v._v("Kibana")]),v._v(" 就是这方面的常见例子。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"十二、管理流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十二、管理流程"}},[v._v("#")]),v._v(" 十二、管理流程")]),v._v(" "),_("p",[v._v("经常需要在应用程序上运行一次性任务或例行程序。十二要素应用方法论建议将这些任务纳入应用程序代码中。")]),v._v(" "),_("p",[v._v("例如，典型的任务是数据库迁移。可通过 "),_("code",[v._v("Flyway")]),v._v(" 或 "),_("code",[v._v("Liquibase")]),v._v(" 实现。")])])}),[],!1,null,null,null);_.default=r.exports}}]);