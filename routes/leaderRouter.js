module.exports = function (router) {

    var leader = require('../controller/leader/leadershipController');

    router.get('/leadership', function (req,res,next) { leader.getAll(req,res,next) });

    router.get('/leadership/:id', function (req,res,next) { leader.getOne(req,res,next) });

    router.post('/leadership', function (req,res,next) { leader.insertLeader(req,res,next) });

    router.put('/leadership/:id', function (req,res,next) { leader.editLeader(req,res,next) });

    router.delete('/leadership/:id', function (req,res,next) { leader.deleteLeader(req,res,next) });

}



