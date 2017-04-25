# api-basic

## Users CRUD

Implementation of CRUD using all the basic methods

## REST API

Routes           Method      Description
/api/users        GET      get all users
/api/users/:id    GET      get a single user
/api/users        POST     create a user
/api/users/:id   DELETE    delete a user
/api/users/:id    PUT      update all data of a user
/api/users/:id   PATCH     update specific data of a user

###Filters

Routes                             Method      Description
/api/users?name="<username>"        GET       get <username> match in users       
/api/users?name="<na>"              GET       get <na> like in users


## Usage

How to start:
- npm install
- npm start
- npm run dev?

Access the website via http://localhost:3000 or
API via http://localhost:3000/api 

