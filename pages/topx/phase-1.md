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
    content: some stuff
  - title: Goals
    content:
     - item: some stuff 1
     - item: some stuff 2
     - item: some stuff 3
     - item: some stuff 4
lead:
  - text:
    - p: The first few months of TOPx involves pre-sprint planning. It will be important to form a team within your agency that will work on day-to-day operations, spread the word about TOPx within your agency, and identify a senior-level champion. Next, your team will engage others in the agency to define problem statement(s) for which sprint participants will develop solutions. After problem statement development, you will recruit sprint participants, who include tech teams, community leaders, advocates, individuals with direct lived experience, and data and policy experts from government.
image: phase-1.png
image-alt: Three vertical rectangles in a row. The first is filled in red with a one in the center. The rest are outlined

---

{% include toolkit-hero.html %}
{% include toolkit-hero-refresh.html %}
<section class="grid-container padding-top-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-1.body %}
        <div class="toolkit-section margin-top-10">
          {% include toolkit-header.html %}
          {% include toolkit-key-actions.html %}
          {% include toolkit-resources.html %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>
