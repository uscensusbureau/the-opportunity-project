---
title: Prize Challenge
permalink: /prize-challenge-2/
layout: default

hero:
  text: Prize Challenge
  subtext: Win funding to scale your solution and deliver impact

banner-subheader:
  top:
    background: base-darkest
    line: '-light'

about:
  title: About the 1st Inaugural Prize Challenge in 2019
  left-col-width: '4'
  left-col-offset: 1
  right-col-width: '5'
  right-col-offset: 1
  skip-top-border: true
  skip-bottom-border: true
  left-col: prize-challenge/circle-logo.md
  right:
    - body: '*In 2019, we launched The Opportunity Project Prize Challenge, the Census Bureau’s first ever prize competition, which awarded $100,000 in funding across 5 teams.*'
    - title: Why the 2019 Prize was Launched
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

winners:
  title: Past Winners
  subtext: $100k awarded in The Opportunity Project’s inaugural Prize Challenge. See [challenge.gov](https://www.challenge.gov/challenge/opportunity-project-prize/) for challenge details.

---

{% include hero.html %}
{% include connecting-banner-with-subheader.html %}

{::options parse_block_html="true" /}
<section class="grid-section margin-bottom-6">
## The Open Data for Good Grand Challenge 2021 is now live!
{: .line-height-sans-4 .section-header }

If you participated in a TOP or TOPx Sprint or used our Product Development Toolkit to create a technology solution in 2020 or 2021, you could be eligible for $250,000+ of monetary and in-kind awards.

The full challenge rules will post on June 22, 2021, submissions open September 13, 2021 9 a.m. ET, and submissions close October 15, 2021 11:59 p.m. ET.

The rules are now live! Please see all the details on [insert challenge.gov link].

To learn more, attend [our webinar](http://bit.ly/ODFGGCWebinar1) on June 30th from 2-3pm ET.

[RSVP](http://bit.ly/ODFGGCWebinar1){: .margin-top-0 .btn-link__primary-red }

Questions? Email [topprize@census.gov](mailto: topprize@census.gov)
</section>
{::options parse_block_html="false" /}

{% include two-column-markdown.html content=page.about %}
{% include two-column-markdown.html content=page.judging %}

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