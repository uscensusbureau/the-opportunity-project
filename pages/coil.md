---
permalink: /coil
title: "Census Open Innovation Labs"
#class and layout determines page structure. Do not edit except for major updates!
layout: default
class: coil

# full span, top of page section
hero:
  text: "We're transforming cross-sector collaboration"
  subtext: We bring together government, industry, and communities to unleash creativity and solve national challenges.
  image: photos/coil/coil-hero.png
  image-alt: Collage of photos of workshop participants.


# content centered with outline, on blue background
callout:
  text: Our Mission
  subtext: CIVIC IMPACT BY THE PEOPLE
  body:
    # for each separate portion of text, add a "p" (short for paragraph)
    - p: Our mission is to source knowledge and solutions to solve key challenges for the Census Bureau and the public at large through user-centered design, data, creative media, and technology.

connecting-banner:
  background-color: primary
  image: coil/who-we-are.png
  alt: Man presenting to participants at a user engagement workshop hosted by The Opportunity Project

# who we are
explanation:
  text:
    - offset: grid-offset-1
      description: Census Open Innovation Labs (COIL) is a nimble, startup-like team within the U.S. Census Bureau with a portfolio of initiatives that are setting a standard for open innovation across government.
    - description: We leverage the networks, talents, and expertise of companies, organizations and individuals outside our own walls and encourage disparate groups to innovate together.
  icon-description: Our team is comprised of diverse backgrounds and skillsets. Our unique breadth of expertise allows us to engage effectively with a wide variety of stakeholders.
  icons:
    - title: Human-Centered Design
    - title: Open Data Advocacy
    - title: Community Engagement
    - title: Design and Technology
    - title: Innovation

# content with large image and a smaller portion of text next to it. How the image and text are placed next to each other is determined by the value for the "text align"
featured_items:
  - name: The Opportunity Project
    description: We bring together tech companies, non-profit community groups, and federal agencies to build tools that advance economic opportunity using federal open data.
    img: photos/coil/top.jpg
    alt: Screenshot of the City Builder website showing the occupancy rate of a selected region
    text_align: right
    button-link: case-studies-city-builder
  - name: Census Accelerate
    description: We mobilize the creative community and partner with influential stars to spread awareness about the importance of the 2020 Census and combat mis- and dis-information.
    img: photos/coil/accelerate.png
    alt: Screenshot of the SILLE tool showing a satellite map of Poland with interactive features
    text_align: left
    button-link: case-studies-sille
  - name: Civic Digital Fellowship
    description: We facilitate the U.S. Census Bureau’s participation in this first-of-its-kind internship program that empowers computer science, data science, and design students to create social good by breaking down the barriers to entry in social impact spaces.
    img: photos/coil/cdf.png
    alt: Mockup of the PRADOS (Puerto Rican Address Database Operations Support) tool on an iPad
    text_align: right
    button-link: case-studies-prados
  - name: Human-centered Design Training
    description: We teach human-centered design fundamentals to leaders at the U.S. Census Bureau to introduce new problem solving methods and methods for collaboration.
    img: photos/coil/hcd.png
    alt: Screenshot of the SILLE tool showing a satellite map of Poland with interactive features
    text_align: left
    button-link: case-studies/sille  

# get involved
contact_us:
  title: Contact Us
  subtitle:
    - p: "For questions about our programs or inquiries about partnerships, please reach out to:"
  people:
    - name: Mara Abrams
      job_title: 'Founder and Co&#8288;-&#8288;Director'
      contact: 'Census.Accelerate@census.gov'
    - name: Drew Zachary
      job_title: Co-Director
      contact: 'Census.opportunityproject@census.gov'


---
{% include hero.html %}
{% include text-callout-centered.html %}
{% include connecting-banner.html %}
{% include two-column-and-icon-garden.html %}
{% include featured_items_even.html %}
{% include three-column-wide-text.html %}
{% include contact-us.html %}
