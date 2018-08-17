const express = require('express');
const router = express.Router();
const Statuses = require('../server/db/models/Statuses');

router.route('/')
  .get((req, res) => {
    console.log('status')
    return Statuses.fetchAll()
      .then(result => {
        return res.json(result)
      })
      .catch(err => {
        console.log(err.message)
      })
  })

router.route('/status')
  .get((req, res, ) => {
    console.log('hi');
    return Statuses.fetchAll({ withRelated: ['status'] })
      .then(cards => {
        console.log('CARDS', cards)
        res.json(cards)
      })
      .catch(err => {
        console.log(err.message)
      })
  })

module.exports = router;