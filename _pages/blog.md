---
layout: default
permalink: /blog/
title: "Blog"
excerpt: ""
author_profile: true
---

# 📝 Blog

Welcome to my blog! Here I share my thoughts and experiences.

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
**{{ post.date | date: "%Y-%m-%d" }}**

{{ post.excerpt | strip_html | truncatewords: 30 }}

[Read more...]({{ post.url }})

---
{% endfor %}

{% if site.posts.size == 0 %}
*No posts yet. Coming soon...*
{% endif %}