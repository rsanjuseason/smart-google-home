var express = require('express');
var router = express.Router();
const smartController = require('../app/Controller/smart-service-controller');

/* GET users listing. */
router.post('/alexa', smartController.alexaController);

module.exports = router;
