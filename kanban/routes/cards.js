const express = require('express')
const router = express.Router();
const Card = require('../server/db/models/Card')
router.route('/')
  .get((req, res) => {
    // console.log('get cards')
    return Card.fetchAll({ withRelated: ['priority', 'created', 'assigned', 'status'] })
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
      .then(newCard => {
        return newCard.refresh({ withRelated: ['priority', 'status', 'created', 'assigned'] })
        // return res.json(newCard)
      })
      .then(card => {
        console.log('card', card);
        return res.json(card)
      })
      .catch(err => {
        console.log(err)
      })
  })

router.route('/:id')
  .get((req, res) => {
    let id = req.params.id;
    return Card
      .query({ where: { id: id } })
      .fetchAll({
        withRelated: ['priority', 'status', 'created', 'assigned']
      })
      .then(card => {
        let cardInfo = card.toJSON();

        res.json(card)
      })
      .catch(err => {
        console.log('err.message', err.message);
      })


  })
  .put((req, res) => {
    let id = req.params.id
    console.log('req.body', req.body);
    console.log('THIS IS ID', id);
    const title = req.body.title
    const body = req.body.body
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

    return new Card({ where: { id: id } })
      .save(card)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log('err.message', err.message);
      })
  })
  .delete((req, res) => {
    const id = req.params.id;
    console.log('id', id);
    return new Card({ id: id })
      .destroy()
      .then(cards => {
        return Card
          .fetchAll({ withRelated: ['priority', 'status', 'created', 'assigned'] })
          .then(cards => {
            res.json(cards);
          })
      })
      .catch(err => console.log(err));
  })
module.exports = router;