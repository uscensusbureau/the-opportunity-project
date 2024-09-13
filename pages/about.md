---
title: About
class: about
permalink: /about/
layout: default

# hero section
background: banner-background
hero:
  text: About TOP
  subtext: Learn more about The Opportunity Project program and initiatives.

# about
about:
  - text:
      title: About
      blurb: |-
        The Opportunity Project (a.k.a. ‘TOP’) engages technologists, government, and communities to prototype digital products that solve real-world problems with open data.<br><br>

         It operates through 12-14 week technology design sprints, focused on the nation’s toughest challenges, from the opioid crisis and disaster relief to improving STEM education and workforce development. To date, over 200 digital products have been created, using open data to serve families, businesses, local leaders, and communities nationwide.<br><br>

        TOP addresses broad national challenges as well as specific community and regional challenges, such as those facing Puerto Rico or Indigenous Communities.


#our history
history:
  - text:
      title: Our History
      blurb: |-
        TOP launched in March 2016 as a White House initiative to put data and tools in the hands of the American people to help them navigate critical issues facing the nation. In 2017, the U.S. Department of Commerce took up leadership of TOP, led by the U.S. Census Bureau’s Census Open Innovation Labs. Since then, the program has grown in scope and impact, and is now a widely used model for collaborative problem solving through open data, technology, and human-centered design.<br><br>

        Since its launch, TOP’s participants have created hundreds of digital products. Today, TOP has been referenced as a best practice in policies like the Federal Data Strategy, the President’s Management Agenda, performance.gov, Department of Commerce’s Strategic Plan, the Task Force on Agriculture and Rural Prosperity Report, and many others. It is a key mechanism supporting implementation of the Foundations for Evidence Based Policy Making Act (“The Evidence Act”).


    download:
      link: |-
        [Have more questions? Visit our FAQ page](https://federalist-9ba9ab66-1882-44c4-b8df-e5444939133c.sites.pages.cloud.gov/preview/uscensusbureau/the-opportunity-project/sadiejay-update-sprint/sprints/)
    custom:
      class: test

featured_products:
  - title: City Builder
    tech_team: Citi Ventures
    cohort: Workforce
    problem_statement: Opportunity Zones
    link: 'https://www.citivelocity.com/citybuilder/eppublic/cb'
    href: city-builder
    details: Provides investors, developers, municipalities, and community members with data-driven insights to make meaningful, place-based investments<br><br>
  - title: Community Led Opportunity Zones
    short_url: "/showcase/?search=community+led"
    href: "https://www.publicdemocracy.io/opportunity-zones-local-impact"
    target: '_blank'
    isExternal: true
    tech_team: PUBLIC DEMOCRACY
    details: Ensures that community priorities inform Opportunity Zones strategies, policies, and investment in Birmingham, Alabama
  - title: Inclusive Growth Score
    href: 'https://inclusivegrowthscore.com/'
    target: '_blank'
    isExternal: true
    tech_team: MASTERCARD
    details: Provides community leaders with local, data-driven insights that measure how Opportunity Zones benefit from equitable growth


---

{% include hero.html %}
<section class="bg-blue about-bg md">
  <div class="header-text-hot-dog">
{% include single-column-header-text-hot-dog-cta.html data=page.about %}
  </div>
</section>

<section class="bg-base-lighter roles-intro-bg" id="coil-intro">
<div class="grid-container display-flex">
    <div class="img-container">
      <span>{% include image.html src="top-logo-mobile.png" alt="The Opportunity Project Logo" class="logo-image logo-image-mobile" %}</span>
    </div>
    <div class="content-container">
      <p class="font-sans-lg">TOP is led by Census Open Innovation Labs (a.k.a. ‘COIL’), an office at the U.S. Census Bureau, with a portfolio of award-winning projects that continue to raise the bar for open innovation across government.</p>
      <a href="https://coil.census.gov/about/" class="text-white">Meet the COIL Team</a>
    </div>
  </div>
</section>

<section>
  <div
  class="padding-top-3 padding-bottom-9 desktop:padding-bottom-10 display-flex flex-column flex-justify-end semi-cta-block">
    <h2>Our Vision</h2>
    <div class="radius-right-pill semi-cta bg-white margin-left-4 padding-y-205">
      <div class="grid-container padding-x-4 desktop:padding-left-9 desktop:padding-bottom-3">
      <h3>Collaboration, Simplified</h3>
        <p>TOP brings together government, technologists, problem solvers, and communities. Our tested innovation framework can be used by any government agency to encourage collaboration and ensure the public is at the heart of the results. </p>
      <a href="mailto:{{ site.contacts.email }}" target="_blank"
        class="text-ink padding-y-1 margin-top-4">
        Email the TOP team.
      </a>
      </div>
    </div>
    <div class="radius-right-pill semi-cta bg-white margin-left-4 padding-y-205">
      <div class="grid-container padding-x-4 desktop:padding-left-9 desktop:padding-bottom-3">
      <h3>Federal Data, Explained</h3>
        <p>TOP unlocks the potential of open data. We believe that government data is a significantly under-tapped resource that can be transformed into products that solve important problems.</p>
      <a href="mailto:{{ site.contacts.email }}" target="_blank"
        class="text-ink padding-y-1 margin-top-4">
        Email the TOP team.
      </a>
      </div>
    </div>
    <div class="radius-left-pill semi-cta bg-white margin-left-4 padding-y-205">
      <div class="grid-container padding-x-4 desktop:padding-left-9 desktop:padding-bottom-3">
      <h3>Collaboration, Simplified</h3>
        <p>Federal Agencies can also lead their own TOP sprints using the “TOPx Toolkit” - a step-by-step guide to the TOP sprint model.</p>
      <a href="mailto:{{ site.contacts.email }}" target="_blank"
        class="text-ink padding-y-1 margin-top-4">
        Check out the TOPx Toolkit
      </a>
      </div>
    </div>
  </div>
</section>

<section class="bg-blue history-bg" id="history">
  <div class="header-text-hot-dog">
    {% include single-column-header-text-hot-dog-cta.html data=page.history %}
  </div>
</section>

<section class="bg-blue roles-intro-bg">
  <div class="grid-row grid-gap-lg
  flex-wrap flex-justify-center">
    {% for product in page.featured_products %}
    <div class="tablet:grid-col-4 usa-media-block__background-image-portrait margin-bottom-3">
      {% include cards/card.html content=product utils="small-header-card" %}
    </div>
    {% endfor %}
  </div>
</section>