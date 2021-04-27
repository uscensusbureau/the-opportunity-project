---
permalink: /proposal/
title: "Propose a Problem Statement"
layout: ps-proposal

header: The problem statement submission period is now open.

files:
  template: 'Problem Statement Proposal Template_TOP 2021.docx'
  guidance: 'TOP_Problem_Statement_Guidance_2021.pdf'

img:
  src: ProblemStatementProposal2021.png
  alt: A screenshot of the problem statement proposal template with the headline 'Problem Statement Proposal Template'


---
{% assign templateUrl = site.baseurl | append: "/assets/files/" | append: page.files.template %}
{% assign guidanceUrl = site.baseurl | append: "/assets/files/" | append: page.files.guidance %}

{% capture right-side %}

To submit a topic, please download the [Problem Statement Proposal Template]({{ templateUrl }}){: download="" }. You can submit your completed form to [census.opportunityproject@census.gov](mailto:opportunityproject@census.gov?subject=Problem Statement Proposal) with the subject line “Problem Statement Proposal”. <br/>
[Download the Proposal Template&nbsp;&darr;]({{ templateUrl }}){: .btn-link__primary-red .margin-top-2 download=""}
{: .margin-bottom-6 .margin-top-0 }

You can find more guidance on problem statement submission requirements and recommendations in the [Problem Statment Guidance Document]({{ guidanceUrl }}){: download="" }.<br/>
[Download the Guidance Document&nbsp;&darr;]({{ guidanceUrl }}){: .btn-link__secondary-dark .margin-top-2 download=""}

{% endcapture %}

{{ right-side }}