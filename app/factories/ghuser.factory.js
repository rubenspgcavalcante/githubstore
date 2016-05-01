var factory = require("../core/factory");
var GHUser = require("../models/ghuser.model");
var userPriceService = require("../services/user-price.service");

module.exports = factory(GHUserFactory);
function GHUserFactory() {
    
    this.build = function (userInfo) {
        return new GHUser({
            id: userInfo.id,
            name: userInfo.name,
            login: userInfo.login,
            avatarUrl: userInfo.avatar_url,
            url: userInfo.url,
            email: userInfo.email,
            price: userPriceService.calculate(userInfo)
        });
    };
}