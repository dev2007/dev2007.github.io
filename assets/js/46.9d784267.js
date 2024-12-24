(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{419:function(e,a,t){"use strict";t.r(a);var c=t(1),s=Object(c.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("官方概要介绍如下：")]),e._v(" "),a("p",[e._v("Elasticsearch 是位于 Elastic Stack 中心的分布式搜索和分析引擎。Logstach 和 Beats 促进采集、合计以及充实你的数据并在 Elasticsearch 中存储它们。Kibana 允许你去交互式的探索、可视化和共享对数据的见解，以及监视这个栈（Elastic Stack）。Elasticsearch 是索引、搜索和分析的神奇所在。")]),e._v(" "),a("p",[e._v("Elasticsearch 为各种数据类型提供接近实时的搜索和分析。不论你有结构化或非结构化的文本、数字数据，还是地理空间数据，Elasticsearch 能以支持快速搜索的方式高效地存储和索引它。你可以远超简单数据检索和聚合信息的方式去发现你数据中的趋势和模式。而且，随着你数据和查询量的增长，Elasticsearch 分布式的特性允许你的部署能随着它无缝地增长匹配。")]),e._v(" "),a("p",[e._v("虽然不是每个问题都是搜索问题，但 Elasticsearch 在大量实例中提供了处理数据的速度和灵活性：")]),e._v(" "),a("ul",[a("li",[e._v("为应用或者网站添加搜索框")]),e._v(" "),a("li",[e._v("存储和分析日志、度量和安全事件数据")]),e._v(" "),a("li",[e._v("使用机器学习，实时自动建模你的数据行为")]),e._v(" "),a("li",[e._v("使用 Elasticsearch 作为存储引擎来自动化业务工作流")]),e._v(" "),a("li",[e._v("使用 Elasticsearch 作为地理信息系统（GIS）管理、集成和分析空间信息，以及使用 Elasticsearch 作为生物学信息研究工具处理基因数据")])]),e._v(" "),a("p",[e._v("我们一直对人们使用搜索的新奇方式感觉惊奇。但是不论你的实例与其中一个相似，还是你正使用 Elasticsearch 来解决一个新的问题，你在 Elasticsearch处理数据、文档和索引的方式是相同的。")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Elasticsearch?"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://elasticsearch.bookhub.tech/#/es",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 Elasticsearch？"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("更多的介绍：")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://elasticsearch.bookhub.tech/#/intro/datain",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据输入：文档和索引"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://elasticsearch.bookhub.tech/#/intro/inforout",target:"_blank",rel:"noopener noreferrer"}},[e._v("信息输出：搜索和分析"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://elasticsearch.bookhub.tech/#/intro/scalability",target:"_blank",rel:"noopener noreferrer"}},[e._v("可伸缩性和弹性"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("我们可以知道，Elastic 整个体系中，除了 Elasticsearch，还有 Logstash 和 Beats，可以用来配合 Elasticseach 进行数据采集和合计等，而 Kibana 提供界面进行数据展示和操作。")]),e._v(" "),a("p",[e._v("我们可以看到几个关键的描述：")]),e._v(" "),a("ol",[a("li",[e._v("Elasticsearch 是分布式搜索和分析引擎")]),e._v(" "),a("li",[e._v("Elasticsearch 为各种数据类型提供接近实时的搜索和分析")]),e._v(" "),a("li",[e._v("Elasticsearch 支持多种数据")])]),e._v(" "),a("p",[e._v("从这几点中，我们可以很模糊了解一些 Elasticsearch 的特性：")]),e._v(" "),a("ul",[a("li",[e._v("Elasticsearch 是分布式的，一个集群中可以有多个Elasticsearch节点，任何节点都可以访问节点中的文档。")]),e._v(" "),a("li",[e._v("Elasticsearch 支持主从集群，依赖跨集群复制（CCR）")]),e._v(" "),a("li",[e._v("Elasticsearch 可以将各种数据序列化为 JSON 文档来存储，存储后可以进行搜索。")]),e._v(" "),a("li",[e._v("Elasticsearch 使用倒排索引的数据结构，可以支持快速搜索。")]),e._v(" "),a("li",[e._v("Elasticsearch 中，"),a("code",[e._v("字段")]),e._v("是包含数据的键值对，"),a("code",[e._v("文档")]),e._v("是字段的集合，而"),a("code",[e._v("索引")]),e._v("是文档的优化集合（索引 -> 文档 -> 字段 -> 数据）。")]),e._v(" "),a("li",[e._v("Elasticsearch 启用动态映射时，会自动向索引中添加新的字段，也可以自己定义映射。")]),e._v(" "),a("li",[e._v("索引是一个或多个物理分片的逻辑组；索引中的文档分布在多个分片上，并将这些分片分布在多个节点上")]),e._v(" "),a("li",[e._v("索引创建时指定了主分片数就定了，而副本分片随时可能更改")]),e._v(" "),a("li",[e._v("分片数的配置需要权衡")])]),e._v(" "),a("p",[e._v("在进一步的文档中，可以知道。Elasticsearch 基于 Apache Lucene。且 Elasticsearch 还提供 REST API，并且支持多种语言的客户端。")]),e._v(" "),a("p",[e._v("而且，Elasticsearch REST API支持"),a("code",[e._v("结构化查询")]),e._v("、"),a("code",[e._v("全文查询")]),e._v("和二者结合。")]),e._v(" "),a("ul",[a("li",[e._v("结构化查询，类型于SQL")]),e._v(" "),a("li",[e._v("全文查询，匹配查询的字符串")])]),e._v(" "),a("p",[e._v("搜索中，除去单个词语的搜索，也支持"),a("code",[e._v("短语搜索")]),e._v("、"),a("code",[e._v("相似性搜索")]),e._v("和"),a("code",[e._v("前缀搜索")]),e._v("。")]),e._v(" "),a("p",[e._v("Elasticsearch 还有一个特性"),a("code",[e._v("聚合")]),e._v("，能够构建数据的复杂摘要，并深入了解关键度量、模式和趋势。")]),e._v(" "),a("p",[e._v("以上，就是对 Elasticsearch 的一个概要了解，请关注后续文章。")])])}),[],!1,null,null,null);a.default=s.exports}}]);