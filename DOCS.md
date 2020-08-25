
## The Opportunity Project v2

### History/Content: The "Old" TOP Website

The first version of the TOP website (let's called this **TOP v1.0**) was a simple static website built by the original TOP team in 2016. **TOP v1.0** used HTML, CSS, and some jQuery, such as the Handlebars plugin that allowed users to filter products based on tags.

In 2017, CDFs conducted a few rounds of user research with TOP participants and redesigned the website to create **TOP v1.1;** though the redesign improved the site information architecture and design, it built upon the same simple stack used in **TOP v1.0**. **TOP v1.1** included an addition of the first TOP product development toolkit.

In 2018, CDFs conducted more rounds of user research which resulted in a refreshed design and a few more small tweaks, to create **TOP v1.2**. Since all of the teams that worked on the TOP website were interim or temporary teams, there wasn't enough time to conduct a full redesign including an overhaul of the tech stack. In addition, changes to the website became increasingly difficult to make since the website was not designed to be updated often.

In 2019, COIL hired its first full-time digital team. With a full-time team, we were able to conduct a full-scale redesign including implementing USWDS 2.0 in a Jekyll framework, creating **TOP v2.0**.

### New Version: TOP 2.0 Released Summer 2020

The new version of the TOP website is a static site built with Jekyll and the USWDS package, along with a small amount of Javascript, npm, and gulp. It's built based on the open source repo of the USWDS website.

#### How Pages are Built

Pages are fairly conventional to typical Jekyll structures, with a .md page, that has front matter written in yaml, and then uses some combination of markdown and calls to a series of .html files in the /_includes_ folder.

There are some big differences between this and a "typical" Jekyll site, however.

1) Markdown is used much more infrequently than in other Jekyll sites
2) At its core, the site doesn't follow a conventional static blog structure: there is no /_posts_ folder and content is not regularly being added through team-contributed .md files
3) The overall mentality of the site is closer to that of a series of components that  are building blocks used throughout the site to make pages, than it is a series of unique/discret pages

#### How Content is Organized

For most pages, content is stored as yaml, either in the /_data_ folder, or in the page front matter. There are a few pages that still have the actual content hard coded into the HTML, and those pages are in the backlog to be refactored. 
