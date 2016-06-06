var express = require('express');

var router = express.Router();

var indexController = require('../routes/index');
var leaderController = require('../routes/leaderRouter');
var promoController = require('../routes/promoRouter')

indexController(router);
leaderController(router);
promoController(router);

module.exports = router;