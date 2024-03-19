const { Birb, User } = require("../server/models")
const userController = require("./userController")

module.exports = {
    async getBirbs(req, res) {
        try {
            const birbs = await Birb.find()
            res.json(birbs)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getBirb(req, res) {
        try {
            const birb = await Birb.findOne({
                _id: req.params.birbId
            })
            res.json(birb)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    // create birb and then assign to user birbArray
    async createBirb(req, res) {
        try {
            const birb = await Birb.create(req.body)
            const user = User.updateOne({
                username: req.params.username,
            }, {
                $push: { birbArray: birb._id }
            }).exec()
            res.json({birb})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateBirb(req, res) {
        try {
            const updatedBirb = await Birb.updateOne({
                _id: req.params.birbId,
            }, {
                $set: {
                    birbname: req.body.name
                }
            })
            res.json(updatedBirb)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    },

    async releaseBirb(req, res) {
        try {
            const deletedBirb = await Birb.deleteOne({
                _id: req.params.birbId
            })
            res.json({deletedBirb})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

}