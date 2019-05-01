'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiseaseTrackerSchema extends Schema {
  up () {
    this.create('disease_trackers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('disease_trackers')
  }
}

module.exports = DiseaseTrackerSchema
