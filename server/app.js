const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/sample', (req, res) => {
    console.log(req.headers, req.body);
    res.status(200).send({ data: 'ok' });
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});