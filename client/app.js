const baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

function handleResponse(response) {
    const { data } = response;
    console.log('Got data:', data);
}

function handleError(error) {
    console.error(error);
}

function testConnection() {
    instance.get('/')
        .then(handleResponse)
        .catch(handleError);
}

function sendSampleData() {
    const sampleData = {
        label: '/hello',
        answer: 'Bonjour $user !'
    };

    instance.post('/sample', sampleData)
        .then(handleResponse)
        .catch(handleError);
}

function sendRequest() {
    sendSampleData();
}