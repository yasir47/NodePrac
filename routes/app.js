var express = require('express');

var router = express.Router();

var indexController = require('../controller/index');
var leaderController = require('../controller/leaderRouter');
var promoController = require('../controller/promoRouter')

indexController(router);
leaderController(router);
promoController(router);

module.exports = router;