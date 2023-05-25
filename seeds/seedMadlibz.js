const { Madlibz } = require('../models/');
// const Sequelize = require("sequelize");


const madlibzData = [
  {
    title: 'Clockwork Orange Lib 01',
    content: "'Not having that we're not, brotherth. Don't ~ the ^ *!'",
  },
  {
    title: "Clockwork Orange Lib 02",
    content: "I do not wish to describe, brothers, what other horrible * I was like forced to ~ that ^ afternoon."
  },
  {
    title: "Clockwork Orange Lib 03",
    content: "... and I could ~ all the ^ * sitting down slooshying."
  }
];

const seedMadlibz = () => Madlibz.bulkCreate(madlibzData);

module.exports = seedMadlibz;