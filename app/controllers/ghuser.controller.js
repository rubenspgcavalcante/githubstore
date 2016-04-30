var rest = require("../core/rest");
var ghService = require("../services/github.service");
var ghuserFactory = require("../factories/ghuser.factory");

rest(GHUserController, '/ghuser');
function GHUserController() {
    this.list = function () {
    };

    this.get = function (username) {
        return ghService.getByUsername(username).then(ghuserFactory.build);
    };

    this.create = function (user) {
    };

    this.update = function (user) {
    };

    this.remove = function (id) {
    };
}
