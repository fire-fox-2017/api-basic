# api-basic

Author : Haryana wisnu

Create Date : Selasa, 25 April 2017

Description : API Basic dengan CRUT

Acces via localhost:3000/api/users

Install Step :
- create folder api-basic
- npm init
- express .
- npm install
- npm install --save sequelize sequelize-cli pg
- sequelize init
- sequelize model:craete --name Users --attribute name:string,age:integer,email:string
- sequelize db:migrate
- sequelize seed:craete --name seed-users-dummy
- sequelize db:seed --seed seed-users-dummy


| Route | HTTP |Description|
| ------ | ------ |------ |
|/api/users       |   GET   |      get all the users|
|/api/users/:id   |   GET      |   get a single users|
|/api/users       |   POST     |   create a user|
|/api/users/:id   |   DELETE    |  delete a user|
|/api/users/:id   |   PUT        | update a user with new info|
