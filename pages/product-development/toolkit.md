---
title: Product Development Toolkit
class: toolkit
permalink: /product-development/toolkit/
layout: toolkit

color: secondary

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
    - p: This toolkit documents the process that The Opportunity Project team at the U.S. Census Bureau and other federal agencies have used to facilitate collaborative, user-centered technology development sprints. Anyone interested in transforming federal data into digital tools for the American people can adopt this process, adapt it for your own sprint, and share your feedback to help improve it.
    - p: Civic tech organizations, coding boot camps, federal agencies, and more have adopted The Opportunity Project process. We hope that teachers, community organizations, and state, local, and other government leaders will use it and share feedback to help improve it.

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
      {% for item in site.data.toolkits.product.toolkit.body %}
        <div class="toolkit-section margin-top-10">
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
          <div class="toolkit-colored-div height-4 bg-{{page.color}} margin-bottom-neg-2">
          </div>
        </div>
      {% endfor %}
      </div>
    </div>
  </section>
