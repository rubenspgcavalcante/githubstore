var router = require('express').Router();

//Middleware
router.use(function(req, res, next){
    next();
});

module.exports = router;