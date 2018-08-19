const express = require('express');
const app = express()
const router = express.Router();
const cards = require('./cards')
const statuses = require('./statuses')
const users = require('./users')
router.use('/cards', cards)
router.use('/status', statuses)
router.use('/users', users)
module.exports = router;