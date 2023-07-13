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

header: Phase 1
action: Plan
effort:
  - title: Duration
    amount: 3-4
  - title: Time
    amount: 5-20
intro:
  - title: Overview
    content:
      - copy: In the first few months, you will set the stage for your sprint. Along with building a coalition around your sprint topic within your agency, you will need to define your problem statement and recruit participants.
      - copy: <em>Duration and time are estimated based on 1 problem statement, a team of sprint leaders of 2 - 4 individuals, and 3 - 5 tech teams (with a recommended maximum of 6).</em>
  - title: Goals
    content:
     - item: Form a team of sprint leaders
     - item: Identify a senior-level champion
     - item: Define the problem statement
     - item: "Recruit sprint participants: tech teams, community leaders, user advocates, individuals with direct lived experience, and data and policy experts"
     - item: Prepare documentation for sprint execution

phase-info-video:
  class: padding-top-6
  title:
    text: "How to Plan for Your TOP Sprint"
    class: text-blue-warm-60v text-center
  video:
    src: https://www.youtube.com/embed/OyrkKHP3nBA
    alt-text: "TOPx: How to Plan for Your TOP Sprint"
  blurb:
    title: View More Phase 1 Videos In-Step Below
  phase-video-list:
    - video-1:
      src: https://youtu.be/GzXRCwnb7gc
      title: "How to Define Your Problem Statement"
    - video-2:
      src: https://youtu.be/kmsqQq1AvKs
      title: "Tips for Recruiting Sprint Participants"
    - video-3:
      src:  https://youtu.be/6TDEd1DOHbk
      title: "How Do I Prepare to Execute My Sprint?"


download-text: Phase 1 Templates
continue-text: Phase 2

---

{% include toolkit-hero-refresh.html %}
{% assign section = page.phase-info-video %}
{% include toolkit-refresh-video.html data=section video-data=phase-resources %}
<section class="grid-container padding-bottom-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-1.body %}
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
      <a href="{{site.baseurl}}/assets/files/topx-resources/topx-toolkit-phase-1-resources.zip" target="_blank"
          class="usa-button usa-button--inverse usa-button--outline site-button">
          Download All {{page.download-text}}
      </a>
    </div>
    <div>
      <a href="{{ site.baseurl }}/topx-toolkit/phase-2/"
        class="usa-button margin-top-4 usa-button--secondary site-button">
        Continue to {{page.continue-text}}
      </a>
    </div>
  </div>
</section>
