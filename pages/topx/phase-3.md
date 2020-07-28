---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-3/
layout: toolkit


header: Post-Sprint
lead:
  - text:
    - p: Once teams have presented their final demos and the sprint has concluded, there are a variety of options for post-sprint engagement. We encourage agencies to host even a small in-person event to celebrate the conclusion of the sprint and the work that was done. There are also opportunities to continue engaging with participants after the sprint by tracking product metrics, offering funding opportunities, and connecting participants with the TOP Alumni Community.
image: phase-3.png
image-alt: Three vertical rectangles in a row. The last is filled in blue with a 3 in the center. The rest are outlined

---

{% include toolkit-hero.html %}
<section>
  {% for item in site.data.toolkits.topx.phase-3.body %}
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
