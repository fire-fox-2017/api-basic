# api-basic

Api-basic merupakan aplikasi sederhana untuk menyimpan data user menggunakan metode API

Author : M Ilham Hidayat

#List of basic routes:

1. Get all the users
route : /api/users/
http: get

2. Get a single user
route : /api/users/:id
http: get

3. Create a user
route : /api/users
http: post

4. Delete a user
route : /api/users/:id
http: delete

5. Update a user with new info
route : /api/users/:id
http: put

#Usage

1. Install Package in dependency

	npm install

2. Initialize sequelize

	sequelize init
3. create user model and seed user
4. run express js

	nodemon app.js
