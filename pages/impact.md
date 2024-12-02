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

#profile section
profiles:
  - title: On Communities
    name: name
    org: org
    img:
      src:
      alt: smiling headshot
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
  - title: On Data
    name: name
    org: org
    img:
      src:
      alt: smiling headshot
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
  - title: On Federal Agencies
    name: name
    org: org
    img:
      src:
      alt: smiling headshot
    blurb: Dui sapien eget mi proin sed libero enim. Proin sagittis nisl
---
{% include hero.html %}
<section class="team-intro grid-background">
  <div class="content-container">
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

<section class="grid-background">
  <div class="content-container">
    {% assign section = page.impact_numbers %}
    {% include impact/numbers.html data=section %}
  </div>
</section>

<section class="success">
  <div class="content-container">
    <h2>Success Stories</h2>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim.</p>
    </div>
    <div>
    </div>
  </div>
</section>

<section class="broader-impact grid-background">
  <div class="content-container">
  <h2>Broader Impact</h2>
  <div class="shadow-box">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, voluptatum reprehenderit. Vel, assumenda, eum maiores dignissimos rerum non sequi natus beatae fugiat, ea ipsa sunt blanditiis molestias aliquam asperiores esse!</p>
  </div>
  <div>
    {% assign section = page.profiles %}
    {% include impact/profile.html data=section %}
  </div>
  </div>
</section>

<section class="report-download">
  <div class="content-container">
  <h2>Report Download</h2>
  <div>
  <p>Placeholder</p>
    <div class="display-flex flex-justify-center margin-top-4">
    <a href="https://opportunity.census.gov/our-process/" target="_blank"
      class="usa-button text-ink margin-top-2 tablet:padding-y-2 padding-x-205 usa-button--outline  .outline-1px.outline-black  tablet:margin-top-4 site-button bg-white text-underline">
      Learn more about the TOP Sprint Process
    </a>
  </div>
  </div>
  </div>
</section>