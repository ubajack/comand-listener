const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const corsOptions = {
    credentials: true,
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT;

// Middleware
function verifyApiKey(req, res, next) {
    const { 'api-key': apiKey } = req.cookies;

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).send('API key not valid!');
    }
    next();
}

// Route pour tester l'API
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route récupérant les données du client après vérification de la clé d'API
app.post('/sample', verifyApiKey, (req, res) => {
    res.status(200).send({ data: 'ok', cookies: Object.keys(req.cookies).length });
});

// Ecoute du serveur
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});