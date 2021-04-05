import click
import httpx
import requests

url = "https://api.airtable.com/v0/appTWigF6HIiW5QuD/sprints"
headers = {
    'Authorization': 'Bearer keykV5jVQHOlHW933',
}

response = requests.get(url, headers=headers)
data = response.json()

click.echo(data)