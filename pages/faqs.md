---
title: FAQs
permalink: /faqs/
layout: default-internal-page

hero:
  text: FAQs
  subtext: Answers to the questions we hear most frequently.

banner-subheader:
  top:
    background: base-darkest
    line: '-light'
  bottom:
    background: white

first:
  skip-top-border: true
  left: 
    - title: Who runs this program?
      body: The Opportunity Project is a program managed by the Census Open Innovation Labs, part of the U.S. Census Bureau. [Learn more about COIL](../coil).
    - title: How long has TOP been around?
      body: TOP has been operating since its [launch in 2016](https://obamawhitehouse.archives.gov/the-press-office/2016/10/06/fact-sheet-opportunity-project-unleashing-power-open-data-build#:~:text=The%20President%20launched%20the%20Opportunity,%2C%20quality%20schools%2C%20and%20jobs.).
    - title: Who owns the resulting products? 
      body: The products created through TOP sprints are owned and maintained by the technology developers who built them. In other words, the government agencies involved do not own and maintain these products. Teams can choose their approach after the sprint, often including taking them to market, open sourcing, or handing them off to partners.
  right:
    - title: How do you select participants?
      body: Participation in The Opportunity Project takes many forms and is open to the general public. Problem statements are sourced through a government-wide intake process.  Most of our workshops (around the country and now virtual) are open for public registration and advertised widely.  Our sprint participants are selected based on interest, bandwidth, and alignment with specific problem statements.  We select judges for our prize competitions based on expertise, and anyone who has completed TOP’s toolkit or sprint process are eligible to apply. [Learn more about how to get involved](../get-involved) and [the roles in our sprints](../our-process/#roles).

second-section:
  left-include: faqs/similars.md
  skip-top-border: true
  right: 
    - title: Does this cost money?
      body: TOP is a lightweight process by design.  Attending our events, participating in our sprints and challenges does not cost money. It is free and open for nonprofits, companies, civic tech groups, and agencies to get involved. Our [TOPx toolkit](../topx-toolkit/introduction) is now open to all federal agencies and interested stakeholders.  Receiving technical assistance from our team specifically to launch TOPx in other federal agencies may require an interagency agreement. [Please contact us for details](mailto:census.opportunityproject@census.gov).
    - title: How can I get involved? 
      body: Check out our [Get Involved page](../get-involved) to see if there is an active sprint running, and if not, [sign up to receive updates](https://public.govdelivery.com/accounts/USCENSUS/signup/16610) about upcoming sprints and opportunities to engage with us. 

third-section:
  left-include: faqs/timeline.md
  skip-top-border: true
  skip-bottom-border: true
  right: 
    - title: Does participation in The Opportunity Project take place in-person or remotely?
      body: Most of TOP is virtual, with the exception of in-person user engagement workshops and our end of year Demo Day in Washington DC. _Currently due to COVID-19, 100% of TOP is virtual in 2021._ 
    - title: If I join an Opportunity Project sprint, what am I signing up for?
      body: What you’ll be doing in the sprint varies on your role. [Tech teams](../our-process/#tech-teams) are signing up to build a product or feature — whether new or within an existing  product or platform — that uses open data to solve one of our sprint problem statements. [User advocates](../our-process/#user-advocates) are signing up to give feedback and ensure the products built are meeting real community needs. Data experts are signing up to give feedback and share insights on federal open data sets. [Product advisors](../our-process/product-advisors) are signing up to help tech teams develop products with a viable long term strategy. [Learn more about each role](../our-process/#how-it-works).


---

{% include hero.html %}
{% include connecting-banner-with-subheader.html %}
{% include two-column-markdown.html content=page.first %}

{% capture left-mid %}
  {% include_relative {{ page.second-section.left-include }} %}
{% endcapture %}
{% include two-column-markdown.html content = page.second-section left-col = left-mid %}

{% capture right-mid %}
  {% include_relative {{ page.third-section.left-include }} %}
{% endcapture %}
{% include two-column-markdown.html content = page.third-section left-col = right-mid %}

<br>
<br>