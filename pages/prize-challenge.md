---
title: Prize Challenge
permalink: /prize-challenge/
layout: default
class: prize

challenge-gov: https://www.challenge.gov/challenge/open-data-for-good-grand-challenge/
submission-checklist: xyz

hero:
  text: Win Funding to Scale Your Technology
  subtext: 'The [Open Data For Good Challenge](https://www.challenge.gov/challenge/open-data-for-good-grand-challenge/){: .usa-link } is now live. Awarding at least $100,000 to teams using The Opportunity Project process.'

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
    - prize/top-grand-challenge-background-01.jpg  

timeline:
  - text: July 1st - Prize Opens on Challenge.gov
    subtitle:  July 1st, 2021
    items:
      - text: Info Session, July 14th
      #   href: http://bit.ly/ODFGGCWebinar1
      - text: Q+A Session, July 24th
        href: http://bit.ly/ODFGGCWebinar1
  - text: Prize Submission Opens
    subtitle: September 13th, 2021
    items:
    - text: Application Review, July 14th
      # href: http://bit.ly/ODFGGCWebinar1
  - text: Prize Submission Deadline
    subtitle: October 18th, 2021
  - text: Judging Process
    subtitle: November
  - text: Winners Announced
    subtitle: December - January


about:
  title: How It All Started
  heading-level: 3
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
  - title: Civic Impact
  - title: Creativity

judging:
  title: Judged by Experts
  heading-level: 3
  grid-gap-lg: true
  skip-top-border: true
  skip-bottom-border: true
  left-col: prize-challenge/graphs-with-text.md
  right: 
    - body: Products in our first competition were scored for their creativity, user-friendliness, and potential for civic impact by panels of product, data, and policy specialists from private industry and government.

judge-photo: 
  src: prize/02_Judges_prize-winner.jpg
  alt: a man and woman handing a $20k check from The Opportunity Project to a woman on a stage
  caption: '2019 Prize Challenge Winner, Social Science Research Council, pictured with Ron Jarmin, Acting Director of the U.S. Census Bureau'

past-title: Past Prize Challenge

winners:
  title: Past Winners
  # subtext: '$100k awarded in The Opportunity Project’s inaugural Prize Challenge.<br/> 
  # See [challenge.gov](https://www.challenge.gov/challenge/opportunity-project-prize/) for challenge details.'

---

{% include hero.html %}
{% include event-announcement.html data=page.event-announcement%}

{::options parse_block_html="true" /}
<section class="grid-section margin-top-6 margin-bottom-15 padding-y-3 width-full maxw-full margin-x-0">
  <div class="maxw-tablet margin-x-auto">

### What is It?
{: .section-header }

The Open Data for Good Grand Challenge is a set of cash and in-kind prizes being awarded to teams who have created high-impact digital tools that solve problems for the public.

Please visit the official [challenge.gov posting]({{ page.challenge-gov }}) for the full rules and application requirements.

[View the rules]({{ page.challenge-gov }}){: .btn-link .btn-link__primary-red .btn-link--small .margin-top-0 .margin-left-0}
{: .margin-top-0 }

### What Can You Win?
{: .section-header .margin-top-6 }

Prizes range from $10,000 to $50,000 with additional prizes expected to be announced!  
We're looking for tools that into one of these categories:
- Climate, Reslience and The Natural Environment
- Society, Economy, and the Built Environment
- Health and COVID-19

### What Do You Have To Do?
{: .section-header .margin-top-6 }
1. Create a product using the [TOP Product Development Toolkit](/product-development/toolkit/) or by participating in a [TOP or TOPx Sprint](/sprints) between January 1st, 2020 and October 18th, 2021
2. Attend an informational session (optional)
3. Submit your application by the deadline via email and a short submission form

Submissions are open from September 12, 2021 – October 15, 2021
{: .usa-alert .usa-alert--warning .usa-alert--no-icon .padding-left-2 }

<!-- Before you submit your application, please review the submission checklist.
[Submission Checklist (.docx) &darr;]({{ page.submission-checklist }}){: download .btn-link .btn-link__secondary-red .btn-link--small .margin-top-2 .margin-left-0 } -->

### Timeline
{: .margin-top-6 .margin-bottom-0 }
{% include process-list.html data=page.timeline %}

{::options parse_block_html="false" /}
<figure>
  {% include image.html src=page.judge-photo.src alt=page.judge-photo.alt class="border-1px" %}
 <figcaption>{{ page.judge-photo.caption }}</figcaption>
</figure>

  </div>
</section>

<section class="usa-section usa-section--dark bg-base-darkest border-bottom-1px">

  <h2 class="text-center">
    {{ page.past-title }}
  </h2>

  {% include two-column-markdown.html content=page.about %}
  {% include two-column-markdown.html content=page.judging %}

  <div class="grid-section margin-bottom-6">
    <h3 class="margin-bottom-0 section-header section-header--light">{{ page.winners.title }}</h3>
    {% assign winners = site.data.products | where_exp: "item", "item.prize_status == 'Winner'" %}
    {% for winner in winners %}
      {% include prize-winner-product.html content=winner %}
    {% endfor %}
  </div>

  
</section>