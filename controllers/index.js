const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//pulls up localhost:3001/
router.get("/", (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn, } );
});

//pulls up localhost:3001/login
router.get("/login", (req, res) => {
res.render('login', { loggedIn: req.session.loggedIn, });
});

//pulls up localhost:3001/signup
router.get("/signup", (req, res) => {
res.render('signup', { loggedIn: req.session.loggedIn, });
});

//pulls up localhost:3001/homepage
router.get("/homepage", (req, res) => {
res.render('homepage', { loggedIn: req.session.loggedIn, });
});

router.use((req, res) => {
res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;


