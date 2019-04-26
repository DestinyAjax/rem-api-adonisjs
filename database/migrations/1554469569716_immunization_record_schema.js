'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmunizationRecordSchema extends Schema {
  up () {
    this.create('immunization_records', (table) => {
      table.increments()
      table.string('fullname')
      table.string('registration_id').unique()
      table.string('phone_number')
      table.date('date_of_birth')
      table.string('state')
      table.string('preferred_language')
      table.string('gender')
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('immunization_records')
  }
}

module.exports = ImmunizationRecordSchema
