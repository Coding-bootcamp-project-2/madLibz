const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const parentDir = path.dirname(__dirname);
const correctPath = path.join(parentDir, 'views/layouts/main.handlebars');
const correctPathLogin = path.join(parentDir, 'views/login.handlebars');
const correctPathSignUp = path.join(parentDir, 'views/signup.handlebars');
const correctPathHomepage = path.join(parentDir, 'views/homepage.handlebars');

router.use('/api', apiRoutes);

//pulls up localhost:3001/
router.get("/", (req, res) => {
  res.render("homepage")
    // res.sendFile(correctPath)
  });

//pulls up localhost:3001/login
router.get("/login", (req, res) => {
  res.sendFile(correctPathLogin)
});

//pulls up localhost:3001/signup
router.get("/signup", (req, res) => {
  res.sendFile(correctPathSignUp)
});

//pulls up localhost:3001/homepage
router.get("/homepage", (req, res) => {
  res.sendFile(correctPathHomepage)
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;


