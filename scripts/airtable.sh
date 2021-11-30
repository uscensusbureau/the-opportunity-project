set -o allexport
source '.env'
#airtable-export _data $AIRTABLE_TOP_ID people treasury_datasets --key=$AIRTABLE_API_KEY
#Products:
airtable-export _data $AIRTABLE_TOP_ID products --key=$AIRTABLE_API_KEY
#Organizations:
#airtable-export _data $AIRTABLE_TOP_ID organizations --key=$AIRTABLE_API_KEY
#Problem Statements
#airtable-export _data $AIRTABLE_TOP_ID problem_statements --key=$AIRTABLE_API_KEY

set +o allexport