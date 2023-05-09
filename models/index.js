const Madlibz = require('./Madlibz');
const UserCreds = require('./UserCreds');
const UserLibz = require('./UserLibz');


UserLibz.hasMany(UserCreds, {
  foreignKey: 'user_libz_id',
});

Madlibz.hasOne(UserCreds, {
  foreignKey: 'madlibz_id',
});

UserCreds.belongsTo(UserLibz, {
  foreignKey: 'madlibz_id',
});

module.exports = { UserCreds, Madlibz, UserLibz};