const axios = require('axios');
require('dotenv').config();

const baseURL = process.env.BASE_URL;

const instance = axios.create({
    baseURL
});

instance.get('/')
    .then(function (response) {
        const { data } = response;
        console.log('Got data:', data);
    })
    .catch(function (error) {
        console.log(error);
    });