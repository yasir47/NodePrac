module.exports = function (router) {


    router.get('/leadership', function (req,res,next) {
        res.send('get all leaders');
    });

    router.get('/leadership/:id', function (req,res,next) {
        res.send('Get single value : ' + req.params.id)
    });

    router.post('/leadership',function (req,res,next) {
        res.send('Insert data will perform ' + req.body.user.name)
    });

    router.put('/leadership/:id', function (req,res,next) {
        res.send('Edit data : ' + req.params.id)
    });

    router.delete('/leadership/:id', function (req,res,next) {
        res.send('Delete data : ' + req.params.id)
    });

}



