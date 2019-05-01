'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmunizationVaccineSchema extends Schema {
  up () {
    this.create('immunization_vaccines', (table) => {
      table.increments()
      table.integer('immunization_record_id')
      table.string('child_registration_id')
      table.integer('vaccine_id')
      table.boolean('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('immunization_vaccines')
  }
}

module.exports = ImmunizationVaccineSchema
