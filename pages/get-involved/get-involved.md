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
  background-class: bg-primary
  id: prize-challenge
  container-class: maxw-desktop
  title: 
    text: Watch The Opportunity Project Summit
  body: '[The Opportunity Project Summit 2021: Open Innovation For All](https://www.youtube.com/watch?v=Bz56ED2TT30&t=11730s) was a multi-day virtual conference that showcased work accomplished through TOP’s 2021 sprints. The event also featured conversations with leading experts and grassroots community members, provided hands-on learning opportunities for attendees, and announced the winners of the [Open Data For Good Challenge.](https://opportunity.census.gov/prize-challenge/)'

  primary:
    text: Watch the Event
    href: https://www.youtube.com/watch?v=Bz56ED2TT30&t=11730s
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

<!--hard coded (emulating prize-challenge.md)-->
{::options parse_block_html="true" /}
<section class="usa-section">
  <div class="grid-container maxw-desktop">
  
### Adapt The Opportunity Project Framework
{: .section-header }

Not able to join a TOP sprint? Use our toolkits – based on the TOP sprint model – to create civic impact with open data. 

The [product development toolkit](https://opportunity.census.gov/product-development/toolkit/) can help technologists use the TOP framework to build digital tools for the American people. We cover user research, navigating federal data, and more. Civic tech organizations, coding boot camps, community organizations, and educators have all adopted the product development toolkit to create human-centered tools.

The [TOPx toolkit](https://opportunity.census.gov/topx-toolkit/introduction/) enables government agencies to facilitate TOP sprints on a flexible and modifiable timeline. The toolkit includes a detailed step by step guide. Local, state, and federal government agencies have all successfully used the toolkit as a playbook to run their own sprints.

<br>

### Compete for Prize Funds
{: .section-header }

If your team participates in a TOP sprint or uses the [product development toolkit](https://opportunity.census.gov/product-development/toolkit/), you may be eligible to apply for the annual Open Data for Good Grand Challenge. Submissions for the 2021 Open Data For Good Challenge are now closed, but stay tuned for our announcement of this year’s winners and news of next year’s challenge by visiting the [prize challenge page](https://opportunity.census.gov/prize-challenge).


{::options parse_block_html="false" /}
  </div>
</section>
<!--hard coded (emulating prize-challenge.md)-->

{% capture left-join %}
  {% include image.html src="photos/get-involved/arrow.jpg" alt="Illustration of an arrow pointing to the right over a navy blue field" %}
{% endcapture %}
{% capture right-join %}
  {% include_relative {{ page.join.right-col }} %}
{% endcapture %}
{% include two-column-markdown.html content=page.join left-col=left-join right-col=right-join %}
