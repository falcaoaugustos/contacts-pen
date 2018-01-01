const Contact = require('../models/contact-model')
const knex = require('../db-config')

function load(req, res, next, id) {
  Contact.get(id)
    .then(contact => {
      req.contact = contact
      req.contactID = id
      return next()
    })
    .catch(err => next(err))
}

function list(req, res, next) {
  Contact.list()
    .then(contacts => res.json(contacts))
}

function create(req, res, next) {
  knex('Contacts')
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country
    },'id')
    .then(() => res.send(`Contact was inserted successfully.`))
    .catch(err => console.log(err))
}

function get (req, res) {
  res.json(req.contact)
}

function update(req, res, next) {
  knex('Contacts')
    .update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country
    })
    .where({
      id: req.contactID
    })
    .then(() => res.send(`Contact at index: ${req.contactID} was updated successfully.`))
    .catch(err => console.log(err))
}

function remove(req, res, next) {
  knex('Contacts')
  .del()
  .where({
    id: req.contactID
  })
  .then(() => res.json(req.contact))
  .catch(err => console.log(err))
}

module.exports = { load, list, create, get, update, remove }