import requests
import sys
import json
from requests.exceptions import HTTPError
import argparse

parser = argparse.ArgumentParser(description="Launch Home Library SDK here.")
parser.add_argument(
    "mode",
    metavar="MODE",
    choices=[
        "getTitle",
        "getFirstName",
        "all",
        "getLastName",
        "getbookId",
        "updateBook",
        "addBook",
    ],
    help="Select the mode you want to perform.",
)

parser.add_argument(
    "--data",
    metavar="DATA",
    help="Send Data in JSON format to create or update records",
)
parser.add_argument(
    "--bookid", metavar="BOOKID", default=205, help="send bookId for updating records",
)
parser.add_argument(
    "--searchQ",
    metavar="SEARCHQ",
    help="enter search query you want to search in database",
)

args = parser.parse_args()


api_url_base = "http://ec2-54-242-118-7.compute-1.amazonaws.com/api/"

USAGE = f"Usage: python {sys.argv[0]} [--help] | firstname lastname age]"


def get_all():
    payload = {}
    headers = {}
    api_url = "{}all".format(api_url_base)
    try:
        response = requests.request("GET", api_url, headers=headers, data=payload)
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def get_firstname(query):
    payload = {}
    headers = {}
    api_url = "{}firstname?id={}".format(api_url_base, query)
    try:
        response = requests.request("GET", api_url, headers=headers, data=payload)
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def get_lastname(query):
    payload = {}
    headers = {}
    api_url = "{}lastname?id={}".format(api_url_base, query)
    try:
        response = requests.request("GET", api_url, headers=headers, data=payload)
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def get_title(query):
    payload = {}
    headers = {}
    api_url = "{}title?id={}".format(api_url_base, query)
    try:
        response = requests.request("GET", api_url, headers=headers, data=payload)
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def get_bookid(query):
    payload = {}
    headers = {}
    api_url = "{}bookid?id={}".format(api_url_base, query)
    try:
        response = requests.request("GET", api_url, headers=headers, data=payload)
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def post_book(payload):
    headers = {"Content-Type": "application/json"}
    api_url = "{}add/single/newbook".format(api_url_base)
    try:
        response = requests.request("POST", api_url, headers=headers, data=payload)

        # If the response was successful, no Exception will be raised
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


def put_book(payload, book_id):
    headers = {"Content-Type": "application/json"}
    api_url = "{}update/books/{}".format(api_url_base, book_id)
    try:
        response = requests.request("PUT", api_url, headers=headers, data=payload)

        # If the response was successful, no Exception will be raised
        response.raise_for_status()
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    else:
        print(response.text.encode("utf8"))


if args.mode == "all":
    get_all()
if args.mode == "getTitle":
    if not args.searchQ:
        print("Add Search Query and try again")
        sys.exit(1)
    get_title(args.searchQ)
if args.mode == "getFirstName":
    if not args.searchQ:
        print("Add Search Query and try again")
        sys.exit(1)
    get_firstname(args.searchQ)
if args.mode == "getLastName":
    if not args.searchQ:
        print("Add Search Query and try again")
        sys.exit(1)
    get_lastname(args.searchQ)
if args.mode == "getbookId":
    if not args.searchQ:
        print("Add Search Query and try again")
        sys.exit(1)
    get_bookid(args.searchQ)
if args.mode == "updateBook":
    if not args.data:
        print("Add data in JSON format to continue")
        sys.exit(1)
    if not args.bookid:
        print("Add Book Id to modify")
        sys.exit(1)
    put_book(args.data, args.bookid)

if args.mode == "addBook":
    if not args.data:
        print("Add data in JSON format to continue")
        sys.exit(1)
    post_book(args.data)
