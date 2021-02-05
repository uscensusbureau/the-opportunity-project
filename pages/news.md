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


blurbs:
  - text: President Obama’s New Open Data Initiative Could Help Cities Help Themselves
    href: https://www.techrepublic.com/article/president-obamas-new-open-data-initiative-could-help-cities-help-themselves/
    date: March 8, 2016
    publication: TechRepublic
  - text: Census toolkit gives agencies what they need to launch data sprints with industry
    href: https://federalnewsnetwork.com/big-data/2020/12/census-toolkit-gives-agencies-what-they-need-to-launch-data-sprints-with-industry/
    date: December 9th, 2020
    publication: Federal News Network
  - text: Winners of HHS Design-a-thon to Develop Innovative Digital Health Tools for COVID-19 At-Anywhere Diagnostic Tests Announced
    date: December 17th, 2020
    publication: HHS News
    href: https://www.hhs.gov/about/news/2020/12/16/winners-of-hhs-design-a-thon-to-develop-innovative-digital-health-tools-for-covid-19.html
  - text: Building with our friends at The Opportunity Project
    href: https://www.mapbox.com/blog/building-with-our-friends-at-the-opportunity-project
    date: December 8th, 2020
    publication: Mapbox Blog
  - text: U.S. Census Bureau Rolls Out Innovation Tools for 2020 Count
    date: December 11, 2019
    publication: GovTech
    href: https://www.govtech.com/civic/US-Census-Bureau-Rolls-Out-Innovation-Tools-for-2020-Count.html
    details: Stakeholders both inside and outside of the federal agency attended a recent demo day at the bureau's headquarters, discussing the roll that data maps, human-centric design and more will play in next year’s count.
    img: photos/news/cleveland-map.png
    alt: A map of Cleveland, Ohio's neighborhoods and districts
  - text: SAP Showcases Circular Economy Solution for Cities at The Opportunity Project
    date: December 7th, 2020
    publication: SAP News
    href: https://news.sap.com/2020/12/opportunity-project-circular-economy-chicago/
  - text: Public Health + Open Source Data Recap
    date: November 11th 2020
    publication: Orange Sparkle Ball Blog
    href: https://www.orangesparkleball.com/0_blog/2020/11/20/public-health-open-source-data-recap
  - text: Census’ DEMO WEEK to highlight environmental tech
    date: December 1st, 2020
    publication: Cache Valley Daily
    href: https://www.cachevalleydaily.com/news/archive/2020/12/01/census-demo-week-to-highlight-environmental-tech/#.YBgVhndKhTZ
#   - text: The Opportunity Project helps create tools and solutions to environmental challenges
#     date: December 1st, 2020
#     publication: Lake County News
#     href: https://www.lakeconews.com/news/67446-the-opportunity-project-helps-create-tools-and-solutions-to-environmental-challenges

# The Opportunity Project Marks 100 Product Milestone
# March 4, 2020
# MeriTalk

# U.S. Census Bureau’s Technology Demo Day Unveils Innovation Data Tools
# January 29, 2020
# Census.gov

# How Communities Can Benefit from Amazon’s Great Data Caper
# January 6, 2020
# Governing

# Census Bureau Showcases Data Projects to Optimize 2020 Population Count
# December 16, 2019
# Federal News Network



---

{% include hero.html %}
{% include connecting-banner-with-subheader-inverse.html %}
{% include grid-section.html content=page.featured-images children="news.html" %}
{% include grid-section.html content=page.blurbs children="news-blurbs.html" %}