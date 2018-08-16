const express = require('express')
const router = express.Router();
const Card = require('../server/db/models/Card')

router.route('/')
  .get((req, res) => {
    return Card.fetchAll()
      .then(cards => {
        return res.json(cards)
      })
      .catch(err => {
        return res.json(err.message)
      })
  })
  .post((req, res) => {
    const title = req.body.title.trim()
    const body = req.body.body.trim()
    const priority_id = req.body.priority_id
    const status_id = req.body.status_id
    const created_by = req.body.created_by
    const assigned_to = req.body.assigned_to

    const card = {
      title: title ? title : null,
      body: body ? body : null,
      priority_id: priority_id ? priority_id : null,
      status_id: status_id ? status_id : null,
      created_by: created_by ? created_by : null,
      assigned_to: assigned_to ? assigned_to : null,
    }
    return new Card(card)
    .save()
    .then(card=>{
      return res.json(card)
    })
    .catch(err=>{
      console.log(err)
    })
  })
module.exports = router;