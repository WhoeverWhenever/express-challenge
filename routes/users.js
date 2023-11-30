const express = require("express");
const userMdware = require("../middlewares/users.mdware");
const userController = require("../controllers/users.ctrl");
const userDocs = require("../mocks/user-docs");

const router = express.Router();

router.get("/", userController.getAllUsers(userDocs));

router.get("/:email", userController.getUserByEmail(userDocs));

router.post("/newUser", userMdware.validatePost, userController.postUser(userDocs));

router.patch("/updateUser/:email", userMdware.validateEmail, userMdware.validateUpdate(userDocs), userController.updateUserByEmail(userDocs));

router.delete("/deleteUser/:email", userMdware.validateEmail, userController.deleteUserByEmail(userDocs));


module.exports = router;