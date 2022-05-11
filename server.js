const express = require('express');
const app = express();
const SERVER_PORT = 4400;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`); 
});