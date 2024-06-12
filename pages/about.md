---
title: About
class: about
permalink: /about/
layout: default

# hero section
lead:
  - 'The Opportunity Project helps companies, non-profits, and universities turn federal open data into new technologies that solve real-world problems for people across the country.'
  - 'We focus on the nation’s toughest challenges, from the opioid crisis and disaster relief to improving STEM education and strengthening the workforce. To date, 175+ consumer-facing digital products have been created, using open data to serve families, businesses and communities nationwide.'

circuit-banner:
  background-color: primary
  image: icons/circuity-pattern.svg
  sidebar-color: base-darkest


#blue background section
content-primary:
  title: How America’s Data Becomes America’s Innovation
  description:
    - 'We facilitate 12-week product development cycles (called “sprints”) that pull together innovators from every sector. Tech teams join a sprint to build data-powered solutions to critical problems facing the public. Then, we match them with subject-matter experts, who offer valuable information and feedback. '
  subsections:
    - title: Collaboration, Simplified
      description: We facilitate virtual collaboration across government, industry, and communities. In our sprints, cross-sector expertise is only an email, chat room, or call away.
      image: photos/about/about-01.png
      image-alt: Three people analyzing sticky notes on the wall at a workshop
    - title: Federal Data, Explained
      description: The Opportunity Project unlocks the potential of open data. We help teams find, understand, and integrate government data into products that provide value and help solve important problems.
      image: photos/about/about-02.png
      image-alt: A man writing on a poster at a workshop
  button:
    - link:
      text: Learn More

#white background section
content-light:
  title: 
  
# three column layout of statistics; the border value indicates a vertical line to the side of the text. The underline indicates a separator between the statistic and the description
impact:
  - statistic: '40+'
    underline: short yellow accent
    description: National challenges addressed, including ocean plastic pollution, COVID-19 economic recovery, disaster <br><br>
    border: statistic-border-right
  - statistic: '135+'
    underline: short yellow accent
    description: Public-facing digital products launched since 2016 through TOP’s 12-week technology development sprints
    border: statistic-border-right
  - statistic: '1300+'
    underline: short yellow accent
    description: Alumni participated in TOP sprints, including developers, designers, community leaders, data & policy experts, students, and government agencies
    border: padding-right-3

# three column layout of statistics; the border value indicates a vertical line to the side of the text. The underline indicates a separator between the statistic and the description
impact:
  - statistic: '40+'
    underline: short yellow accent
    description: National challenges addressed, including ocean plastic pollution, COVID-19 economic recovery, disaster <br><br>
    border: statistic-border-right
  - statistic: '175+'
    underline: short yellow accent
    description: Public-facing digital products launched since 2016 through TOP’s 12-week technology development sprints
    border: statistic-border-right
  - statistic: '1300+'
    underline: short yellow accent
    description: Alumni participated in TOP sprints, including developers, designers, community leaders, data & policy experts, students, and government agencies
    border: padding-right-3

# centered photo with overlay
photo:
  image: photos/about/about-coil.png
  img-alt: Abstract exploding data with vibrant red and blue lines
  overlay:
    title: From the Census Open Innovation Labs
    color: secondary-white
    text: The Opportunity Project is led by Census Open Innovation Labs (COIL) at the U.S. Census Bureau. We’re a nimble, startup-like team with a portfolio of initiatives that are setting a new standard for open innovation in the federal government.
    button:
      text: Read about the Team
      href: https://coil.census.gov/
      color: secondary-white
      isExternal: true
  background: bg-base-lightest
---

{% include hero.html %}
{% include circuit-banner.html %}
{% include sidebar-and-content-primary.html %}
{% include three-column-narrow-text.html %}

<section class="bg-base-lightest">
  <section class="usa-section grid-container bg-white">
    <div class="grid-row grid-gap">
      <div class="desktop:grid-col-3 tablet:grid-col-3 grid-offset-1">
          <h2 style="font-size:32px;" class="padding-right-3 margin-top-0 line-height-sans-3">Our History</h2>
      </div>
      <div class="desktop:grid-col-7 tablet:grid-col-6 border-top border-base-lighter">
      <p>The Opportunity Project launched in March 2016 as a White House initiative to catalyze new technologies that use federal and local data to empower communities with information about critical resources, such as affordable housing, quality schools, and jobs. Since then, the program has grown in scope and impact, and is now a widely used model for collaborative problem solving through data, technology, and user centered design.
      </p>
      <p>
        In the past 6 years, TOP’s hundreds of participants have created 175+ digital products. Today, TOP is widely referenced as a model for how the government can seed cross-sector collaboration around open data, and has been included in policies like the <a href="https://strategy.data.gov/" class="text-bold text-black opacity-80">Federal Data Strategy</a>, <a href="https://www.whitehouse.gov/omb/management/pma/" class="text-bold text-black opacity-80">the President’s Management Agenda</a>, <a href="https://performance.gov" class="text-bold text-black opacity-80">performance.gov</a>,  <a href="https://www.commerce.gov/about/strategic-plan" class="text-bold text-black opacity-80">Department of Commerce’s Strategic Plan</a>, <a href="https://www.usda.gov/sites/default/files/documents/rural-prosperity-report.pdf" class="text-bold text-black opacity-80">the Task Force on Agriculture and Rural Prosperity Report</a>, and many others. In 2019, <a href="{{site.top-bill}}" class="text-bold text-black opacity-80">The Opportunity Project Act of 2019</a> was introduced to permanently authorize the program.</p>
       
      </div>
    </div>
  </section>
</section>
{% include single-column-centered-photo-with-overlay.html photo=page.photo %}
