module.exports = function (router) {

    var leader = require('../controller/dish/dishController');

    router.get('/dishes', function (req,res,next) { leader.getAll(req,res,next) });

    router.get('/dishes/:id', function (req,res,next) { leader.getOne(req,res,next) });

    router.post('/dishes', function (req,res,next) { leader.insertDish(req,res,next) });

    router.put('/dishes/:id', function (req,res,next) { leader.editDish(req,res,next) });

    router.delete('/dishes/:id', function (req,res,next) { leader.deleteDish(req,res,next) });

}



