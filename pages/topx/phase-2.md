---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-2/
layout: toolkit
data-ref: site.data.toolkits.topx.phase-2.body

sidebar:
  - text: STEP 1
    href: "#toolkit-step-1"
  - text: STEP 2
    href: "#toolkit-step-2"
  - text: STEP 3
    href: "#toolkit-step-3"
  - text: STEP 4
    href: "#toolkit-step-4"
  - text: STEP 5
    href: "#toolkit-step-5"
  - text: STEP 6
    href: "#toolkit-step-6"

color: accent-warm-light
text-color: text-black


header: Sprint Facilitation
lead:
  - text:
    - p: Once you have developed problem statements, recruited participants, and spent some time preparing, you are ready to launch the sprint! In the next steps, you will find information on different phases of the sprint, including milestones, which are check-ins where facilitators and participants share resources and information, while tech teams provide progress updates and receive feedback. In addition to suggested timelines, we offer guidance of what to cover during each milestone and suggestions for how participants can use the time between calls.
image: phase-2.png
image-alt: Three vertical rectangles in a row. The center rectangle is filled in yellow with a 2 in the center. The rest are outlined.

---

{% include toolkit-hero.html %}
<section class="grid-container display-inline-block padding-top-8 desktop:margin-bottom-10">
  <div class="grid-row">
    <div class="desktop:grid-col-4">
      {% include toolkit-sidenav.html %}
    </div>
    <div
      class="desktop:grid-col-7 margin-left-7 tablet:grid-col-6 display-inline-block"
    >
      {% for item in site.data.toolkits.topx.phase-1.body %}
        {% include toolkit-header.html %}
        {% include toolkit-key-actions.html %}
        {% include toolkit-resources.html %}
        <div class="toolkit-colored-div height-4 bg-{{page.color}}  margin-bottom-10">
        </div>
      {% endfor %}
    </div>
  </div>  
</section>
