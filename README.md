# The Opportunity Project Website 2.0 documentation

This repo includes code for the new TOP website. Documentation about how the project is organized is forthcoming.

## Running locally

This project is built off of the [USWDS site code](https://github.com/uswds/uswds-site), and just like that repo, uses Jekyll for the file framework, gulp, and the node module for USWDS.

### Dependencies

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
2. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
   a. gulp (`npm i -g gulp`)
3. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_inpmn_application.html#getting-started---installing-bundler-and-bundle-init)
   a. jekyll (`gem install jekyll`)
4. Chrome v59 or higher (v60 if on Windows)

### Getting Started

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
