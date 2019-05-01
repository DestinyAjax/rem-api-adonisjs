'use strict'

class UssdController {
    
    async index ({request, res}) {
        const params = request.only(['sessionId', 'serviceCode', 'phoneNumber', 'text'])
        let res = ''

        if(params.text === "") {
            response = `CON Welcome to RemindMe Service
                1. My account
                2. My phone number`;

        } else if(params.text === "1") {

        }

        res.header('Content-type', 'text/plain')
        res.send(response)
    }
}

module.exports = UssdController