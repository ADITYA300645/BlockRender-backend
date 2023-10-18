const express = require("express");
const { Account } = require("../../../models/models");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { AccountNo } = req.body;
        const account = await Account.findOne({ AccountNo });
        if (!account) {
            res.json({ account: "NA" });
            return;
        }
        const token = jwt.sign({ AccountNo }, process.env.SECREATKEY, {
            expiresIn: "7days",
        });
        account.tokens.push({ token });
        await account.save();
        res.json({ token });
    } catch (e) {
        console.log(e);
        res.json({ token: "NA" });
    }
});

module.exports = router;
