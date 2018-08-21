const express = require('express');
const router = express.Router();
const Statuses = require('../server/db/models/Statuses');

router.route('/')
  .get((req, res) => {

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

    return Statuses.fetchAll({ withRelated: ['status'] })
      .then(cards => {

        res.json(cards)
      })
      .catch(err => {
        console.log(err.message)
      })
  })

module.exports = router;