'use strict'

const ImmunizationRecord = use('App/Models/ImmunizationRecord')
const Utilities = use('App/Models/Traits/Utilities')
const Database = use('Database')

class ImmunizationController {

    async store ({request, response}) {
        const params = request.only(['name', 'phone_number', 'state', 'gender', 'language', 'date_of_birth'])
        let regId = Utilities.getRegistrationID(params.state)

        const immunization = new ImmunizationRecord()
        immunization.fullname = params.name
        immunization.registration_id = regId
        immunization.state = params.state
        immunization.phone_number = params.phone_number
        immunization.preferred_language = params.language
        immunization.gender = params.gender
        immunization.date_of_birth = new Date(params.date_of_birth)
        await immunization.save()

        const message = Utilities.getPreferredLanguage(params.language, params.name, regId);
        await Utilities.sendSMS(params.phone_number, message);

        response.status(201).json({
            status: 'success',
            data: immunization
        }) 
    }

    async getAllRecords({params, request, response}) {
        const records = await ImmunizationRecord.all()
        response.status(201).json({
            status: 'success',
            data: records
        })
    }

    async getProfile({ request, response }) {
        const profile = await ImmunizationRecord.findBy('registration_id', request.input('reg_id'));
        if(profile) {
            response.status(200).json({
                status: 'success',
                data: profile
            });
        }
    }

    async searchRecords({ request, response }) {
        const params = request.only(['gender', 'phone_number', 'state', 'language', 'registration_id', 'start_date', 'end_date']);
        
        const records = await Database.from('immunization_records')
        .where('gender', params.gender)
        .orWhere('state', params.state)
        .orWhere('phone_number', params.phone_number)
        .orWhere('registration_id', params.registration_id)
        .orWhere('preferred_language', params.language)
        .orWhereBetween('date_of_birth', [new Date(params.start_date), new Date(params.end_date)]);
        
        response.status(200).json({
            status: 'success',
            data: records
        });
    }
}

module.exports = ImmunizationController
