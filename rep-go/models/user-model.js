'use strict'

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const User = mongoose.model('User', schema)
const model = {};

model.authenticate = user => {
  return new Promise((resolve, reject) => {
    let _query = {
      name: user.name,
      password: user.password,
      active: true
    };

    User.findOne(_query)
      .then(data => {
        if(data && data != null) {
          return resolve(data);
        }

        return reject();
      })
      .catch(err => {
        return reject(err);
      });
  });
}

module.exports = model;
