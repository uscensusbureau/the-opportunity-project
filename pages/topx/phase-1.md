---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-1/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-1.body

sidebar:
  - text: STEP 1
    href:
    subnav:
      - text: Form a facilitation team
        href:
      - text: Key Actions
        href:
      - text: Resources
        href:
  - text: STEP 2
    href:
    subnav:
      - text: Form a facilitation team
        href:


header: Pre-Sprint Planning
lead:
  - text:
    - p: The first few months of TOPx involves pre-sprint planning. It will be important to form a team within your agency that will work on day-to-day operations, spread the word about TOPx within your agency, and identify a senior-level champion. Next, your team will engage others in the agency to define problem statement(s) for which sprint participants will develop solutions. After problem statement development, you will recruit sprint participants, who include tech teams, community leaders, advocates, individuals with direct lived experience, and data and policy experts from government.
image: phase-1.png
image-alt: Three vertical rectangles in a row. The first is filled in red with a one in the center. The rest are outlined

---

{% include toolkit-hero.html %}
<section>
  {% for item in site.data.toolkits.topx.phase-1.body %}
    <section class="grid-container display-inline-block padding-top-8">
      {% include toolkit-sidenav.html %}
      <div
        class="desktop:grid-offset-2 desktop:grid-col-7 tablet:grid-col-6 display-inline-block"
      >
        {% include toolkit-header.html %}
        {% include toolkit-key-actions.html %}
        {% include toolkit-resources.html %}
      </div>
    </section>
    <div class="height-4 bg-secondary">
    </div>
  {% endfor %}
</section>
