---
title: Product Development Toolkit
class: toolkit
permalink: /product-development/toolkit/
layout: toolkit

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
  - text: STEP 7
    href: "#toolkit-step-7"    

image: glossary.png
image-alt: Illustration of a group of red, yellow, and blue squares and rectangles


header: Product Development Toolkit
lead:
  - text:
    - p: This toolkit documents the process that The Opportunity Project team at the Department of Commerce and other federal agencies have used to facilitate collaborative, user-centered technology development sprints. Anyone interested in transforming federal data into digital tools for the American people can adopt this process, adapt it for your own sprint, and share your feedback to help improve it.
    - p: Civic tech organizations, coding boot camps, federal agencies, and more have adopted The Opportunity Project process. We hope that teachers, community organizations, and state, local, and other government leaders will use it and share feedback to help improve it.

---

{% include toolkit-hero.html %}
{% include toolkit-sidenav.html %}
<section>
  {% for item in site.data.toolkits.product.toolkit.body %}
    <section class="grid-container display-inline-block padding-top-8 desktop:margin-bottom-10">
      <div
        class="desktop:grid-offset-{{item.offset}} desktop:padding-left-{{item.padding}} desktop:grid-col-7 tablet:grid-col-6 display-inline-block"
      >
        {% include toolkit-header.html %}
        {% include toolkit-key-actions.html %}
        {% if item.roles %}
          {% include toolkit-roles.html %}
        {% endif %}
        {% if item.scenarios %}
          {% include toolkit-user-scenarios.html %}
        {% endif %}
        {% if item.timeline %}
          {% include toolkit-timeline.html %}
        {% endif %}
        {% if item.resources %}
          {% include toolkit-resources.html %}
        {% endif %}
      </div>
    </section>
    <div class="height-4 bg-secondary">
    </div>
  {% endfor %}
</section>
