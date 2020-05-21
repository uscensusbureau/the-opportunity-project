---
title: Workforce Challenges
layout: default
permalink: /data-kit/workforce/
lead: Datasets on workers, businesses, jobs, credentials, and more, recommended by government experts for solving key workforce challenges.
image: /img/hero/workforce.png
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
      {% assign workforce = site.data.workforce %}
      {% for item in workforce %}
        <div
         class="desktop:grid-col-4 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0"
        >
          <a href="{{item.link}}" name="{{item.name}}">
            <div name="productCard" class="usa-media-block__body">
              {% if item.image %}
                <img
                  class="usa-media-block__img"
                  src="{{ item.image}}"
                  alt="screenshot of City Builder website"
                />
              {% endif %}
              <h3>
                {% if item.name %}
                  {{ item.name }}
                {% endif %}
              </h3>
              {% if item.agency %}
                <p>
                  by {{ item.agency}}
                </p>
              {% endif %}
              <p>
                {{ item.description}}
              </p>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </section>
</main>
