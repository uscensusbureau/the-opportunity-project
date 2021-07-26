set -o allexport
source '.env'
airtable-export _data $AIRTABLE_TOP_ID problem_statements organizations products sprints --key=$AIRTABLE_API_KEY
set +o allexport