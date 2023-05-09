const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const parentDir = path.dirname(__dirname);
const correctPath = path.join(parentDir, 'views/layouts/main.handlebars');
const correctPathLogin = path.join(parentDir, 'views/login.handlebars');

router.use('/api', apiRoutes);

//pulls up localhost:3001/
router.get("/", (req, res) => {
    res.sendFile(correctPath)
  });

//pulls up localhost:3001/login
router.get("/login", (req, res) => {
  res.sendFile(correctPathLogin)
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;


