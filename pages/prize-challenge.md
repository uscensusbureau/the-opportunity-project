---
title: Prize Challenge
permalink: /prize-challenge/
layout: default-internal-page

hero:
  text: Prize Challenge
  subtext: Win funding to scale your solution and deliver impact

about:
  title: About the Prize
  left-col-width: '3'
  left-col-offset: 1
  right-col-width: 6
  right-col-offset: 1
  skip-top-border: true
  skip-bottom-border: true
  left:
    - body: '![Illustration of an arrow pointing to the right over a navy blue field]({{ site.baseurl }}/img/photos/get-involved/arrow.jpg)'
  right:
    - body: '*In 2019, we launched The Opportunity Project Prize Challenge, the Census Bureau’s first ever prize competition, which awarded $100,000 in funding across 5 teams.*'
    - title: Why the Prize was Launched
      body: After 4 years of TOP, in 2019 we created the TOP  prize challenge to help address the challenges technologists face in deploying and sustaining civic tech products.  The prize challenge aimed to support technologists in getting their solutions into the hands of communities around the country.

judging:
  title: Judged by Experts
  skip-top-border: true
  skip-bottom-border: true
  left:
    - body: PUT PHOTO HERE
  right:
    - body: Products in our first competition were scored for their creativity, user-friendliness, and potential for civic impact by panels of product, data, and policy specialists from private industry and government.

callout:
  text: Apply for the Prize (Coming Soon)
  subtext: If your team participated in an Opportunity Project sprint or utilized the toolkit, you may be eligible to apply for the prize competition. Application rules change every year, so stay in the loop by [signing up for updates about the Prize Challenge]().

winners:
  title: Past Winners
  subtext: $100k awarded in The Opportunity Project’s inaugural Prize Challenge. 
  fineprint: See [challenge.gov](https://www.challenge.gov/challenge/opportunity-project-prize/) for challenge details.

---

{% include hero.html %}
{% include two-column-markdown.html content=page.about %}
{% include two-column-markdown.html content=page.judging %}
{% include text-callout-centered.html %}

{% assign yearlyWinners = site.data.products | where_exp: "prize_status", "prize_status != 'nil'" %}
{{ site.data.products.size }}
{{ yearlyWinners.size }}