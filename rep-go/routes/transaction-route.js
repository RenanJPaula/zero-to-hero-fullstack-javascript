'use strict';

const router = require('express').Router()
const ctrl = require('../controllers/transaction-controller');

router.get('/transaction', ctrl.getAll);
router.get('/transaction/:id', ctrl.getById);
router.post('/transaction', ctrl.create);
router.put('/transaction/:id', ctrl.update);
router.delete('/transaction/:id', ctrl.remove);

module.exports = router;
