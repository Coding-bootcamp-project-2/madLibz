const { UserLibz } = require("../models/");

const userLibzData = [
    {
        title: "example title 01",
        content: "example content 01",
        lib_creater: "example lib_creater 01",
        user_cred_id: 12345
    },
    {
        title: "example title 02",
        content: "example content 02",
        lib_creater: "example lib_creater 02",
        user_cred_id: 123456
    }
];

const seedUserLibz = () => UserLibz.bulkCreate(userLibzData);

module.exports = seedUserLibz;