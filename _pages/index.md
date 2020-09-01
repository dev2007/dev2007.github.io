---
layout: defaults/page
permalink: index.html
narrow: true
title: 十月初一
---

## Awu's Blog

{% include components/intro.md %}
<hr />

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


