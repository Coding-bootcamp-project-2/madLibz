const { Madlibz } = require('../models/');
const Sequelize = require("sequelize");

const madlibzData = [
  {
    title: 'example title 01',
    content: "example content 01",
  },
  {
    title: "example title 02",
    content: "example content 02"
  }
];

const seedMadlibz = () => Madlibz.bulkCreate(madlibzData);

module.exports = seedMadlibz;

