var Q = require('q');
var router = require('./router-provider');
var ControllerFactory = require('./controller-factory');
module.exports = REST;

REST.$injections = {};
function REST(Constructor, basepath) {
    var controllerFactory = new ControllerFactory();
    var controller = controllerFactory.build(Constructor);
    REST.$injections[basepath] = controller;

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