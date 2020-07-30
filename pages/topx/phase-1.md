---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-1/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-1.body

sidebar:
  - text: STEP 1
    href: "#toolkit-step-1"
  - text: STEP 2
    href: "#toolkit-step-2"
  - text: STEP 3
    href: "#toolkit-step-3"
  - text: STEP 4
    href: "#toolkit-step-4"

color: secondary

header: Pre-Sprint Planning
lead:
  - text:
    - p: The first few months of TOPx involves pre-sprint planning. It will be important to form a team within your agency that will work on day-to-day operations, spread the word about TOPx within your agency, and identify a senior-level champion. Next, your team will engage others in the agency to define problem statement(s) for which sprint participants will develop solutions. After problem statement development, you will recruit sprint participants, who include tech teams, community leaders, advocates, individuals with direct lived experience, and data and policy experts from government.
image: phase-1.png
image-alt: Three vertical rectangles in a row. The first is filled in red with a one in the center. The rest are outlined

---

{% include toolkit-hero.html %}
<section class="grid-container display-inline-block padding-top-8 desktop:margin-bottom-10">
  <div class="grid-row">
    <div class="desktop:grid-col-4">
      {% include toolkit-sidenav.html %}
    </div>
    <div
      class="desktop:grid-col-7 desktop:margin-left-7 display-inline-block"
    >
      {% for item in site.data.toolkits.topx.phase-1.body %}
        <div class="toolkit-section">
          {% include toolkit-header.html %}
          {% include toolkit-key-actions.html %}
          {% include toolkit-resources.html %}
          <div class="toolkit-colored-div height-4 bg-{{page.color}} margin-bottom-10">
          </div>
        </div>
      {% endfor %}
    </div>
  </div>  
</section>
