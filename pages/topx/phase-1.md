---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-1/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-1.body

phase: 1
color: blue-cool-20v
text-color: text-base-darkest
refresh-accent: red-warm-50v
refresh-white: gray-1
refresh-gray: gray-20

header: Planning
effort:
  - title: Duration
    amount: 3-4
  - title: Time
    amount: 5-20
intro:
  - title: Overview
    content:
      - copy: some stuff
      - copy: some stuff 2
      - copy: some stuff 3
  - title: Goals
    content:
     - item: some stuff 1
     - item: some stuff 2
     - item: some stuff 3
     - item: some stuff 4


download-text: Phase 1 Templates
continue-text: Phase 2

---

{% include toolkit-hero-refresh.html %}
<section class="grid-container padding-y-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-1.body %}
        <div class="toolkit-section margin-top-10">
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
    <div>
      <a href="{{ site.baseurl }}/{{ page.permalink }}" target="_blank"
        class="usa-button margin-top-4 usa-button--secondary site-button">
        Continue to {{page.continue-text}}
      </a>
    </div>
  </div>
</section>