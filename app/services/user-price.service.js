var service = require("../core/service");

module.exports = service(UserPriceService);
function UserPriceService() {
    var priceWeights = {
        public_repos: 5,
        public_gists: 2,
        followers: 2
    };

    this.calculate = function (userInfo) {
        return Object.keys(priceWeights).reduce(function (value, key) {
            return value + userInfo[key] * priceWeights[key];
        }, 0);
    };
}

