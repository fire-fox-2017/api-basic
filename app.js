const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

// route
const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));

// use the route
app.use('/api/users', users);

app.listen(port, function() {
  console.log('app listening on port 3000!');
});

module.exports = app;