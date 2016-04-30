var Q = require('q');
var is = require('is_js');

var router = require('./router-provider');
var ControllerFactory = require('./controller-factory');

module.exports = rest;
function rest(Constructor, basepath) {
    if(is.not.function(Constructor)){
        throw new TypeError("Invalid REST controller. Needs to be a constructor function.");
    }
    if(is.not.string(basepath)){
        throw new TypeError("Please pass the rest base-path argument");
    }

    var controllerFactory = new ControllerFactory();
    var controller = controllerFactory.build(Constructor);

    var _respondRequest = function (promise, res) {
        Q.when(promise)
            .then(function (entities) {
                res.json(entities);
            })
            .catch(function (err) {
                res.status(err.statusCode || 500, err.message || 'Internal server error');
            });
    };

    router.get(basepath, function (req, res) {
        _respondRequest(controller.list.call(), res);
    });

    router.get(basepath + '/:id', function (req, res) {
        _respondRequest(controller.get.call(controller, req.params.id), res);
    });

    router.post(basepath, function (req, res) {
        _respondRequest(controller.create.call(controller, req.params), res);
    });

    router.put(basepath, function (req, res) {
        _respondRequest(controller.update.call(controller, req.params), res);
    });

    router.delete(basepath + '/:id', function (req, res) {
        _respondRequest(controller.remove.call(controller, req.id), res);
    });

    return controller;
}