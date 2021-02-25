---
title: Prize Challenge
permalink: /prize-challenge/
layout: default-internal-page

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