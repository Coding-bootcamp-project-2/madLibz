const { UserCreds } = require('../models/');
// const Sequelize = require("sequelize");

const userCredsData = [
  {
    username: 'example title 01',
    email: "example content 01",
    password: "example password 01"
  },
  {
    username: "example title 02",
    email: "example content 02",
    password: "example password 02",
  }
];

const seedUserCreds = () => UserCreds.bulkCreate(userCredsData);

module.exports = seedUserCreds;