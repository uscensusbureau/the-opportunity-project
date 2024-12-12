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
        <b>The Opportunity Project (a.k.a. ‘TOP’) engages technologists, government, and communities to prototype digital products</b> that solve real-world problems with open data.<br><br>

         It operates through 12-14 week technology design [sprints](https://opportunity.census.gov/sprints/), focused on the nation’s toughest challenges, from the opioid crisis and disaster relief to improving STEM education and workforce development. To date, over 200 digital [products](https://opportunity.census.gov/showcase/) have been created, using [open data](https://opportunity.census.gov/data/) to serve families, businesses, local leaders, and communities nationwide.<br><br>

        TOP addresses broad national challenges as well as specific community and regional challenges, such as those facing Puerto Rico or Indigenous Communities.


#our history
history:
  - text:
      title: Our History
      blurb: |-
        <b>TOP [launched in March 2016](https://obamawhitehouse.archives.gov/the-press-office/2016/03/07/fact-sheet-white-house-launches-opportunity-project-utilizing-open-data) as a White House initiative</b> to put data and tools in the hands of the American people to help them navigate critical issues facing the nation. In 2017, the U.S. Department of Commerce took up leadership of TOP, led by the U.S. Census Bureau’s Census Open Innovation Labs. Since then, the program has grown in scope and impact, and is now a widely used model for collaborative problem solving through open data, technology, and human-centered design.<br><br>

        Since its launch, TOP’s participants have created hundreds of digital products. Today, TOP has been referenced as a best practice in policies like the [Federal Data Strategy](https://strategy.data.gov/), [President’s Management Agenda](https://www.whitehouse.gov/omb/management/pma/), [performance.gov](http://performance.gov), [Department of Commerce’s Strategic Plan](https://www.commerce.gov/about/strategic-plan), [Task Force on Agriculture and Rural Prosperity Report](https://www.usda.gov/sites/default/files/documents/rural-prosperity-report.pdf), and many others. It is a key mechanism supporting implementation of the Foundations for Evidence Based Policy Making Act (“[The Evidence Act](https://www.congress.gov/bill/115th-congress/house-bill/4174)”).


featured_products:
  - title: TOP University
    href: "files/top-university-overview.pdf"
    isExternal: false
    img:
      src: about-page/top-university-card.png
  - title: Annual Innovation Summit
    short_url: "summit"
    href: "summit/"
    img:
      src: about-page/summit-card.png
  - title: Prize Challenge
    href: 'prize-challenge/'
    isExternal: false
    img:
      src: about-page/prize-challenge-card.png


---

{% include hero.html %}
<section class="bg-blue about-bg md">
  <div class="header-text-hot-dog">
{% include single-column-header-text-hot-dog-cta.html data=page.about %}

  <div class="display-flex flex-justify-center margin-top-4">
      <a href="https://opportunity.census.gov/our-process/" target="_blank"
        class="usa-button text-ink margin-top-2 tablet:padding-y-2 padding-x-205 usa-button--outline  .outline-1px.outline-black  tablet:margin-top-4 site-button bg-white text-underline">
        Learn more about the TOP Sprint Process
      </a>
    </div>
    </div>
</section>

<section class="bg-base-lighter" id="coil-intro">
<div class="coil-intro-container display-flex margin-0 width-full">
    <div class="img-container bg-white display-flex flex-justify-center flex-align-center tablet:order-last tablet:margin-top-0 ">
    <a class="text-white" href="https://coil.census.gov/">
      <span>{% include image.html src="coil-logo-l-navy.png" alt="The Census Open Innovation Lab Logo" class="logo-image logo-image-mobile" %}</span>
      </a>
    </div>
    <div class="content-container tablet:margin-y-4">
      <p class="text-white margin-top-5 tablet:margin-top-0 margin-top-7 margin-bottom-2">TOP is led by <a class="text-white" href="https://coil.census.gov/">Census Open Innovation Labs</a> (a.k.a. ‘COIL’), an office at the U.S. Census Bureau, with a portfolio of award-winning projects that continue to raise the bar for open innovation across government.</p>
      <a href="https://coil.census.gov/about/" class="text-white">Meet the COIL Team</a>
    </div>
  </div>
</section>

<section class="vision full-width-screen-spilt bg-base-lighter">
  <div class="contained-container
  tablet:padding-top-10 desktop:padding-top-15 desktop:padding-bottom-8">
    <h2 class="desktop:padding-left-1">Our Vision</h2>
  </div>
  <div
  class="padding-top-0 padding-bottom-8 tablet:padding-bottom-10 desktop:padding-bottom-15 display-flex flex-column flex-justify-end semi-cta-block width-full">
    <div class="radius-right-pill semi-cta bg-white  padding-y-205 margin-bottom-3 padding-left-4 padding-right-6 tablet:padding-left-0 tablet:margin-bottom-6 desktop:padding-left-9 desktop:margin-bottom-6">
      <div class="grid-container padding-x-0 tablet:padding-x-9  desktop:padding-bottom-0">
      <h3>Collaboration, Simplified</h3>
        <p>TOP brings together government, technologists, problem solvers, and communities. Our tested innovation framework can be used by any government agency to encourage collaboration and ensure the public is at the heart of the results. </p>
      </div>
    </div>
    <div class="radius-right-pill semi-cta bg-white  padding-y-205 margin-bottom-4 padding-right-6 tablet:margin-bottom-9 padding-left-4 tablet:padding-left-0 desktop:padding-left-9 desktop:padding-bottom-3">
      <div class="grid-container padding-x-0 tablet:padding-x-9 desktop:padding-bottom-0">
      <h3>Federal Data, Explained</h3>
        <p>TOP unlocks the potential of open data. We believe that government data is a significantly under-tapped resource that can be transformed into products that solve important problems.</p>
      </div>
    </div>
    <div class="radius-left-pill semi-cta bg-white  padding-y-205 tablet:padding-y-2 padding-left-6 margin-left-3 flex-align-self-end">
      <div class="grid-container padding-x-4 tablet:padding-x-9 desktop:padding-bottom-3">
        <p>Federal Agencies can also lead their own TOP sprints using the TOPx Toolkit – a step-by-step guide to the TOP sprint model.</p>
      <a href="{{site.baseurl}}/topx-toolkit/" target="_blank"
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
    <div class="display-flex flex-justify-center margin-top-4">
      <a href="https://opportunity.census.gov/faqs/" target="_blank"
        class="usa-button text-ink margin-top-2 tablet:padding-y-2 padding-x-205 usa-button--outline  .outline-1px.outline-black  tablet:margin-top-4 site-button bg-white text-underline">
        Have more questions? Visit our FAQ page
      </a>
    </div>
  </div>
</section>

<section class="bg-base-lighter initiatives full-width-screen-spilt tablet:padding-top-2 desktop:padding-top-7">
  <div class="contained-container">
  <h2 class="margin-bottom-2 tablet:margin-bottom-4 desktop:margin-bottom-8 text-center">Our Initiatives</h2>
  <div class="initiatives-container grid-row grid-gap-lg
  flex-wrap flex-justify-center tablet:margin-bottom-3 desktop:margin-bottom-6">
    {% for product in page.featured_products %}
    <div class="usa-media-block__background-image-portrait margin-bottom-4">
      {% include cards/card.html content=product utils="small-header-card bg-white" %}
    </div>
    {% endfor %}
  </div>
  </div>
  <div
  class="width-full tablet:margin-top-105 desktop:margin-top-0 padding-bottom-9 desktop:padding-bottom-15 display-flex flex-justify-end semi-cta-block">
  <div class="radius-left-pill semi-cta bg-white margin-left-4 padding-y-205 padding-left-6 tablet:margin-left-0">
      <div class="grid-container padding-x-4 tablet:padding-x-9 desktop:padding-left-9 desktop:padding-bottom-3">
        <p>Stay in the loop of TOP events and opportunities.</p>
      <a href="https://public.govdelivery.com/accounts/USCENSUS/signup/16610" target="_blank"
        class="text-ink padding-y-1 margin-top-4">
        Subscribe to our newsletter.
      </a>
      </div>
    </div>
    </div>
</section>