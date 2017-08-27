const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000, () => console.log('Webhook server listening on port 4000'));

app.get('/', verificationController);
app.post('/', messageWebhookController);
