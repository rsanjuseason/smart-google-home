//const Constant = require('./constants')
exports.buildResponseWithRepromt = function (speechText, shouldEndSession) {
    console.log('speechText', speechText)
    const speechOutput = "<speak>" + speechText + "</speak>"

    var jsonObj = {
        "source": "google",
        "fulfillmentText": speechText,
        "fulfillmentMessages": [
            {
                "card": {
                    "title": "card title",
                    "subtitle": "card text",
                    "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                    "buttons": [
                        {
                            "text": "button text",
                            "postback": "https://assistant.google.com/"
                        }
                    ]
                }
            }
        ]
    }


    console.log('jsonObj', jsonObj)


    return jsonObj
}