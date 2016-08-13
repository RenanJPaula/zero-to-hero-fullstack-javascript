'use strict';

const Transaction = require('../models/transaction-model');
const ctrl = {}

ctrl.getAll = (req, res) => {
  Transaction.getAll()
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
};

ctrl.getById = (req, res) => {
  Transaction.getById(req.params.id)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
};

ctrl.create = (req, res) => {
  Transaction.create(req.body)
    .then(data => {
      return res.status(201).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

ctrl.update = (req, res) => {
  Transaction.update(req.params.id, req.body)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

ctrl.remove = (req, res) => {
  Transaction.remove(req.params.id)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

module.exports = ctrl;
