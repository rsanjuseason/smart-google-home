
const greetings = require('../alexa-utterance-controller/greetnig-utterances')
const Medicines = require('../alexa-utterance-controller/medical-utterance')

var lastIntent = {
    intentName: ''
}

//view list of roles
exports.alexaController = async (req, res) => {

    try {
        if (req.body.request.type === 'LaunchRequest') {

            res.json(greetings.getInitialGreetings());
        }
        else if (req.body.request.type === 'SessionEndedRequest') {
            log("Session End")
        } else if (req.body.request.type === 'IntentRequest') {

            switch (req.body.request.intent.name) {
                case 'MedicineAvaibality':
                    lastIntent.intentName = req.body.request.intent.name;
                    res.json(await Medicines.GetMedicineAvaibality(req.body.request.intent));
                    break;
                case 'OrderMedicine':
                    console.log('got request', req.body.request.intent)
                    res.json(await Medicines.orderQuantity(req.body.request.intent));
                    break;
                case 'ChangeStatus':
                    res.json(greetings.salesForce(req.body.request.intent));
                case 'AMAZON.YesIntent':
                    if (lastIntent.intentName === 'MedicineAvaibality') {
                        res.json(await Medicines.yesIntentResponse());
                    } else {
                        res.json(greetings.getInitialGreetings());
                    }
                    break;
                case 'AMAZON.NoIntent':
                    res.json(stopAndExit());
                    break;
                case 'AMAZON.HelpIntent':
                    res.json(help());
                    break;
                default:
                    res.json(greetings.getInitialGreetings());
            }
        }
    } catch (err) {

    }
}