---
permalink: /hcd/
title: "Human Centered Design Certificate"
#class and layout determines page structure. Do not edit except for major updates!
layout: default
class: hcd

# full span, top of page section
hero:
  text: "Learn the foundations of human-centered design."
  subtext: The Census Open Innovation Labs invites you to a master class in Human-Centered Design, a revolutionary methodology for understanding what people need and building effective solutions.

circuit-banner:
  background-color: primary
  image: icons/circuity-pattern.svg
  sidebar-color: base-darkest


# content centered with outline, on blue background
callout:
  text: What is Human Centered Design (HCD)?
  body:
    # for each separate portion of text, add a "p" (short for paragraph)
    - p: Human-Centered Design is a proven, research-backed approach to problem solving and idea generation that organizations from all industries – including across the federal government – are using to deliver improved services, experiences and products for customers, users, and respondents. HCD emphasizes building and practicing what works for the customer -- whether us at the Bureau, respondents, or data users -- based on direct person-to-person research, not based on assumptions or the way we’ve always done it.


#white background section
content-light:
  title:
  description:
    -





---

{% include hero.html %}
{% include circuit-banner.html %}
{% include text-callout-centered.html content=page.callout %}
{% include hcd-training.html %}
