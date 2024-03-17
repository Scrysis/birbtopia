const router = require('express').Router();
const birbRoutes = require('./birbRoutes');
const userRoutes = require('./userRoutes');

// router.use('/users/{username}/birbs', birbRoutes);
router.use('/users', userRoutes);

module.exports = router