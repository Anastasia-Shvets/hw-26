const express = require('express');
const app = express();

const port = 3000;

const user1 = {
    name: 'Yarik',
    job: 'farmer'
}

const user2 = {
    name: 'Vlaaaaad',
    job: 'shepherd'
}

const users = [user1, user2];

app.get('/', function (req, res) {
  res.send(users);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});