set -o allexport
source '.env'
airtable-export _data $AIRTABLE_TOP_ID sprints problem_statements --key=$AIRTABLE_API_KEY
set +o allexport