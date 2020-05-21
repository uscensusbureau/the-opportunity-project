---
title: Our Process
permalink: /our-process/
layout: default-internal-page
class: our-process

# hero section
lead:
  - 'The Opportunity Project facilitates 12-week product development cycles—called “sprints”—focused on helping companies, non-profits, and universities build products with federal open data that help solve national challenges.'
  - 'We give teams access to subject-matter and data experts to accelerate their progress. By emphasizing virtual communication, we make cross-sector collaboration easy and effective.'

connecting-banner:
  background-color: dark
  image: placeholder-home-banner-photo.png
  alt: "placeholder image"

# main explanation section
explanation:
  text:
  - title: Sprint Cycle
    image: photos/sprints/2020-natural-sprint.jpg
    image-alt: mountains
    description: In 12 weeks, tech teams build solutions to urgent problems identified by federal agencies and advocacy organizations. Along the way, we create opportunities for teams to hear from experts in federal data and policy and the communities they’re trying to help.
  - title: Share Insights
    image: photos/sprints/2020-built-sprint.jpg
    image-alt: overhead view of suburban residential block
    description: Tech teams get the insight they need to wrangle federal data, navigate policy contexts, and authentically address the needs of a community. They retain full control of their team, technical vision, business strategy, and resulting intellectual property.
  - title: Launch Products
    image: photos/sprints/2020-university-sprint.jpg
    image-alt: lecture hall
    description: Sprints typically run through the summer and fall and culminate in an annual Demo Day, where press, data enthusiasts, technologists, and people in government gather to celebrate the launch of products built through The Opportunity Project that year.

# sprint timeline
progress-bar:
  - number: 1
    title: Identify challenges
    description: Federal agencies and national advocacy organizations identify high-priority challenges facing the public.
  - number: 2
    title: Team up
    description: Tech teams from industry and universities sign on to create data-driven, digital products in collaboration with end users, data and policy experts.
  - number: 3
    title: Build
    description: Tech teams build products during a  12 week virtual tech development sprint that includes user research, data exploration, and product development. Past products include mapping tools, apps, websites, games, AI algorithms, network visualizations, and more.
    accordions:
      - aria: milestones
        title: Sprint Milestones
        steps:
          - 'User research: Teams conduct user research and present what they’ve learned about their end user to cross-sector experts for feedback.'
          - 'Data discovery: Teams explore data sets from across government - curated by TOP - and connect with federal data stewards to present what they’ve learned and ask questions about how to find and work with federal data.'
          - 'Concept Pitch: Teams present their product concept for feedback.'
          - 'Beta Demo: Teams present a prototype of their product for feedback.'
  - number: 4
    title: Launch
    description: Products are launched and showcased at an in-person Demo Day press event in Washington DC.
  - number: 5
    title: Reach end users
    description: After the sprint, participants work to ensure products reach end users and move the needle on national challenges. Teams have the option to apply for a financial prize to continue their work.

# roles title and description


# roles "quadrant"
card-explanation:
  title: Roles
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
  card-color: primary-lightest
  cards:
    - title: Tech Teams
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
    - title: Government
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
    - title: User Advocates
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
    - title: Product Advisors
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
---

{% include hero.html %}
{% include connecting-banner.html %}
{% include single-column-centered-list.html %}
{% include timeline-progress-section-dark.html %}
{% include two-column-card-text.html %}
