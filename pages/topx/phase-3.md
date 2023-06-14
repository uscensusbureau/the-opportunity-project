---
title: TOPx Toolkit
type: topx
class: toolkit
permalink: /topx-toolkit/phase-3/
layout: toolkit

phase: 3
color: blue-warm-70v

header: Phase 3
action: Showcase
effort:
  - title: Duration
    amount: 1-2
  - title: Time
    amount: 5-10
intro:
  - title: Overview
    content:
      - copy: Once the sprint has concluded, we encourage agencies to celebrate the accomplishments of all participants. This could be by hosting an end-of-sprint event – whether large or small – or via agency-led communications to help others learn about the work completed in the sprint.
      - copy: <em>Duration and time are estimated based on 1 problem statement, a team of sprint leaders of 2 - 4 individuals, and 3 - 5 tech teams (with a recommended maximum of 6).</em>
  - title: Goals
    content:
     - item: Celebrate the accomplishments of sprint participants and help get the word out about the products to potential end users, to ensure the work makes an impact
     - item: Support post-sprint engagement


download-text: TOPx Toolkit Templates
continue-text: Tell Us How it Went
blurb: Did you use the Toolkit to facilitate a TOP sprint at your agency?

---

{% include toolkit-hero-refresh.html %}
<section class="grid-container padding-y-8">
  <div class="grid-row">
    <div>
      {% for item in site.data.toolkits.topx.phase-3.body %}
        <div class="toolkit-section  margin-top-10">
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
      <a href="{{ site.baseurl }}/assets/files/topx-resources/topx-toolkit-resources.zip" target="_blank"
          class="usa-button usa-button--inverse usa-button--outline margin-bottom-3 site-button">
          Download All {{page.download-text}}
      </a>
    </div>
    <p {% if data.title.class %}class="{{ data.title.class }}"{% endif %}>
      {{ page.blurb }}
    </p>
    <div>
      <a href="mailto:census.opportunityproject@census.gov?subject=My Experience With the TOPx Toolkit" target="_blank"
        class="usa-button usa-button--secondary site-button">
        {{page.continue-text}}
      </a>
    </div>
  </div>
</section>
