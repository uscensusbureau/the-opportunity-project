---
title: Curated Datasets
layout: default
permalink: /data-kit/
lead: Discover issue-specific data recommended by government experts and test-driven by teams working to solve the nation’s biggest challenges.
---
<main id="main-content">
  <section>
    <div class="grid-container">
      <div class="maxw-mobile-lg">
        <h1
          class="hero--heading margin-top-10 line-height-sans-3 text-thin font-lang-13"
        >
          {{ page.title }}
        </h1>
        <p class="font-sans-md">{{ page.lead }}</p>
      </div>
    </div>
  </section>
  <section class="usa-section usa-graphic-list grid-container">
    <div class="grid-row grid-gap">
      {% assign datasets = site.data.data-kits %}
      {% for dataset in datasets %}
        <div
         class="desktop:grid-col-4 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0"
        >
          <div name="productCard" class="usa-media-block__body">
            <img
              class="usa-media-block__img"
              src="{{ dataset.image}}"
              alt="screenshot of City Builder website"
            />
            <h3>
              {% if dataset.short_url %}
                <a href="{{site.baseurl}}/data-kit/{{dataset.short_url}}">{{ dataset.title }}</a>
              {% else %}
                {{ dataset.title }}
              {% endif %}
            </h3>
            <p>
              {{ dataset.description}}
            </p>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
</main>
