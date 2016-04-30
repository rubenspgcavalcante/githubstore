var is = require('is_js');
var router = require('./router-provider');

/**
 * Builds and validates based on a REST controller API
 * @constructor
 */
var ControllerFactory = function () {

    var _validateAPI = function (instance) {
        const API = ['create', 'list', 'get', 'update', 'remove'];

        var missingMethods = API.map(function (restMethod) {
            if (!instance.hasOwnProperty(restMethod)) {
                return restMethod
            }
            return null;
        }).filter(is.not.null);

        if (is.not.empty(missingMethods)) {
            throw new TypeError("Invalid controller instance. Missing methods: " + missingMethods);
        }

        return instance;
    };

    this.build = function (Controller) {
        var controller = new Controller(router);
        return _validateAPI(controller)
    };
};

module.exports = ControllerFactory;