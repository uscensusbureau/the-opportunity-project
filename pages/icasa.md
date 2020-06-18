---
title: Case Studies
permalink: /prados/
layout: default-internal-page
class: case-study

hero:
  product: PRADOS
  tech_team: iCASA PR

connecting-banner:
  background-color: dark
  image: case-studies/prados-01.png
  alt: Mockup of the PRADOS (Puerto Rican Address Database Operations Support) tool on an iPad

main-content:
  title: Standardizing Addressing in Puerto Rico to Improve Emergency Response
  subsections:
    - text: Puerto Rico Address Database Operations Support (PRADOS) helps municipalities and communities in Puerto Rico enhance their address data infrastructure to improve emergency response.
    - title: Puerto Rico does not have a centralized database of addresses with geospatial coordinates for its 78 legally independent municipios.
      text: Since there is no centralized database of addresses for Puerto Rico and most municipios do not have address data that follow federal standards, there are significant inconsistencies between federal, state and local datasets. To complicate the issue, addresses in Puerto Rico have unique characteristics that require special handling, and over half of the population of Puerto Rico rely on rural or post office box addresses that cannot be geolocated.
    - title: Without a reliable database of addresses, local and federal leaders are unable to effectively manage catastrophic events.
      text: During catastrophic events such as hurricanes and earthquakes, residences and businesses cannot be located using traditional means of address navigation since structures, street signs, and landmarks no longer exist. Without addresses that can be geolocated, emergency respondents aren’t able to locate households affected by disasters or effectively respond to calls for help. An easily accessible database of reliable, accurate, and uniform address point data can meet the immediate needs of emergency responders and communities in crisis.
    - image: case-studies/prados-02.png
      image-alt: Raúl Rios, founder of iCASA PR, presenting at an event
    - title: Through The Opportunity Project,  iCasaPR was able to  validate an approach for collecting and standardizing addresses in Puerto Rico through collaborative engagements with key stakeholders and local leaders.
      text: 'The Opportunity Project created a unique platform for disparate groups of people to collaborate on a singular challenge. The collaborative spirit of the TOP user engagement workshop in Puerto Rico inspired iCasaPR to collaborate with key stakeholders and gain valuable insights to ensure that their approach could meet existing needs. These efforts included:'
      list:
        - Several months of meetings and interviews with key local government stakeholders and agencies around issues of addressing infrastructure
        - Meetings and technical discussions with over 30 municipal data stewards to understand the issues around maintaining quality address data and producing authoritative datasets
        - The creation of an ad-hoc technical group that included local subject matter experts of geospatial applications as well as representatives from the local mailing and distribution industry
    - image:
      image-alt:
    - title: By the end of the TOP sprint, iCasaPR refined a      working prototype for municipal data stewards to “translate” local addressing practices to federally compliant addresses.
      text: The final prototype, the Puerto Rico Address Database Operations Support (PRADOS), is an address governance platform to assist local authorities in Puerto Rico in standardizing addresses. The product works by providing cloud-based access to local and federal datasets without the need to install complex GIS products. PRADOS allows data stewards to overcome the cultural differences between Puerto Rico local addressing practices and the systems currently operating in the federal government.
    - title: Today, their work continues to “support the creation of authoritative address datasets for Puerto Rico that preserve [its] cultural heritage and comply with Federal Standards” and is funded by two grants.
      list:
      - In September 2019, Raúl Ríos-Díaz, Founder of iCasaPR, was awarded a Research Grant from the Advanced Research Grants Program (ARG) to continue the development of PRADOS. This grant is sponsored by the Puerto Rico Science, Technology & Research Trust.
      - In October 2019, iCasaPR was awarded a second grant by Philanthropy Puerto Rico, to launch the Puerto Rico Civic Address Vulnerability Evaluation (PRCAVE) Project. PRCAVE will be the first systematic study of the addressing infrastructure problems in Puerto Rico and its effect on disadvantaged communities.
      - Since the TOP sprint, iCasaPR has served as an advisor for the Puerto Rico Addressing Working Group (PRAWG) that includes FEMA, EPA, NASA, the U.S. Census Bureau
      - iCasaPR continues to engage local experts around a group called the Puerto Rico Civic Address Standards Implementation Technical Advisory (PRCasita) task force to improve the addressing infrastructure of Puerto Rico.


sidebar:
  - title: PRODUCT
    text:
      - Puerto Rico Address Database Operations Support (PRADOS)
    button:
      - link:
  - title: TECH TEAM
    text:
      - iCASAPR (Civic Address and Governance Platform for Puerto Rico)
  - title: Problem statement
    text:
      - Helping Tribal, State, and Local Governments with Local Address Data Collection
  - title: AGENCY
    text:
      - U.S. Census Bureau
      - U.S. Department of Transportation
  - title: HOW TOP HELPED
    text:
      - Through TOP, iCasaPR was able to collaborate with and gain support from key federal, local stakeholders, and non-profit sectors in Puerto Rico to ensure their solution would be viable in the long term.
  - title: DATASETS USED
    list:
      - Topically Integrated Geographic Encoding and Referencing (TIGER) Files, U.S. Census Bureau
      - National Address Database (NAD) Schema
      - U.S. Department of Transportation
      - U.S. Postal Service data

footer: iCasaPR is a 501(c)(3) organization that continues to help communities overcome the problem of “data invisibility” through the evaluation and improvement of their civic addresses. Their goal is to deploy their toolkit to municipios around the island, with the ultimate goal of reaching all of the 78 municipios. The ultimate goal of iCasaPR is to create authoritative address datasets at the municipio level that can be collected in a centralized address repository to support the reconstruction process, improve emergency response, and foster a more resilient future for Puerto Rico.

---

{% include hero.html %}
{% include connecting-banner-notched.html %}
{% include sidebar-and-wide-content.html %}
{% include offset-footer.html %}
