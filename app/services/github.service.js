var github = require('octonode');
var Q = require("q");
var is = require("is_js");

var service = require('../core/service');

module.exports = service(GithubService);
function GithubService() {
    var client = github.client();

    /**
     * Gets a user by username
     * @param {string} name
     * @returns {promise}
     */
    this.getByUsername = function (name) {
        var deferred = Q.defer();
        client.get('/users/' + name, {}, function (err, status, body, headers) {
            if(is.null(err)){
                deferred.resolve(body);
            }
            else {
                deferred.reject({statusCode: status, message: err})
            }
        });

        return deferred.promise;
    };
}