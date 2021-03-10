---
title: Sprints
permalink: /sprints/
class: sprints
layout: default

# full span, top of page section
hero:
  text: Sprints
  subtext: 
    - p: Learn about past sprints and how we’ve tackled national challenges.  
    - p: Sprints are [12-week product development cycles](/our-process/) that bring together tech teams and collaborators to build public-facing digital products using open data.

banner-subheader:
  top:
    background: base-darkest
    line: '-light'
  bottom:
    subheader: Featured Sprints
    subheader-transparent: true
    background: white

bottom-subheader:
  top:
    background: white
  bottom:
    subheader: Past Challenges
    line: '-light'
    background: base-darkest

---
{% include hero.html %}
{% include connecting-banner-with-subheader.html %}
{% include cards/card-list.html cards=page.sprint-cards %}
{% for sprint in site.sprints %}
  <li>
    <h2><a href="{{ sprint.url }}">{{ sprint.name }}</a></h2>
    <h3>{{ sprint.year }}</h3>
    <p>{{ sprint.content | markdownify }}</p>
  </li>
{% endfor %}
{% include connecting-banner-with-subheader.html data=page.bottom-subheader %}
{% include single-column-centered-list-dark.html %}