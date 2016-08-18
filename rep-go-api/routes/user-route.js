'use strict';

const router = require('express').Router()
const ctrl = require('../controllers/user-controller');

router.get('/user', ctrl.getAll);
router.get('/user/:id', ctrl.getById);
router.post('/user', ctrl.create);
router.put('/user/:id', ctrl.update);
router.delete('/user/:id', ctrl.remove);

module.exports = router;
