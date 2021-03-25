---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-3/
layout: toolkit

phase: 3
color: blue-warm-70v

sidebar:
  - text: STEP 1
    href: "#toolkit-step-1"
  - text: STEP 2
    href: "#toolkit-step-2"


header: Post-Sprint
lead:
  - text:
    - p: Once teams have presented their final demos and the sprint has concluded, there are a variety of options for post-sprint engagement. We encourage agencies to host even an end-of-sprint event to celebrate the conclusion of the sprint and the work that was done. There are also opportunities to continue engaging with participants after the sprint by tracking product metrics, offering funding opportunities, and connecting participants with the TOP Alumni Community.
image: phase-3.png
image-alt: Three vertical rectangles in a row. The last is filled in blue with a 3 in the center. The rest are outlined

---

{% include toolkit-hero.html %}
<section class="grid-container display-inline-block padding-top-8 grid-col-12">
  <div class="grid-row">
    <div class="desktop:grid-col-4">
      {% include toolkit-sidenav.html %}
    </div>
    <div
      class="desktop:grid-col-7 desktop:margin-left-7 grid-col-12 display-inline-block"
    >
      {% for item in site.data.toolkits.topx.phase-3.body %}
        <div class="toolkit-section  margin-top-10">
          {% include toolkit-header.html %}
          {% include toolkit-key-actions.html %}
          {% include toolkit-resources.html %}
          <div class="toolkit-colored-div height-4 bg-{{page.color}}  margin-bottom-neg-2">
          </div>
        </div>
      {% endfor %}
    </div>
  </div>  
</section>
