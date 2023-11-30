const createError = require("http-errors");

function validatePost(req, res, next) {
    if (!req.body.firstName) {
        next(createError(400, "Bad request: first name required!"));
    }
    next();
}

function validateUpdate(userData) {
    return (req, res, next) => {
        const hasAllKeys = Object.keys(req.body).every(key => userData[0].address.hasOwnProperty(key));
        if (!hasAllKeys) {
            next(createError(400, "Bad request: invalid address data!"));
        }
        next();
    }
}

function validateEmail(req, res, next) {
    const emailCheckRegex = /\w+@[a-z]+\.com/;
    if (!emailCheckRegex.test(req.params.email)) {
        next(createError(400, "Bad request: invalid email parameter!"));
    }
    next();
}

module.exports = {
    validatePost,
    validateUpdate,
    validateEmail
};