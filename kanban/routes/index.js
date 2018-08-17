const express = require('express');
const app = express()
const router = express.Router();
const cards = require('./cards')
const statuses = require('./statuses')
router.use('/cards', cards)
router.use('/status', statuses)
module.exports = router;