const Constant = require('./constants')
exports.buildResponseWithRepromt = function (speechText, shouldEndSession, cardText, reprompt) {
    console.log('speechText', speechText)
    const speechOutput = "<speak>" + speechText + "</speak>"
    var jsonObj = {
        "version": "1.0",
        "response": {
            "shouldEndSession": shouldEndSession,
            "outputSpeech": {
                "type": "SSML",
                "ssml": speechOutput
            }
        },
        "card": {
            "type": "Simple",
            "title": Constant.SKILL_NAME,
            "content": cardText,
            "text": cardText
        },
        "reprompt": {
            "outputSpeech": {
                "type": "PlainText",
                "text": reprompt,
                "ssml": reprompt
            }
        },
    }
    console.log('jsonObj', jsonObj)
    return jsonObj
}