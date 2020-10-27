---
layout: post
title: 用GitHub Pages搭建博客（八）
date: 2020-10-27 09:00:00 +0100
description: GitHub Pages初步介绍八 # Add post description (optional)
img: linus-nylund-unsplash-small.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [blog,github pages]
---

> 本篇介绍GitHub Pages的一些杂项

# Disqus和Gitalk

GitHub Pages搭建的博客，有时我们想要看到别人的留言。但鉴于GitHub Pages是一个静态站，不涉及动态站可用的数据存储，所以其本身是无法开发留言系统的。这个时候，第三方的留言系统就是一个比较好的选择。

很多Jekyll主题中都开发了留言模块，而他们一般使用的是Disqus，由于国内的网络环境，Disqus基本是不可用的。所以我们需要选择其他留言组件。

Gitalk是基于Git仓库的issues实现的，使用issues来存储用户留言，利用GitHub API来读取issues进行留言操作。

如果要使用Gitalk，按照[Gitalk](https://github.com/gitalk/gitalk)官方教程配置即可。

![gitalk](/assets/img/githubpages/gitalk.jpg)

需要注意的是Gitalk的配置属性中的id，由于Gitalk使用id作为Git仓库的issues label，而GitHub要求此值不得大于50。所以，直接使用url地址*location.pathname*作为id值，很大可能会超长，导致留言加载异常。

有一种解决方法是引入一个md5算法的js，用md5加密location.pathname，以解决id的唯一和长度要小于50的限制。

# js库的使用

一般来讲，我们使用js有两种方式，一是本地网站中带有相应js的源文件，引用即可使用。二是使用互联网上专门的CDN服务提供的js文件。

第二种方式，我们常用[JSDELIVR](https://www.jsdelivr.com/)。在这个网站上，我们搜索想要用的js库，然后获取dist的发布路径，引用到网站页面中即可使用。

![js](/assets/img/githubpages/js.jpg)


***上一篇：[用GitHub Pages搭建博客（七）](/create-github-pages-seventh)***


*题图来源 ：[unsplash @doto](https://unsplash.com/@doto)*