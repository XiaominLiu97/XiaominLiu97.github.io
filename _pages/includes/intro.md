---
permalink: /
title: ""
# excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

I'm a Ph.D candidate for Information engineering at the Department of Electronic engineering (电子系), Shanghai Jiao Tong University, Shanghai, China, and under the supervision of Professor [Qunbi Zhuge](https://zhuge.sjtu.edu.cn/). 

My research focus on the modeling, monitoring, and optimization for the long-haul WDM optical networks (especially the Backbone networks), aim at building self-driving optical networks with the assistance of data-driven machine learning techniques. I am also working on the control and optimization for the multi-band optical system  (<a href='https://scholar.google.com/citations?user=Jhntj54AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>)

- **Physical layer modeling**
  - QoT estimation for multi-band system
  - Fiber nonlinearity
  - Optical amplifiers (EDFA & Raman amplifier)
- **Physical layer monitoring**
  - Fiber nonlinearity, Soft failures, Filtering effect, etc.
- **Nertwork Optimization**
  - Power optimization in C and C&L band for Capacity optimization


