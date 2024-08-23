import os
import yaml
from dotenv import load_dotenv
import smartsheet

load_dotenv() # load env variables to get Smartsheet token
dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '_data/test_smartsheet.yaml')
# access gov instance at https://api.smartsheetgov.com/2.0/
api_base = smartsheet.__gov_base__
smart = smartsheet.Smartsheet(  # Create a Smartsheet client
  access_token=os.environ.get('SMARTSHEET_ACCESS_TOKEN'),
  api_base=api_base
  )

response = (
    smart.Sheets.list_sheets()
)  # Call the list_sheets() function and store the response object
sheetId = response.data[27].id  # Get the ID of the 10x working groups sheet in the response
sheet = smart.Sheets.get_sheet(sheetId)  # Load the sheet by using its ID
rows = [sheet.get_row(row.id) for row in sheet.rows]
cells = [row.cells for row in rows]
data = []
# create list of data points where each entry is the row of the working groups sheet with column
# title as the key and cell text as the value, i.e. 'Portfolio: Responsible AI'
for cell in cells:
    data_point = {}
    for cell_value in cell:
        column = sheet.get_column(cell_value.column_id)
        data_point[column.title] = cell_value.value
    data.append(data_point)

with open(filename, 'w') as outfile:
    # the default_flow_style and sort_keys attrs set to False to ensure consistent data order
    yaml.dump(data, outfile, default_flow_style=False, sort_keys=False)
