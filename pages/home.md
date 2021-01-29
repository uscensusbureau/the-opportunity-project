---
permalink: /
title: "The Opportunity Project"
#class and layout determines page structure. Do not edit except for major updates!
layout: default
class: home

# full span, top of page section
hero:
  text: Putting America's data to work for the people
  subtext: We help teams use federal open data to build solutions to our nation’s toughest challenges
  image: photos/home/hero.png
  image-alt: Collage of a veteran, student, father and daughter on the beach, workshop participants, and a conference speaker.

circuit-banner:
  background-color: primary
  image: icons/circuity-pattern.svg
  sidebar-color: base-darkest


# content centered with outline, on blue background
callout:
  text: The Opportunity Project
  subtext: OUR MISSION
  body:
    # for each separate portion of text, add a "p" (short for paragraph)
    - p: Finding federal data is hard. Making an impact with it is even harder.
    - p: That’s where we come in.
    - p: We connect you with experts from the tech industry, communities, and government to help you turn federal open data into life-changing tech, faster.


connecting-banner:
  background-color: primary
  image: home/homepage-01.png
  alt: Man presenting to participants at a user engagement workshop hosted by The Opportunity Project

# used here for the "how it works" section
explanation:
  # two column layout of text; the text layout is wide; items build left to right and top to bottom, meaning the first item listed will be left aligned, the next will be next to it (in the right column), the third will be in a new row below, left aligned under the first item, and so on.
  #         |    
  #    1    |    2
  #  ---------------
  #    3    |    4
  #         |    
  # This layout can be used for two side-by-side pieces of text or for a "quad" style layout. If items should be numbered, follow this pattern. If no numbers are needed, the "number" item should marked false
  title: Our Process
  text:
    row:
      - border: border-0
        cards:
          - number: 1
            title: Identify challenges
            description: Federal agencies and advocacy organizations identify our nation’s most pressing social, economic, and environmental challenges.
          - number: 2
            title: Team up
            description: Teams from companies, universities, and more sign up to build digital products that use federal open data to help solve these challenges.
      - border: border-base-light border-top
        cards:
          - number: 3
            title: Build
            description: Over 12 weeks, teams build their solutions. Experts  provide feedback on user needs, product strategy, and the best datasets available to solve each problem.
          - number: 4
            title: Launch & scale
            description: Teams launch their products at our annual Demo Day showcase. Afterward, we continue to help teams deploy their solutions to their target end users.
            button:
              link: our-process
              text: Learn More

# three column layout of statistics; the border value indicates a vertical line to the side of the text. The underline indicates a separator between the statistic and the description
impact:
  - statistic: '100+'
    underline: short yellow accent
    description: Consumer-facing digital tools built through our sprints since 2016 <br><br>
    border: statistic-border-right
  - statistic: '800+'
    underline: short yellow accent
    description: Contributors including designers, developers, data stewards, and community advocates
    border: statistic-border-right
  - statistic: '34'
    underline: short yellow accent
    description: Unique problem statements addressed through TOP
    border: padding-right-3

# content with large image and a smaller portion of text next to it. How the image and text are placed next to each other is determined by the value for the "text align"
featured_items:
  - name: City Builder
    team: Citi Ventures
    description: Bringing transparency to the Opportunity Zone ecosystem for private investors, fund managers, wealth managers, and municipalities
    img: photos/home/products/city-builder.png
    alt: Screenshot of the City Builder website showing the occupancy rate of a selected region
    text_align: right
    button-link: city-builder/
  - name: SILLE
    team: Data Ovela
    description: Helping leaders prepare for crisis by identifying whether local infrastructure is at risk of catastrophic failure
    img: photos/home/products/sille.png
    alt: Screenshot of the SILLE tool showing a satellite map of Poland with interactive features
    text_align: left
    button-link: sille/
  - name: PRADOS
    team: iCASAPR
    description: Helping municipalities and communities in Puerto Rico collect and use address data to improve emergency response
    img: photos/home/products/prados.png
    alt: Mockup of the PRADOS (Puerto Rican Address Database Operations Support) tool on an iPad
    text_align: right
    button-link: prados/

# three column layout of testimonials
# alt text is added using the name of the person
testimonials:
  - text: 'TOP is building something that is new and really powerful. With government as a convener, it can get people    
    together around a problem who wouldn’t otherwise be working together.'
    person: Rob Lalka
    organization: Public Democracy
    image: photos/home/headshots/rob-lalka.png
  - text: '[TOP] really represents the best of what government can be — a platform for engagement that is so core to our democracy.'
    person: Denice Ross
    organization: Georgetown University
    image: photos/home/headshots/denice-ross.png
  - text: The emphasis on human-centered design and the opportunity to speak to all of these different advocates and stakeholders was key in creating a product that would actually help the end user.
    person: Ryan Harper
    organization: CITI VENTURES
    image: photos/home/headshots/ryan-harper.png

# get involved
get_involved:
  title-image: photos/get-involved/get-involved.png
  title-image-alt: Man speaking into microphone at a user engagement workshop hosted by The Opportunity Project
  title: Get Involved
  subtitle:
    - p: Join a community of hundreds working to transform America’s data into America’s innovation.
    - p: Tell us what you’re interested in. We’ll keep you posted about opportunities to join a sprint, attend an event, and more.
  buttons:
    - b: View Sprints
      style: primary dark
      link: sprints/
    - b: Get Updates
      style: secondary white
      link: https://public.govdelivery.com/accounts/USCENSUS/signup/16610
  text:
    - number: 1
      number_display: false
      title: Build with open data
      subtitle: TOP Product Development Toolkit
      link: ../product-development/toolkit
      description: 'Not able to join a TOP sprint? Use our product development toolkit—based on the TOP sprint model—to create civic impact with open data. We cover user research, navigating federal data, and more.'
    - number: 2
      number_display: false
      title: Run a TOPx sprint
      subtitle: Coming Soon
      description: 'Are you a federal agency looking to adopt The Opportunity Project model? Use our TOPx toolkit—a step-by-step resource complete with sample materials—to help run your own TOP sprint.'

#news (NOT USED BY TEMPLATE => HARDCODED IN _includes/news.html)
#news_item:
#  - title: The Opportunity Project Marks 100 Product Milestone
#    date: MARCH 2020
#    organization: Meritalk
#    image: /photos/home/news/news-main.png
#    image-alt: American flag waving in a blue sky
#    size: large
#    link:
#    number: 1
#  - title: Census Project Matches Your Agency's Data with Civic Innovators
#    date: December 2019
#    organization: NextGov
#    image: /photos/home/news/news-01.png
#    image-alt: Participants at a workshop
#    size: small
#    link:
#    align: right
#    number: 2
#  - title: How Federal Agencies Can Use Agile Development to Apply Open Data
#    date: June 2019
#    organization: Fedscoop
#    image: /photos/home/news/news-02.png
#    image-alt: Man writing on a poster at a user engagement workshop
#    size: small
#    link:
#    align: right
#    number: 3
#  - title:
#    date:
#    organization: Want to write a story about TOP?
#    image:
#    size: small
#    # default is that the title of the news article is clickable. to add another card (either that is not a news item or that uses a button) add "button text" and the text will appear on the button and the link will be attached there, not on any other part of the card
#    button_text: Let's Talk
#    link:
#    align: left
#    number: 4
#  - title: President Obama's new open data initiative could help cities help themselves
#    date: March 2016
#    organization: NextGov
#    image: /photos/home/news/news-03.png
#    image-alt: New York City skyline
#    size: small
#    link:
#    align: right
#    number: 5

---

{% include announcement-banner.html %}
{% include hero.html %}
{% include circuit-banner.html %}
{% include text-callout-centered.html %}
{% include connecting-banner.html %}
{% include two-column-wide-text.html %}
{% include three-column-narrow-text.html %}
{% include featured_items.html %}
{% include logo-garden.html %}
{% include three-column-wide-text.html %}
{% include circuit-banner.html %}
{% include get-involved.html %}
{% include news.html %}