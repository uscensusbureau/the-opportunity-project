
## The Opportunity Project v2

### History/Content: The "Old" TOP Website

The first version of the TOP website (let's called this **TOP v1.0**) was a simple static website built by the original TOP team in 2016. **TOP v1.0** used HTML, CSS, and some jQuery, such as the Handlebars plugin that allowed users to filter products based on tags.

In 2017, CDFs conducted a few rounds of user research with TOP participants and redesigned the website to create **TOP v1.1;** though the redesign improved the site information architecture and design, it built upon the same simple stack used in **TOP v1.0**. **TOP v1.1** included an addition of the first TOP product development toolkit.

In 2018, CDFs conducted more rounds of user research which resulted in a refreshed design and a few more small tweaks, to create **TOP v1.2**. Since all of the teams that worked on the TOP website were interim or temporary teams, there wasn't enough time to conduct a full redesign including an overhaul of the tech stack. In addition, changes to the website became increasingly difficult to make since the website was not designed to be updated often.

In 2019, COIL hired its first full-time digital team. With a full-time team, we were able to conduct a full-scale redesign including implementing USWDS 2.0 in a Jekyll framework, creating **TOP v2.0**.

### New Version: TOP 2.0 Released Summer 2020

The new version of the TOP website is a static site built with Jekyll and the USWDS package, along with a small amount of Javascript, npm, and gulp. It's built based on the open source repo of the USWDS website.


#### Website Structure

The website has 3 major parts, the TOP website (which provides information about the TOP program), the data curation hub (also sometime referred to as curated datasets, the data kit hub, or just the data hub), and the TOP Toolkits - the Product Development toolkit, which is currently public and linked in the main nav, and the TOPx toolkit, which is currently being piloted. Though the content is live, it is unlisted, and the link has only been shared with participants in the pilot TOPx sprint being run with the State Department.

Each of these sections is built more or less the same way. Exceptions or details for specfic sections are explained after the main documentation.

#### How Pages are Built

Pages are fairly conventional to typical Jekyll structures, with a .md page, that has front matter written in yaml, and then uses some combination of markdown and calls to a series of .html files in the /_includes_ folder.

There are some big differences between this and a "typical" Jekyll site, however.

1) Markdown is used much more infrequently than in other Jekyll sites
2) At its core, the site doesn't follow a conventional static blog structure: there is no /_posts_ folder and content is not regularly being added through team-contributed .md files
3) The overall mentality of the site is closer to that of a component library that provides building blocks used throughout the site to make pages, than it is a series of unique/discrete pages or blog posts.

#### How Content is Organized

For most pages, content is stored as yaml, either in the /_data_ folder, or in the page front matter. There are a few pages that still have the actual content hard coded into the HTML, and those pages are in the backlog to be refactored. Because using the USWDS v2 was new to the team, the first components that were built are a bit clunkier than some of the later components that were added.

Below the front matter is general a series of {% includes %} which list out the components used to make the page.

The components have somewhat descriptive names, and there is a component library file which has a screenshot of each component, the file name, and the key that is used the the front matter yaml to pair with that component. Most .md files also have at least some description in the front matter for to indicate the component associated with that content. The idea here is that small copy updates could be made by non-technical team members.

#### YAML conventions in front matter

The YAML conventions aren't completely standardized into an official design system, but came about mostly because there was a similarity of content and styles that naturally emerged as the website was being built. Many of the keys are clearly descriptive of the portion of the component they determine, such as "background-color" or "text". (Note that the colors that are used in values are css variables/class names that are set in the theme. For example, background-color: bg-primary add the bg-primary class to the component in the html file, setting the background as the theme bright blue.)

Other keys, particularly as nested keys under sections of text or body text, use keys that are references to html tags. For example "a" and "p". This is not completely consistent yet (in the backlog), and there may be some components that have a "text" key followed simply by a list, rather than additional key-value pairs. 

For images, all images should be listed with the reference to the image as well as alt-text content. Any new components that incorporate images should be sure to include a reference to the alt text value in the alt text of the image for accessibility purposes.
