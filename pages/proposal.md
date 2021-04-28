---
permalink: /proposal/
title: "Propose a Problem Statement"
layout: ps-proposal

# header: The problem statement submission period is now open.

files:
  federal:
    template: 'problem-statement-proposal/2021/Problem Statement Proposal Template_TOP 2021_Federal-Agencies.docx'
    guidance: 'problem-statement-proposal/2021/TOP_Problem_Statement_Guidance_2021_Federal-Agencies.pdf'
  ngos:
    template: 'problem-statement-proposal/2021/Problem Statement Proposal Template_TOP 2021_Partners.docx'
    guidance: 'problem-statement-proposal/2021/TOP_Problem_Statement_Guidance_2021_Partners.pdf'

# img:
#   src: ProblemStatementProposal2021.png
#   alt: A screenshot of the problem statement proposal template with the headline 'Problem Statement Proposal Template'


---
{% assign templateUrl = site.baseurl | append: "/assets/files/" | append: page.files.template %}
{% assign guidanceUrl = site.baseurl | append: "/assets/files/" | append: page.files.guidance %}

# Problem Statement Submission
{: .text-base-darkest }

The Opportunity Project’s annual call for problem statements is now open through **May 17th, 2021**! Federal agencies, state, local, or tribal governments as well as non-governmental organizations can submit problem statements for our 2021 sprint cycle.
{: .font-sans-md }

- Before you start drafting your problem statement proposal, please review the problem statement guidelines below. 
- To submit a topic, please download and complete the appropriate Problem Statement Proposal Template below and email it to [census.opportunityproject@census.gov](mailto:opportunityproject@census.gov?subject=Problem Statement Proposal - [name of organization]) with the subject line *“Problem Statement Proposal - [name of organization]”*. 
- **Submissions are due by May 17th, 2021.**

Submissions will be reviewed on a rolling basis and final problem statements will be selected by May 31st, 2021.

{% comment %}
[Download the Proposal Template&nbsp;&darr;]({{ templateUrl }}){: .btn-link__primary-red .margin-top-2 download=""}
{: .margin-bottom-6 .margin-top-0 }

You can find more guidance on problem statement submission requirements and recommendations in the [Problem Statment Guidance Document]({{ guidanceUrl }}){: download="" }.<br/>
[Download the Guidance Document&nbsp;&darr;]({{ guidanceUrl }}){: .btn-link__secondary-dark .margin-top-2 download=""}
{% endcomment %}