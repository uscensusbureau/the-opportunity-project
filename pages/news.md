---
title: Press
permalink: /press/
layout: default

# full span, top of page section
hero:
  text: In the Press

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
      title: Wired
      details: The White House Wants You to Build Tools to Improve Our Cities
      href: https://www.wired.com/2016/03/white-house-wants-build-tech-tools-data/
      date: March 7, 2016
      img: photos/home/news/news-main.webp
      alt: An American flag
      isExternal: true
  side-cards:
    - details: Developers Use Artificial Intelligence to Match Patients to Clinical Trials
      href: https://www.forbes.com/sites/oracle/2019/03/12/developers-use-artificial-intelligence-to-match-patients-to-clinical-trials/#72d2630b1345
      date: March 12, 2019
      title: Forbes
      img: photos/home/news/news-01.webp
      alt: People seated at tables taking notes during a TOP presentation
      isExternal: true
    - title: New York Times
      details: New Federal Website Aims to Enhance Community Services
      href: https://www.nytimes.com/2016/03/08/us/politics/new-federal-website-aims-to-enhance-community-services.html?searchResultPosition=1
      isExternal: true
      date: March 7, 2016
      img: photos/home/news/news-02.webp
      alt: A man drawing on a white board with a marker while a woman looks on
    # - title: Developers Use Artificial Intelligence to Match Patients to Clinical Trials
    #   href: https://www.forbes.com/sites/oracle/2019/03/12/developers-use-artificial-intelligence-to-match-patients-to-clinical-trials/#72d2630b1345
    #   date: March 12, 2019
    #   publication: Forbes
    #   img: img/photos/home/news/news-03.webp
    #   alt: The New York City skyline

legislation:
  title: Bi-Partisan Authorizing Legislation
  left-col-width: '3'
  left-col-offset: 1
  right-col-width: 6
  right-col-offset: 1
  skip-top-border: true
  skip-bottom-border: true
  left-col: news/bill-image.md
  right:
    - title: '[The Opportunity Project Act of 2019](https://www.congress.gov/bill/116th-congress/house-bill/3528/text?r=16&s=1)'
      body: In 2019, bipartisan TOP Authorizing legislation was introduced in congress, which directs the Secretary of Commerce to carry out a program to facilitate the development of digital products for the public, and for other purposes. This authorizing bill is a major step toward institutionalizing TOP in government.

publications:
  title: Publications
  cards:
    - title: A Roadmap to the Future
      href: https://ourpublicservice.org/wp-content/uploads/2020/02/Future-of-Government.pdf
      isExternal: true
      img: photos/news/Background_roadmap.jpg
      details: The Partnership for Public Service Publication
    - title: 'Agile Problem Solving in Government: A Case Study of The Opportunity Project'
      href: http://www.businessofgovernment.org/report/agile-problem-solving-government-case-study-opportunity-project
      isExternal: true
      img: photos/news/Background_IBM.jpg
      details: IBM Center for The Business of Government
    - title: Best Practices Report to the President
      href: https://opportunityzones.hud.gov/sites/opportunityzones.hud.gov/files/documents/OZ_Best_Practices_Report.pdf
      isExternal: true
      img: photos/news/Background_white-house.jpg
      details: 'White House Opportunity and Revitalization Council'
    
---

{% include hero.html %}
{% include connecting-banner-with-subheader-inverse.html %}
{% include grid-section.html content=page.featured-images children="news/news.html" %}

{% assign sortedNews = site.data.news | sort:"rowNumber" %}
{% include grid-section.html content=sortedNews children="news/news-blurbs.html" %}

<br/>
{% capture leg-left %}
  {% include_relative {{ page.legislation.left-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.legislation left-col=leg-left %}

{% include grid-section.html content=page.publications children="cards/card-list.html" %}
