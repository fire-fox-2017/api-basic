# API-BASIC

API-Basic is a simple example of CRUD using the API.

## Routes

| Route | HTTP method | Description|
| ---------- | ------------------- | ---------- |
| /api/users | GET | Get all the users info |
| /api/users/:id | GET | Get a single user info |
| /api/users/ | POST | Create a user |
| /api/users/:id | DELETE | Delete a user |
| /api/users/:id | PUT | Update a user with new info |


Create user requires {username:'<username>', password:'<password>', role:<'admin' or 'user'>}

## How to Use:
Install the dependencies first and then start the app as follows:
```sh
$ npm install
$ npm start
```
Access the website via HTTP://localhost:3000, running the app in Postman is recommended
