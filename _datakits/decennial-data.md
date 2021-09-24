---
title: Decennial Data
permalink: /data/decennial/
class: datakit

sprint-name: 2020 Census Data
date: 2021-09-01

lead: Datasets to help visualize 2020 Census Decennial data in new and creative ways

image: /assets/img/data-kits/decennial-data.jpg
image-alt: 'Overhead view of a city block with rooftops and cars on the street'

data-experts:
  - category: General Census Data Questions
    contacts: 
      - name: Eric Coyle
        email: eric.a.coyle@census.gov
      - name: Dissemination Outreach Branch
        email: census.data@census.gov
  
  - category: Census API Questions
    contacts:
      - name: Logan Powell
        email: logan.t.powell@census.gov
      - name: Ryan Dolan	
        email: ryan.s.dolan@census.gov
  
  - category: Census Data Visualization Questions
    contacts:
      - name: Ryan Dolan
        email: ryan.s.dolan@census.gov
      - name: Gerson Vasquez
        email: gerson.d.vasquez@census.gov
---

### Below are additional points of contact for Census data in the following topics:

{% for group in page.data-experts %}
  <p class="margin-bottom-0 text-bold">{{ group.category }}:</p>
  <ul class="margin-top-0 usa-list--unstyled padding-left-4">
    {% for contact in group.contacts %}
      <li>
        {{contact.name}},
        <a class="usa-link" href="mailto:{{contact.email}}">{{contact.email}}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}