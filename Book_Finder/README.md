# Book Finder
![](https://i.imgur.com/3ysFExG.gif)

## Week 2 Update : 

API Endpoints created for :

- Updating previous records
- Creating new records


---



### Updating Previous records
```
- Type - PUT
- Endpoint : http://ec2-54-242-118-7.compute-1.amazonaws.com/api/update/books/bookId
- Example : http://ec2-54-242-118-7.compute-1.amazonaws.com/api/update/books/202
- Body : 
          {
          "book_id":202,
          "first_name":"Preeti", 
          "last_name":"Sharma",
          "title":"Networking in TAC"
          }
```

**Success Message :**

![](https://i.imgur.com/Rd5RIkE.png)

**Book Id does not exist :**

![](https://i.imgur.com/xGlhO40.png)

**Fields missing in PUT request :**

![](https://i.imgur.com/A4CLqOS.png)

---


### Creating New record
```
- Type - POST
- Endpoint : http://ec2-54-242-118-7.compute-1.amazonaws.com/api/add/single/newbook
- Body : 
          {
          "book_id":205,
          "first_name":"Elon", 
          "last_name":"Musk",
          "title":"SpaceX vs NASA"
          }
```

**Success Message :**

![](https://i.imgur.com/Q3RV4Xd.png)

**Book Id already exist :**

![](https://i.imgur.com/SHASIwZ.png)

**Fields missing in POST request :**

![](https://i.imgur.com/N1VlI0U.png)

---
