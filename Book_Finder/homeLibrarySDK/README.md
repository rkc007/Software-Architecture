Python SDK to connect to API
===

A python SDK that helps to connect to API.

Requirements
============
  - Python 3.3+
  - requests
  - argparse
  - json


Usage
=====

```
python apiSDK.py [-h] [--data DATA] [--bookid BOOKID] [--searchQ SEARCHQ] MODE

Launch Home Library SDK here.

positional arguments:
  MODE               Select the mode you want to perform. (choose from 'getTitle', 'getFirstName', 'all', 'getLastName', 'getbookId', 'updateBook', 'addBook')

optional arguments:
  -h, --help         show this help message and exit
  --data DATA        Send Data in JSON format to create or update records
  --bookid BOOKID    send bookId for updating records
  --searchQ SEARCHQ  enter search query you want to search in database

```

Examples
=======
#### Get details from First Name
```
python apiSDK.py getFirstName --searchQ='Kate'
```
Output - 
```json
{
  "id": 298,
  "title": "Soft Arch",
  "last_name": "H",
  "first_name": "Kate",
  "book_id": "250",
  "created_at": "2020-09-21T10:37:16.690Z"
}
```

#### Get details from Title
```
python apiSDK.py getTitle --searchQ='NLP'
```
Output - 
```json
{
  "id": 88,
  "title": "NLP: Understand it in natural way",
  "last_name": "Chauhan",
  "first_name": "Rahul Kumar",
  "book_id": "9",
  "created_at": null
}
```


#### Add new Record
```
python apiSDK.py addBook --data='{"book_id":220,"first_name":"Jeff", "last_name":"Bezos","title":"Amazon: The deadly fire" }'
```
Output - 
```json
{
  "status": "success",
  "data": {
    "id": 301,
    "title": "Amazon: The deadly fire",
    "last_name": "Bezos",
    "first_name": "Jeff",
    "book_id": "220",
    "created_at": "2020-09-21T11:18:10.709Z"
  }
}
```

#### Update old Record
```
python apiSDK.py updateBook --data='{"book_id":205,"first_name":"Elon", "last_name":"Musk","title":"SpaceX vs NASA" }' --bookid=205
```
Output - 
```json
{
  "status": "success",
  "data": {
    "id": 290,
    "title": "SpaceX vs NASA",
    "last_name": "Musk",
    "first_name": "Elon",
    "book_id": "205",
    "created_at": "2020-09-14T09:19:19.934Z"
  }
}
```
