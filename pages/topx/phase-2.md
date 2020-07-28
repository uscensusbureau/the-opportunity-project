---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-2/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-2.body


header: Sprint Facilitation
lead:
  - text:
    - p: Once you have developed problem statements, recruited participants, and spent some time preparing, you are ready to launch the sprint! In the next steps, you will find information on different phases of the sprint, including milestones, which are check-ins where facilitators and participants share resources and information, while tech teams provide progress updates and receive feedback. In addition to suggested timelines, we offer guidance of what to cover during each milestone and suggestions for how participants can use the time between calls.
image: phase-2.png
image-alt: Three vertical rectangles in a row. The center rectangle is filled in yellow with a 2 in the center. The rest are outlined.

---

{% include toolkit-hero.html %}
<section>
  {% for item in site.data.toolkits.topx.phase-2.body %}
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
