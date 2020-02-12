const express = require('express');
const database = require('./util/database');
const router = require('./routes/route');

const server = express();

server.set('view engine', 'ejs');

server.use(router);

server.use(express.static('./public'));

database.mongoConnect(() => {
    server.listen(3000);
})