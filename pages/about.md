---
title: About
class: about
permalink: /about/
layout: default-internal-page

# hero section
lead:
  - 'The Opportunity Project at the U.S. Census Bureau helps companies, non-profits, and universities turn federal open data into new technologies that solve real-world problems for people across the country.'
  - 'We focus on the nation’s toughest challenges, from the opioid crisis and disaster relief to improving STEM education and strengthening the workforce. To date, 100 consumer-facing digital products have been created, using open data to serve families, businesses and communities nationwide.'

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
  title: Our History
  description:
    - 'The Opportunity Project launched in March 2016 as a White House initiative to catalyze new technologies that use federal and local data to empower communities with information about critical resources, such as affordable housing, quality schools, and jobs. Since then, the program has grown in scope and impact, and is now a widely used model for collaborative problem solving through data, technology, and user centered design.'
    - 'In the past 4 years, TOP’s hundreds of participants have created 100 digital products. Today, TOP is widely referenced as a model for how the government can seed cross-sector collaboration around open data, and has been included in policies like the Federal Data Strategy, the President’s Management Agenda, performance.gov,  Department of Commerce’s Strategic Plan, the Task Force on Agriculture and Rural Prosperity Report. and many others. In 2019, The Opportunity  Project Act of 2019 was introduced to permanently authorize the program.'

# centered photo with overlay
photo:
  image: photos/about/about-coil.png
  img-alt: Abstract exploding data with vibrant red and blue lines
  overlay:
    title: From the Census Open Innovation Labs
    text: The Opportunity Project is led by Census Open Innovation Labs (COIL) at the U.S. Census Bureau. We’re a nimble, startup-like team with a portfolio of initiatives that are setting a new standard for open innovation in the federal government.
    button-text: Learn More
    button-link: coil
  background: bg-base-lightest



---

{% include hero.html %}
{% include circuit-banner.html %}
{% include sidebar-and-content-primary.html %}
{% include sidebar-and-content-light.html %}
{% include single-column-centered-photo-with-overlay.html %}
