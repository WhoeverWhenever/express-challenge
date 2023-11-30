const createError = require("http-errors");

function getAllUsers(userData) {
    return (req, res) => {
        res.json(userData);
    }
}

function getUserByEmail(userData) {
    return (req, res) => {
        const { email } = req.params;
        const user = userData.find((uData) => {
            return uData.email === email;
        });
        res.json(user);
    }
}

function postUser(userData) {
    return (req, res) => {
        userData.push(req.body);
        res.json(userData);
    }
}

function updateUserByEmail(userData) {
    return (req, res) => {
        const { email } = req.params;
        const updateData = req.body;
        const user = userData.find((uData) => {
            return uData.email === email;
        });
        user.address = {
            ...user.address,
            ...updateData
        }
        res.json(user);
    }
}

function deleteUserByEmail(userData) {
    return (req, res) => {
        const { email } = req.params;
        const userIndex = userData.findIndex((uData) => {
            return uData.email === email;
        });
        userData.splice(userIndex, 1);
        res.json(userData);
    }
}

module.exports = {
    getAllUsers,
    getUserByEmail,
    postUser,
    updateUserByEmail,
    deleteUserByEmail
};