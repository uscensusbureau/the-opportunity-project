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


header: Phase 2
action: Execute
effort:
  - title: Duration
    amount: 3
  - title: Time
    amount: 15-20
intro:
  - title: Overview
    content:
      - copy: It’s time to launch your sprint! During this phase, the tech teams develop their products. Your role is to facilitate this process, which will include several tasks and milestones.
      - copy: <em>Duration and time are estimated based on 1 problem statement, a team of sprint leaders of 2 - 4 individuals, and 3 - 5 tech teams (with a recommended maximum of 6).</em>
  - title: Goals
    content:
     - item: Kick off the sprint
     - item: Manage weekly communications
     - item: Motivate sprint participant progress
     - item: Execute sprint milestones

phase-info-video:
  class: padding-top-6
  title:
    text: "How To Execute Your TOP Sprint"
    class: text-blue-warm-60v text-center
  video:
    src: https://www.youtube.com/embed/bad8acAJ9lg
    alt-text: "TOPx: How To Execute Your TOP Sprint?"
    width: 640
    height: 360
  blurb:
    title: "View More Phase 2 Videos In-Step Below"
  phase-video-list:
    - video-1:
      src: https://youtu.be/mTSdiqHa3Iw
      title: "How to Kick off Your Sprint"
    - video-2:
      src: https://youtu.be/fv3-m-dYkZQ
      title: "Tips for Facilitating the User Research Process"
    - video-3:
      src: https://youtu.be/BC3CU_j0aTc
      title: "Tips for Facilitating the Data Exploration Process"
    - video-4:
      src: https://youtu.be/DtmwJ_ttRcI
      title: "Tips for Facilitating the Product Development Process"
    - video-5:
      src: https://youtu.be/O_--CD_kO6k
      title: "Wrapping Up The Sprint: The MVP"


download-text: Phase 2 Templates
continue-text: Phase 3
---

{% include toolkit-hero-refresh.html %}
{% assign section = page.phase-info-video %}
{% include toolkit-refresh-video.html data=section video-data=phase-resources %}
<section class="grid-container padding-bottom-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-2.body %}
        <div class="toolkit-section margin-top-6">
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
      <a href="{{site.baseurl}}/assets/files/topx-resources/topx-toolkit-phase-2-resources.zip" target="_blank"
          class="usa-button usa-button--inverse usa-button--outline site-button">
          Download All {{page.download-text}}
      </a>
    </div>
    <div>
      <a href="{{ site.baseurl }}/topx-toolkit/phase-3/"
        class="usa-button margin-top-4 usa-button--secondary site-button">
        Continue to {{page.continue-text}}
      </a>
    </div>
  </div>
</section>
