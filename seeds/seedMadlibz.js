const { Madlibz } = require('../models/');
// const Sequelize = require("sequelize");

const madlibzData = [
  {
    title: 'Clockwork Orange Lib 01',
    content: "'Not having that we're not, brotherth. Don't <span class='noun-placeholder'></span> the <span class='verb-placeholder'></span> <span class='adj-placeholder'></span>!'",
  },
  {
    title: "Clockwork Orange Lib 02",
    content: "I do not wish to describe, brothers, what other horrible <span class='noun-placeholder'></span> I was like forced to <span class='verb-placeholder'></span> that <span class='adj-placeholder'></span> afternoon."
  },
  {
    title: "Clockwork Orange Lib 03",
    content: "... and I could <span class='verb-placeholder'></span> all the <span class='adj-placeholder'></span> <span class='noun-placeholder'></span> sitting down slooshying."
  }
];

// Example usage:
const madlib = madlibzData[0];
const renderedContent = madlib.content
  .replace('<span class="noun-placeholder"></span>', '<input type="text" name="noun">')
  .replace('<span class="verb-placeholder"></span>', '<input type="text" name="verb">')
  .replace('<span class="adj-placeholder"></span>', '<input type="text" name="adj">');

console.log(renderedContent);

// const madlibzData = [
//   {
//     title: 'Clockwork Orange Lib 01',
//     content: "'Not having that we're not, brotherth. Don't ~ the ^ *!'",
//   },
//   {
//     title: "Clockwork Orange Lib 02",
//     content: "I do not wish to describe, brothers, what other horrible * I was like forced to ~ that ^ afternoon."
//   },
//   {
//     title: "Clockwork Orange Lib 03",
//     content: "... and I could ~ all the ^ * sitting down slooshying."
//   }
// ];

const seedMadlibz = () => Madlibz.bulkCreate(madlibzData);

module.exports = seedMadlibz;