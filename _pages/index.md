---
layout: defaults/page
permalink: index.html
narrow: true
title: Home
---

## Awu's Blog

{% include components/intro.md %}
<hr />

### 最近更新|Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


