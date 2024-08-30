---
title: About
class: about
permalink: /about/
layout: default

# hero section
background: banner-background
hero:
  text: About TOP
  subtext: Learn more about The Opportunity Project program and initiatives.

# how it works
how-it-works:
  - text:
      title: About
      blurb: |-
        The Opportunity Project (a.k.a. ‘TOP’) engages technologists, government, and communities to prototype digital products that solve real-world problems with open data. It operates through 12-14 week technology design sprints, focused on the nation’s toughest challenges, from the opioid crisis and disaster relief to improving STEM education and workforce development. To date, over 200 digital products have been created, using open data to serve families, businesses, local leaders, and communities nationwide.<br><br>


        TOP addresses broad national challenges as well as specific community and regional challenges, such as those facing Puerto Rico or Indigenous Communities.


#roles
roles-intro:
  - text:
      title: Our History
      blurb: |-
        TOP launched in March 2016 as a White House initiative to put data and tools in the hands of the American people to help them navigate critical issues facing the nation. In 2017, the U.S. Department of Commerce took up leadership of TOP, led by the U.S. Census Bureau’s Census Open Innovation Labs. Since then, the program has grown in scope and impact, and is now a widely used model for collaborative problem solving through open data, technology, and human-centered design.<br><br>

        Since its launch, TOP’s participants have created hundreds of digital products. Today, TOP has been referenced as a best practice in policies like the Federal Data Strategy, the President’s Management Agenda, performance.gov, Department of Commerce’s Strategic Plan, the Task Force on Agriculture and Rural Prosperity Report, and many others. It is a key mechanism supporting implementation of the Foundations for Evidence Based Policy Making Act (“The Evidence Act”).


    download:
      link: |-
        [Have more questions? Visit our FAQ page](https://federalist-9ba9ab66-1882-44c4-b8df-e5444939133c.sites.pages.cloud.gov/preview/uscensusbureau/the-opportunity-project/sadiejay-update-sprint/sprints/)
    custom:
      class: test

---

{% include hero.html %}
<section class="bg-blue how-it-works-bg md">
  <div class="header-text-hot-dog">
{% include single-column-header-text-hot-dog-cta.html data=page.how-it-works %}
  </div>
</section>

<section class="bg-blue roles-intro-bg" id="roles-intro">
  <div class="header-text-hot-dog">
    {% include single-column-header-text-hot-dog-cta.html data=page.roles-intro %}
  </div>
</section>