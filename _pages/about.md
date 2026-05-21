---
layout: default
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>
{% include_relative includes/intro.md %}

<style>
.toggle-link {
  display: inline-block;
  margin: 5px 0 10px 0;
  color: #224b8d;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
.toggle-link:hover {
  color: #1a3a6e;
  text-decoration: underline;
}
.hidden-item {
  display: none;
}
.toggle-link .toggle-icon {
  margin-left: 3px;
}
</style>

{% include_relative includes/news.md %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  const newsSection = document.getElementById('news-section');
  if (!newsSection) return;
  
  const newsList = newsSection.nextElementSibling;
  if (!newsList || newsList.tagName !== 'UL') return;
  
  const newsItems = newsList.querySelectorAll('li');
  
  if (newsItems.length > 4) {
    for (let i = 4; i < newsItems.length; i++) {
      newsItems[i].classList.add('hidden-item');
    }
    
    const link = document.createElement('a');
    link.className = 'toggle-link';
    link.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
    
    let expanded = false;
    link.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.remove('hidden-item');
        }
        link.innerHTML = 'Show Less <span class="toggle-icon">▲</span>';
      } else {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.add('hidden-item');
        }
        link.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
      }
    });
    
    newsList.parentNode.insertBefore(link, newsList.nextSibling);
  }
});
</script>

{% include_relative includes/honers.md %}

<span class='anchor' id='educations-section'></span>
## 📖 Educations
- *2024.09 - 2025.08*, Visiting PhD, Politecnico di Milano, Italy.
- *2020.09 - 2025.09*, PhD student, Shanghai Jiao Tong University, Shanghai.
- *2016.09 - 2020.06*, Undergraduate, Shanghai Jiao Tong University, Shanghai.

<script>
document.addEventListener('DOMContentLoaded', function() {
  const honorsSection = document.getElementById('honors-section');
  if (!honorsSection) return;
  
  const honorsList = honorsSection.nextElementSibling;
  if (!honorsList || honorsList.tagName !== 'UL') return;
  
  const honorsItems = honorsList.querySelectorAll('li');
  
  if (honorsItems.length > 6) {
    for (let i = 6; i < honorsItems.length; i++) {
      honorsItems[i].classList.add('hidden-item');
    }
    
    const link = document.createElement('a');
    link.className = 'toggle-link';
    link.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
    
    let expanded = false;
    link.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        for (let i = 6; i < honorsItems.length; i++) {
          honorsItems[i].classList.remove('hidden-item');
        }
        link.innerHTML = 'Show Less <span class="toggle-icon">▲</span>';
      } else {
        for (let i = 6; i < honorsItems.length; i++) {
          honorsItems[i].classList.add('hidden-item');
        }
        link.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
      }
    });
    
    honorsList.parentNode.insertBefore(link, honorsList.nextSibling);
  }
});
</script>

{% include_relative includes/pub.md %}

{% include_relative includes/others.md %}

This is forked from open-sourced template version [AcadHomepage ![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io?style=social)](https://github.com/RayeRen/acad-homepage.github.io).

<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=200&t=tt&d=a-5ch4Jkh3BwCvCQJ08NO0kf1vkW9d_VBngJMpUcGJ8&co=2d78ad&cmo=3acc3a&cmn=ff5353&ct=ffffff'></script>