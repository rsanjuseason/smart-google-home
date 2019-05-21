const Response = require('../../config/response')
const Constant = require('../../config/constants')

exports.getInitialGreetings = function () {

    var welcomeSpeechOutput = 'Hello, Welcome to Salesforce,<break time="0.3s" /> '
    const tempOutput = Constant.WHISPER + welcomeSpeechOutput + Constant.PAUSE;
    const speechOutput = tempOutput + Constant.MORE_MESSAGE;
    const more = Constant.MORE_MESSAGE
    return Response.buildResponseWithRepromt(speechOutput, false, '', more);
}

exports.salesForce = function (intent) {

    var welcomeSpeechOutput = 'Hello, Welcome to salesforce ,<break time="0.3s" /> '
    var spech = ' your name is ' + intent.slots.GivenName.value + ' assigned status ' + intent.slots.Status.value
    const tempOutput = Constant.WHISPER + welcomeSpeechOutput + Constant.PAUSE;
    const speechOutput = tempOutput + spech;
    const more = Constant.MORE_MESSAGE
    return Response.buildResponseWithRepromt(speechOutput, true, '', more);
}