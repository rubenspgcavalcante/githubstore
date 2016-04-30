var moongose = require('mongoose');

var GHUserSchema = {
    id: Number,
    login: String,
    name: String,
    avatarUrl: String,
    url: String,
    email: String,
    price: Number
};

module.exports = moongose.model('GHUser', GHUserSchema);