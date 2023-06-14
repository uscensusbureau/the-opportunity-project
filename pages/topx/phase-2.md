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
  title:
    text: "Why Should I Use the TOPx Toolkit at My Agency?"
    class: text-blue-warm-60v padding-left-6
  video:
    src: https://www.youtube.com/embed/Qs-za9O0OHU
    alt-text: "Video about The Opportunity Project: Putting America’s Data to Work for the People"
  blurb:
    title: "Your Challenge + Data + Technologists & Communities = Digital Products That Solve Real-World Problems"


download-text: Phase 2 Templates
continue-text: Phase 3
---

{% include toolkit-hero-refresh.html %}
{% assign section = page.phase-info-video %}
{% include toolkit-refresh-video.html data=section video-data=phase-resources %}
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
