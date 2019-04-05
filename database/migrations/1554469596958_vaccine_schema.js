'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VaccineSchema extends Schema {
  up () {
    this.create('vaccines', (table) => {
      table.increments()
      table.string('child_age')
      table.string('vaccine_type')
      table.string('disease')
      table.boolean('is_active')
      table.timestamps()
    })
  }

  down () {
    this.drop('vaccines')
  }
}

module.exports = VaccineSchema
