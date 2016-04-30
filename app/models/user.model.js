var moongose = require('mongoose');

var UserSchema = {
    id: Number,
    login: String,
    name: String,
    avatar_url: String,
    url: String,
    email: String,
    public_repos: Number,
    followers: Number
};

module.exports = moongose.model('User', UserSchema);