---
title: Get Involved
permalink: /get-involved/
class: get-involved
layout: default

# full span, top of page section
hero:
  text: Ready to Solve the Nation’s Greatest Challenges?
  subtext: Join our community of innovators using government data to build digital tools with, by, and for the people. We offer ongoing opportunities to connect to The Opportunity Project throughout the year. 

# connecting-banner-with-subheader-inverse.html
banner-subheader-inverse:
  top:
    background: base-darkest
    line: '-light'
  bottom:
    background: white

content-light:
  title: Get Started with The Opportunity Project
  skip-top-border: true
  skip-bottom-border: true
  body: Sprints are 12-week product development cycles that bring government agencies, technologists, community leaders, and data experts together to rapidly design digital solutions for the public good. TOP sprints typically begin in late summer or early fall and culminate at the annual TOP Summit in mid-December. 
  right-col: participate-right.md

join:
  title: Stay in the Loop
  skip-top-border: true
  skip-bottom-border: true
  right-col: in-the-loop-right.md

callout:
  id: prize-challenge
  container-class: maxw-desktop
  title: 
    text: Attend The Opportunity Project Summit
  body: '[The Opportunity Project Summit 2021: Open Innovation For All](http://bit.ly/TOPSummit2021) is a multi-day virtual conference to showcase the work accomplished through TOP’s 2021 sprints, feature other innovative technology and data products, host conversations with leading experts and grassroots community members, provide hands-on learning opportunities for attendees, and announce the winners of the [Open Data For Good Challenge.](https://opportunity.census.gov/prize-challenge/)


December 13–15, 2021 from 12–5p.m. ET'
  primary:
    text: RSVP to Attend
    href: http://bit.ly/TOPSummit2021
    isExternal: true

---
{% include hero.html %}
{% include connecting-banner-with-subheader-inverse.html %}

{% capture left-col %}
  {% include image.html src="photos/get-involved/stickies.jpg" alt="Image of a man at a table with sticky notes" %}
{% endcapture %}
{% capture right-col %}
  {% include_relative {{ page.content-light.right-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.content-light left-col=left-col%}

{% include home/cta.html data=page.callout %}

{% capture left-join %}
  {% include image.html src="photos/get-involved/arrow.jpg" alt="Illustration of an arrow pointing to the right over a navy blue field" %}
{% endcapture %}
{% capture right-join %}
  {% include_relative {{ page.join.right-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.join left-col=left-join right-col=right-join %}
