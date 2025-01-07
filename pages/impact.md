---
title: Impact
permalink: /impact/
layout: default
class: impact

# hero section
background: banner-background
hero:
  text: Impact
  subtext: Learn more about The Opportunity Project sprint process and participant roles.

#years section
years:
  - title: 2015
    subtitle: Dui sapien eget mi proin sed
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    class: inverted
    img:
      src: /assets/img/impact-page/timeline/desktop-timeline-2015.jpg
      alt: something
  - title: 2016
    subtitle: Dui sapien eget mi proin sed
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/timeline/desktop-timeline-2016.jpg
      alt: something
  - title: 2017
    subtitle: Dui sapien eget mi proin sed
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    class: inverted
    img:
      src: /assets/img/impact-page/timeline/desktop-timeline-2017.jpg
      alt: something


#impact numbers
impact_numbers:
  - number: 200+
    title: products in use
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl rhoncus.
  - number: 1300+
    title: Total Users
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl rhoncus.
  - number: XXX
    title: Economic Impact
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl rhoncus.

#sucess stories section
companies:
  - title: company
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-community-headshot.jpg
      alt: smiling headshot
  - title: Company
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    class: inverted
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-data-headshot.jpg
      alt: smiling headshot
  - title: Company
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-federal-headshot.jpg
      alt: smiling headshot

#profile section
profiles:
  - title: On Communities
    subtitle: name
    org: org
    class: inverted
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-community-headshot.jpg
      alt: smiling headshot
  - title: On Data
    subtitle: name
    org: org
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-data-headshot.jpg
      alt: smiling headshot
  - title: On Federal Agencies
    subtitle: name
    org: org
    class: inverted
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
    img:
      src: /assets/img/impact-page/headshots/desktop-broader-federal-headshot.jpg
      alt: smiling headshot
---
{% include hero.html %}
<section id="team-intro" class="team-intro grid-background">
  <div class="content-container grid-container">
  {% include impact/subnav.html %}
  <nav id="subnav" class="tablet:display-none">
    <div class="nav-content-container">
      <a href="{{site.baseurl}}/impact#team-intro">Note From the Team</a>
      <a href="{{site.baseurl}}/impact#years">Through the Years</a>
      <a href="{{site.baseurl}}/impact#impact-numbers">By the Numbers</a>
      <a href="{{site.baseurl}}/impact#sucess">Success Stories</a>
      <a href="{{site.baseurl}}/impact#broader-impact">Broader Impact</a>
      <a href="{{site.baseurl}}/impact#report-download">Report Download</a>
    </div>
  </nav>
  <h2>Note from the Team</h2>
  <div class="shadow-box">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, voluptatum reprehenderit. Vel, assumenda, eum maiores dignissimos rerum non sequi natus beatae fugiat, ea ipsa sunt blanditiis molestias aliquam asperiores esse!</p>
    <p>Lorem ipsum dolor sit</p>
  </div>
  <div class="display-flex flex-justify-center margin-top-4">
    <a href="https://opportunity.census.gov/our-process/" target="_blank"
      class="usa-button text-ink margin-top-2 tablet:padding-y-2 padding-x-205 usa-button--outline  .outline-1px.outline-black  tablet:margin-top-4 site-button bg-white text-underline">
      Learn more about the TOP Sprint Process
    </a>
  </div>
  </div>
</section>

<section id="years" class="years">
  <div class="year-counter-container">
  <div class="grid-container content-container">
    {% include impact/subnav.html %}
    <div class="">
      <h2>Through the Years</h2>
    </div>
    </div>
  </div>
  <div class="year-timeline-container">
  <div class="grid-container content-container">
    {% assign section = page.years %}
    {% include impact/profile.html data=section %}
  </div>
  </div>
</section>

<section id="impact-numbers" class="grid-background impact-numbers">
  <div class="content-container grid-container">
    {% include impact/subnav.html %}
    <h2>By the Numbers</h2>
    {% assign section = page.impact_numbers %}
    {% include impact/numbers.html data=section %}
  </div>
</section>

<section id="success" class="success">
  <div class="content-container grid-container">
  {% include impact/subnav.html %}
    <h2>Success Stories</h2>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim.</p>
    </div>
  <div class="profiles-container">
    {% assign section = page.companies %}
    {% include impact/profile.html data=section %}
  </div>
  </div>
</section>

<section id="broader-impact" class="broader-impact grid-background">
  <div class="content-container grid-container">
  {% include impact/subnav.html %}
  <div>
    <h2>Broader Impact</h2>
  </div>
  <div class="shadow-box">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, voluptatum reprehenderit. Vel, assumenda, eum maiores dignissimos rerum non sequi natus beatae fugiat, ea ipsa sunt blanditiis molestias aliquam asperiores esse!</p>
  </div>
  <div class="profiles-container">
    {% assign section = page.profiles %}
    {% include impact/profile.html data=section %}
  </div>
  </div>
</section>

<section id="report-download" class="report-download">
  <div class="content-container grid-container">
  {% include impact/subnav.html %}
  <h2>Report Download</h2>
  <div>
  <p>Placeholder text</p>
  <p>Placeholder img</p>
    <div class="display-flex flex-justify-center margin-top-4">
    <a href="https://opportunity.census.gov/our-process/" target="_blank"
      class="usa-button text-ink margin-top-2 tablet:padding-y-2 padding-x-205 usa-button--outline  .outline-1px.outline-black  tablet:margin-top-4 site-button bg-white text-underline">
      Learn more about the TOP Sprint Process
    </a>
  </div>
  </div>
  </div>
</section>