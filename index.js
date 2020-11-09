const express = require('express');

const server = express();

const PORT = 5005;


server.get('/', (req, res) => {
    res.json({ hello: "world" })
});

server.get('/hello', (req, res) => {
    res.json({ hello: "Future software guy" })
});
server.listen(5005, () => {
    console.log(`Server is listening on ${PORT}`)
});

