const { findAllUsers, createUser, findUser, addFriend, deleteFriend, updateUser, deleteUser } = require('../../controllers/userController');

const router = require('express').Router();

router.route("/").get(findAllUsers).post(createUser)

router.route("/:username").get(findUser).put(updateUser).delete(deleteUser)

module.exports = router;