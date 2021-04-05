const Airtable = require('airtable');
var yaml = require('write-yaml');

const base = new Airtable.base('appTWigF6HIiW5QuD');

base('sprints').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('Name'));
      yaml('test.yml', record, function(err) {
        console.error('Error!');
      })
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

// EXAMPLE USING CUSTOM CONFIGURATION
// var Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'YOUR_API_KEY'
// });
// var base = Airtable.base('appTWigF6HIiW5QuD');