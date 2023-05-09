const router = require('express').Router();
const { UserLibz } = require('../../models');
const sequelize = require("../../config/connection");

router.get("/", async (req, res) => {
    try {
        sequelize.query(`SELECT * FROM userlibz`)
            .then(results => {
                res.status(200).json(results)
            })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;