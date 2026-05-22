
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

I'm a Ph.D. candidate in Information Engineering at the Department of Electronic Engineering (电子系), [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), Shanghai, China, supervised by Professor [Qunbi Zhuge](https://zhuge.sjtu.edu.cn/). I received my bachelor’s degree in Information Engineering (AI Special Class) from the same department at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/).  
<a href='https://scholar.google.com/citations?user=Jhntj54AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

I aspire to be a **knowledgeable AI expert from hardware to software**. My research covers both sides of the AI‑Network loop:

- **AI for Network (AIOps & Agentic O&M)**: Self‑driving optical backbone networks via data‑driven modeling, monitoring, and optimization. Primary domain: long‑haul WDM & multi‑band systems; currently extending to wireless and IP.

- **Network for AI**: Accelerating distributed training via collective communication scheduling (Visiting @Polimi with Prof. [Massimo Tornatore](https://scholar.google.com/citations?user=50-RA6kAAAAJ&hl=zh-CN&oi=ao)) and OCS‑based intelligent computing networks. This spans three scaling dimensions — **scale‑up** (intra‑node/rack interconnects), **scale‑out** (multi‑node distributed training), and **scale‑across** (geo‑distributed / multi‑domain coordination).

My CV is also available to download [here]({{ "/images/CV_20240714.pdf" | relative_url }}){:target="_blank"}.

<p style="color: red;">In Sep. 2025, I joined Huawei as the TopMind scholar (天才少年), working in the research lab of autonomous driving networks (which works on autonomous optical/wireless/computer networks, not cars).</p>

<span style="color: gray; font-weight: bold;">Note: My SJTU email has expired. Please feel free to reach me via:</span><br>
<span style="color: gray; font-weight: bold;">- **Email:** xiaomin.liu.candy@gmail.com</span><br>
<span style="color: gray; font-weight: bold;">- **WeChat:** Candy_sagittarius</span>