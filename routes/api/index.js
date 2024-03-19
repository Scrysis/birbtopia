const router = require('express').Router();
const birbRoutes = require('./birbRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/birbs', birbRoutes);

module.exports = router