const router = require('express').Router();
const { Madlibz } = require('../../models');
const sequelize = require("../../config/connection");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
};


router.get("/", (req, res) => {
  try {
    const rando = getRandomInt(0, 4);
    console.log("rando", rando)
    
  
    Madlibz.findByPk(rando).then(results => {
        res.status(200).json(results);
      })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newMadlibz = await Madlibz.create({ title, content });
    res.status(201).json(newMadlibz);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
