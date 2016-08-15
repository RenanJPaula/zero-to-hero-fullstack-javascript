'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Application config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config Middlewares
app.use(require('./middlewares/auth-middleware.js'));

// Route config
app.use(require('./routes/transaction-route'));

module.exports = app;
