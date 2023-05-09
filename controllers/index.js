const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const parentDir = path.dirname(__dirname);
const correctPath = path.join(parentDir, 'views/layouts/main.handlebars');


router.use('/api', apiRoutes);

router.get("/", (req, res) => {
    // console.log("Hello World!");
 
    res.sendFile(correctPath)
  });

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;


