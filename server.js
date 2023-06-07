const express = require('express');
const app = express();

app.get('/teste', (request, response) => {
    response.send ('Joao de Deus')
});

app.listen(3000, () => {
    console.log('Joao de Deus')
});
