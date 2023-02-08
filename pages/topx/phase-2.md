---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-2/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-2.body

phase: 2
color: accent-cool-lightest
#text-color: text-black


header: Sprint Facilitation
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
lead:
  - text:
    - p: Once you have developed problem statements, recruited participants, and spent some time preparing, you are ready to launch the sprint! In the next steps, you will find information on different phases of the sprint, including milestones, which are check-ins where facilitators and participants share resources and information, while tech teams provide progress updates and receive feedback. In addition to suggested timelines, we offer guidance of what to cover during each milestone and suggestions for how participants can use the time between calls.
image: phase-2.png
image-alt: Three vertical rectangles in a row. The center rectangle is filled in yellow with a 2 in the center. The rest are outlined.

download-text: Phase 2 Templates
continue-text: Phase 3
---

{% include toolkit-hero-refresh.html %}
<section class="grid-container padding-y-8 ">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-2.body %}
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