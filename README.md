# api-basic

Author : Haryana wisnu

Create Date : Selasa, 25 April 2017

Description : API Basic dengan CRUT

Acces via localhost:3000/api/users

Install Step :
- npm install
- sequelize init
- sequelize db:migrate
- sequelize db:seed --seed seed-users-dummy


| Route | HTTP |Description|
| ------ | ------ |------ |
|/api/users       |   GET   |      get all the users|
|/api/users/:id   |   GET      |   get a single users|
|/api/users       |   POST     |   create a user|
|/api/users/:id   |   DELETE    |  delete a user|
|/api/users/:id   |   PUT        | update a user with new info|
