'use strict';

const User = require('../models/user-model');
const ctrl = {}

ctrl.getAll = (req, res) => {
  User.getAll(req.query)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
};

ctrl.getById = (req, res) => {
  User.getById(req.params.id)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
};

ctrl.create = (req, res) => {
  User.create(req.body)
    .then(data => {
      return res.status(201).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

ctrl.update = (req, res) => {
  User.update(req.params.id, req.body)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

ctrl.remove = (req, res) => {
  User.remove(req.params.id)
    .then(data => {
      return res.status(200).send(data);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
};

module.exports = ctrl;
