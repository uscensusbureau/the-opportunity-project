
<!---{% assign currSprintTags = "" | split: "," %}
{% for sprint in site.sprints | sort: "order" %}
  {% if sprint.isCurrent and sprint.lang != "esp" %}
    {% assign currSprintTags = currSprintTags | push: sprint.short-name %}
  {% endif %}
{% endfor %}

{% assign allSprintTags = "" | split: "," %}
{% assign sortedSprints = site.sprints | sort: "order" %}
{% assign sortedSprints = sortedSprints | where_exp: "item", "item.lang != 'esp'" %}
{% for sprint in sortedSprints limit:2 %}
  {% assign allSprintTags = allSprintTags | push: sprint.short-name %}
{% endfor %}

{% if currSprintTags.size > 0 %}

{% else %}

{% endif %}--->

### What is a Sprint?
[Sprints]({{ site.baseurl }}/sprints) are 12-week product development cycles that bring government agencies, technologists, community leaders, and data experts together to rapidly design digital solutions for the public good. TOP sprints typically begin in late summer or early fall and culminate at the annual TOP Summit in mid-December.
<!---### [Join an Upcoming Sprint →]({{ site.baseurl }}/sprints)
We're getting ready to launch sprints focused on {% for tag in currSprintTags %}{% assign match = site.data.sprints | where: "short-tag", tag | first %}{% assign prefix = "" %}{% if forloop.last and currSprintTags.size >= 3 %}{% assign prefix = ", and " %}{% elsif forloop.index0 > 0 %}{% if currSprintTags.size == 2 %}{% assign prefix = " and " %}{% else %}{% assign prefix = ", " %}{% endif %}{% endif %}{% assign link = site.sprints | where: "short-name", tag | first %}{{ prefix }}[{{ match.Name }}]({{ link.url }}){% endfor %}. Learn more about the challenges we're addressing, and then [complete this form]({{ site.contacts.census-form}}) to express interest.-->


### Run a Sprint
We can help your organization facilitate a successful TOP sprint to address national challenges.
<!---We recently launched sprints focused on {% for tag in allSprintTags %}{% assign match = site.data.sprints | where: "short-tag", tag | first %}{% assign prefix = "" %}{% if forloop.last and allSprintTags.size >= 3 %}{% assign prefix = ", and " %}{% elsif forloop.index0 > 0 %}{% if allSprintTags.size == 2 %}{% assign prefix = " and " %}{% else %}{% assign prefix = ", " %}{% endif %}{% endif %}{% assign link = site.sprints | where: "short-name", tag | first %}{{ prefix }}[{{ match.Name }}]({{ link.url }}){% endfor %}, and we're always getting more sprints ready.-->

### Participate in a Sprint
We can match your skills and expertise, as a user advocate or technologist, to relevant TOP sprints. 
[Learn more about participants’ roles in a sprint.]({{site.baseurl}}/our-process/#roles) 

<!---### Advise Sprint Participants
We can connect you to TOP sprint teams seeking product and technology development experts as a member of the TOP Advisor Network.--->

Ready to get started? When you complete our signup form, a member of the [Census Open Innovation Labs](https://coil.census.gov/) (COIL) team will be in touch within one week.

[Get in Touch](https://www.census.gov/forms/contact-top.html){: .usa-button .usa-button--secondary .site-button }
