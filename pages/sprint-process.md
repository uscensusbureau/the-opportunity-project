---
title: Sprint Process
permalink: /sprint-process/
redirect_from:
  - /our-process/

layout: default
class: sprint-process

# hero section
background: banner-background
hero:
  text: Sprint Process
  subtext: Learn more about The Opportunity Project sprint process and participant roles.

# how it works
how-it-works:
  - text:
      title: How It Works
      subtitle: The TOP Model
      blurb: |-
        The Opportunity Project (TOP) works through 12-14 week product development cycles—called ‘sprints.’<br><br>


        Federal agencies first define problem statements and then collaborate with technologists and community advocates outside of government, who rapidly build digital products to solve those challenges using open data.


#roles
roles-intro:
  - text:
      title: Roles
      blurb: |-
        What participants do in each sprint varies depending on their role:


roles-details:
  - role:
      title: Tech Teams
      blurb: Tech teams are the companies, universities, non-profits, and students who build digital products in the sprints. They design, develop, and launch the products they build, and own and maintain the products after the sprints. Teams may also develop non-digital products, such as toolkits, policy interventions and more.
    download:
        href: files/sprint-process-page/tech-team-role-overview.pdf
        text: Tech Team Overview
  - role:
      title: Sprint Leaders
      blurb: |-
        Sprint leaders typically consist of three-four team members from the federal agency or NGO that identify major challenges facing the public within their mission areas. During the 12-14 week sprint, experts and data stewards from each agency or NGO will provide feedback to the participating teams and assistance working with federal open data.
    download:
      href: files/sprint-process-page/sprint-leader-overview.pdf
      text: Sprint Leader Overview
  - role :
      title: User Advocates
      blurb: |-
        User Advocates are individuals who have experience with issues directly related to the challenges, and who work closely with end-users. Even better, they can be individuals who have experienced the problem directly. Community leaders, local or national advocates, service providers, and people with direct lived experience make great user advocates.
    download:
      text: User Advocate Overview
      href: files/sprint-process-page/user-advocate-overview.pdf
  - role:
      title: Data Stewards
      blurb: |-
        Data stewards are integral to making sure the right federal, state or local open data is used, and help to answer technical questions participants may have.
    download:
      href: files/sprint-process-page/data-steward-overview.pdf
      text: Data Steward Overview
  - role:
      title: Product Advisors
      blurb: |-
        Product advisors are experts outside of government that consult and help teams develop products with a viable long term strategy; making sure that the product can be maintained and has a real, lasting impact on the intended end user after the sprint.
    download:
      href: files/sprint-process-page/product-advisor-overview.pdf
      text: Product Advisor Overview


cta-one:
  container-class: display-flex flex-column flex-align-center text-center cta-one
  background-class: bg-blue-warm-60v
  title:
    text: Missed [Census Open Innovation Summit 2024](https://coilsummit2024.splashthat.com/)? Watch the recordings on YouTube, featuring 25 sessions, more than 90 speakers, and 30 new tech products.
    class: text-normal cta-one padding-x-5 tablet:padding-x-9
  blurb:
    text: |-
      Watch recordings of the sessions on the U.S. Census Bureau's YouTube channel:
    class: text-normal cta-one padding-x-5 tablet:padding-x-9 display-none
  custom:
    text: Catch Up on YouTube
    href: https://www.youtube.com/watch?v=Jj6WyVAmvmQ&list=PLewV-zKXDZkghdjPUCmmU02T7xI2dUPme
    isExternal: true
    class: usa-button--secondary

---

{% include hero.html %}
<section class="bg-blue how-it-works-bg md">
  <div class="header-text-hot-dog">
{% include single-column-header-text-hot-dog-cta.html data=page.how-it-works %}
  </div>
</section>


{% include how-it-works-details.html data=page.how-it-works utils='how-it-works' %}


<section class="bg-blue roles-intro-bg" id="roles-intro">
  <div class="header-text-hot-dog">
    {% include single-column-header-text-hot-dog-cta.html data=page.roles-intro %}
  </div>
</section>

<div class="bg-base-lighter full-width-screen-spilt roles-details-bg">
 <!-- padding-y-8 padding-x-4 tablet:padding-y-7 tablet:padding-x-9 -->
  <div class="roles-content-block padding-top-8">
  {% include single-column-header-text-hot-dog-cta.html data=page.roles-details %}
  </div>
  <div
  class="padding-top-3 padding-bottom-9 desktop:padding-bottom-10 display-flex flex-justify-end semi-cta-block">
    <div class="radius-left-pill semi-cta bg-white margin-left-4 padding-y-205">
      <div class="grid-container padding-x-4 desktop:padding-left-9 desktop:padding-bottom-3">
        <p>Interested in participating in a sprint?</p>
      <a href="mailto:{{ site.contacts.email }}" target="_blank"
        class="text-ink padding-y-1 margin-top-4">
        Email the TOP team.
      </a>
      </div>
    </div>
  </div>
</div>
