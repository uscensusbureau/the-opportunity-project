# The Opportunity Project Website

This repo includes code for the TOP website. [www.opportunity.census.gov](www.opportunity.census.gov)

This project is built off of the [USWDS site code](https://github.com/uswds/uswds-site), and just like that repo, uses Jekyll for the file framework, gulp, and the node module for USWDS.

<br/>

## Dependencies

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
2. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
   a. gulp (`npm i -g gulp`)
3. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_inpmn_application.html#getting-started---installing-bundler-and-bundle-init)
   a. jekyll (`gem install jekyll`)
4. Chrome v59 or higher (v60 if on Windows)

<br/>

## Getting Started

To work on the site, switch to your local copy of the repository in terminal then run the following command to install project dependencies:

```sh
npm install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance

- `npm run watch`: Runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

- `npm start -- --incremental` or `npm run serve`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.


<br/>

## Importing Data

We use Airtable as our single source of truth for data files. `npm run airtable` will pull the latest data from airtable and insert into the `_data` folder for use in the site if you have access to it.
Be sure to set up a `.env` file with `AIRTABLE_TOP_ID` and `AIRTABLE_API_KEY` set for this script to work. Otherwise, you can simply run the `airtable-export` command manually, and it will work as well.


<br/>


<br/>

## Building assets

The project uses gulp to compile assets, and many plugins for a smooth build process and to shrink assets. Check out `/config/gulp/*` for more info.

Place all assets (images, js files, pdfs, etc.) in their respective root folders. Do *not* place them in `/assets` or `_site/assets`. The gulp files will find them :-)

### Processing images with `gulp-webp` 
You can place `.png` and `.jpg` images right in `/img` and the build process will automatically create a `.webp` copy during the build. It is not necessary to create `.webp` images yourself. 

If you use the `{% include image.html %}` include, that will also include a `<picture>` tag with a `webp` src and `png` / `jpg` fallback.

We **do** recommend shrinking images with the great [squoosh.app](https://squoosh.app/) before including them, though.

See `/config/gulp/images.js` for more details. 


<br/>

## Testing

run `npm run proof` to validate the site's HTML, check broken links, missing images & alts, etc with [HTMLProofer](https://github.com/gjtorikian/html-proofer).

run `npm run proof-external` to also check all external links. This takes longer, but is useful if you've just imported new data which has a bunch of external links that may be broken!


<br/>

## Building with Federalist

This repository is hooked up to [Federalist](https://federalist.18f.gov/documentation/), an automatic build process used by many government websites.
Whenever you push changes to Github, Federalist will make a new build (using the `federalist` command in `package.json`). 

Federalist will then provide a URL for this build which you can use for user testing. To get the URL for the build, click on the green check-mark next to the build status for whatever branch you just pushed to, and then click the "Details" link.

When you merge a branch into `main`, Federalist will then make a new build with the same process and deploy it to opportunity.census.gov

### When a build fails

If Federalist fails to build, the status dot on the branch in Github will change from yellow (in progress) to red (failed). If this happens, contact Logan Powell via Slack in the Census Bureau workspace to see the logs from the failed build. He has access to Federalist itself. We do not.
