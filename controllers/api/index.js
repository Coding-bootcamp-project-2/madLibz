const router = require('express').Router();
const madlibzRoutes = require('./Madlibz-routes');




router.use('/Madlibz', madlibzRoutes);






module.exports = router;
