'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReminderSchema extends Schema {
  up () {
    this.create('immunization_reminders', (table) => {
      table.increments()
      table.integer('immunization_record_id')
      table.integer('vaccine_id')
      table.boolean('status')
      table.string('remark')
      table.timestamps()
    })
  }

  down () {
    this.drop('reminders')
  }
}

module.exports = ReminderSchema
