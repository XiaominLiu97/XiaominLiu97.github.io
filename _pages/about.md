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
.toggle-btn {
  display: block;
  margin: 10px auto;
  padding: 8px 20px;
  background-color: #224b8d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out;
}
.toggle-btn:hover {
  background-color: #1a3a6e;
}
.hidden-item {
  display: none;
}
.toggle-btn .toggle-icon {
  margin-left: 5px;
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
    
    const btn = document.createElement('button');
    btn.className = 'toggle-btn';
    btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
    
    let expanded = false;
    btn.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.remove('hidden-item');
        }
        btn.innerHTML = 'Show Less <span class="toggle-icon">▲</span>';
      } else {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.add('hidden-item');
        }
        btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
      }
    });
    
    newsList.parentNode.insertBefore(btn, newsList.nextSibling);
  }
});
</script>

{% include_relative includes/honers.md %}

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
    
    const btn = document.createElement('button');
    btn.className = 'toggle-btn';
    btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
    
    let expanded = false;
    btn.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        for (let i = 6; i < honorsItems.length; i++) {
          honorsItems[i].classList.remove('hidden-item');
        }
        btn.innerHTML = 'Show Less <span class="toggle-icon">▲</span>';
      } else {
        for (let i = 6; i < honorsItems.length; i++) {
          honorsItems[i].classList.add('hidden-item');
        }
        btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
      }
    });
    
    honorsList.parentNode.insertBefore(btn, honorsList.nextSibling);
  }
});
</script>

{% include_relative includes/pub.md %}

{% include_relative includes/others.md %}

This is forked from open-sourced template version [AcadHomepage ![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io?style=social)](https://github.com/RayeRen/acad-homepage.github.io).

<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=200&t=tt&d=a-5ch4Jkh3BwCvCQJ08NO0kf1vkW9d_VBngJMpUcGJ8&co=2d78ad&cmo=3acc3a&cmn=ff5353&ct=ffffff'></script>