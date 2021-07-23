set -o allexport
source '.env'
airtable-export _data $AIRTABLE_TOP_ID sprints --key=$AIRTABLE_API_KEY
set +o allexport