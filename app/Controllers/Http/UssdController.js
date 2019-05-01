'use strict'

class UssdController {
    
    async index({request, response}) {
        const params = request.only(['sessionId', 'serviceCode', 'phoneNumber', 'text'])
        var message = ''
        if(params.text === "") {
            message = `Welcome to RemindMe Service`
        }

        response.header('Content-type', 'text/plain')
        return message
    }
}

module.exports = UssdController
