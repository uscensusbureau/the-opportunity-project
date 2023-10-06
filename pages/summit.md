---
title: "Annual Innovation Summit"
permalink: /summit/
layout: default
name: summit
class: summit

background: banner-background padding-x-4 tablet:padding-x-6 desktop:padding-x-10
hero:
  text: The Opportunity Project Summit is an annual multi-day virtual conference that features speakers, discussions, product demonstrations, and hands-on learning opportunities.
  subtext: Showcasing open innovation in the public sector, new civic technology, and emerging models for cross-sector collaboration and inclusive design.

cta-one:
  container-class: display-flex flex-column flex-align-center text-center cta-one
  background-class: bg-blue-warm-60v
  title:
    text: Join us virtually for The Opportunity Project Summit [year] on, [date/time] to view new digital products and many more innovations from the TOP community!
    class: text-normal cta-one padding-x-5 tablet:padding-x-9
  blurb:
    text: TOP Summit [year] will include [no. of days] days of keynotes, lightning talks, interactive sessions, hands-on learning, and technology demos.
    class: text-normal cta-one padding-x-5 tablet:padding-x-9
  primary:
    text: RSVP to Attend
    href: /topx-toolkit/phase-1
    isExternal: true
    class: secondary

video-one:
  class: highlight-video-section tablet:width-full
  video:
    src: https://www.youtube.com/embed/videoseries?si=qtl6VAkzlIoFThBN&amp;list=PLewV-zKXDZkghdjPUCmmU02T7xI2dUPme
    alt-text: "2023 TOP Summit"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 318
    tablet-height: 170
    desktop-width: 510
    desktop-height: 273
  copy-class: bg-white
  blurb:
    title: "2023 TOP Summit"
    p: "Highlighted more than 25 new technology products created through 2022 TOP sprints including five sprints focused on challenges impacting Puerto Rico."
    class:


video-two:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/videoseries?si=cDwzTAWNVcuRFq0V&amp;list=PLewV-zKXDZkitrXN6T7a0MG-oTi7WGTu_
    alt-text: "2021 TOP Summit: Open Innovation for All"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2021 TOP Summit: Open Innovation for All"
    p: "Featured digital products envisioning the world post-COVID-19 and announced more than $300,000 in awards to the winners of the Open Data for Good Grand Challenge."


video-three:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/-c-DaW3ZHko?si=3kNadCt7cT3SNqo-
    alt-text: "2020 TOP Demo Week: A Virtual Tech, Data, and Community Conference"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2020 TOP Demo Week: A Virtual Tech, Data, and Community Conference"
    p: "Showcased 35+ new digital tools resulting from Earth-themed sprints focused on challenges impacting the natural and built environment."


video-four:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/_qLQ8OD4bWI?si=mBiaainthFXorljE
    alt-text: "2019 December Census Demo Day + Summit at Georgetown"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2019 December Census Demo Day + Summit at Georgetown"
    p: "Demonstrated 20+ digital tools that tackled a number of challenges — such as disaster response, standardized address data collection, and more."


video-five:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/36sdFlR1F-s?si=VzuwsflRIfhGJsEh
    alt-text: "2019 March Census Demo Day"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2019 March Census Demo Day"
    p: "Explored 20+ digital tools that addressed issues like connecting veterans to jobs, student access to STEM fields, the opioid crisis, and more."


video-six:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/hiqn9a64wlo?si=uRRzo67q5XYXnk-p
    alt-text: "2017 Census Demo Day"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2017 Census Demo Day"
    p: "Celebrated new tools that took on problems such as youth and veteran homelessness, engaging hard-to-count populations in the decennial census, and making federal grant data user-friendly."


video-seven:
  class: tablet:margin-x-105 desktop:margin-x-205
  video:
    src: https://www.youtube.com/embed/uqIiMj2S_Vk?si=zjm-En0_68jsmAo3
    alt-text: "2016 White House Demo Day"
    mobile-width: 233
    mobile-height: 125
    tablet-width: 247
    tablet-height: 133
    desktop-width: 392
    desktop-height: 211
  copy-class: bg-white
  blurb:
    title: "2016 White House Demo Day"
    p: "Featured digital tools that promoted emotional wellbeing, connected the unemployed with skills and jobs, improved transit accessibility in low income neighborhoods, and helped families find affordable housing in safe neighborhoods with access to quality schools."


---
{% include hero.html %}
<!-- {% assign section = page.cta-one %}
{% include home/cta.html  data=section  %} -->
<section class="past-events grid-container">
  <h2 class="text-center text-white">Past Events</h2>
  <div class="grid-row flex-column flex-align-center highlight-video-container">
    {% assign section = page.video-one %}
    {% include  summit-video.html data=section %}
  </div>
  <div class="grid-row video-section-container tablet:margin-top-7 desktop:margin-top-15">
    {% assign section = page.video-two %}
    {% include  summit-video.html data=section %}
    {% assign section = page.video-three %}
    {% include  summit-video.html data=section %}
    {% assign section = page.video-four %}
    {% include  summit-video.html data=section %}
    {% assign section = page.video-five %}
    {% include  summit-video.html data=section %}
    {% assign section = page.video-six %}
    {% include  summit-video.html data=section %}
    {% assign section = page.video-seven %}
    {% include  summit-video.html data=section %}
  </div>
</section>
