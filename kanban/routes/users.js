const express = require('express');
const router = express.Router();
const User = require('../server/db/models/User');
router.get('/', (req, res) => {
  return User.fetchAll()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      console.log('err.message', err.message);
    });
});

module.exports = router;
