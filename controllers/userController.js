const { Birb, User } = require("../server/models")

module.exports = {
    async findAllUsers(req, res) {
        try {
            const users = await User.find().populate("birbArray").exec()
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
            const user = await User.findOne({
                username: req.params.username
            }).populate("birbArray").exec()
            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const updatedUser = await User.updateOne({
                username: req.params.username,
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
            const user = await User.findOne({
                username: req.params.username
            })
            const birbs = await Birb.deleteMany({
               _id: {$in: user?.birbArray}
            })
            const deletedUser = await User.deleteOne({
                username: req.params.username
            })
            res.json({birbs, deletedUser})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

}