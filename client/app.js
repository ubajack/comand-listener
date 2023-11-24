const baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Callback pour les réponses de l'API
function handleResponse(response) {
    const { data } = response;
    console.log('Got data:', data);
}

// Callback pour les erreurs de l'API
function handleError(error) {
    console.error(error);
}

// Envoi d'une requête pour tester la configuration
function testConnection() {
    instance.get('/')
        .then(handleResponse)
        .catch(handleError);
}

// Envoi de données d'exemple
function sendSampleData() {
    const sampleData = {
        label: '/hello',
        answer: 'Bonjour $user !'
    };

    instance.post('/sample', sampleData)
        .then(handleResponse)
        .catch(handleError);
}

// Callback appelé suite au clic du bouton
function sendRequest() {
    sendSampleData();
}