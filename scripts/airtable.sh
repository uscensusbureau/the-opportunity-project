set -o allexport
source '.env'

#Treasury Data
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID treasury_datasets --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID treasury_datasets --key=$AIRTABLE_API_KEY
fi

#Datasets
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID datasets --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID datasets --key=$AIRTABLE_API_KEY
fi

#Products:
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID products --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID products --key=$AIRTABLE_API_KEY
fi

#Organizations:
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID organizations --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID organizations --key=$AIRTABLE_API_KEY
fi

#Problem Statements
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID problem_statements --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID problem_statements --key=$AIRTABLE_API_KEY
fi

#Sprints
if [[ " $* " == *"--no-verify"* ]]; then
	airtable-export _data $AIRTABLE_TOP_ID sprints --key=$AIRTABLE_API_KEY --no-verify
else	
	airtable-export _data $AIRTABLE_TOP_ID sprints --key=$AIRTABLE_API_KEY
fi

set +o allexport