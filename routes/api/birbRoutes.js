const { getBirbs, createBirb, getBirb, updateBirb, releaseBirb } = require('../../controllers/birbController');

const router = require('express').Router();

router.route("/").get(getBirbs)
router.route("/:username").post(createBirb)
router.route("/:birbId").get(getBirb).put(updateBirb).delete(releaseBirb)

module.exports = router;