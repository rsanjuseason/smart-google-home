
//const greetings = require('../alexa-utterance-controller/greetnig-utterances')
const salesforceService = require('../service/salesforce-service')

var lastIntent = {
	intentName: ''
}

//view list of roles
exports.intentController = async (req, res) => {

	try {
		res.json(await salesforceService.getLeads(req, res));
	} catch (err) {
		throw Error('Error while getting leads.');
	}
}