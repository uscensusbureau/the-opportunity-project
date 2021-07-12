---
title: Prize Challenge
permalink: /prize-challenge/
layout: default

challenge-gov: https://www.challenge.gov/challenge/opportunity-project-prize/

hero:
  text: Win Funding to Scale Your Technology
  subtext: 'The [Open Data For Good Challenge](https://www.challenge.gov/challenge/opportunity-project-prize/){: .usa-link } is now live. Win up to $100,000 by using The Opportunity Project process.'

banner-subheader:
  top:
    background: base-darkest
    line: '-light'

event-announcement:
  title:
    - Open Data
    - For Good
    - Grand Challenge
  cta: NOW LIVE
  img: 
    - photos/sprints/landing/Post-COVID.jpg  

callout: 
  content: prize-callout.md


about:
  title: How the Prize Challenge Began
  left-col-width: '4'
  left-col-offset: 1
  right-col-width: '5'
  right-col-offset: 1
  skip-top-border: true
  skip-bottom-border: true
  left-col: prize-challenge/circle-logo.md
  right:
    - body: '*In 2019, we launched The Opportunity Project Prize Challenge. The Census Bureau’s first ever prize competition, it awarded $100,000 in funding across 5 teams.*'
    - title: Why the 2019 Prize was Launched
      body: After 4 years of TOP, we created the TOP  prize challenge to help address the challenges technologists face in deploying and sustaining civic tech products.  The prize challenge aimed to support technologists in getting their solutions into the hands of communities around the country.

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
{% include event-announcement.html data=page.event-announcement%}

<!-- {% include text-callout-centered.html content=page.callout %} -->

{::options parse_block_html="true" /}
<section class="grid-section margin-top-0 margin-bottom-15 padding-y-3 width-full maxw-full split-background-primary margin-x-0">
  <div class="usa-media-block__body-outlined--secondary secondary-callout">
## Upcoming Webinars
{: .section-header }

The Opportunity Project team will be hosting a series of informational webinars for individuals and teams interested in applying to the Open Data for Good Grand Challenge. Learn more about the prize and how to prepare your submission.

### Overview and Q&A
July 14th 2:00 - 3:00 PM ET
{: .margin-bottom-05 }

[RSVP](http://bit.ly/ODFGGCWebinar1){: .btn-link .btn-link__primary-red .btn-link--small .margin-top-0 .margin-left-0}
{: .margin-top-0 }

### Overview and Submission Feedback

July 28th 2:00 - 3:00 PM ET

August 11th 2:00 - 3:00 PM ET

September 1st 2:00 - 3:00 PM ET
  </div>
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