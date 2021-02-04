---
title: Components
permalink: /components/

layout: default

# content to create sample components

# announcement-banner.html - NONE, hard-coded

# banner.html - NONE, hard-coded

# circuit-banner.html
circuit-banner:
  background-color: primary
  image: icons/circuity-pattern.svg
  sidebar-color: base-darkest

# connecting-banner.html

connecting-banner:
  background-color: primary
  image: home/homepage-01.png
  alt: Man presenting to participants at a user engagement workshop hosted by The Opportunity Project

# connecting-banner-notched.html

connecting-banner:
  background-color: dark
  image: case-studies/prados-01.png
  alt: Mockup of the PRADOS (Puerto Rican Address Database Operations Support) tool on an iPad

# connecting-banner-with-subheader.html

banner-subheader:
  top:
    background: white
  bottom:
    background: base-darkest
    line: '-light'
    subheader: How it Works

# connecting-banner-with-subheader-inverse.html
banner-subheader-inverse:
  top:
    background: base-darkest
    line: '-light'
    subheader: Active Sprints
  bottom:
    background: white

# contact-us.html
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

# data-kits.html, the data hub landing page - NONE, pulls from _/data/data-kits.yml

# featured-items.html / featured-items-even.html
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

# footer.html - NONE, hard-coded

# four-column-searchable.html - NONE, pulls data from:
#  - _/data/case_studies.yml (for the top case studies section)
#  - _/data/product_filters.yml (for the interactive portion of the products search feature)
#  - _/data/products.yml (for the product cards themselves)

# get involved
get_involved:
  title-image: photos/get-involved.png
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

# hcd-training.html - NONE, hard-coded

# header-and-subheader.html

header-and-subheader:
  title: Sprints
  description:
    - p: Sprints are
    - a:
      text: 12-week product development cycles
      link: "https://opportunity.census.gov/our-process"
    - p: where we bring together tech teams and collaborators to build digital products using open data.

# hero.html

class: sprints
text: Get Involved

# logo-garden.html - NONE, hard-coded

# navbar.html - NONE, hard-coded

# news.html - NONE, hard-coded

# offset-footer.html
footer: '“Participating in The Opportunity Project sprint was an invaluable experience for the City Builder team. The connections we made during the sprint gave us a wealth of insight into user needs, and our conversations with data stewards at the Census Bureau guided us toward data sets that helped us develop City Builder into a powerful platform for exploring place-based investments.” - Citi Ventures Team'


# sidebar-and-content-light.html - NONE, hard-coded

# sidebar-and-content-primary.html

content-primary:
  title: How America’s Data&nbsp;Becomes America’s Innovation
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

# sidebar-and-wide-content.html
sidebar:
  - title: PRODUCT
    text:
      - City Builder
    button:
      - link:  https://sille.space/app_fema/
  - title: TECH TEAM
    text:
      - Citi Ventures
  - title: Problem statement
    text:
      - Catalyzing Investment in Opportunity Zones
  - title: Prize Winner
    text:
      - 'Category - Building Thriving Communities (2019 TOP Prize Challenge)'
  - title: AGENCY
    text:
      - White House Council of Economic Advisors (CEA)
      - U.S. Department of Housing and Urban Development (HUD)
  - title: HOW TOP HELPED
    text:
      - Through the TOP user engagement workshop, the Citi Ventures team had the opportunity to talk to investors and fund matchers, user advocates and community members, which inspired them to focus on how their end product might address multi-stakeholder needs.
  - title: DATASETS USED
    list:
      - American Community Survey 5-Year Data - U.S. Census Bureau
      - Economic Research Service (ERS) - U.S. Department of Agriculture
      - Database of Accredited Postsecondary Institutions and Programs (DAPIP) - U.S. Department of Education
      - Electronic Data Gathering, Analysis and Retrieval (EDGAR) - U.S. Securities and Exchange Commission
      - Redfin’s Walk Score
      - Reonomy

# single-column-banner-photo-overlay-and-content.html
role-descriptions:
  #tech
  - title: Tech teams
    image: process/exploding-data-motif.png
    image-alt: decorative abstract, pixilated image with bright red, blue, white, turquoise and magenta
    description: 'Tech teams are the companies, universities, non-profits, and students who build digital products in the sprints. They design, develop, and launch the products they build, and typically own and maintain the products after the sprints. The role of tech team includes:'
    accordions:
      - aria: 1
        title: Role Description
        steps:
          - description:
            - Design and build a digital product that uses federal open data
          - description:
            - Collaborate with other sprint participants including government data experts to explore and use available data sets, user advocates to understand user needs, and product advisors to develop a post-sprint product strategy
          - description:
            - Conduct user research to ensure products are solving for real user needs
          - description:
            - Join virtual “milestone” calls during the sprint to share progress, ask questions and provide feedback to other teams
          - description:
            - Attend in-person Demo Day to present final products
          - description:
            - Own and maintain the product after the sprint, or develop a strategy for handoff
          - description:
            - 'Optional: attend an in-person user engagement workshop at the beginning of the sprint, and apply for a financial prize at the end of the sprint'
      - aria: 2
        title: Benefits of Participating
        steps:
          - title: Advance your mission
            description:
              - Work on a problem statement that aligns with your mission or CSR interests
              - Leverage sprint timeline and project management to advance internal lab or development projects
          - title: Develop business channels
            description:
              - Develop sample use cases and prototypes that demonstrate internal tech capabilities
              - Leverage sprint timeline and project management to advance internal lab or development projects
          - title: Gain access to cross-sector experts
            description:
              - Access to federal data and policy experts for real time Q&A
              - Access to end users for testing and feedback
          - title: Build relationships & partnerships
            description:
              - Build relationships in government
              - Develop partnerships with user groups and other companies    
          - title: Media spotlight and public relations
            description:
              - Gain visibility and press from Demo Day and beyond
          - title: Provide a creative opportunity
            description: Designers, developers, and engineers from your organization have the opportunity to drive the design and build of the product

# single-column-centered-list-dark.html
explanation-alt:
  text:
    - title: 2020 Census Sprint
      year: 2019
      default: ps-active
      image: photos/sprints/2020-census.png
      image-alt: People crossing a sidewalk
      description: 'Create digital tools and resources to help get out the count during the 2020 Census. Challenges include: Bridging the digital divide, Increasing digital literacy, Promoting 2020 Census jobs, and Reaching hard-to-count communities.'
      links:
        - link-path: 2020_Census_Problem_Statements.pdf
          link-text: View Full Brief (PDF)
    - title: Catalyzing Investment in Opportunity Zones
      year: 2019
      default: ps-active
      image: photos/sprints/2019-workforce-zones.png
      image-alt: Children playing outside
      description: Teams from companies, universities, and more sign up to build digital products that use federal open data to help solve these challenges.
      links:
        - link-path: 2019_workforce_problem_statements.pdf
          link-text: View Full Brief (PDF)
    - title: Modernizing Talent Discovery for High Growth Entrepreneurship
      year: 2019
      default: ps-active
      image: photos/sprints/2019-workforce-talent.png
      image-alt: Women indoors looking at something out of frame
      description: Create digital tools or open sourced data to transform talent discovery, matching, and retention in mid-size cities across the country, to help them achieve innovation and regional economic growth.
      links:
        - link-path: 2019_workforce_problem_statements.pdf
          link-text: View Full Brief (PDF)
    - title: Resources to Unleash American Entrepreneurship
      year: 2019
      default: ps-active
      image: photos/sprints/2019-workforce-eship.png
      image-alt: Women writing on a whiteboard
      description: Develop tools to empower entrepreneurs and innovation ecosystem builders to find and navigate the variety of resources available across the federal government.
      links:
        - link-path: 2019_workforce_problem_statements.pdf
          link-text: View Full Brief (PDF)
    - title: Helping the American Workforce Leverage Multiple Pathways for Career Growth
      year: 2019
      default: ps-active
      image: photos/sprints/2019-workforce-pathways.png
      image-alt: Two men in suits smiling and looking at a laptop together
      description: Create digital tools that help American workers to consider and take advantage of the multiple pathways available to find or advance in careers, from making alternative pathways more attractive to making opportunities more discoverable
      links:
        - link-path: 2019_workforce_problem_statements.pdf
          link-text: View Full Brief (PDF)
#### 2018
    - title: Promoting Access to and Interest in STEM Fields
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-stem.png
      image-alt: Anatomical drawings of the main human body systems
      description: 'Develop tools for parents and students that promote students’ interest in STEM and empower them to pursue STEM education locally.'
      links:
        - link-path: 2018-stem.pdf
          link-text: View Full Brief (PDF)
    - title: Helping States Develop Education Report Cards
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-reportcard.png
      image-alt: Closeup screenshot of application with average daily viewer statistics displayed
      description: Develop parent-friendly, scalable approaches to communicating data about public schools that drive insight and engagement—and meet the requirements of a recent federal law.
      links:
        - link-path: 2018-reportcard.pdf
          link-text: View Full Brief (PDF)
    - title: Using AI to Connect Veterans with Registered Apprenticeships
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-ai.png
      image-alt: A line of soldiers facing away from the camera and saluting
      description: Develop tools that use artificial intelligence algorithms or natural language processing technology to match veterans to registered apprenticeship programs.
      links:
        - link-path: 2018-ai.pdf
          link-text: View Full Brief (PDF)
    - title: Increasing Government Accountability by Connecting Federal Spending and Performance Data
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-accountability.png
      image-alt: Closeup of an individual getting their blood pressure taken, showing only the arms of the nurse and patient
      description: Develop public facing tools that link federal spending and performance (or outcome) data to provide comprehensive insight into the use of federal taxpayer dollars across programs.
      links:
        - link-path: 2018-accountability.pdf
          link-text: View Full Brief (PDF)
    - title: Improving Access to and Management of Federal Grants
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-grants.png
      image-alt: Black and white photo of the U.S. Treasury building
      description: Develop tools that expand on existing systems to help grant recipients manage the entire grants lifecycle, helping grant managers and recipients search for opportunities, streamline reporting, and assess risks.
      links:
        - link-path: 2018-grants.pdf
          link-text: View Full Brief (PDF)
    - title: Using Geospatial Data to Help People Prepare for Disasters
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-disasters.png
      image-alt: Birdseye view of a hurricane over coastline
      description: Create digital tools that use data to help individuals and community leaders gain a better understanding of national and community hazards and threats and enable the public to take appropriate preparedness actions.
      links:
        - link-path: 2018-disasters.pdf
          link-text: View Full Brief (PDF)
    - title: Harnessing Data and Leveraging Digital Tools to Combat the Opioid Crisis
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-opioids.png
      image-alt: Man standing in an arched hallway holding a baby in front of him, facing away from the camera
      description: Create digital tools and data sharing capabilities to support decisions across stakeholders responding to the opioid crisis, such as public health, public safety, law enforcement, community groups, the private sector, and individuals.
      links:
        - link-path: 2018-opioids.pdf
          link-text: View Full Brief (PDF)
    - title: Helping Tribal, State, and Local Governments with Local Address Data Collection
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-address.png
      image-alt: overhead view of suburban residential block
      description: Develop resources that help tribal, state, and local governments to create and maintain open address point data.
      links:
        - link-path: 2018-address.pdf
          link-text: View Full Brief (PDF)
    - title: Identifying and Strengthening Civic Environmental Stewardship
      year: 2018
      default: ps-inactive
      image: photos/sprints/2018-environ.png
      image-alt: Hands planting a seedling
      description: Develop tools that visualize and provide access to the patterns, overlaps, and gaps in environmental stewardship efforts in order to identify groups that support community quality of life and strengthen community resilience.
      links:
        - link-path: 2018-environ.pdf
          link-text: View Full Brief (PDF)

# single-column-centered-list.html
explanation:
  id: problem-statements
  text:
  - number: 1
    title: Natural Environments Sprint
    subtitle: RUNS JUNE—SEP
    image: photos/sprints/2020-natural-sprint.jpg
    image-alt: mountains
    description: This cohort focuses on challenges related to the natural environment, including reducing plastic pollution and developing markets for recycled materials.
    links:
      - link-path: 2020-natural-environment.pdf
        link-text: View Full Brief (PDF)
        link-icon:
    accordions:
      - aria: recycling
        title: Developing markets for recycled materials
        agency: U.S. Environmental Protection Agency (EPA)
        challenge: Develop innovative digital solutions that connect domestic recycling facilities with manufacturers to enhance recycling markets and increase the use of recycled materials.
        audience: 'U.S. recycling facilities and manufacturers looking to produce, sell, and buy quality recycled materials; rural or tribal communities; organizations and state and local governments striving to improve their recycling facilities and infrastructure.'
      - aria: polution
        title: Reducing plastic pollution in oceans
        agency: U.S. Department of State & The Wilson Center
        challenge: Create open data sets and engaging digital tools that complement existing citizen science plastics data, to help the public understand the amount of plastic on local beaches and in the ocean, where such plastic comes from, and actions that can be taken to alleviate the problem.
        audience: Engaged citizens passionate about reducing plastic pollution, rural or tribal communities, as well as policymakers, advocates, and researchers
      - aria: emissions
        title: Increasing awareness of transportation emissions’ effects on air quality
        agency: U.S. Environmental Protection Agency
        challenge: Create tools to help communities understand how transportation-caused pollution contributes to emissions, local air quality, and health, as well as the actions available to lessen these impacts.
        audience: Engaged citizens and the general public, especially those at higher risk for respiratory illnesses (e.g., individuals over 65, children, those with respiratory ailments), urban populations and communities (e.g., high transportation traffic areas), rural or tribal communities, and motorized vehicles users.
      - aria: agriculture
        title: Aiding agricultural decision-making
        agency: U.S. Department of Agriculture
        challenge: Create digital tools that provide farmers, ranchers, and researchers with timely access to National Agriculture Imagery Program (NAIP) data to help them make important agricultural and planning decisions.
        audience: Farmers, ranchers, engaged citizens, rural or tribal communities, emergency managers, state and local government, federal agencies, university researchers.

# single-column-with-photo-overlay.html

photo:
  image: photos/sprints/2020-earth-sprint-banner.jpg
  img-alt: overhead view of beach with sand, large rocks, and bright blue water
  overlay:
    title: 2020 Earth Sprints
    subtitle: LAUNCHED JUNE 2020
    text: This year, teams are leveraging technology and open data to solve challenges related to the natural and built environment, such as disaster response, sustainable energy and communities, the blue economy, and more.
    button-text: Get Updates
    button-link: https://public.govdelivery.com/accounts/USCENSUS/signup/16610
    button-color: usa-button__primary-red

# text-callout-centered.html
callout:
  text: The Opportunity Project
  subtext: OUR MISSION
  body:
    # for each separate portion of text, add a "p" (short for paragraph)
    - p: Finding federal data is hard. Making an impact with it is even harder.
    - p: That’s where we come in.
    - p: We connect you with experts from the tech industry, communities, and government to help you turn federal open data into life-changing tech, faster.

# three-column-narrow-text.html
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

# three-column-wide-text.html
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

# timeline-progress-section-dark.html
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

# title-and-content-primary.html
# content-primary:
#   title: Participate in the American Statistical Association Data Challenge Expo
#   id: asa
#   subsections:
#     - p: We’re excited to share a new way for the public to get involved in TOP this fall!  We’re partnering with The American Statistical Association (ASA) on the 2021
#     - a:
#       text: Annual Data Challenge Expo
#       link: https://community.amstat.org/dataexpo/home
#     - p: ", which is a competition with cash prizes for the best analysis and visualization of Census Bureau data.  The theme of this year’s challenge is “Helping Families, Business, and Communities Respond to COVID-19” (download "
#     - a:
#       text: problem statement
#       link: "../assets/files/covid-19-top-asa-problem-statement.pdf"
#     - p: to learn more and view examples of problems you could focus on).
#     - p: <br><br>
#     - p: Through the Expo, contestants are challenged to analyze the U.S. Census Bureau
#     - a:
#       text: 2019 American Community Survey (ACS) 1-year Estimates
#       link: https://www.census.gov/newsroom/press-kits/2020/acs-1year.html
#     - p: using statistical and visualization tools and methods, and present their findings at ASA’s Joint Statistical Meeting (JSM).
#     - p: <br>
#     - p: "Note: The challenge requires applicants to use the ACS 1-year estimates, but you are encouraged to use others as well, and additional data sets and points of contact can be found on"
#     - a:
#       text: The Opportunity Project Data Curation Hub.
#       link: ../data/covid-19
#     - p: <br><br>
#     - p: We also encourage you to develop digital products as part of your participation in the challenge. For a guidebook on transforming federal open data into digital tools for the American people, visit
#     - a:
#       text: The Opportunity Project Product Development Toolkit.
#       link: https://opportunity.census.gov/product-development/toolkit/
#   download:
#     link: "../assets/files/covid-19-top-asa-problem-statement.pdf"
#     text: Download Problem Statement (PDF)

#two-column-and-icon-garden.html
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

# two-column-card-text.html
card-explanation:
  title: Roles
  description: What participants do in each sprint varies depending on their role.
  card-color: primary-lightest
  cards:
    - title: Tech Teams
      description: Tech teams build a product through the sprint — whether new or within an existing  product or platform—that uses open data to solve one of our sprint problem statements.
    - title: Government
      description: Federal agencies identify challenges. Policy and federal data experts provide feedback and share insights about federal data and the policy context.
    - title: User Advocates
      description: User advocates offer feedback and insights throughout the sprint. They are community leaders, local or national advocates, and people with direct lived experience in the target challenges.
    - title: Product Advisors
      description: Product advisors help tech teams develop products with a viable long term strategy that enables them to reach end users.

# two-column-wide-text.html
explanation:
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

two-col-markdown:
  title: This is a title
  right-include: components/two-col-markdown-right.md
  skip-bottom-border: true
  left: 
    - title: A great component for displaying two columns of information
      body: You can write simple markdown for a column in frontmatter _(like this left-hand column)_ or include more complex markdown *(like that for the right-hand column)* in a separate file.
    - title: Are titles _markdownified, too?_ 
      body: You betcha!
    - title: When should I use a separate markdown file instead of frontmatter?
      body: When you have complex markdown that includes newlines or images. 
    - title: Other parameters
      body: The component also takes in `skip-top-border` and `skip-bottom-border` params as booleans w/in the `content` param which are useful for when you're stacking multiple two-column components on top of each other and don't want to double-up on the borders or when you want to leave the bottom border off of the last component on a page.
---
<section>
  <div class="grid-container"
  >
  <div class="desktop:padding-top-9">
    <h1 class="grid-col-8
     display-inline-block padding-top-9">UX Component Library</h1>
    <p class="usa-hero__subtitle grid-col-5">Browse the components used to create the TOP website. These components are generally an HTML section and 100vw, but they have been put into this container for easier viewing along with their notes. The front matter of this page is filled with sample content that is pulled from an actual page of the site, which will allow you to see the list/dictionary that creates each component. Both the front matter and the page have the components listed alphabetically by file name.</p>

    </div>

<hr>
  <p>Some of the components use the same top-level key to determine their content, and therefore they may not successfully render if they are on the same page (because there would therefore be multiple page.[key] references. This isn't too many components, and would be a good first task to get familiar with the setup of the repo.</p>  
    <h4>announcement-banner.html</h4>
    (Hard coded, content must be changed in the file)
      {% include announcement-banner.html %}

    <hr>

    <h4>banner.html</h4>
    (Hard coded, content must be changed in the file)
      {% include banner.html %}

    <hr>

    <h4>circuit-banner.html</h4>
      {% include circuit-banner.html %}

    <hr>

    <h4>connecting-banner.html</h4>
      {% include connecting-banner.html %}

    <hr>

    <h4>connecting-banner-notched.html</h4>
      {% include connecting-banner-notched.html %}

    <hr>

    <h4>connecting-banner-with-subheader-inverse.html</h4>
      {% include connecting-banner-with-subheader-inverse.html %}

    <hr>

    <h4>connecting-banner-with-subheader.html</h4>
      {% include connecting-banner-with-subheader.html %}

    <hr>

    <h4>contact-us.html</h4>
      {% include contact-us.html %}

    <hr>

    <h4>data-kits.html</h4>
      pulls from "_/data/data-kits.yml", not front matter. On the backlog is a design sprint around the DCH, including mobile responsiveness, and general UX functionality
      please see opportunity.census.gov/data to see this page

    <hr>

    <h4>featured_items.html</h4>
      NOTE: the featured products themselves are listed in the front matter, but the two buttons at the bottom of the component are hard-coded in the HTML as part of the component style itself.
      {% include featured_items.html %}

    <hr>

    <h4>featured_items_even.html</h4>
      This does not include the buttons. For additional reference, this is included in the COIL page about COIL programs
      {% include featured_items_even.html %}

    <hr>

    <h4>footer.html</h4>
      NOT mobile responsive, hard coded, and generally needs some work. Has been a "to-do" for a while
      {% include footer.html %}

    <hr>

    <h4>four-column-searchable.html</h4>
      Please see opportunity.census.gov/products to see this (since it is the entire page). Not hard-coded, but built specifically for the products page and wasn't originally designed to be easily reusable, although the reference points to the data files could be changed to a variable set in the front matter, rather than pointing to the files directly
      pulls data from:
        - _/data/case_studies.yml (for the top case studies section)
        - _/data/product_filters.yml (for the interactive portion of the products search feature)
        - _/data/products.yml (for the product cards themselves)

    <hr>

    <h4>get-involved.html</h4>
      (early component, quite messy, could be refactored)
      {% include get-involved.html %}

    <hr>

    <h4>hcd-training.html</h4>
      (Hard coded, and not originally designed to be resuable component but rather to get HCD content from old site added quickly - i.e. hours. Could be refactored to components pretty easily)
      {% include hcd-training.html %}
<hr>
    <h4>header-and-subheader.html</h4>
      {% include header-and-subheader.html %}
<hr>
    <h4>hero.html</h4>
      NOTE, the hero sections are generally not hard coded in each page, but the hero file is long, and changes layout based on the page class. Be sure to include the class in the front matter when adding the hero. Some places, there is text coded in the HTML itself, not in the front-matter
      {% include hero.html %}

<hr>
    <h4>logo-garden.html</h4>
      (Hard coded, content must be changed in the file)
      Please see the home page.
<hr>
    <h4>navbar.html</h4>
      (Hard coded, content must be changed in the file)
      {% include navbar.html %}
<hr>
    <h4>news.html</h4>
      (Hard coded, content must be changed in the file)
      {% include news.html %}
<hr>
    <h4>offset-footer.html</h4>
      {% include offset-footer.html %}
<hr>
    <h4>sidebar-and-content-light.html</h4>
      (Hard coded, content must be changed in the file)
      {% include sidebar-and-content-light.html %}
<hr>
    <h4>sidebar-and-content-primary.html</h4>
      {% include sidebar-and-content-primary.html %}
<hr>
    <h4>sidebar-and-wide-content.html</h4>
      {% include sidebar-and-wide-content.html %}
<hr>
    <h4>single-column-banner-photo-overlay-and-content.html</h4>
      {% include single-column-banner-photo-overlay-and-content.html %}
<hr>
    <h4>single-column-centered-list-dark.html</h4>
      {% include single-column-centered-list-dark.html %}
<hr>
    <h4>single-column-centered-list.html</h4>
      {% include single-column-centered-list.html %}
<hr>
    <h4>single-column-centered-photo-with-overlay.html</h4>
      {% include single-column-centered-photo-with-overlay.html %}
<hr>
    <h4>text-callout-centered.html</h4>
      {% include text-callout-centered.html %}
<hr>
    <h4>three-column-narrow-text.html</h4>
      not hard coded, but some of the keys are more specific than in other component files
      {% include three-column-narrow-text.html %}
<hr>
    <h4>three-column-searchable.html</h4>
      Designed for the DCH specifically. Pulls data conditionally in data topics (used to filter the datasets, file name ends with topics) and from workforce, earth-sprint, built-sprint, covid yaml files in _/data. Not included for preview, viewable in the DCH when you click into a section
<hr>
    <h4>three-column-wide-text.html</h4>
      not hard coded, but the keys are more specific than in other component files
      {% include three-column-wide-text.html %}
<hr>
    <h4>timeline-progress-section-dark.html</h4>
      {% include timeline-progress-section-dark.html %}
<hr>
    <h4>title-and-content-primary.html</h4>
      This is a very slight variation of the sidebar and content primary, used for the ASA challenge (see /sprints for preview). The front matter above is commented out, but provides a great example of using p and a as keys to indicate how the content will be shown in html
<hr>
    <h4>two-column-and-icon-garden.html</h4>
      Not particularly well thought out, was built to quickly add some content from the old site that had not been redesigned into the new framework.
      {% include two-column-and-icon-garden.html %}
<hr>
    <h4>two-column-card-text.html</h4>
      {% include two-column-card-text.html %}
<hr>
  <h2>two-column-markdown.html</h2>
  <p>
  A very extensible component useful for displaying information in a clean, two-column layout with a title and borders. You can skip the the title and borders by leaving out or passing in the `title`, `skip-top-border`, and `skip-bottom-border` to the component.
  </p>
  <p>
  Each column's content can be defined as markdown written in the frontmatter (as a collection of title and body items) or as a separate markdown file which you then capture and pass in to the component on its own.
  </p>
  {% capture two-col-right %}
    {% include_relative {{ page.two-col-markdown.right-include }} %}
  {% endcapture %}
  {% include two-column-markdown.html content = page.two-col-markdown right-col = two-col-right %}
<hr>
    <h4>two-column-wide-text.html</h4>
      One of the first components, very messy, should really be refactored
      {% include two-column-wide-text.html %}
<hr>
    <h3>Toolkits</h3>
    Toolkit-specific components are indicated with toolkit-[component].html
    For examples of the toolkit components (which are self-contained), check out the /product-development or /topx folder under pages to see how these components are used to create the toolkit pages
</section>
