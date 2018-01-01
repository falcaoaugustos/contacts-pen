const knex = require('../db-config')

knex.schema
  .hasTable('Contacts')
  .then(exists => {
    if (!exists) {
      console.log('Contact table was created successfully.')
      return knex.schema.createTable('Contacts', table => {
        table.increments('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('email')
        table.string('phone')
        table.string('country')
      })
    } else {
      console.log('Contact table was already created before.')
    }
  })

const listContact = () => {
  return knex('Contacts')
    .select()
}

const getContact = contactID => {
  return knex('Contacts')
  .select()
  .where({
    id: contactID
  })
}

const Contact = {
  list: listContact,
  get: getContact
}

module.exports = Contact