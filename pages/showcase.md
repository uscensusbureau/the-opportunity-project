---
title: Showcase
permalink: /showcase/

layout: default

# full span, top of page section
hero:
  text: Products
  subtext: Discover products created through The Opportunity Project
---

{% include hero.html %}

<section class="usa-section usa-graphic-list grid-container">
  {% assign case_studies = site.data.case_studies %}
    <div class="grid-row grid-gap">
      {% for case in case_studies %}
        <div
          class="desktop:grid-col-4 tablet:grid-col-4 usa-media-block__background-image-landscape"
        >
          <a href="{{ site.baseurl}}/{{ case.product_name | slugify }}/" >
          {% if case.image %}
            <img src="{{ site.baseurl}}/assets/img/photos/products/{{ case.image }}" alt="{{ case.image-alt }}">
          {% endif %}
          <div class="content-grid-one-third padding-left-4 padding-right-2">
            {% if case.product_name %}
              <h2 class="text-white padding-top-4">{{ case.product_name }}</h2>
            {% endif %}
            {% if case.tech_team %}
              <p class="font-mono-2xs opacity-70">{{ case.tech_team | upcase }}</p>
            {% endif %}
            {% if case.overlay_text%}
              <p class="font-sans-2xs opacity-70">{{ case.overlay_text}}</p>
            {% endif %}
          </div>
          </a>
        </div>
      {% endfor %}
    </div>
</section>
<div id="all-products"
  class="border-base-lighter border-top display-flex flex-column flex-align-center desktop:margin-top-5 desktop:margin-bottom-5"
>
  <h2 class="tag-header bg-base-darkest">ALL PRODUCTS</h2>
</div>
<div class="display-flex flex-column flex-align-center">
  <form id="product-search-form" class="usa-search usa-search--small desktop:width-tablet" role="search">
    <label class="usa-sr-only" for="search-field">Search all products</label>
    <input class="usa-input" id="search-field" type="search" name="search" placeholder="Search all products">
    <button class="usa-button__primary-dark" type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </form>

  <form id="product-filter-form"  class="display-flex flex-column flex-align-center">
    <div class="grid-row grid-gap-sm margin-bottom-4">
      <div class="desktop:display-inline-block height-5 z-400">
        <div class="usa-accordion usa-accordion--bordered width-15 desktop:width-card margin-right-2">
          <p class="font-mono-xs">
            <button class="product-filter-button usa-accordion__button width-15 desktop:width-card usa-button__secondary-gray padding-1 text-center"
              aria-expanded="false"
              aria-controls="topics">
              TOPICS
            </button>
          </p>
          <div id="topics" class="usa-accordion dropdown-menu">
            {% for topic in site.data.product-filters.topics %}
                <div class="usa-checkbox">
                  <input class="usa-checkbox__input" id="{{ topic }}" type="checkbox" name="filter-checkbox" value="{{ topic }}">
                  <label class="usa-checkbox__label" for="{{ topic }}">{{ topic }}</label>
                </div>
            {% endfor %}
          </div>
        </div>
      </div>
      <div class="desktop:display-inline-block height-5 z-400">
        <div class="usa-accordion usa-accordion--bordered width-15 desktop:width-card margin-right-2">
          <p class="font-mono-xs">
            <button class="product-filter-button usa-accordion__button width-15 desktop:width-card usa-button__secondary-gray padding-1 text-center"
              aria-expanded="false"
              aria-controls="year">
              Year
            </button>
          </p>
          <div id="year" class="usa-accordion dropdown-menu z-400">
            {% for year in site.data.product-filters.years %}
                <div class="usa-checkbox">
                  <input class="usa-checkbox__input" id="{{ year }}" type="checkbox" name="filter-checkbox" value="{{ year }}">
                  <label class="usa-checkbox__label" for="{{ year }}">{{ year }}</label>
                </div>
            {% endfor %}
          </div>
        </div>
      </div>
      <div class="desktop:display-inline-block height-5 z-400">
        <div class="usa-accordion usa-accordion--bordered width-15 desktop:width-card-lg margin-right-2">
          <p class="font-mono-xs">
            <button class="product-filter-button usa-accordion__button width-15 desktop:width-card-lg usa-button__secondary-gray padding-1 text-center"
              aria-expanded="false"
              aria-controls="agency">
               Partner Agency
            </button>
          </p>
          <div id="agency" class="usa-accordion dropdown-menu z-400">
            {% for agency in site.data.product-filters.agencies %}
                <div class="usa-checkbox">
                  <input class="usa-checkbox__input" id="{{ agency }}" type="checkbox" name="filter-checkbox" value="{{ agency }}">
                  <label class="usa-checkbox__label" for="{{ agency }}">{{ agency }}</label>
                </div>
            {% endfor %}
          </div>
        </div>
      </div>
      <div class="desktop:display-inline-block margin-top-2">
        <input class="usa-button__secondary-dark padding-1 border-0" type="submit" value="Filter Products">
      </div>
      <div class="display-inline-block margin-top-2">
        <button class="usa-button__secondary-red padding-1" id="reset-filter">Reset Filter &#127335;
        </button>
      </div>
    </div>
  </form>
</div>
<section class="usa-section usa-graphic-list grid-container">
  <ul class="usa-card-group">
    {% assign products = site.data.products %}
    {% for product in products %}
      {% if product.link %}
        
        {% assign problem_statements = site.data.problem_statements | where:"airtable_id", product.problem_statement[0] %}
        {% assign problem_statement = problem_statements[ 0 ] %}
        {% assign sprints = site.data.sprints | where:"airtable_id", problem_statement.Sprints[ 0 ] %}
        {% assign sprint = sprints[ 0 ] %}
        
        <li id="product-card-{{product.title | slugify}}" class="desktop:grid-col-3 tablet:grid-col-3 usa-card product-card-active z-300" name="productCard">
          <div class="usa-card__container clickable-card bg-base-darkest">
            <header class="usa-card__header">
              <h2 class="usa-card__heading text-white font-sans-md" value="{{product.title | slugify}}">{{ product.title }}</h2>
              <h3 class="pc-inactive">{{ sprint.Year }}</h3>
              {% if product.category %}
                <h4 class="pc-inactive">{{ product.category }}</h4>
              {% endif %}
              <h5 class="pc-inactive">{{ problem_statement.agency_text }}</h5>
              <p style="display:none">{{ product.description }}</p> <!-- never show this. just for filtering -->
              <p class="card-problem-statement" style="display:none">{{ problem_statement['Full Title'] | slugify }}</p> <!-- never show this. just for searching -->
            </header>
            <div class="usa-card__body">
              <p class="font-mono-xs text-white">{{ product.tech_team_text | upcase | remove: '"' }}</p>
            </div>
            <div class="usa-card__img">
              <img
                src="{{ site.baseurl }}/img/photos/products/{{ product.image }}"
                alt="{{ product.image-alt }}"
              />
            </div>
          </div>
        </li>
        <div id="modal-{{ product.title | slugify }}" class="modal modal-inactive z-500">
          <li class="usa-card usa-card--flag modal-content fixed-width-modal desktop:grid-col-8 tablet:grid-col-8">
            <div class="usa-card__container margin-0 border-0">
              <header class="usa-card__header desktop:grid-col-6 product-card-modal-text">
                <span class="close">&times;</span>
                <h3 class="font-sans-md">{{ product.title }}</h3>
              </header>
              <div class="usa-card__media desktop:grid-col-6">
                <div class="usa-card__img">
                  <img src="{{ site.baseurl }}/img/photos/products/{{ product.image }}"
                  alt="screenshot of City Builder website">
                </div>
              </div>
              <div class="usa-card__body desktop:grid-col-6  product-card-modal-text">
                <p class="font-mono-xs">{{ product.tech_team_text | upcase }}</p>
                <p>{{ product.description }}</p>
                <p class="font-sans-2xs">Datasets Used</p>
                <p class="font-sans-2xs">
                  {{ product.data_sets_text }}
                </p>
              </div>
              <div class="usa-card__footer  product-card-modal-text">
                <button class="usa-button__primary-red" type="button" name="button"><a href="{{ product.link }}" target="_blank">Go to Product</a></button>
              </div>
            </div>
          </li>
        </div>
      {% endif %}
    {% endfor %}
  </ul>
</section>