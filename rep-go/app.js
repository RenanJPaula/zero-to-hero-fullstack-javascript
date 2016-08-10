'use strict'

const db = require('./db');
const transaction = require('./model/transaction-model')

db.on('open', () => {

  transaction.create({ type: 'Debit' }).then(function(data) {
    console.log(data);
  });

});
