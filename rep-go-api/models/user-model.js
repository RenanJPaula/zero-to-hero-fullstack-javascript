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

model.getAll = (query = {}) => {
  query.active = true;
  return User.find(query);
};

model.getById = (_id) => {
  return User.findOne({ _id });
};

model.create = (user) => {
  return User.create(user);
};

model.update = (_id, user) => {
  return User.update({ _id }, user);
};

model.remove = (_id) => {
  return User.update({ _id }, { active: false });
};

model.authenticate = (user) => {
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
