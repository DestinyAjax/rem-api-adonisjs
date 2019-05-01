'use strict'

const ImmunizationRecord = use('App/Models/ImmunizationRecord')
const Hospital = use('App/Models/Hospital')
const ImmunizationReminder = use('App/Models/ImmunizationReminder')
const Utilities = use('App/Models/Traits/Utilities')

class HomeController {

    async index({request, response}) {
        const hospitals = await Hospital.getCount()
        const immunization = await ImmunizationRecord.getCount()
        const male_children = await ImmunizationRecord.query().where('gender', 'male').getCount()
        const female_children = await ImmunizationRecord.query().where('gender', 'female').getCount()
        const reminders = await ImmunizationReminder.getCount()

        response.status(200).json({
            status: 'success',
            data: {
                hospitals: hospitals,
                immunizations: immunization,
                male: male_children,
                female: female_children,
                reminders: reminders
            }
        })
    }

}

module.exports = HomeController
