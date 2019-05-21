const superagent = require('superagent');
const Response = require('../config/response')

//get Leads services
exports.getLeads = async (req, res, data) => {
    try {
        console.log('inside');
        console.log('-->')
        // console.log(req)Z
        let intentName = req.body.queryResult ? req.body.queryResult.intent.displayName : '';
        let status = req.body.queryResult ? req.body.queryResult.parameters.status : '';
        console.log()
        const res1 = await superagent.get('https://season-developer-edition.ap7.force.com/services/apexrest/Webhook?intentname=' + intentName + '&status=' + status);
        console.log(res1);
        let r = res1.body;
        return Response.buildResponseWithRepromt(res1.body, true);

    } catch (err) {
        throw Error('Error while getting Leads ');
    }
}