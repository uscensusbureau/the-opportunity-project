# Getting data from Airtable to the TOP site

## Background
We use Airtable as our single source of truth for the TOP website. It’s where we store information about problem statements, sprints, data stewards, etc.

AirTable is nice because it makes linking between records much easier than in native yaml files used by Jekyll. However, getting data from AirTable to yaml files used by Jekyll is not very straightforward.
This document outlines the process used by the TOP Website.

The project owner should grant you access to the Airtable base.

## Overview
The key step in Airtable -> Jekyll process is a _python_ script name [airtable-export](https://pypi.org/project/airtable-export/). This script downloads Airtable data into .yml files!

The TOP repo is setup to run this script with the npm command `npm run airtable`. This command runs the script located in `/scripts/airtable.sh`

Whatever table names you have written in line 3 of that script will be downloaded from Airtable and saved as .yml files of the same name in the `_data` folder, assuming everything is set up correctly.

## Setup / Dependencies
1. Download and install [airtable-export](https://pypi.org/project/airtable-export/) 
2. **Note:** airtable-export relies on python3. If you experience errors while installing airtable-export, follow this [guide to install python3](https://flaviocopes.com/python-installation-macos/).
3. Set up your environment variables
    1. Create a file named .env at the root of the TOP repo
    2. Ensure that this file is not being tracked by git by running git status from the project root. It should show no changes because .env is included in the project’s .gitignore file
    3. Find the Airtable base_id you want to use at https://airtable.com/api
        1. From that page, click on the base you're going to use. The base_id is displayed on the page and starts with app
        2. Copy the base_id of the base you want to get data from. It should be TOP Database
        3. Add the following line to .env: `AIRTABLE_TOP_ID=[BASE ID YOU COPIED]`
    4. Find your AirTable API key at https://airtable.com/account
        1. If you don't have one displayed, simply click "Get an API key"
        2. Copy your API key to the clipboard
        3. Add the following line to your .env file: `AIRTABLE_API_KEY=[your API key from the clipboard]`

## Downloading the data
From the project root, run `npm run airtable` in a terminal.

To download different tables from airtable, change line 3 in `/scripts/airtable.sh` to include the tables you want to download. For example: 
`airtable-export _data $AIRTABLE_TOP_ID problem_statements --key=$AIRTABLE_API_KEY`<br/>
Will download just the “problem_statements” table from Airtable into the _data folder (as problem_statements.yml). 

If you edit the line to read
`airtable-export _data $AIRTABLE_TOP_ID problem_statements datasets sprints people --key=$AIRTABLE_API_KEY`<br/>
Then the script will download the problem_statements table, the datasets table, the sprints table, and the people table.

Check the `_data` folder and files to make sure that the changes you made in AirTable are reflected in the file!

**Note:** When debugging the site locally, just changing a data file does not cause the page to regenerate so you will not see the changes auto-reload and be reflected right away. You must also change an _includes file or _layout file for the page to regenerate and show the data changes.

## Linking to other records within Jekyll
Note that each record now contains an `airtable_id` field.

Note also that if your Airtable record linked to other records, for instance, this screenshot of the Organizations table within the TOP database:

![records in Airtable.](https://opportunity.census.gov/assets/img/airtable-screen.png)

the Sprint, Products, and Participants fields are "Link" fields. When you download this table, these fields won't read as text in .yml but rather an array of `airtable_id` s.

You can then use these IDs to search for the relevant data in that table.

Make sure though, that you download that table as well!

For example, say we wanted to display all product information associated with a given organization. We'd follow the following steps:

1. Modify line 3 of `/scripts/airtable.sh` to read `airtable-export _data $AIRTABLE_TOP_ID organizations products --key=$AIRTABLE_API_KEY` (note how we added the names of both tables we need!)
2. run `npm run airtable` in a console
3. add the following code in a layout or include:
```
{% for organization in site.data.organizations %}
  <h2>{{ organization['Company Name'] }}</h2>
  {% assign products = site.data.products | where: "airtable_id", organization.Products %}
  {% for product in products %}
    <h3>{{ product.Name }}</h3>
  {% endfor %}
{% endfor %}
