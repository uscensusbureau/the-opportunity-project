<h1><img src="img/TOP-logo.png" alt="The Opportunity Project Logo"/></h1>

This repo includes code for the TOP website. [opportunity.census.gov](https://opportunity.census.gov)

This project is built off of the [USWDS site code](https://github.com/uswds/uswds-site), and just like that repo, uses Jekyll for the file framework, gulp, and the node module for USWDS.

For additional documentation check out the [documentation directory](/docs/README.md) in the `/docs` folder.

<br/>

---

## Contents

- [Dependencies](#dependencies)
   - [Optional Dependencies](#optional-dependencies)
- [Getting Started](#getting-started)
- [Importing Data](#importing-data)
- [Building Assets](#building-assets)
   - [Processing Images with `gulp-webp`](#processing-images-with-gulp-webp)
- [Testing](#testing)
   - [HTML Validation Tests](#1-html-validation-tests)
   - [Accessibility Tests](#2-accessibility-tests)
   - [Functionality & Content Tests](#3-functionality--content-tests)
- [Building with Federalist](#building-with-federalist)
   - [When a Build Fails](#when-a-build-fails)

<br/>

---


## Dependencies

1. Ruby v2.7.5
  - jekyll (`gem install jekyll`)
2. Node v18
  - gulp (`npm i -g gulp`)
4. Chrome v59 or higher (v60 if on Windows)

We recommend using a universal verion manager such as `asdf` 
- [asdf Installation Guide](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies)

**NOTE: Ensure that `legacy_version_file = yes` has been added to your `.asdfrc` file in your home directory. Requires terminal restart.**
- [Configuring $HOME/.asdfrc](https://asdf-vm.com/manage/configuration.html#home-asdfrc)


<br/>

### Optional Dependencies 
The following are necessary only if you are importing new data from Airtable. See `/_data/readme.md` for more information.
1. [airtable-export](https://pypi.org/project/airtable-export/)
2. [Python 3](https://www.python.org/downloads/)

Note - if attempting to import records from behind an enterprise firewall with SSL inspection, you will need to use a custom extension of the Airtable Export plugin found here: [airtable-export](https://pypi.org/project/airtable-export/). Once you’ve cloned the package to your development directory and have selected your preferred Python environment for installation, you can install it from the current repo’s directory like so:

```sh
pip install ../airtable-export
```

To run the script, run the following:
```sh
npm run airtable -- --no-verify
```


<br/>

---

## Getting Started

To work on the site, first [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). After switching to your local copy of the repository in terminal, run the following command to install project dependencies:

```sh
npm install
```

```sh
bundle install
```

Now that all of your dependencies are installed, build the site using:

```sh
npm run preserve
```


Once the site is built, you can run your local server by running the following command:

```sh
npm run serve
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance

- `npm run watch`: Runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

- `npm start -- --incremental` or `npm run serve`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.


<br/>

---

## Importing Data

We use Airtable as our single source of truth for data files. `npm run airtable` will pull the latest data from airtable and insert into the `_data` folder for use in the site if you have access to it.
Be sure to set up a `.env` file with `AIRTABLE_TOP_ID` and `AIRTABLE_API_KEY` set for this script to work. Otherwise, you can simply run the `airtable-export` command manually, and it will work as well.

See `/_data/readme.md` for more info.

<br/>

---

## Building assets

The project uses gulp to compile assets, and many plugins for a smooth build process and to shrink assets. Check out `/config/gulp/*` for more info.

Place all assets (images, js files, pdfs, etc.) in their respective root folders. Do *not* place them in `/assets` or `_site/assets`. The gulp files will find them :-)

<br/>

### Processing images with `gulp-webp` 
You can place `.png` and `.jpg` images right in `/img` and the build process will automatically create a `.webp` copy during the build. It is not necessary to create `.webp` images yourself. 

If you use the `{% include image.html %}` include, that will also include a `<picture>` tag with a `webp` src and `png` / `jpg` fallback.

We **do** recommend shrinking images with the great [squoosh.app](https://squoosh.app/) before including them, though.

See `/config/gulp/images.js` for more details. 


<br/>

---

## Testing

As of May 2022, we run tests locally. We do not run tests in the cloud due to limitations integrating GitHub Actions with Federalist. This is a potential area for improvement.

Here are the three types of tests set up to run locally:

<br/>

### 1) HTML Validation Tests

run `npm run proof` to validate the site's HTML, check broken links, missing images & alts, etc with [HTMLProofer](https://github.com/gjtorikian/html-proofer).

run `npm run proof-external` to also check all external links. This takes longer, but is useful if you've just imported new data which has a bunch of external links that may be broken!

<br/>

### 2) Accessibility Tests

We test for accessibility issues using [pa11y-ci](https://github.com/pa11y/pa11y-ci) following [this guide](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe).

There are two commands set up in `package.json`:
1. `npm run pa11y-ci` to run against a specific set of URLs as listed in `pa11y.json`
2. `npm run pa11y-ci:sitemap` to run against all urls found in the local sitemap and using the config specified in `.pa11y`

<br/>

### 3) Functionality & Content Tests

There are functionality and content tests set up for key pages using `cypress` in the `/cypress/integration` folder. 

To run `cypress`, use the command `npm run cypress` and use the visual test runner.

**Before pushing changes, please make sure that any associated tests still pass.**

See [the Cypress docs](https://docs.cypress.io/guides/overview/why-cypress) for more information on how to write your own tests for new features and pages.



<br/>


---

## Building with Federalist

This repository is hooked up to [Federalist](https://federalist.18f.gov/documentation/), an automatic build process used by many government websites.
Whenever you push changes to Github, Federalist will make a new build (using the `federalist` command in `package.json`). 

Federalist will then provide a URL for this build which you can use for user testing. To get the URL for the build, click on the green check-mark next to the build status for whatever branch you just pushed to, and then click the "Details" link.

When you merge a branch into `main`, Federalist will then make a new build with the same process and deploy it to opportunity.census.gov

<br/>

### When a build fails

If Federalist fails to build, the status dot on the branch in Github will change from yellow (in progress) to red (failed). If this happens, contact Logan Powell via Slack in the Census Bureau workspace to see the logs from the failed build. He has access to Federalist itself. We do not.
