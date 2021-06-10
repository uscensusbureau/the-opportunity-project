---
title: Prize Challenge
permalink: /prize-challenge/
layout: default

hero:
  text: Prize Challenge
  subtext: Win funding to scale your solution and deliver impact

banner-subheader:
  top:
    background: base-darkest
    line: '-light'

about:
  title: About the Prize
  left-col-width: '4'
  left-col-offset: 1
  right-col-width: '5'
  right-col-offset: 1
  skip-top-border: true
  skip-bottom-border: true
  left-col: prize-challenge/circle-logo.md
  right:
    - body: '*In 2019, we launched The Opportunity Project Prize Challenge, the Census Bureau’s first ever prize competition, which awarded $100,000 in funding across 5 teams.*'
    - title: Why the Prize was Launched
      body: After 4 years of TOP, in 2019 we created the TOP  prize challenge to help address the challenges technologists face in deploying and sustaining civic tech products.  The prize challenge aimed to support technologists in getting their solutions into the hands of communities around the country.

graphs:
  - title: User Friendly
    percent: 33
    color: base-dark
  - title: Civic Impact
    percent: 85
    color: '#fed585'
  - title: Creativity
    percent: 50
    color: primary-light

judging:
  title: Judged by Experts
  grid-gap-lg: true
  skip-top-border: true
  skip-bottom-border: true
  left-col: prize-challenge/judges-photo.md
  right-col: prize-challenge/graphs-with-text.md

callout:
  text: Apply for the Prize (Coming Soon)
  subtext: If your team participated in an Opportunity Project sprint or utilized the toolkit, you may be eligible to apply for the prize competition. Application rules change every year, so stay in the loop by [signing up for updates about the Prize Challenge](https://public.govdelivery.com/accounts/USCENSUS/signup/16610).

winners:
  title: Past Winners
  subtext: $100k awarded in The Opportunity Project’s inaugural Prize Challenge. See [challenge.gov](https://www.challenge.gov/challenge/opportunity-project-prize/) for challenge details.

---

{% include hero.html %}
{% include connecting-banner-with-subheader.html %}

{% capture text %}
## The Open Data for Good Grand Challenge 2021 is now live

The Opportunity Project is thrilled to announce the release of the Open Data for Good Grand Challenge 2021, which provides a vehicle for technologists and promising technology and community partnerships from 2020-2021 TOP Sprints to compete for monetary and in kind awards to deploy tools to end users, expand product reach, and continue to deliver impact on critical problems facing the public.

The rules are now live! Please see all the details on [insert challenge.gov link]. 

### Overview
- **What:** Open Data for Good Grand Challenge
- **Awards:** $250,000+ in Monetary Awards/In Kind Awards 
- **Type of Challenge:** Software/Apps
- **Rules Posted:** June 22, 2021 
- **Submission Start:** September 13, 2021 9 a.m. ET
- **Submission End:** October 15, 2021 11:59 p.m. ET
{: .add-list-reset }

### Who’s Eligible?
This challenge will be open to:
- Technology teams, technology and community partnerships (tech teams and user advocate group(s) or other community groups) or individuals that have built tools with open data through 2020-2021 facilitated sprints or agency facilitated TOPx sprints, OR those who
- Utilized The Opportunity Project’s [Product Development Toolkit]({{site.baseurl}}/product-development/toolkit/), which provides a replicable, step-by-step guide for scaling this process on your own

### Want to learn more?
The Opportunity Project Team will be hosting an informational webinar for individuals and teams interested in applying.

- **What:** Informational Webinar on the Open Data for Good Grand Challenge
- **Who:** Anyone Interested in Applying 
- **When:** June 30th, 2021
- **Time:** 2-3pm ET
{: .add-list-reset }

[RSVP](http://bit.ly/ODFGGCWebinar1){: .margin-top-0 .btn-link__primary-red .btn-link--small }

Questions? Email [topprize@census.gov](mailto: topprize@census.gov)
{% endcapture %}
<section class="grid-section">
  {{ text | markdownify }}
</section>

{% include two-column-markdown.html content=page.about %}
{% include two-column-markdown.html content=page.judging %}
{% include text-callout-centered.html content=page.callout %}

<div class="text-center margin-bottom-6">
  <h2 class="text-base-darkest margin-bottom-0">{{ page.winners.title }}</h2>
  <div class="maxw-tablet margin-x-auto">
    {{ page.winners.subtext | markdownify }}
  </div>
</div>

{% assign winners = site.data.products | where_exp: "item", "item.prize_status == 'Winner'" %}
{% for winner in winners %}
  {% include prize-winner-product.html content=winner %}
{% endfor %}