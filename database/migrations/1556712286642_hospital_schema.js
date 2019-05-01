'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HospitalSchema extends Schema {
  up () {
    this.create('hospitals', (table) => {
      table.increments()
      table.string('name')
      table.string('state')
      table.string('city')
      table.string('address')
      table.string('email')
      table.string('telephone')
      table.timestamps()
    })
  }

  down () {
    this.drop('hospitals')
  }
}

module.exports = HospitalSchema
