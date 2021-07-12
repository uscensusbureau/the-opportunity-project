---
title: Prize Challenge
permalink: /prize-challenge/
layout: default

challenge-gov: https://www.challenge.gov/challenge/opportunity-project-prize/
submission-checklist: xyz

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

timeline:
  - text: Prize Opens on Challenge.gov
    subtitle:  July 1st, 2021
    items:
      - text: Info Session, July 14th
        href: http://bit.ly/ODFGGCWebinar1
      - text: Q+A Session, July 24th
        href: http://bit.ly/ODFGGCWebinar1
  - text: Prize Submission Opens
    subtitle: September 13th, 2021
    items:
    - text: Application Review, July 14th
      href: http://bit.ly/ODFGGCWebinar1
  - text: Prize Submission Closes
    subtitle: September 13th, 2021
  - text: Judging Process
  - text: Winners Announced


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

{::options parse_block_html="true" /}
<section class="grid-section margin-top-10 margin-bottom-15 padding-y-3 width-full maxw-full margin-x-0">
  <div class="maxw-tablet margin-x-auto">

### What is it?
{: .section-header }

The Open Data for Good Grand Challenge seeks to reward the most creative and high impact uses of open data in digital tools that solve problems for the public.
{: .text-thin .text-italic }

This Grand Challenge was inpsired by The Opportunity Project (TOP), a program of Census Open Innovation Labs at the U.S. Census Bureau used by federal agencies to catalyze digital tools with open data.

[View the rules]({{ page.challenge-gov }}){: .btn-link .btn-link__primary-red .btn-link--small .margin-top-0 .margin-left-0}
{: .margin-top-0 }

### What Can You Win?
{: .section-header }

Prizes range from $20,000 to $100,000 with more to be announced.  
We're looking for tools that into one of these categories:
- Climate Reslience and The Natural Environment
- Society, Economy, and the Built Environment
- Health and COVID-19

### What Do You Have To DO?
{: .section-header }
1. Create a product using the [TOP Product Development Toolkit](/product-development/toolkit/) or by participating in a [TOP Sprint](/sprints)
2. Attend an informational session (optional)
3. Submit your application by email and submission form

Submissions for the Open Data for Good Grand Challenge 2021 open on September 12, 2021 at 9:00 AM ET and close on October 15, 2021 at 11:59 PM ET
{: .usa-alert .usa-alert--warning .usa-alert--no-icon .padding-left-2 }

Before you submit your application, please review the submission checklist.
[Submission Checklist (.docx) &darr;]({{ page.submission-checklist }}){: download .btn-link .btn-link__secondary-red .btn-link--small .margin-top-2 .margin-left-0 }

### Timeline
{% include process-list.html data=page.timeline %}

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