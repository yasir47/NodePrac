module.exports = function (router) {


    router.get('/promotion', function (req,res,next) {
        res.send('get all promotion');
    });

    router.get('/promotion/:id', function (req,res,next) {
        res.send('Get single value : ' + req.params.id)
    });

    router.post('/promotion',function (req,res,next) {
        res.send('Insert data will perform ' + req.body.user.name)
    });

    router.put('/promotion/:id', function (req,res,next) {
        res.send('Edit data : ' + req.params.id)
    });

    router.delete('/promotion/:id', function (req,res,next) {
        res.send('Delete data : ' + req.params.id)
    });

}



