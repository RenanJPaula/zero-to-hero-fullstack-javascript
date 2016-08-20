'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Application config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config Middlewares
app.use(require('./middlewares/i18n-middleware.js'));
// app.use(require('./middlewares/auth-middleware.js'));

// Route config
app.use(require('./routes/transaction-route'));
app.use(require('./routes/user-route'));

// Config Error Handdler
app.use(require('./middlewares/error-middleware.js'));

module.exports = app;
