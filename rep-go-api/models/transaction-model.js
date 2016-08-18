'use strict'

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Debit', 'Credit'],
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Transaction = mongoose.model('Transaction', schema)
const model = {};

model.getAll = () => {
  return Transaction.find({});
};

model.getById = (_id) => {
  return Transaction.findOne({ _id });
};

model.create = (transaction) => {
  return Transaction.create(transaction);
};

model.update = (_id, transaction) => {
  return Transaction.update({ _id }, transaction);
};

model.remove = (_id) => {
  return Transaction.remove({ _id });
};

module.exports = model;
