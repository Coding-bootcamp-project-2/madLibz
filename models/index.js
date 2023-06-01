const Madlibz = require('./Madlibz');
const UserCreds = require('./UserCreds');
const UserLibz = require('./UserLibz');


UserLibz.belongsTo(UserCreds, {
  foreignKey: "usercreds_id"
});

UserCreds.hasMany(UserLibz, {
  foreignKey: "usercreds_id",
  onDelete: "CASCADE"
});

UserLibz.belongsTo(Madlibz, {
  foreignKey: "madlibz_id"
});

module.exports = { UserCreds, Madlibz, UserLibz};