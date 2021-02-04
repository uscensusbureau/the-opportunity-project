---
title: Get Involved
permalink: /news/
layout: default

# full span, top of page section
hero:
  text: News

# connecting-banner-with-subheader-inverse.html
banner-subheader-inverse:
  top:
    background: base-darkest
    line: '-light'
  bottom:
    background: white

featured-images:
  title: Media
  featured:
      text: The White House Wants You to Build Tools to Improve Our Cities
      href: https://www.wired.com/2016/03/white-house-wants-build-tech-tools-data/
      date: March 7, 2016
      publication: Wired
      img: /img/photos/home/news/news-main.png
      alt: An American flag
  side-cards:
    - text: Developers Use Artificial Intelligence to Match Patients to Clinical Trials
      href: https://www.forbes.com/sites/oracle/2019/03/12/developers-use-artificial-intelligence-to-match-patients-to-clinical-trials/#72d2630b1345
      date: March 12, 2019
      publication: Forbes
      img: /img/photos/home/news/news-01.png
      alt: People seated at tables taking notes during a TOP presentation
    - text: Developers Use Artificial Intelligence to Match Patients to Clinical Trials
      href: https://www.forbes.com/sites/oracle/2019/03/12/developers-use-artificial-intelligence-to-match-patients-to-clinical-trials/#72d2630b1345
      date: March 12, 2019
      publication: Forbes
      img: /img/photos/home/news/news-02.png
      alt: A man drawing on a white board with a marker while a woman looks on
    - text: Developers Use Artificial Intelligence to Match Patients to Clinical Trials
      href: https://www.forbes.com/sites/oracle/2019/03/12/developers-use-artificial-intelligence-to-match-patients-to-clinical-trials/#72d2630b1345
      date: March 12, 2019
      publication: Forbes
      img: /img/photos/home/news/news-03.png
      alt: The New York City skyline


---

{% include hero.html %}
{% include connecting-banner-with-subheader-inverse.html %}
{% include news.html content=page.featured-images %}