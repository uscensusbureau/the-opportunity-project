set -o allexport
source '.env'
airtable-export _data $AIRTABLE_TOP_ID sprints problem_statements products datasets --key=$AIRTABLE_API_KEY
set +o allexport