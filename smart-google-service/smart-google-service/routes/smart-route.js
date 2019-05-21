var express = require('express');
var router = express.Router();
var smartController = require('../app/controller/smart-google-controller');

/* GET request  */
router.post('/google-mini', smartController.intentController);

module.exports = router;
