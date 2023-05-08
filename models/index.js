const Madlibz = require('./Madlibz');


Madlibz.hasOne(UserCreds, {
  foreignKey: 'madlibz_id',
});

UserCreds.belongsTo(UserLibz, {
  foreignKey: 'madlibz_id',
});

module.exports = { UserCreds, Madlibz};