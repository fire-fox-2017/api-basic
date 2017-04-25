# api-basic

##Summary

Kita akan membuat sebuah layanan yang mengimplementasikan RESTfull Web API di aplikasi kita.

Cara menjalankan perintah berikut di direktori project kamu

```
$ express . \
$ npm install
```
Buatlah sebuah source data atau database: \
\* Bisa menggunakan file JSON atau SQLITE/POSTGRES DLL.


####Route API
Kamu bisa menggunakan pola perintah seperti dibawah ini :
```
| Route          | HTTP   | Description                 |
|----------------|--------|-----------------------------|
| /api/users     | GET    | Get all the users           |
| /api/users/:id | GET    | Get a single user           |
| /api/users     | POST   | Create a user               |
| /api/users/:id | DELETE | Delete a user               |
| /api/users/:id | PUT    | Update a user with new info |
```