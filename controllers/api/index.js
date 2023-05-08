const router = require('express').Router();
const madlibzRoutes = require('./madlibz-routes');
const usercredsRoutes = require('./usercreds-routes')


router.use('/Usercreds', usercredsRoutes);
router.use('/Madlibz', madlibzRoutes)







module.exports = router;
