---
layout: post
title: 多项目部署为同一个GitHub Pages
date: 2020-11-08 10:00:00 +0800
description: 多项目部署为同一个GitHub Pages # Add post description (optional)
img: pine-watt-dUbKcgu0zjw-unsplash.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [blog,github pages]
---

> 由于GitHub 的约定，一个账户只能拥有一个GitHub Pages，那么，如果你有多个想部署的静态网站（博客和文档等），它们是互相隔离的，如何用同一个GitHub账户进行部署呢？

从之前如何搭建GitHub Pages的系列文章[用GitHub Pages搭建博客（一）](/create-github-pages)，我们知道Jekyll或者Hexo实现的静态网站的配置中，常常要指定一个当前网站的目录。

如果我们的相关内容直接在当前项目的根目录下，jekyll将从当前目录进行加载，如果在某个子目录下，在jekyll的配置文件中指定该目录即可正确加载。

而如果我们需要部署一个博客`+`一个文档（如docsify）在同一个GitHub Pages域名下时，我们可以将内容拆分为不同的子项目存储。

访问示例：

```text
主域名 -> 博客项目

主域名/路径 -> 文档项目
```

比如，我创建了一个GitHub Pages项目（名称`dev2007.github.io`），然后在配置中开启了GitHub Pages，那么这个项目就是对应的主域名访问，如下：

示例链接：[https://dev2007.github.io/](https://dev2007.github.io/z)

![githubpagessub](/assets/img/githubpages/sub1.jpg)

> 如果想给主项目增加子目录的访问，则是项目中增加子目录，然后在jekyll的配置文件中指定子目录相关信息。

然后，我需要一个项目的专门文档项目，使用相应的工具（如docsify）进行文档编写。我需要将它也部署到GitHub Pages中进行访问，只需要直接在该项目的`settings`中`GitHub Pages`标签中，指定分支和目录，开启该项目的GitHub Pages。系统会自动按项目名称分配域名子路径。如下：

示例链接：[https://dev2007.github.io/es-book/](https://dev2007.github.io/es-book/)

![githubpagessub2](/assets/img/githubpages/sub2.jpg)

> 通过以上方式，我们就将两个项目部署到了同一个GitHub Pages中。如果进一步想使用子域名，在项目的`Custom domain`中进行配置即可。

*图片来源 ：[unsplash](https://unsplash.com)*

![mp](/assets/img/mp.png)
