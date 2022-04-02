const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_KRad8Er2VD6FSasLI4QtSV5I00F6WapWl1");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
}
);

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d0c9c/us-central1/api