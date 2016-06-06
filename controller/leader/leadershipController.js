exports.getAll = function (req, res, next) {
    res.send('return all users');
}

exports.getOne = function (req, res, next) {
    res.send('get One Leader', req.params.id);
}

exports.insertLeader = function (req, res, next){
    res.send('insert One col : ' + req.body.user.name);
}

exports.editLeader = function (req, res, next){
    res.send('Edit One leader : ' + 'id = ' + req.params.id + " : " + req.body.user.name);
}

exports.deleteLeader = function (req, res, next){
    res.send('Delete One Leader', req.params.id);
}