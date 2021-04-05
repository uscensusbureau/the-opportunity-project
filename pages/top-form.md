---
layout: top-form
permalink: /top-form/

roles:
  - Technologist, developer, designer
  - User advocate (grassroots org, advocacy org, issue expert, NGO, etc.)
  - Product strategist
  - Local or state government
  - Federal government
  - Funder / philanthropy / sustainability partner
  - Press / media
  - Data expert
  - Other

interested-in:
  - Attending TOP Demo Week
  - Joining a TOP Sprint
  - ASA Data Expo Challenge
  - Product Development Toolkit
  - TOPx Toolkit for Federal Agencies
  - Prize Competition
  - Partnership opportunities
  - General info
  - Other

privacy: 
  title: Privacy Act Statement
  body:
    - The collection of your personal information for the U.S. Census Bureau The Opportunity Project  (TOP) website is authorized under 5 U.S.C. 301 and 44 U.S.C. Section 3101.
    - The purpose of collecting this information is to provide stakeholders with email updates, resources, U.S. Census Bureau information and to establish an avenue for collaboration between the U.S. Census Bureau and interested stakeholder organizations and/or partners. Personally identifiable information such as name, organization name, job title, email address, and zip code may be collected.
    - Disclosure of this information is permitted under the Privacy Act of 1974 (5 U.S.C. Section 552a) to be shared among Census Bureau staff for work-related purposes.  Disclosure of this information is also subject to all of the published routine uses as identified in the Privacy Act System of Records Notice COMMERCE/DEPT-19, Department Mailing Lists and COMMERCE/DEPT- 23, Information Collected Electronically in Connection with Department of Commerce Activities, Events, and Programs.
    - Providing this information is voluntary and you may be removed from the TOP email sign-up at any time.  Failure to provide this information may affect the U.S. Census Bureau’s ability to disseminate information to stakeholder organizations including information about TOP, the 2020 Census, information about other programs and surveys, data products and data tools, and other resources.'
---

# Contact The Opportunity Project
{: .section-header }

Thank you for your interest in The Opportunity Project. Please use the form below to get in touch with us, and we'll get back to you as soon as possible.

<form class="">
  <fieldset class="usa-fieldset">
    <label class="usa-label" for="first_name">
      First Name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input usa-input--xl" type="text" id="first_name" name="first_name" required aria-required="true">

  <label class="usa-label" for="last_name">
    Last Name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
  </label>
  <input class="usa-input usa-input--xl" type="text" id="last_name" name="last_name" required aria-required="true">

  <label class="usa-label" for="email">
      Email Address <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
  </label>
  <input class="usa-input usa-input--xl" type="text" id="email" name="email" required aria-required="true">

  <label class="usa-label" for="organization">
      Organization Name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
  </label>
  <input class="usa-input usa-input--xl" type="text" id="organization" name="organization" required aria-required="true">

  <label class="usa-label" for="organization">
      Role/Job Title
  </label>
  <input class="usa-input usa-input--xl" type="text" id="organization" name="organization">
  </fieldset>

  <div class="grid-container margin-top-3 margin-left-0 padding-left-0">
    <div class="grid-row grid-gap-lg">
    <div class="tablet:grid-col-6">
        <legend>
          What Opportunity Project role best describes you? Please check all that apply
        </legend>
        {% for role in page.roles %}
          {% assign name="role-check-" | append: forloop.index %}
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="{{ name }}" type="checkbox" name="{{ name }}" value="{{ role }}" {% if forloop.index0 == 0 %}checked{% endif %}>
            <label class="usa-checkbox__label" for="{{ name }}">{{ role }}</label>
          </div>
        {% endfor %}
    </div>

  <div class="tablet:grid-col-6 margin-top-4 tablet:margin-top-0">
      <legend>Intereseted in:</legend>
      {% for role in page.interested-in %}
        {% assign name="interest-check-" | append: forloop.index %}
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="{{ name }}" type="checkbox" name="{{ name }}" value="{{ role }}" {% if forloop.index0 == 0 %}checked{% endif %}>
          <label class="usa-checkbox__label" for="{{ name }}">{{ role }}</label>
        </div>
      {% endfor %}
  </div>

  </div>
  </div>

  <div class="margin-y-3">
    <label class="usa-label" for="input-type-textarea">Question / Comments?</label>
    <textarea class="usa-textarea" id="input-type-textarea" name="input-type-textarea"></textarea>
  </div>

  <details class="margin-y-3">
    <summary>{{ page.privacy.title }}</summary>
    {% for p in page.privacy.body %}
      {{ p | markdownify }}
    {% endfor %}
  </details>
  
  <input class="usa-button" type="submit" value="Submit">
</form>
