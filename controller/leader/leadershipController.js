var mongoose = require('mongoose');
var Leaders = require('../../models/leaders')

exports.getAll = function (req, res, next) {
    Leaders.find({}, function (err, leader) {
        if(err) throw err;
        res.json(leader);
    });
    //res.send('return all users');
}

exports.getOne = function (req, res, next) {

    Leaders.findById(req.params.id, function (err, leader) {
        if(err) throw err;
        res.json(leader);
    });
    //res.send('get One Leader', req.params.id);
}

exports.insertLeader = function (req, res, next){
    Leaders.create(req.body, function (err, leader) {
        if (err) throw err;
        console.log('Created');
        var id = leader._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the dish with id: ' + id);
    });

    //res.send('insert One col : ' + req.body.user.name);
}

exports.editLeader = function (req, res, next){

    Leaders.findByIdAndUpdate(req.params.id,{ $set: req.body }, { new: true } ,function (err, leader) {
       if (err) throw err;
        res.json(leader);
    });

    //res.send('Edit One leader : ' + 'id = ' + req.params.id + " : " + req.body.user.name);
}

exports.deleteLeader = function (req, res, next){

    Leaders.findByIdAndRemove(req.params.id, function(err, leader){
        if (err) throw err;
        res.json(leader);
    });


    /*res.send('Delete One Leader', req.params.id);*/
}