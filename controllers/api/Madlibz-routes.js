const router = require('express').Router();
const { Madlibz } = require('../../models');
const { UserLibz } = require('../../models/UserLibz');



router.get('/', async (req, res) => {
  try {
    const dbMadLibzData = await Madlibz.findAll({
      include: [
        {
          model: UserLibz,
          attributes: ['title', 'content'],
        },
      ],
    });

    const madlibz = dbMadLibzData.map((Madlibz) =>
      Madlibz.get({ plain: true })
    );
   
    res.render('homepage', {
      madlibz,
      loggedIn: req.session.loggedIn,
    });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/madlibz/:id', async (req, res) => {
  try {
    const dbMadlibzData = await Madlibz.findByPk(req.params.id, {
      include: [
        {
          model: UserLibz,
          attributes: [
            'id',
            'title',
            'content',
            'lib_creater',
            ],
        },
      ],
    });

    const madlibz = dbMadlibzData.get({ plain: true });
   
    res.render('madlibz', { madlibz, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/userlibz/:id', async (req, res) => {
  try {
    const dbUserLibzData = await Painting.findByPk(req.params.id);

    const userlibz = dbUserLibzData.get({ plain: true });
    
    res.render('userlibz', { userlibz, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

module.exports = router;
