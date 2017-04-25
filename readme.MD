# Demo API BASIC
A simple demonstration of REST API BASIC using Express.JS

### Installation
In folder config, create config.json file and insert this:

```javascript
{
  "development": {
    "username": "postgres",
    "password": "12345",
    "database": "api-basic",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```

Then:

```javascript
npm install
npm start
```

### REST API
Access the API from http://localhost:3000/api/users
OR
https://afternoon-forest-87920.herokuapp.com/api/users

List of users routes:

Route | HTTP | Description
----- | ---- | -----------
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users | POST | create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info

