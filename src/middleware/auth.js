const jwt = require("jsonwebtoken");
const { Account } = require("../models/models");
const dotenv = require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        // const decode = jwt.verify(token, process.env.SECREATKEY);
        var user = await Account.findOne({
            "tokens.token": token,
        });

        if (!user) {
            throw new Error("user not found");
        }
        res.user = user;
        res.token = token;
        next();
    } catch (e) {
        console.log(e);
        console.log("USER NOT FOUND");
        res.json({ error: "e" });
    }
};

module.exports = auth;
