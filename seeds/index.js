const sequelize = require('../config/connection');
const seedMadlibz = require("./seedMadlibz");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedMadlibz();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();

  

