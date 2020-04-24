---
title: Datakit
layout: default
permalink: /data-kit-hub
hero:
  text: Curated Datasets
  caption: The Opportunity Project
  subtext: Discover issue-specific data recommended by government experts and test-driven by teams working to solve the nation’s biggest challenges.
  tag: Beta
---
{% assign hero = page.hero %}
<div class="alt-container data-kit">
  <section class="interior-hero">
    <div class="grid-container">
      <div class="interior-hero__callout">
        <h2 class="interior-hero__heading"><span class="interior-hero__heading--alt">{{ hero.text}}</span>
        </h2>
        <h6><span>by </span>{{ hero.caption }}</h6>
        <p>{{ hero.subtext }}</p>
      </div>
    </div>
  </section>
  {% include data-kits.html %}
</div>
