const { Birb, User } = require("../models")


module.exports = {
    async findAllUsers(req, res) {
        try {
            const users = await User.find().populate("birbs").exec()
            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async findUser(req, res) {
        try {
            const user = await User.findById({
                _id: req.params.userId
            }).populate("birbs").exec()
            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const updatedUser = await User.updateOne({
                _id: req.params.userId,
            }, {
                $set: {
                    email: req.body.email,
                    username: req.body.username
                }
            })
            res.json(updatedUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    },

    async deleteUser(req, res) {
        try {
            const user = await User.findById({
                _id: req.params.userId
            })
            const birbs = await Birb.deleteMany({
                $or: [{
                    username: user?.username
                }, {
                    _id: {$in: user?.birbs}
                }]
            })
            const deletedUser = await User.deleteOne({
                _id: req.params.userId
            })
            res.json({birbs, deletedUser})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

}