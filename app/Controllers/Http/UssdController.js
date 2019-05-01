'use strict'

class UssdController {
    
    async index ({request, response}) {
        const params = request.only(['sessionId', 'serviceCode', 'phoneNumber', 'text'])
        let res = ''

        if(params.text === "") {
            res = `CON Welcome to RemindMe Service
                1. My account
                2. My phone number`

        } else if(params.text === "1") {

        }

        response.header('Content-type', 'text/plain')
        response.send(res)
    }
}

module.exports = UssdController