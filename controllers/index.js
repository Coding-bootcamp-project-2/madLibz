const router = require('express').Router();
const apiRoutes = require('./api');
const { Madlibz } = require('../models/index');
const Sequelize = require('sequelize')

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

router.get("/madlibz", async (req,res) => {
try {
  const randomMadLibz = await Madlibz.findOne({order:Sequelize.literal('rand()'), limit:1});
  const madlibzData = randomMadLibz.get({plain:true});
  console.log(madlibzData);
  res.render('madlibz', {loggedIn: req.session.loggedIn, madlibzData});
} catch (error) {
  res.json(error);
}
});

//pulls up localhost:3001/homepage
router.get("/homepage", (req, res) => {
res.render('homepage', { loggedIn: req.session.loggedIn, });
});

router.use((req, res) => {
res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;


