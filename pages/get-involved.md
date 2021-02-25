---
title: Get Involved
permalink: /get-involved/
class: get-involved
layout: default

# full span, top of page section
hero:
  text: Get Involved
  subtext: Join our community of innovators working to turn federal open data into technologies that solve real-world problems for people across the country.

# connecting-banner-with-subheader-inverse.html
banner-subheader-inverse:
  top:
    background: base-darkest
    line: '-light'
  bottom:
    background: white

content-light:
  title: Participate in TOP
  skip-top-border: true
  body: Sprints are 12-week product development cycles where we bring together tech teams and collaborators to build digital products using open data.
  left-col: get-involved/participate-left.md
  right-col: get-involved/participate-right.md


callout:
  id: asa
  text: Participate in the American Statistical Association Data Challenge Expo
  markdownSrc: get-involved/get-involved-callout.md

join:
  title: Stay in the Loop
  skip-top-border: true
  left-col: get-involved/in-the-loop-left.md
  right-col: get-involved/in-the-loop-right.md

# get involved
get_involved:
  title-image: photos/get-involved/get-involved.png
  title-image-alt: Man speaking into microphone at a user engagement workshop hosted by The Opportunity Project
  title: Stay Informed
  subtitle:
    - p: Join a community of hundreds working to transform America’s data into America’s innovation.
    - p: Tell us what you’re interested in. We’ll keep you posted about opportunities to join a sprint, attend an event, and more.
  buttons:
    - b: Get Updates
      style: secondary dark
      link: https://public.govdelivery.com/accounts/USCENSUS/signup/16610
  text:
    - number: 1
      number_display: false
      title: Build with open data
      subtitle: TOP Product Development Toolkit
      link: ../product-development/toolkit
      description: 'Not able to join a TOP sprint? Use our product development toolkit—based on the TOP sprint model—to create civic impact with open data. We cover user research, navigating federal data, and more.'
    - number: 2
      number_display: false
      title: Run a TOPx sprint
      subtitle: TOPx Toolkit for Federal Agencies
      link: ../topx-toolkit/introduction/
      description: 'Are you a federal agency looking to adopt The Opportunity Project model? Use our TOPx toolkit—a step-by-step resource complete with sample materials—to help run your own TOP sprint.'

---
{% include hero.html %}
{% include connecting-banner-with-subheader-inverse.html %}

{% capture left-col %}
  {% include_relative {{ page.content-light.left-col }} %}
{% endcapture %}
{% capture right-col %}
  {% include_relative {{ page.content-light.right-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.content-light %}

{% include text-callout-centered.html content=page.callout %}

{% capture left-join %}
  {% include_relative {{ page.join.left-col }} %}
{% endcapture %}
{% capture right-join %}
  {% include_relative {{ page.join.right-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.join left-col=left-join right-col=right-join %}
