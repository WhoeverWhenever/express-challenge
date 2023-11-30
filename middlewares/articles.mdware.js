const createError = require("http-errors");

function validatePost(req, res, next) {
    if (!req.body.name) {
        next(createError(400, "Bad request: name required!"));
    }
    next();
}

module.exports = {
    validatePost
};