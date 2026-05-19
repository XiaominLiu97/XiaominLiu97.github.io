# 🔥 News
{: #news-section}

- *2025.01*: 🎉 My first authored paper named "[First Field Trial of LLM-Powered AI Agent for Lifecycle Management of Autonomous Driving Optical Networks](https://arxiv.org/abs/2409.14605)" is selected as the Top-scored paper and the OFC Corning best student paper finalist! The competition result will be announced during OFC. 
- *2024.12*: 🎉 I have been honored as the Academic Star at Shanghai Jiao Tong University! This prestigious award represents the highest recognition for graduate students at SJTU!
- *2024.12*: 🎉 Two papers are accepted by OFC 2025 as oral presentations!
- *2024.09*: 🎉 We are happy to share our latest work named "[First Field Trial of LLM-Powered AI Agent for Lifecycle Management of Autonomous Driving Optical Networks](https://arxiv.org/abs/2409.14605)" !
- *2024.03*: 🎉 One my first-authored paper is accepted by OFC 2024! Three co-authored papers are accpeted and one paper is Post-deadline paper!
- *2024.02*: 🎉 My first-authored paper is accepted by the top-tier journal Advanced Photonics!
- *2024.01*: 🎉 I am nominated as the [Corning Woman Scholar in optical communication](https://www.optica.org/foundation/opportunities/scholarships/corningwomenscholars/) and will be awarded in the Optical Fiber Communication Conference (OFC 2024)!(Only three worldwide each year!)

<style>
.news-toggle-btn {
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
.news-toggle-btn:hover {
  background-color: #1a3a6e;
}
.news-hidden {
  display: none;
}
.news-toggle-btn .toggle-icon {
  margin-left: 5px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const newsSection = document.getElementById('news-section');
  if (!newsSection) return;
  
  const newsList = newsSection.nextElementSibling;
  if (!newsList) return;
  
  const newsItems = newsList.querySelectorAll('li');
  
  if (newsItems.length > 4) {
    for (let i = 4; i < newsItems.length; i++) {
      newsItems[i].classList.add('news-hidden');
    }
    
    const btn = document.createElement('button');
    btn.className = 'news-toggle-btn';
    btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
    
    let expanded = false;
    btn.addEventListener('click', function() {
      expanded = !expanded;
      if (expanded) {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.remove('news-hidden');
        }
        btn.innerHTML = 'Show Less <span class="toggle-icon">▲</span>';
      } else {
        for (let i = 4; i < newsItems.length; i++) {
          newsItems[i].classList.add('news-hidden');
        }
        btn.innerHTML = 'Show More <span class="toggle-icon">▼</span>';
      }
    });
    
    newsList.parentNode.insertBefore(btn, newsList.nextSibling);
  }
});
</script>