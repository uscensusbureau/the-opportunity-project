
{% assign currSprintTags = "" | split: "," %}
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
### [Join an Upcoming Sprint →]({{ site.baseurl }}/sprints)
We're getting ready to launch sprints focused on {% for tag in currSprintTags %}{% assign match = site.data.sprints | where: "short-tag", tag | first %}{% assign prefix = "" %}{% if forloop.last and currSprintTags.size >= 3 %}{% assign prefix = ", and " %}{% elsif forloop.index0 > 0 %}{% if currSprintTags.size == 2 %}{% assign prefix = " and " %}{% else %}{% assign prefix = ", " %}{% endif %}{% endif %}{% assign link = site.sprints | where: "short-name", tag | first %}{{ prefix }}[{{ match.Name }}]({{ link.url }}){% endfor %}. Learn more about the challenges we're addressing, and then [complete this form]({{ site.contacts.census-form}}) to express interest.
{% else %}
### Check Out Our Sprints
We recently launched sprints focused on {% for tag in allSprintTags %}{% assign match = site.data.sprints | where: "short-tag", tag | first %}{% assign prefix = "" %}{% if forloop.last and allSprintTags.size >= 3 %}{% assign prefix = ", and " %}{% elsif forloop.index0 > 0 %}{% if allSprintTags.size == 2 %}{% assign prefix = " and " %}{% else %}{% assign prefix = ", " %}{% endif %}{% endif %}{% assign link = site.sprints | where: "short-name", tag | first %}{{ prefix }}[{{ match.Name }}]({{ link.url }}){% endfor %}, and we're always getting more sprints ready.

Fill out [our interest form](https://www.census.gov/forms/contact-top.html) to get in touch about upcoming sprints.
{% endif %}

### [Run a TOPx Sprint →](https://opportunity.census.gov/topx-toolkit/introduction/)
Are you a federal agency looking to adopt The Opportunity Project model? Use our TOPx toolkit—a step-by-step resource complete with sample materials—to help run your own TOP sprint.

### [Build with Open Data →]({{site.baseurl}}/product-development/toolkit) 
Not able to join a TOP sprint? Use our product development toolkit—based on the TOP sprint model—to create civic impact with open data. We cover user research, navigating federal data, and more.