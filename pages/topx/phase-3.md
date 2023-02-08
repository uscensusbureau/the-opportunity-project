---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-3/
layout: toolkit

phase: 3
color: blue-warm-70v

header: Post-Sprint
effort:
  - title: Duration
    amount: 3-4
  - title: Time
    amount: 5-20
intro:
  - title: Overview
    content: some stuff
  - title: Goals
    content:
     - item: some stuff 1
     - item: some stuff 2
     - item: some stuff 3
     - item: some stuff 4
lead:
  - text:
    - p: Once teams have presented their final demos and the sprint has concluded, there are a variety of options for post-sprint engagement. We encourage agencies to host even an end-of-sprint event to celebrate the conclusion of the sprint and the work that was done. There are also opportunities to continue engaging with participants after the sprint by tracking product metrics, offering funding opportunities, and connecting participants with the TOP Alumni Community.
image: phase-3.png
image-alt: Three vertical rectangles in a row. The last is filled in blue with a 3 in the center. The rest are outlined

download-text: TOPx Toolkit Templates
continue-text: Tell Us How it Went
blurb: Did you use the Toolkit to facilitate a TOP sprint at your agency?

---

{% include toolkit-hero-refresh.html %}
<section class="grid-container padding-top-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-3.body %}
        <div class="toolkit-section  margin-top-10">
          {% include toolkit-header-refresh.html %}
          {% include toolkit-key-actions-refresh.html %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>
<section class="text-white bg-primary usa-section">
  <div class="grid-container">
    <div>
      <a href="{{ site.baseurl }}/{{ page.permalink }}" target="_blank"
          class="usa-button usa-button--inverse usa-button--outline site-button">
          Download All {{page.download-text}}
      </a>
    </div>
    <h2 {% if data.title.class %}class="{{ data.title.class }}"{% endif %}>
      {{ page.blurb }}
    </h2>
    <div>
      <a href="{{ site.baseurl }}/{{ page.permalink }}" target="_blank"
        class="usa-button usa-button--secondary site-button">
        {{page.continue-text}}
      </a>
    </div>
  </div>
</section>