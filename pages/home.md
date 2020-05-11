---
permalink: /
title: "The Opportunity Project"
#class and layout determines page structure. Do not edit except for major updates!
layout: landing
class: home

# full span, top of page section
hero:
  text: Putting America's data to work for veterans
  subtext: We help teams use federal open data to build solutions to our nation’s toughest challenges

# content centered with outline, on blue background
callout:
  text: The Opportunity Project
  subtext: Our Mission
  body:
    # for each separate portion of text, add a "p" (short for paragraph)
    - p: Finding federal data is hard. Making a difference with it is even harder.
    - p: That’s where we come in.
    - p: We connect you with experts from industry, communities and government to help you turn federal open data into life-changing tech, faster.


# used here for the "how it works" section
explanation:
  title: How It Works
  image:
  # two column layout of text; the text layout is wide; items build left to right and top to bottom, meaning the first item listed will be left aligned, the next will be next to it (in the right column), the third will be in a new row below, left aligned under the first item, and so on.
  #         |    
  #    1    |    2
  #  ---------------
  #    3    |    4
  #         |    
  # This layout can be used for two side-by-side pieces of text or for a "quad" style layout. If items should be numbered, follow this pattern. If no numbers are needed, the "number" item should marked false
  text:
  - number: 1
    title: Identify challenges
    description: Federal agencies and advocacy organizations identify our nation’s most pressing social, economic, and environmental challenges.
  - number: 2
    title: Team up
    description: Teams from companies, universities, and more sign up to build digital products that use federal open data to help solve these challenges.
  - number: 3
    title: Build
    description: Over 12 weeks, teams build their solutions. Experts  provide feedback on user needs, product strategy, and the best datasets available to solve each problem.
  - number: 4
    title: Launch & scale
    description: Teams launch their products at our annual Demo Day showcase. Afterward, we continue to help teams deploy their solutions to their target end users.

# three column layout of statistics; the border value indicates a vertical line to the side of the text. The underline indicates a separator between the statistic and the description
impact:
  - statistic: '100+'
    underline: short yellow accent
    description: Consumer-facing digital tools built through our sprints since 2016
    border: none
  - statistic: '800+'
    underline: short yellow accent
    description: People who have contributed to products built through TOP
    border: right
  - statistic: '34'
    underline: short yellow accent
    description: Unique problem statements addressed through TOP
    border: right

# content with large image and a smaller portion of text next to it. How the image and text are placed next to each other is determined by the value for the "text align"
featured_items:
  - name: City Builder
    team: Citi Ventures
    description: Bringing transparency to the Opportunity Zone ecosystem for private investors, fund managers, wealth managers, and municipalities
    img:
    alt: Dashboard view on City Builder website displaying occupancy and land use statistics next to a map of several outlined city blocks
    text_align: right
  - name: SILLE
    team: Data Ovela
    description: Helping leaders prepare for crisis by identifying whether local infrastrature is at risk of catastrophic failure
    img:
    alt: Map view on SILLE website showing Bytom, Poland
    text_align: left
  - name: Job Opportunity Tool
    team: Redfin
    description: Helping job seekers understand the opportunities and tradeoffs when deciding where to relocate
    img:
    alt: Dashboard view on Job Opportunity Tool showing a map of the United States and colored circles indicating the total number and concentration of web developers in geographic areas across the country
    text_align: right

---
{% include hero.html %}
{% include text-callout-centered.html %}
{% include two-column-wide-text.html %}
{% include three-column-narrow-text.html %}
{% include featured_items.html %}
