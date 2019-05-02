'use strict'

class UssdController {
    
    async index ({request, response}) {
        const params = request.only(['sessionId', 'serviceCode', 'phoneNumber', 'text'])
        const SESSION_CONTINUE = "CON ";
        const SESSION_END = "END ";
        const RESPONSE_CODE = 200;
        let res = ''

        if (params.text === "") {
            res = `${SESSION_CONTINUE}Welcome to RemindMe Service
            Press
            1. Immunization
            2. Maternal care
            3. Hospital
            4. Confirm Immunization
            5. Unsubscribe`

        } else if(params.text === "1") {
            res = `${SESSION_END}Your phone number is ${params.phoneNumber}`;
        }

        response.header('Content-type', 'text/plain')
        await response.status(RESPONSE_CODE).send(res)
    }
}

module.exports = UssdController